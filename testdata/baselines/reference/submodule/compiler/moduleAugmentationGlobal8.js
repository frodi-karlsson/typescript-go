//// [tests/cases/compiler/moduleAugmentationGlobal8.ts] ////

//// [moduleAugmentationGlobal8.ts]
namespace A {
    declare global {
        interface Array<T> { x }
    }
}
export {}


//// [moduleAugmentationGlobal8.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
