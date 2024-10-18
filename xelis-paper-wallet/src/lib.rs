use wasm_bindgen::prelude::wasm_bindgen;
use xelis_common::{crypto::KeyPair, serializer::Serializer};

#[wasm_bindgen]
pub struct GeneratedKeyPair {
    /// The secret key of the keypair in hex format.
    secret: String,
    /// The address of the keypair.
    address: String,
}

#[wasm_bindgen]
impl GeneratedKeyPair {
    #[wasm_bindgen(constructor)]
    pub fn new(mainnet: bool) -> Self {
        let keypair = KeyPair::new();
        let secret = keypair.get_private_key()
            .to_hex();
    
        let address = keypair.get_public_key()
            .to_address(mainnet)
            .to_string();
    
        Self { secret, address }
    }

    /// Returns the secret key of the keypair in hex format.
    pub fn secret(&self) -> String {
        self.secret.clone()
    }

    /// Returns the address of the keypair.
    pub fn address(&self) -> String {
        self.address.clone()
    }
}