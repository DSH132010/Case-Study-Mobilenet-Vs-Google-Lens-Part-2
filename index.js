function GSAP(Opacity, el1, el2, el3, el4) {
    const tl = gsap.timeline();
    // gsap.registerPlugin(ScrollTriggerPlugin, ScrollToPlugin, CSSRulePlugin);
    tl.from(el1, { opacity: Opacity , translateX: "-100px"})
    .from( el2, { opacity: Opacity, translateX: "100px"})
    .from(el3, { opacity: Opacity, translateX: "10px"})
    .from(el4, { opacity: Opacity, translateY: "10px"})
}


GSAP(0, '.col-left', '.col-right', '.upper-blob', '.navbar')
