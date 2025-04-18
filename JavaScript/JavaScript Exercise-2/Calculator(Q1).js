function squareNumber(num) {
    let result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
  }
  
  function halfNumber(num) {
    let result = num / 2;
    console.log(`Half of ${num} is ${result}.`);
    return result;
  }
  
  function percentOf(num1, num2) {
    let result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
  }
  
  function areaOfCircle(radius) {
    let area = Math.PI * radius * radius;
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}.`);
    return area.toFixed(2);
  }
  
  function allInOne(num) {
    let half = halfNumber(num);
    let squared = squareNumber(half);
    let area = areaOfCircle(squared);
    let percent = percentOf(area, squared * squared);
  }
squareNumber(4);
halfNumber(10);
percentOf(2, 4);
areaOfCircle(5);
allInOne(8);

/* OUTPUT
The result of squaring the number 4 is 16.
Half of 10 is 5.
2 is 50% of 4.
The area for a circle with radius 5 is 78.54.
Half of 8 is 4.
The result of squaring the number 4 is 16.
The area for a circle with radius 16 is 804.25.
804.25 is 314.16015625% of 256.*/