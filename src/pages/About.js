import React from 'react'
import { Link } from "react-router-dom";

function About() {
  return (
    <section className='section section-center'>
      <div>
        <h2>
          about us 
        </h2>
        <p>
          I'm baby church-key 8-bit dreamcatcher, knausgaard chia jean shorts polaroid echo park. Locavore cray vape skateboard, glossier taiyaki chia pop-up. Artisan Brooklyn forage before they sold out pabst squid fam offal godard mustache authentic gentrify. Biodiesel enamel pin knausgaard vexillologist, quinoa poke farm-to-table YOLO sustainable man bun shabby chic 8-bit Brooklyn sartorial lomo.

          Etsy taxidermy trust fund succulents JOMO. Organic forage affogato dreamcatcher sriracha sartorial small batch ascot farm-to-table. Leggings pickled shoreditch narwhal, enamel pin deep v keffiyeh flexitarian migas edison bulb freegan lomo meditation man braid. Typewriter fit vegan, retro YOLO vinyl shaman sriracha shoreditch gentrify mukbang godard cronut intelligentsia blog. Viral glossier crucifix literally.
        </p>
        <Link to='/' className="btn">
          back home
        </Link>
      </div>
    </section>
  )
};

export default About