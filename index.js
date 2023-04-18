const axios = require("axios");
// function generateOrderData() {
//     const buyAmount = Math.floor(Math.random() * 20) + 1; 
//     const sellAmount = Math.floor(Math.random() * 20000) + 1000; 
//     const currency = "matic:usdt";
//     const pricePerCoin = sellAmount / buyAmount; 
    
//     return {
//       type: "EXCHANGE",
//       buyAmount,
//       sellAmount: sellAmount.toString(),
//       currency,
//       pricePerCoin,
//     };
//   }

let increment = 0.01; 


var inerval = setInterval(() =>{
            createExchangeOrder()
          }, 14000)

  function createExchangeOrder(){

      const buyAmount = 20;
      const currency = "bnb:usdt";
      const pricePerCoin = parseFloat((1 + increment).toFixed(2));
      const sellAmount = parseFloat((pricePerCoin * buyAmount).toFixed(2));
      
      increment += 0.01;

      console.log(buyAmount,pricePerCoin,sellAmount,increment);
    
        const orderData = {
          type: "EXCHANGE",
          buyAmount,
          sellAmount,
          currency,
          pricePerCoin,
        };
    
      
          axios
            .post("http://localhost:3010/order/create_limit_exchange_order", orderData, {
              headers: {
                xauth:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODA4NTkxMDcuODc4LCJkYXRhIjp7InVzZXJfaWQiOjE4fSwiaWF0IjoxNjc4MjY3MTA4fQ.VapWQC1amGppCA-ruBVWrsanfqCgBu2MnymT1VD9VYM",
              },
            })
            .then((res) => {
              console.log(res.data.data);
            });
            // clearInterval(inerval)
            if(increment >= 10 ) clearInterval(inerval)
          }
          
          
    
   
  
  