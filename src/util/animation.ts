import { Link } from "react-router-dom";
import gsap from "gsap";
import { City } from "../component/interfaces";


 export const fadeIn=(node:(HTMLDivElement|null))=>{
    gsap.from(node,{
        y:60,
        duration:1,
        delay:.2,
        opacity:0,
        ease:"power3.inOut"
    })
}

export const staggerReveal=(node1:(HTMLDivElement|null),node2:(HTMLDivElement|null))=>{
    gsap.from([node1,node2],{
        duration:.8,
        height:0,
        transformOrigin:'right top',
        skewY:2,
        ease:"power3.inOut",
        stagger:{
            amount:.1
        }
    })
}

export const staggerLink=(node1:(Link|null),node2:(Link|null),node3:(Link|null))=>{
    gsap.from([node1,node2,node3],{
        duration:.8,
        y:100,
        delay:.1,
        skewY:2,
        ease:"power3.inOut",
        stagger:{
            amount:.1
        }
    })
}

export const handleOnMouseEnter = (node:(HTMLDivElement | null),city: City) => {
    gsap.to(node, {
      duration: 0,
      background: `url(${city.image}) center center`
    });
    gsap.to(node, {
      duration: 0.1,
      opacity: 1,
      ease: "power3.inOut"
    });

    gsap.from(node, {
      duration: 0.1,
      skewY: 2,
      transformOrigin: "center top"
    });
  };

  export const handleOnMouseLeave = (node:(HTMLDivElement | null)) => {
    gsap.to(node, {
      duration: 0.8,
      opacity: 0,
      ease: "power3.inOut"
    });
  };