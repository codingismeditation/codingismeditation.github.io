Bun.serve({
    port: 443, // 443 for standard https, req. admin privileges
    tls: { // config https/tls encryption
        key: Bun.file("./key.pem"), // private key, never commit // Bun.file() reference cert. files without loading into memory
        cert: Bun.file("./cert.pem"), // cert file, identifies server
        passphrase: "your-passphase" // Optional encryption password for private key
    },
    fetch(req){
        return new Response("Secure Connection");
    }
})

// openssl for testing, generate, self signed