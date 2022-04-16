'use strict'

function BinarioADecimal(num) {
  // tu codigo aca [1,1,0,0] ---[0,0,1,1]
  let decimal = 0;
  let cuenta;
  let numArr = num.split('').reverse();
  for(let i=0;i<numArr.length;i++){
    cuenta =(numArr[i]*Math.pow(2,i)); // --- 1*2^2 ** ^
    decimal = decimal +cuenta;
  }
  return decimal;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario = []; //
  do{
    binario.unshift(num%2);
    num=Math.floor(num/2);
  }while(num!==0)
  return binario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}