//// [tests/cases/compiler/destructuringInVariableDeclarations4.ts] ////

//// [destructuringInVariableDeclarations4.ts]
let { toString } = 1;
{
    let { toFixed } = 1;
}
export {};


//// [destructuringInVariableDeclarations4.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { toString } = 1;
{
    let { toFixed } = 1;
}
