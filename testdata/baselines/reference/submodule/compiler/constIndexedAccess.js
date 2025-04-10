//// [tests/cases/compiler/constIndexedAccess.ts] ////

//// [constIndexedAccess.ts]
const enum numbers {
    zero,
    one
}

interface indexAccess {
    0: string;
    1: number;
}

let test: indexAccess;

let s = test[0];
let n = test[1];

let s1 = test[numbers.zero];
let n1 = test[numbers.one];

let s2 = test[numbers["zero"]];
let n2 = test[numbers["one"]];

enum numbersNotConst {
    zero,
    one
}

let s3 = test[numbersNotConst.zero];
let n3 = test[numbersNotConst.one];


//// [constIndexedAccess.js]
var numbers;
(function (numbers) {
    numbers[numbers["zero"] = 0] = "zero";
    numbers[numbers["one"] = 1] = "one";
})(numbers || (numbers = {}));
let test;
let s = test[0];
let n = test[1];
let s1 = test[numbers.zero];
let n1 = test[numbers.one];
let s2 = test[numbers["zero"]];
let n2 = test[numbers["one"]];
var numbersNotConst;
(function (numbersNotConst) {
    numbersNotConst[numbersNotConst["zero"] = 0] = "zero";
    numbersNotConst[numbersNotConst["one"] = 1] = "one";
})(numbersNotConst || (numbersNotConst = {}));
let s3 = test[numbersNotConst.zero];
let n3 = test[numbersNotConst.one];
