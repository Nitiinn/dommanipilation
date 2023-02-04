const nameone = 'Max';
let age = '26';
const hasHobbies = true;
age = 30;
const summarizeUser = (userName,userAge,userHobbies)=>{
    return (
        'Name is ' +
        userName+
        ', age is '+
        userAge+
        ' and the user has hobbies is '+
        userHobbies
    );
};


// Write an arrow function which returns the product of two numbers
const product = (a,b)=>a*b;
console.log(product(5,6));


console.log(summarizeUser(nameone, age, hasHobbies));


// create a student object
const student={
    name:'Nitin',
    age:22,
    greet:function(){
        console.log('Hi i am a '+ this.name);
    }

};
student.greet();
console.log(student);