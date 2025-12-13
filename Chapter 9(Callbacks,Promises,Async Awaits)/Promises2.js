function asyncFunc1()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
           console.log("data1");
           resolve("success");
        },3000);
    });
}

function asyncFunc2()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
           console.log("data2");
           resolve("success");
        },3000);
    });
}


console.log("fetchingdata1.....");
let p1= asyncFunc1();
p1.then((res)=>
{
    console.log(res);
});

console.log("fetchingdata2.....");
let p2= asyncFunc2();
p2.then((res)=>
{
    console.log(res);
});

async function hello()
{
    console.log("hello");
}



function api()
{
    return  new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        console.log("weather data");
        resolve(200);
    },2000);
});
}

async function getweatherData()
{
    await api();
}

function getData(dataId)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("data",dataId);
            resolve("succes");
        },2000);
    });
}

async function getAllData()
{
    console.log("getting data1____");
    await getData(1);
    console.log("getting data2____");
    await getData(2);
    console.log("getting data3____");
    await getData(3);
}