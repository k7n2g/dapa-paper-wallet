# XELIS Paper Wallet

Generate a paper wallet for XELIS by creating a new key pair and printing it for storage.

Directly available and ready to use at <https://paperwallet.xelis.io/>.

## Run locally

You can't run the program simply by opening `index.html` because of browser CORS policies.
Use a server to serve the files of this repo. For simplicity, you can run `live-server` <https://www.npmjs.com/package/live-server>.

## Build

Execute the bash file provided

`./build.sh`

Or manually build the WebAssembly module from Rust using the following command

```bash
wasm-pack build --no-typescript --target no-modules
```

and then copy the generated `pkg` folder to the `public` folder.
