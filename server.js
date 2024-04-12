const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const myKey = process.env.API_KEY;
const fs = require('fs');
app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname));

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch(`https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=${myKey}&apiType=JSON`);
    const data = await response.json();
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', function(error) {
      if (error){
        res.status(500).send(error.message)
        console.log('error : ',error)
      } else {
        res.send('save success!')
      }
    });
    // res.json(data);
  } catch (error) {
    // res.status(500).send('API 요청 중 오류 발생: ' + error.message);
  }
});

app.get('/api/read-data', (req, res) => {
  fs.readFile('data.json', 'utf8', (error, data) => {
    if (error) {
      res.status(500).send(error.message)
      console.log('error : ',error)
    } else {
      res.json(JSON.parse(data))
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});




/*
https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=${myKey}&apiType=JSON`);
https://apis.data.go.kr/B553530/GHG_LIST_040/GHG_LIST_04_03_20220831_VIEW01?serviceKey=wIhrZ55bkF2j2HIef%2BaMKaIaZeuhCNyuaB2Lh3zRZ3h0A4wQNqNpXHj7rv7y%2FBM%2BzaahxQU8nn%2BtTH%2BYd8imWw%3D%3D&pageNo=1&numOfRows=10&apiType=JSON&q1=2019&q2=5%EC%9D%B8%20~%209%EC%9D%B8&q3=%EB%8C%80%EC%A0%84&q4=27213&q5=%EC%A0%84%EB%A0%A5&q6=%EC%A0%84%EB%A0%A5
*/