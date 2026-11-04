import { useState } from 'react'
import Plate from './Plate'
// Shows the real photo; if the file is missing or fails, falls back to the styled placeholder.
export default function Img({src,alt='',seed=0,className=''}:{src?:string;alt?:string;seed?:number;className?:string}){
  const [bad,setBad]=useState(false)
  if(!src||bad)return <Plate seed={seed} className={className}/>
  return <img src={src} alt={alt} loading="lazy" decoding="async" onError={()=>setBad(true)} className={`object-cover ${className}`}/>
}
