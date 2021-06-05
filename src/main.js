const express = require('express')

const app = express();

const currentdate = new Date();
const datetime = "Pinged at clover smells: " + currentdate.getDate() + "/" +
  (currentdate.getMonth() + 1) + "/" +
  currentdate.getFullYear() + " @ " +
  currentdate.getHours() + ":" +
  currentdate.getMinutes() + ":" +
  currentdate.getSeconds();

const body = {
  message: "Hello world, from IDAM Node api v1",
  date: datetime,
  status: 200,
};

app.get('/ping', function (req, res) {
    res.send(JSON.stringify(body))
})

app.get('/', function (req, res) {
    res.send("Home")
})

app.listen(8000, () => {
    console.log(`server running on port 8000`);
  });