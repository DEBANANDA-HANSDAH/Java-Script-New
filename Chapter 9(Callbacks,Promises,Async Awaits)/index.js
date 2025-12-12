console.log("one");
console.log("two");

function hello()
{
    console.log("hello");
}

setTimeout(hello,5000)//timeout; 2sec=2000msec

console.log("three");
console.log("four");

function sum (a,b)
{
    console.log(a+b);
}
function calculatotr(a,b,sumCallback)
{
    sumCallback(a,b);
}
calculatotr(1,40,sum);

//nesting
let age=65;
if(age>=18)
{
    if (age>=60)
    {
        console.log("senior");
    }
    else
    {
        console.log("middle");
    }
}
    else
    {
        console.log("child");
    }

//for(let i=0;i<5;i++)
{
    let str="";
    for(let j=0;j<5;j++)
    {
        str=str+j;
        console.log(str);
    }
}

function getData(dataId)
{
    setTimeout(()=>
    {
         console.log("data",dataId);
    },5000);
   
}