function fixStart(str) {
    let firstChar = str.charAt(0);
    let rest = str.slice(1).replaceAll(firstChar, '*');
    return firstChar + rest;
  }
  console.log("Output of fixstart function:")
  console.log(fixStart('babble')); 
  
/*Output of fixstart function:
ba**le*/
  