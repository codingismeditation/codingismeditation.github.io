import { password } from "bun";

const pass = "pass123";

const hashed_pass = await Bun.password.hash(
    pass,
    {   
        algorithm: "bcrypt",
        cost:4 // Iterations (optional) // 4 to 31 
        // rehashing the output
        // way of salting
        // more cost, more time !!!
    }
);
// Only Encrypt, no Decrypt !!!

console.log(hashed_pass);
// $2b$04$sKU8Cs.1ttGOKZkJiiikbe1.QKZh2e4HWaEfvarnsC7jrl4DulD8C

const pass_1 = "pas123";
const hashed_pass_1 = await Bun.password.hash(
    pass_1,
    {
        algorithm: "bcrypt"
        ,cost:4
    }
);

console.log(hashed_pass_1);
// $2b$04$mPayj76gwLg4C0/VsfpZ7.2B46czZbo1JvZ8AaRGwfGtjVLE3yGdS

const isValid = await Bun.password.verify(pass,hashed_pass);
const isValid_1 = await Bun.password.verify(pass_1,hashed_pass_1);
const isNotValid = await Bun.password.verify(pass,hashed_pass_1);
const isNotValid_2 = await Bun.password.verify("pass123",hashed_pass_1);

console.log(isValid);
console.log(isValid_1);
console.log(isNotValid);
console.log(isNotValid_2);
// true
// true
// false
// false

// Example
// Registration
const userPassword = "pass123";
const hashedPassword = await Bun.password.hash(
    userPassword,
    {
        algorithm: "bcrypt"
    }
);
// Save hashedPassword to database // not direct raw password to db

// Login 
const loginPassword = "pass123";
const isValidPassword = await Bun.password.verify(loginPassword,hashedPassword);

// Validate During Login
if (isValidPassword) {console.log("Login Success");}
else {console.log("Invalid credentials");}
// Login Success

const hashed_pass_way_2= await Bun.password.hash(
    pass,
    {
        algorithm:"argon2d"// Alternative to bcrypt
    }

);console.log(hashed_pass_way_2);
// $argon2d$v=19$m=65536,t=2,p=1$mU25/aPwbP42zPRfTzlmQA4LHyy8Wj2RBCMcF3cV6LM$oVy4A+6bPtfJ9omgElZHaWnJtX2ny9QAK8yWMrPXIzk