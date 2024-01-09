var btc= document.getElementById("bitcoin");
var eth= document.getElementById("ethereum");
var sol= document.getElementById("solana");
var xrp= document.getElementById("ripple");
var doge= document.getElementById("dogecoin");



var settings={
"async":true,
"scrossDomain":true,
"url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cripple%2Cdogecoin&vs_currencies=nzd",
"method":"GET",
"headers":{}

}
$.ajax(settings).done(function(response){
console.log(response);
btc.innerHTML=response.bitcoin.nzd;
eth.innerHTML=response.ethereum.nzd;
sol.innerHTML=response.solana.nzd;
xrp.innerHTML=response.ripple.nzd;
doge.innerHTML=response.dogecoin.nzd;

});