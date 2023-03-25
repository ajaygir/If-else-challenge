//QUESTION 1
//TASK 1

let markmass = 70
let markheight =5.8

let johnmass = 90
let johnheight =5.4

let markbmi = markmass / markheight **2
let johnbmi = johnmass / johnheight **2


console.log('Mark BMI',markbmi)
console.log('John BMI',johnbmi)

if (markbmi > johnbmi){
    console.log('Mark BMI is higher than john BMI')
}
else  {
    console.log('John BMI is higher than mark BMI')

}
    

//TASK 2

if (markbmi > johnbmi) {
    console.log(`Mark's BMI (${markbmi.toFixed(1)}) is higher than John's (${johnbmi.toFixed(1)})!`);
  } else {
    console.log(`John's BMI (${johnbmi.toFixed(1)}) is higher than Mark's (${markbmi.toFixed(1)})!`);
  }

//QUESTION 2
//PART 1

let age = 20
if (age > 18){
    console.log('This person can vote !')
}
else {
    console.log('This person is too young to vote !')
}

//PART 2

 let  grade = prompt("Enter your grade (A, B, C, D):");

 if (grade == "A") {
    console.log("Great job!");
  } else if (grade == "B") {
    console.log("Good job!");
  } else if (grade ==="C") {
    console.log("You could do better than this.");
  } else if (grade == "D") {
    console.log("You need to improve.");
  }



//PART 3

let yourage = 15;

if (yourage === 0 || yourage <= 2) {
  console.log('You are a baby.');
} else if (yourage >= 3 && yourage <= 5) {
  console.log('You are a toddler.');
} else if (yourage >= 6 && yourage <= 12) {
  console.log('You are a child.');
} else if (yourage >= 13 && yourage <= 18) {
  console.log('You are a teenager.');
} else if (yourage > 19) {
  console.log('You are an adult.');
}


//PART 4

let number= 0;

if(number >0){
    console.log('It is positive')

} else if (number <0){
    console.log('It is negative')
}
else{
    console.log('ZERO')

}


///// ---THANK YOU !!--- ///////








