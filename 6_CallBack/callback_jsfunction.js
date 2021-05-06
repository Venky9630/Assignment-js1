
function normalMethod(value,argumentMethod){
    //must and should call with argument name.
    argumentMethod(value);
}
//accessing this outermethod from normalMethod
function outermethod(arg){
    console.log("123",arg);
}
//passing outermethod as an 2nd aurgument to normalMethod 
normalMethod("venky",outermethod);