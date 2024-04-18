[[[const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
// For config.env file
dotenv.config({ path: "./config.env" });

const DB = "mongodb+srv://akarshrajput01:o2lVsVi6ZKi31gJU@cluster0.1keykmy.mongodb.net/notesapi?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DB).then((con) => {
  // console.log(con.connections);
  console.log("DB connected Successfully");
});

// For Port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
// console.log(process.env);


