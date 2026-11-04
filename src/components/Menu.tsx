import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { config, wa, type Dish } from "../config";
import Img from "./Img";

const cats = Object.keys(config.menu);
const money = (amount: number) =>
  `${config.currency}${amount.toLocaleString()}`;

export default function Menu({ fullPage = false }: { fullPage?: boolean }) {
  const [cat, setCat] = useState(cats[0]);
  const [sel, setSel] = useState<{ d: Dish; seed: number } | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectCategory = (category: string, focus = false) => {
    setCat(category);
    if (focus)
      requestAnimationFrame(() =>
        tabRefs.current[cats.indexOf(category)]?.focus(),
      );
  };

  const handleTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    const current = cats.indexOf(cat);
    let next = current;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (current + 1) % cats.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (current - 1 + cats.length) % cats.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = cats.length - 1;
    else return;
    event.preventDefault();
    selectCategory(cats[next], true);
  };

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className={`mx-auto max-w-[1280px] px-6 py-20 sm:py-28 md:px-12 ${fullPage ? "md:py-28" : "md:py-40"}`}
    >
      <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end">
        <div>
          {fullPage && <p className="eyebrow mb-4 text-ember">Find your favourite</p>}
          <h2 id="menu-heading" className="font-display text-5xl md:text-7xl">
            {fullPage ? "The menu" : "The menu"}
          </h2>
          {fullPage && <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-muted">Browse by category. Select a dish to see details and send your order directly to us.</p>}
        </div>
        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex max-w-full flex-wrap gap-x-6 gap-y-3 text-base sm:gap-x-8 sm:text-lg"
        >
          {cats.map((category, index) => (
            <button
              key={category}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              id={`menu-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={category === cat}
              aria-controls="menu-panel"
              tabIndex={category === cat ? 0 : -1}
              onClick={() => selectCategory(category)}
              onKeyDown={handleTabKeyDown}
              className={`border-b-2 pb-1 transition focus-visible:outline-offset-4 ${category === cat ? "border-ember text-ink" : "border-transparent text-muted hover:text-ink"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div
        id="menu-panel"
        role="tabpanel"
        aria-labelledby={`menu-tab-${cats.indexOf(cat)}`}
        tabIndex={0}
      >
        <ul className={`grid gap-x-8 ${fullPage ? "gap-y-7 sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 md:gap-x-16"}`}>
          {config.menu[cat].map((dish, index) => {
            const seed = cats.indexOf(cat) * 4 + index;
            return (
              <li key={dish.name} className={`min-w-0 ${fullPage ? "border-b border-line pb-5" : "border-t border-line"}`}>
                <button
                  type="button"
                  onClick={() => setSel({ d: dish, seed })}
                  aria-label={`View ${dish.name}, ${money(dish.price)}`}
                  className={`group flex w-full min-w-0 text-left ${fullPage ? "flex-col items-stretch gap-4 pb-2" : "items-center gap-4 py-5 sm:gap-5 sm:py-6"}`}
                >
                  {sel?.d.name === dish.name ? (
                    <div
                      aria-hidden
                      className={fullPage ? "aspect-[5/3] w-full shrink-0" : "size-20 shrink-0 sm:size-24 md:size-28"}
                    />
                  ) : (
                    <motion.div
                      layoutId={`img-${dish.name}`}
                      className={fullPage ? "aspect-[5/3] w-full shrink-0 overflow-hidden" : "size-20 shrink-0 overflow-hidden sm:size-24 md:size-28"}
                    >
                      <Img
                        src={dish.image}
                        alt=""
                        seed={seed}
                        className="size-full transition duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <span className={`font-display leading-tight ${fullPage ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl md:text-[28px]"}`}>
                        {dish.name}
                      </span>
                      <span className="shrink-0 text-base tabular-nums sm:text-lg">
                        {money(dish.price)}
                      </span>
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-muted sm:text-base">
                      {dish.desc}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-10 border-t border-line pt-5 text-xs leading-relaxed text-muted">
        Sample menu content for this website concept. Please confirm dish availability, descriptions and prices with the restaurant before ordering.
      </p>
      <AnimatePresence>
        {sel && (
          <DishView
            key="dish"
            dish={sel.d}
            seed={sel.seed}
            cat={cat}
            onClose={() => setSel(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function DishView({
  dish,
  seed,
  cat,
  onClose,
}: {
  dish: Dish;
  seed: number;
  cat: string;
  onClose: () => void;
}) {
  const [add, setAdd] = useState(false);
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousFocus.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus();
    };
  }, []);

  const total = dish.price + (add && dish.addon ? dish.addon.price : 0);
  const messageLines = [
    `Hello ${config.name}, I'd like to order:`,
    `Dish: ${dish.name}`,
    `Base price: ${money(dish.price)}`,
    ...(add && dish.addon
      ? [`Add-on: ${dish.addon.label} (${money(dish.addon.price)})`]
      : []),
    `Total: ${money(total)}`,
  ];
  const message = messageLines.join("\n");
  const transition = {
    duration: reduce ? 0 : 0.7,
    ease: [0.76, 0, 0.24, 1] as const,
  };

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-name"
      aria-describedby="dish-description"
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-night"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        layoutId={`img-${dish.name}`}
        transition={transition}
        className="pointer-events-none fixed inset-0 overflow-hidden opacity-75"
      >
        <Img src={dish.image} alt="" seed={seed} className="size-full" />
      </motion.div>
      <div className="relative flex min-h-svh flex-col justify-between gap-10 bg-gradient-to-t from-night/85 via-night/35 to-night/10 p-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] text-white sm:p-8 md:p-14">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="flex min-h-11 w-fit items-center gap-2 bg-black/40 px-4 py-2.5 text-sm backdrop-blur-sm transition hover:bg-white hover:text-ink"
        >
          <FiArrowLeft aria-hidden="true" /> {config.labels.backToMenu}
        </button>
        <div className="mx-auto grid w-full max-w-[1280px] items-end gap-8 md:grid-cols-[1.3fr_1fr] md:gap-12">
          <div>
            <p className="text-sm text-white/70">{cat}</p>
            <h2
              id="dish-name"
              className="mt-2 font-display text-5xl leading-none sm:text-6xl md:text-8xl"
            >
              {dish.name}
            </h2>
            <p
              id="dish-description"
              className="mt-4 max-w-[46ch] text-base leading-relaxed text-white/85 sm:text-lg"
            >
              {dish.desc}
            </p>
          </div>
          <div className="max-w-xl">
            <p
              className="font-display text-4xl"
              aria-live="polite"
              aria-atomic="true"
            >
              {money(total)}
            </p>
            <ul
              className="my-4 flex flex-wrap gap-2"
              aria-label="Dish attributes"
            >
              {dish.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-white/40 px-3 py-1 text-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
            {dish.addon && (
              <label className="mb-5 flex min-h-11 cursor-pointer items-center gap-3 py-2">
                <input
                  type="checkbox"
                  checked={add}
                  onChange={(event) => setAdd(event.target.checked)}
                  className="size-5 accent-[#A83219]"
                />
                <span>
                  Add {dish.addon.label} (+{money(dish.addon.price)})
                </span>
              </label>
            )}
            <p className="mb-4 text-sm text-white/70">
              Order summary: {dish.name}
              {add && dish.addon ? ` + ${dish.addon.label}` : ""} ·{" "}
              {money(total)}
            </p>
            <a
              href={wa(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-ember px-7 py-3.5 text-white transition hover:bg-white hover:text-ink"
            >
              <FaWhatsapp size={20} aria-hidden="true" />{" "}
              {config.labels.orderOnWhatsapp}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
