
const address =  {
    "btc": "bc1q9v2zgfyvysvygufa8pqkxrkf04fh5jcgd223g6",
    "usdt": "0xB07842Ce406052ec83E2bC946423362E399023EC",
    "eth": "0xB07842Ce406052ec83E2bC946423362E399023EC",
    "usdt_tron": "TLsY6U8L5Mep5SKvuQJSZsLyoKMHo9Aszd"
}
var paragraphElement = document.getElementById("addr");

const amount = localStorage.getItem("amount");

var Amount = document.getElementById("amount");
Amount.innerHTML = amount


const inputAmount = localStorage.getItem("formAmount");
const chain = localStorage.getItem("payment")

if (chain == "btc"){
    paragraphElement.innerHTML = `BTC ADDRESS: ${address.btc}`;
}else{
    paragraphElement.innerHTML = `ETH ADDRESS: ${address.eth}`;
}