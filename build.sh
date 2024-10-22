#!/bin/bash

# Make sure Cargo is installed and needed as a dependency to create the WASM lib
if command -v cargo &> /dev/null; then
  echo "Cargo is installed."
else 
  echo "Installing Cargo..."

  # Download & run rustup installer
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

  # Source the Cargo env
  source "$HOME/.cargo/env"

  echo "Cargo installed successfully."
fi

# Make sure wasm-pack is installed
cargo install wasm-pack

# Create WASM lib for javascript browser
cd xelis-paper-wallet
wasm-pack build --no-typescript --target no-modules

# Copy files in public folder
cp pkg/xelis_paper_wallet_bg.wasm ../public/
cp pkg/xelis_paper_wallet.js ../public/
