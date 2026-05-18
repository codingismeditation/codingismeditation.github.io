console.log("Hello via Bun!");
console.log("Let's add some numbers:");
let count = 0;
console.log("Initial Count:", count);
for await (const line of console){ // Iterate over console input line by line
    count += Number(line);
    console.log("Updated Count:", count);
}

// ➜  25_ git:(main) ✗ bun index.ts
// Hello via Bun!
// ➜  25_ git:(main) ✗ bun index.ts
// Hello via Bun!
// Let's add some numbers:
// Initial Count: 0
// 10
// Updated Count: 10
// 10
// Updated Count: 20
// 2
// Updated Count: 22
// 23
// Updated Count: 45

// Updated Count: 45
// 45
// Updated Count: 90
// 6754
// Updated Count: 6844
// 32
// Updated Count: 6876

// 3Updated Count: 6876
// 456
// Updated Count: 10332

// Updated Count: 10332

// Updated Count: 10332
// ^C
// ➜  25_ git:(main) ✗ 