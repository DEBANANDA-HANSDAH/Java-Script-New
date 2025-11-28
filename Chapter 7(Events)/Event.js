let btn1=document.querySelector("#btn1");
/*btn1.onclick=()=>
{
    console.log("btn1 was clicked");
    let a=25;
    a++;
    console.log(a);
}*/

//Event Listener
btn1.addEventListener("click",() =>
{
console.log("button1 was clicked-handler1");
});

btn1.addEventListener("click",()=>
{
    console.log("button1 was clicked-handler2");
});

btn1.addEventListener("click",() =>
{
console.log("button1 was clicked-handler3");
});


const handler4=()=>
{
    console.log("button1 was clicked-handler4");
};
btn1.addEventListener("click",handler4);
btn1.addEventListener("click",()=>
{
    console.log("button1 was clicked-handler4");
});
btn1.removeEventListener("click",handler4);



let box=document.querySelector("div");
box.onmouseover=()=>
{
    console.log("you are inside div.")
}