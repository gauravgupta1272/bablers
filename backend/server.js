const express = require("express");
const { chats } = require("./data/data");
const dotenv  = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require("./middleware/errorMiddleware");


dotenv.config();
connectDB();

const app = express(); //puts new Express application inside the app variable


app.use(express.json());  //as we need to accept JSON data from frontend

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user",userRoutes);

//error handling 
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
