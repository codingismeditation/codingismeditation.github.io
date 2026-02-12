// test/example.test.ts

import { expect, test } from "bun:test" ; // libs

// simple test for syntax
test("simple: hecking 2 + 2 addition",() => {expect(2+2).toBe(4);}); // PASS

// actual tests

// // index.ts
// export const add = (a: number, b:number) : number => {
//     return a+b;
// }; // correct code

// export const add_1 = (a:number, b:number) : number => {
//     return a+b+b;
// }; // wrong code

import { add,add_1 } from "../index";

test("index/add: checking 2 + 2 addition",()=>{expect(add(2,2)).toBe(4);}) // PASS
test("index/add_1: checking 2 + 2 addition",
    ()=>{
        expect(
            add_1(2,2)
        )
        .toBe(4);
    }
); // FAIL

// ➜  31_ git:(main) ✗ bun test
// bun test v1.3.7 (ba426210)

// test/example.test.ts:
// ✓ simple: hecking 2 + 2 addition [0.03ms]
// ✓ index/add: checking 2 + 2 addition [0.02ms]
// 22 | test("index/add_1: checking 2 + 2 addition",
// 23 |     ()=>{
// 24 |         expect(
// 25 |             add_1(2,2)
// 26 |         )
// 27 |         .toBe(4);
//               ^
// error: expect(received).toBe(expected)

// Expected: 4
// Received: 6

//       at <anonymous> (/Users/bali-king/BaliGit/kintsugi-stack-bun/31_/test/example.test.ts:27:10)
// ✗ index/add_1: checking 2 + 2 addition [0.50ms]

//  2 pass
//  1 fail
//  3 expect() calls
// Ran 3 tests across 1 file. [9.00ms]
// ➜  31_ git:(main) ✗ 