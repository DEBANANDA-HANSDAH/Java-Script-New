const getPromise=()=>
{
 return new Promise((resolve,reject)=>
{
 console.log("I am a promise");
 resolve("123");
});
};

let promise=getPromise();
promise.then(()=>
{
    console.log("promise fulfilled");
}
)