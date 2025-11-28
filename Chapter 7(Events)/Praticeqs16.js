//Create a toggle button that change the screen to dark-mode background when clickedd & light-mode when Clickewd again.
let modebBtn=document.querySelector("#mode");
let currMode="Light";
modebBtn.addEventListener("click",()=>
{
    if(currMode==="Light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else{
        currMode="Light";
        document.querySelector("body").style.backgroundColor="White";
    }
    console.log(currMode);
});