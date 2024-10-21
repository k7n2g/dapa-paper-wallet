const { KeyPair } = wasm_bindgen;

// load wasm wallet and generate wallet seed right away
async function load() {
  await wasm_bindgen();
  generate_wallet();
}

load();

// initialize elements for easier access and reuse
const lbl_testnet = document.getElementById("lbl_testnet");
const address_value = document.getElementById("address_value");
const private_key_value = document.getElementById("private_key_value");
const seed_value_line_1 = document.getElementById("seed_value_line_1");
const seed_value_line_2 = document.getElementById("seed_value_line_2");
const qrcode_address_img = document.getElementById("qrcode_address_img");
const qrcode_private_key_img = document.getElementById("qrcode_private_key_img");
const btn_generate = document.getElementById("btn_generate");
const select_db = document.getElementById("select_bg");
const bg_img = document.getElementById("bg_img");
const select_network = document.getElementById("select_network");

function generate_wallet() {
  const network = select_network.value;

  const mainnet = network === "mainnet";
  if (mainnet) {
    lbl_testnet.classList.add("hidden");
  } else {
    lbl_testnet.classList.remove("hidden");
  }

  const key_pair = new KeyPair(mainnet);
  const addr = key_pair.address();
  const private_key = key_pair.secret();
  const seed = key_pair.seed("en");

  set_address_qrcode(addr);
  set_private_key_qrcode(private_key);

  address_value.textContent = addr;
  private_key_value.textContent = private_key;
  seed_value_line_1.textContent = seed.splice(0, 12).join(" ");
  seed_value_line_2.textContent = seed.splice(0, 13).join(" ");
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

  qrcode_address_img.setAttribute('xlink:href', qr.toDataURL());
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

  qrcode_private_key_img.setAttribute('xlink:href', qr.toDataURL());
}

btn_generate.addEventListener('click', async () => {
  generate_wallet();
});

select_network.addEventListener('change', (e) => {
  generate_wallet();
});

select_bg.addEventListener('change', (e) => {
  bg_img.setAttribute("xlink:href", e.target.value);
});
