

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