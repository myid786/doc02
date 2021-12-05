let a = function(x){

    let b = function(y){
        let sum=x+y;
        console.log(sum);
    }
   return b;

}

  a(10)(20);

  let calc={

    'sum_apply':function(a,b,c){
        let result=a +b +c;
        console.log(result);



    },

    'mul_apply':function(a,b,c){
        let result=a * b  *c;
        console.log(result);



    },

    'sum':function(){
        let  result=this.num1+this.num2;
        console.log(result);
    },
    'mul':function(){
        let  result=this.num1*this.num2;
        console.log(result);
    },
    'div':function(){
        let  result=this.num1/this.num2;
        console.log(result);
    },
    'diff':function(){
        let  result=this.num1-this.num2;
        console.log(result);
    },
    'mod':function(){
        let  result=this.num1%this.num2;
        console.log(result);
    }
};

var set1={
    'num1':15,

    'num2':30,
};


var set2={
     array:[25,35,45],
};

var set3={
    'num1':20,

    'num2':60,


}

console.log("sum of 15 and 30");
calc.sum.call(set1);
console.log("multipy of 15 and 30");
calc.mul.call(set1);
console.log("substraction of 15 and 30");
calc.diff.call(set1);
console.log("module of 15 and 30");
calc.mod.call(set1);



calc.sum_apply.apply(set2,set2.array);
console.log("multiply of 25 and 35 and 45");
calc.mul_apply.apply(set2,set2.array);


console.log("sum of 20 and 60 using bind");
let new_sum=calc.sum.bind(set3);
new_sum();
console.log("multiply of 20 and 60 using bind");
let new_mul=calc.mul.bind(set3);
new_mul();
console.log("substraction of 20 and 60 using bind");
let new_diff=calc.diff.bind(set3);
new_diff();
console.log("mod of 20 and 60 using bind");
let new_mod=calc.mod.bind(set3);
new_mod();  