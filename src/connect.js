import mongoose from "mongoose";
const url = "mongodb+srv://pablovizuete13:Passw0rd@store-api.he3pq.mongodb.net/?retryWrites=true&w=majority&appName=Store-API";
mongoose
  .connect(url, {})
  .then(() => {
    console.log("Base conectada");
  })
  .catch((e) => {
    console.log(e);
  });
