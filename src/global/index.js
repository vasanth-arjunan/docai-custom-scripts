/**
 * This file is to keep all the global functions that you want in the entire webflow site.
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlobalContentReveal } from '../helpers/global-content-reveal'

window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
    GlobalContentReveal();
});