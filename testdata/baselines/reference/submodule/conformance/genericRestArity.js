//// [tests/cases/conformance/types/rest/genericRestArity.ts] ////

//// [genericRestArity.ts]
// Repro from #25559

declare function call<TS extends unknown[]>(
    handler: (...args: TS) => void,
    ...args: TS): void;
  
call((x: number, y: number) => x + y);
call((x: number, y: number) => x + y, 1, 2, 3, 4, 5, 6, 7);


//// [genericRestArity.js]
call((x, y) => x + y);
call((x, y) => x + y, 1, 2, 3, 4, 5, 6, 7);
