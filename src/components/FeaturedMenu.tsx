import { motion } from "framer-motion";
import { config } from "../config";
import Img from "./Img";

const featuredCategories = ["The Classics", "The Pot", "Swallows", "From The Grill"];

export default function FeaturedMenu() {
  const featured = featuredCategories
    .filter((category) => config.menu[category]?.length)
    .map((category) => ({ category, dish: config.menu[category][0] }));

  return (
    <section id="menu" aria-labelledby="featured-menu-heading" className="bg-paper px-6 py-24 sm:py-32 md:px-12">
      <div className="mx-auto max-w-[1380px]">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-ember">From the kitchen</p>
            <h2 id="featured-menu-heading" className="mt-5 font-display text-5xl leading-none tracking-[-.04em] sm:text-7xl">What we're serving.</h2>
            <p className="mt-4 max-w-[38ch] text-sm leading-relaxed text-muted sm:text-base">A few things to look forward to, made for the table.</p>
          </div>
          <a href="/menu" className="editorial-link inline-flex w-fit">Explore the full menu <span aria-hidden="true">↗</span></a>
        </div>
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(({ category, dish }, index) => (
            <motion.a key={category} href="/menu" {...({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.65, delay: index * 0.06 } })} className="group block min-w-0">
              <div className="aspect-[5/4] overflow-hidden bg-[#e5dac7]">
                <Img src={dish.image} alt={dish.name} seed={index} className="size-full transition-transform duration-700 group-hover:scale-[1.045]" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl leading-tight sm:text-[28px]">{category}</h3>
                  <p className="mt-1 text-sm text-muted">{dish.name} · {dish.desc.split(".")[0]}</p>
                </div>
                <span aria-hidden="true" className="mt-1 text-lg text-ember transition-transform group-hover:translate-x-1">↗</span>
              </div>
            </motion.a>
          ))}
        </div>
        <p className="mt-9 text-xs leading-relaxed text-muted">Menu items and prices are sample content until confirmed by the restaurant.</p>
      </div>
    </section>
  );
}
