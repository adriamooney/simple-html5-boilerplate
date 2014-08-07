//Revealing Module Pattern.  
//By returning an object and assigning it to a variable outside of the function, 
//we can expose whatever we wish to the outside world, 
//so we can have both public and private methods.

var Module = (function() {
    // All functions now have direct access to each other
    var privateFunc = function() { 
        publicFunc1();
    };
     
    var publicFunc1 = function() {
        publicFunc2();
    };
     
    var publicFunc2 = function() {
        privateFunc();
    };
     
    // Return the object that is assigned to Module
    return {
        publicFunc1: publicFunc1,
        publicFunc2: publicFunc2
    };
}());