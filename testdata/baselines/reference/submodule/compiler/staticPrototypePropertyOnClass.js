//// [tests/cases/compiler/staticPrototypePropertyOnClass.ts] ////

//// [staticPrototypePropertyOnClass.ts]
class c1 {
}
class c2<T> {
}
class c3 {
    constructor() {
    }
}
class c4 {
    constructor(param: string);
    constructor(param: number);
    constructor(param: any) {
    }
}
var a = c1;
var b = c2;
var c = c3;
var d = c4;

//// [staticPrototypePropertyOnClass.js]
class c1 {
}
class c2 {
}
class c3 {
    constructor() {
    }
}
class c4 {
    constructor(param) {
    }
}
var a = c1;
var b = c2;
var c = c3;
var d = c4;
