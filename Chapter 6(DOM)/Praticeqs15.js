//Create a new button element.Give it a text "click me",backgroundcolour of red & text color of white.
//Insert the buuton as the first element inside the bosy tag.
/*create a <p> tag in html,give it a class & some styling.
Now create a  new class in CSS and try to append this class to the <p> element.
Did you notice ,how you overwrite the class name when you add a new onw?
Solve this problem using ClassList*/
let newBtn=document.createElement("button");
newBtn.innerText="click me";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);

//q2
let para=document.querySelector("p");