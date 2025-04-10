//// [tests/cases/compiler/duplicateOverloadInTypeAugmentation1.ts] ////

//// [duplicateOverloadInTypeAugmentation1.ts]
interface Array<T> {
    reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
        initialValue?: T): T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
        initialValue: U): U;
}
var a: Array<string>;
var r5 = a.reduce((x, y) => x + y);

//// [duplicateOverloadInTypeAugmentation1.js]
var a;
var r5 = a.reduce((x, y) => x + y);
