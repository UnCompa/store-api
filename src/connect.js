import mongoose from "mongoose";
const url = "mongodb+srv://pablovizuete13:Passw0rd@store-api.he3pq.mongodb.net/?retryWrites=true&w=majority&appName=Store-API";
//const url = "mongodb+srv://uncompa:Pachecomalo1_@cluster.2w5zdjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster";
mongoose
  .connect(url, {})
  .then(() => {
    console.log("Base conectada");
  })
  .catch((e) => {
    console.log(e);
  });
