function verbing(str) {
    if (str.length < 3) return str;
    if (str.endsWith('ing')) return str + 'ly';
    return str + 'ing';
  }
  console.log("Output of verbing function:");
  console.log(verbing('swim'));      // Output: swimming
  console.log(verbing('swimming'));  // Output: swimmingly
  console.log(verbing('go'));        // Output: go
 
 /*Output of verbing function:
swiming
swimmingly
go*/