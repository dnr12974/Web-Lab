function pluralize(noun, number) {
    let irregular = { sheep: 'sheep', goose: 'geese', geese: 'geese' };
    let plural = irregular[noun] || (number !== 1 ? noun + 's' : noun);
    return `${number} ${plural}`;
  }
  console.log("Output of pluralize function:");
  console.log(pluralize("cat", 5));     
  console.log(pluralize("dog", 1));     
  console.log(pluralize("sheep", 3));   
  console.log(pluralize("goose", 2));   
/* Output of pluralize function:
5 cats
1 dog
3 sheep
2 geese*/
  