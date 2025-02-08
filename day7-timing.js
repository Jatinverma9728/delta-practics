//----this keyword-----------
// 'this' keyword refer to an object that is exectuing the current piece of code.
const student = {
  name: "Jatin",
  age: 21,
  linux: 66,
  java: 52,
  cyberSecurity: 71,
  get avg() {
    console.log(this)
    // let avrage = (linux + java + cyberSecurity) / 3; // iss me anwer nhi milega kyu objct ke ander function  object ki values ko directly acces nhi kr sakta. to krne ke liye kya kr sakte h. to hum 'this' keyword ko use krnge har us cize ke aage jo hum chahiye object ki value.
//correct is :- 
let avrage = (this.linux + this.java + this.cyberSecurity) / 3;

    console.log(`${this.name} got avrage marks = ${avrage}`)
  },
};
// console.log(student.java)