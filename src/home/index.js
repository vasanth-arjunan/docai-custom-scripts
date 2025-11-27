/**
 * This is the individual file for a webflow page.
 * For Home page js
 * Add or delete these files as per needed.
 */

import { PageLoad } from "./page-load";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

window.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)
    PageLoad();
});
