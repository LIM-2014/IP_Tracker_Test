const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const ipList = [];

app.post('/save-ip', (req, res) => {
  const ip = req.body.ip;
  if (!ip) {
    return res.status(400).send('IP가 필요해요!');
  }
  ipList.push(ip);
  console.log('받은 IP:', ip);
  res.send('IP 저장 완료!');
});

app.listen(port, () => {
  console.log(`서버가 ${port}번 포트에서 실행 중입니다.`);
});
