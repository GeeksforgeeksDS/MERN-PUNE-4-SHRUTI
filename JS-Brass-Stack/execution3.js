const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
     const sum = 4 + 5;
     resolve(sum);
    }, 2000);
   });
   
   promise.then(function(result) {
    console.log(result); 
   });


   //


const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  console.log(fetchPromise);
  
  fetchPromise.then((response) => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request…");