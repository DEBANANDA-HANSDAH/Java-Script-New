/*let promise=new Promise((resolve,reject)=>
{
 console.log("I am a promise");

 reject("some error occured");
});*/

function getData(dataId,getNextData)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("data",dataId);
            resolve("succces");
            if(getNextData)
            {
                getNextData();
            }
        },4000);
    });
}