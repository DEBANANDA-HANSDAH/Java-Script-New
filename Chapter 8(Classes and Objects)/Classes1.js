//prototype
const employee={
    calcTax1()
    {
        console.log("tax rate is 10%");
    },
    
};
const Rajnikant=
{
    salary:50000,
    calcTax()
    {
        console.log("tax rate is 20%");
    },
};
Rajnikant.__proto__=employee;