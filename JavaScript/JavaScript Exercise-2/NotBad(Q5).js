function notBad(str) {
    let notIndex = str.indexOf('not');
    let badIndex = str.indexOf('bad');
    if (notIndex !== -1 && badIndex > notIndex) {
      return str.slice(0, notIndex) + 'good' + str.slice(badIndex + 3);
    }
    return str;
  }
  console.log("Output of notBad function:");
  console.log(notBad('This dinner is not that bad!')); // Output: This dinner is good!
  console.log(notBad('This movie is not so bad!'));    // Output: This movie is good!
  console.log(notBad('This dinner is bad!'));          // Output: This dinner is bad!

/* Output of notBad function:
This dinner is good!
This movie is good!
This dinner is bad!*/