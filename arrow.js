const number =()=> 89;
// console.log(number())---No parameter arrow function
const single = (num) => num/7;
// console.log(single(8));--single parameter arrow function

const twoParameter = (num1,num2)=>(num1+num2)/2;
// console.log(twoParameter(5,5));---doing addition after passing two parameter,returned divided by 2

const multiLine =(num1,num2)=>{
    const first = num1+7;
    const second = num2 + 7;
    return first + second;
}

// console.log(multiLine(5,5));

const numbers = [102,104,106,108,110];

numbers.filter(num =>console.log(num>104));
