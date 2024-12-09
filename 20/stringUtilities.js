export function toUpperCase(str) {
    return str.toUpperCase();
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

import { toUpperCase, reverseString } from './stringUtilities.js';

const input = "hello world";

console.log('Uppercase:', toUpperCase(input));
console.log('Reversed:', reverseString(input));
