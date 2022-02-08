const kushtiaBlock = {
    leader:'raju vai',
    age:27,
    phone:01734546576,
    graduate:true,
    soilders:{
       name:'shuvo',
       age:23,
       home:'dhaka'
    },
    institution:['kustia primary school','kushtia zilla school','kushtia govt college'],
    money:10000,
    treat:function(expanse){
       const mainBalance = this.money - expanse;
       return mainBalance;
    }
}

// const output = kushtiaBlock.treat(500);

const output = `${kushtiaBlock.leader} 's soilders is ${kushtiaBlock.soilders.name}.His age is ${kushtiaBlock.soilders.age} . Raju vai have now only ${kushtiaBlock.treat(450)}` ;
console.log(output);

