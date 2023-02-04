const arrays =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
const newarray = arrays.map((Element)=>{
    return Element===' '?'empty string':Element;
})
console.log(arrays);
console.log(newarray);

