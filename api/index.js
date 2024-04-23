const express = require('express');

const app = express();
app.use(express.json());

const mockData =
    [
      {
        name: 'tony',
        id: 22010075,
        age: 19,
        CGPA: 3.68,
      },
      {
        name: 'shahd',
        id: 22010000,
        age: 20,
        CGPA: 4,
      }
    ];

const getAllMembers = (req, res) => {
  res.status(200).json({
    status: 'still under development',
    results: mockData.length,
    data: mockData,
  })
}

const getMemberById = (req, res) => {
  const member = mockData.find(member => req.params.id == member.id);
  if(member == undefined)
    res.status(404).json({
      status: 'fail',
      message: 'not found',
    })
  else
    res.status(200).json({
      status: 'success',
      data: member,
    })
}
app
  .route('/api/members')
  .get(getAllMembers)

app
  .route('/api/members/:id')
  .get(getMemberById)
  
const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));