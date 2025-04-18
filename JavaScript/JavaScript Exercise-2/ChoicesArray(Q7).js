let choices = ["blue", "green", "red"];
console.log("My choices are:")
for (let i = 0; i < choices.length; i++) {
  let suffix = ["st", "nd", "rd"][i] || "th";
  console.log(`My ${i + 1}${suffix} choice is ${choices[i]}.`);
}
/*
My choices are:
My 1st choice is blue.
My 2nd choice is green.
My 3rd choice is red.*/