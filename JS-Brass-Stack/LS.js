function demo(){
    let a = 10;
    //It cannot access 'b'
    function anotherDemo(){
        //It can access 'a'
        let b = 20;
        console.log("Hey, I am from anotherDemo! a = ",a);
        console.log("Hey, I am from anotherDemo! b = ",b);
    }
    anotherDemo()
}
demo()