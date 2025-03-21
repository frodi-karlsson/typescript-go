//// [tests/cases/conformance/es6/yieldExpressions/generatorTypeCheck21.ts] ////

//// [generatorTypeCheck21.ts]
class Foo { x: number }
class Bar extends Foo { y: string }
function* g(): IterableIterator<Foo> {
    yield;
    yield * new Bar;
}

//// [generatorTypeCheck21.js]
class Foo {
    x;
}
class Bar extends Foo {
    y;
}
function* g() {
    yield;
    yield* new Bar;
}
