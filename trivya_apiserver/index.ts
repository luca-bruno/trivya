import express from "express";

const port = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO FROM EXPRESS + TS!!!!");
});

app.get("/hi", (req, res) => {
  res.send({ data: "BYE!" });
});

app.listen(port, () => {
  console.log(`now test listening on port ${port}`);
});