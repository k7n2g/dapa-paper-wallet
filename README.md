# XELIS Paper Wallet

Generate a paper wallet for XELIS by generating a new key pair and printing it on a paper wallet.

Build the WebAssembly module from Rust using the following command:

```bash
wasm-pack build --no-typescript --target no-modules
```

Then, copy the generated `pkg` folder to the `public` folder.