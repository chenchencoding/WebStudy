const express = require('express')
const app = express()
const port = 3000
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// 解决跨域问题
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/upload', (req, res) => {
  res.send({
    name: 'Harlan的简历'
  })
  // 耗时操作，3秒后通过socket返回数据，不使用http防止阻塞前端操作
  setTimeout(() => {
    io.emit('upload-resume', 'Harlan的简历详情')
  }, 3000)
  
})

server.listen(port, () => console.log(`Example app listening on port ${port}!`) );