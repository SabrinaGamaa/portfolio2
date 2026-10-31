// utils.js – helper selector functions
export const qs = (sel, parent = document) => parent.querySelector(sel);
export const qsa = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));