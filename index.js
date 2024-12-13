"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const splide_1 = __importDefault(require("@splidejs/splide"));
document.addEventListener("DOMContentLoaded", () => {
    // Change heading on button click
    const button = document.querySelector("#button");
    if (!button)
        return;
    button.addEventListener("click", () => {
        const heading = document.querySelector("#heading");
        if (!heading)
            return;
        heading.textContent = "Build with TypeScript!!!";
    });
    // Setup Splide slider
    var splide = new splide_1.default(".splide", {
        type: "loop",
        perPage: 4,
    });
    splide.mount();
});
