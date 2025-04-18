function mixUp(str1, str2) {
    return str2.slice(0, 2) + str1.slice(2) + ' ' + str1.slice(0, 2) + str2.slice(2);
  }
  console.log("Output of mixup function:");
console.log(mixUp('mix','pod'))
console.log(mixUp('dog','dinner'))

/*OUTPUT
Output of mixup function:
pox mid
dig donner*/