const axios = require("axios");

// let increment = 0.01;
var inerval = setInterval(() => {
  exchangeOrder(15, "bnb:usdt", 250, 0.1);
  // exchangeOrder(10,"usdt:bnb",0.004,0.000001)
}, 45000);

function exchangeOrder(buyAmount, currency, pricePerCoin, increment) {
  try {
    pricePerCoin = parseFloat((pricePerCoin - increment).toFixed(2));
    const sellAmount = parseFloat((pricePerCoin * buyAmount).toFixed(2));
    // increment += 0.01;
    const orderData = {
      type: "EXCHANGE",
      buyAmount,
      sellAmount,
      currency,
      pricePerCoin,
    };
    axios.post(
      "https://backend.useyourcrypto.org/order/create_limit_exchange_order",
      orderData,
      {
        headers: {
          xauth:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODQ0NzgwNjkuMzc3LCJkYXRhIjp7InVzZXJfaWQiOjY1fSwiaWF0IjoxNjgxODg2MDY5fQ.QdV_2U4qc1sxx3NB7F3BI-xxDY4f96DYdOKRlCg4nrA",
        },
      }
    );
  } catch (error) {}
  // .then((res) => {
  //   // console.log(res.data.data);
  // });
  // clearInterval(inerval)
  // if(increment >= 10 ) clearInterval(inerval)
}
