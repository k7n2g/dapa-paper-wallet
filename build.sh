#!/bin/bash

cd xelis-paper-wallet
wasm-pack build --no-typescript --target no-modules
cp pkg/xelis_paper_wallet_bg.wasm ../public/
cp pkg/xelis_paper_wallet.js ../public/
