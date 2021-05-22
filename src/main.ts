import express from 'express';

const app = express();

const currentdate = new Date();
const datetime = "Pinged at: " + currentdate.getDate() + "/" +
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

app.listen(8000, () => {
    console.log(`server running on port 8000`);
  });