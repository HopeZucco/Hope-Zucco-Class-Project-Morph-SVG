 import { gsap } from "gsap";
 import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
 import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

    gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin)
  

  const maintTL = gsap.timeline();
  
maintTL