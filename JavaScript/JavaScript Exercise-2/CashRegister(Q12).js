function cashRegister(cart) {
    let total = 0;
    for (let item in cart) {
      total += parseFloat(cart[item]);
    }
    return total;
  }
  
  var cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  console.log("Output of cash register function:");
  console.log(cashRegister(cartForParty)); 
  
  
  /*
Output of cash register function:
60.55
*/
  