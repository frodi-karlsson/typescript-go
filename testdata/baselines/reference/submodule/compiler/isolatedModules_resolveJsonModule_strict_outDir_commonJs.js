//// [tests/cases/compiler/isolatedModules_resolveJsonModule_strict_outDir_commonJs.ts] ////

//// [a.ts]
import * as j from "./j.json";

//// [j.json]
{}


//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
