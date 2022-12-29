let multiply = function(x,y){
    console.log(x*y);
}
let multiplybytwo = multiply.bind(this,2);
multiplybytwo(5);
//let multiplybytwoagain = multiply.bind(this,2,3); //if we add argumrnts they ignore the argument call in the function
//multiplybytwoagain(5);
let multiplybythree = multiply.bind(this,3);
multiplybythree(5);

let multiplywithclosure = function(x){
        return function(y){
            console.log(x*y);
        }
}
let multiplynumbertwo = multiplywithclosure(2);
multiplynumbertwo(33);