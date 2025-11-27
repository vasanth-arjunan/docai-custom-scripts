/**
 * This file is to keep all the global functions that you want in the entire webflow site.
 */

import { GlobalContentReveal } from '../helpers/global-content-reveal'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    GlobalContentReveal();
});