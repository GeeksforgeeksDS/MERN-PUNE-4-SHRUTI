var log = console.log

log("Inside global execution context")

function functionOne() {
   log("Inside function one")
  
  function setTimeoutFunction() {
    log("Inside setTimeoutFunction: I will be executed after ECS become empty." +  
        "Though my waiting time is zero")
  }  
  
  setTimeout(setTimeoutFunction, 0)
   
  for(var i = 0; i < 10000000000; i++) {

  }
  
  log("Exiting functionOne")
}

functionOne()

log("Exiting global execution context")