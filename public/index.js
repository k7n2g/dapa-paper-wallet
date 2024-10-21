const { KeyPair } = wasm_bindgen;

async function load() {
  await wasm_bindgen();
  generate_wallet();
}

load();

function generate_wallet() {
  const network = document.getElementById("select_network").value;

  const mainnet = network === "mainnet";
  if (mainnet) {
    document.getElementById("lbl_testnet").classList.add("hidden");
  } else {
    document.getElementById("lbl_testnet").classList.remove("hidden");
  }

  const key_pair = new KeyPair(mainnet);
  const addr = key_pair.address();
  const private_key = key_pair.secret();
  const seed = key_pair.seed("en");

  set_address_qrcode(addr);
  set_private_key_qrcode(private_key);

  document.getElementById("address_value").textContent = addr;
  document.getElementById("private_key_value").textContent = private_key;
  document.getElementById("seed_value_line_1").textContent = seed.splice(0, 12).join(" ");
  document.getElementById("seed_value_line_2").textContent = seed.splice(0, 13).join(" ");
}

function set_address_qrcode(value) {
  var qr = new QRious({
    background: 'white',
    backgroundAlpha: 1,
    foreground: 'black',
    foregroundAlpha: 1,
    level: 'H',
    padding: 25,
    size: 500,
    value: value
  });

  document.getElementById("qrcode_address_img").setAttribute('xlink:href', qr.toDataURL());
}

function set_private_key_qrcode(value) {
  var qr = new QRious({
    background: 'white',
    backgroundAlpha: 1,
    foreground: 'black',
    foregroundAlpha: 1,
    level: 'H',
    padding: 25,
    size: 500,
    value: value
  });

  document.getElementById("qrcode_private_key_img").setAttribute('xlink:href', qr.toDataURL());
}

document.getElementById("btn_generate").addEventListener('click', async () => {
  generate_wallet();
});

document.getElementById("select_network").addEventListener('change', (e) => {
  generate_wallet();
});

document.getElementById("select_bg").addEventListener('change', (e) => {
  document.getElementById("bg_img").setAttribute("xlink:href", e.target.value);
});
