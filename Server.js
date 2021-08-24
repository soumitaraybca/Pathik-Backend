const express = require('express')
const app = express()
const port = 3000


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  console.log(req.body)
  var authObj = req.body;
  var response;
  if(authObj.userName == 'Soumita' && authObj.password == 'abc'){
    response = {'code':'000','message':'Login Successful','data':''}
  }else{
    response = {'code':'111','message':'Authenticaion Failed','data':''}
  }  
  res.send(response)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})