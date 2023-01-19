const express = require("express");
//Instanz einer Express App erstellen
const app = express();
const routes = require("./routes/users");

const port = process.env.PORT || 5000;

app.use("/", routes);

app.listen(port, () => {
  console.log("server is running");
});

// app.get("/", (req, res) => {
//   res.send("hello world");
//   //   console.log(req.params)
// });
// app.get("/users", (req, res) => {
//   res.send("here we will see all users");
// });

// app.post("/", (req, res) => {
//   res.send("here we will create a new instance");
// });

// app.put("/", (req, res) => {
//   res.send("here we will update an instance");
// });

// app.delete("/", (req, res) => {
//   res.send("here we will delete an instance");
// });

///////////////////////////////

//Mit Route Methode
// app
//   .route("/")
//   .get((req, res) => {
//     res.send("hello world");
//   })
//   .post((req, res) => {
//     res.send("hello world POST");
//   })
//   .put((req, res) => {
//     res.send("hello world PUT");
//   })
//   .delete((req, res) => {
//     res.send("hello world DELETE");
//   });

// app.route("/users").get((req, res) => {
//   res.send("all users");
// });
