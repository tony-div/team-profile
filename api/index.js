const express = require('express');

const app = express();
app.use(express.json());

const mockData =
    [
      {
        id: 22010075,
        name: 'tony',
        age: 19,
        CGPA: 3.68,
      },
      {
        id: 22010000,
        name: 'shahd',
        age: 20,
        CGPA: 4,
      }
    ];

const memberFactory = (obj) => {
  const member = {
    id: obj.id,
    name: obj.name,
    age: obj.age,
    CGPA: obj.CGPA,
  };

  if(validateMemberData(member))
    return member;
  else
    return null;
}

const validateMemberData = (member) => {
  return (
    member.id > 0 &&
    member.name.length <= 70 && member.name.match(/[^a-zA-Z\s.]/g) == null && 
    member.age > 0 && member.age < 100 && 
    member.CGPA > 0 && member.CGPA <= 4
  );
}

const deleteMember = (req, res) => {
  const deleteIndex = mockData.findIndex(elem => elem.id == req.params.id);
  if(deleteIndex == -1)
    return res.status(404).json({
      status: 'fail',
      message: 'not found'
    });
  mockData.splice(deleteIndex, 1);
  res.status(200).json({
    status: 'success',
    message: 'accepted'
  });
}

const getAllMembers = (req, res) => {
  res.status(200).json({
    status: 'still under development',
    results: mockData.length,
    data: mockData,
  })
};

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
};

const createMember = (req, res) => {
  const member = memberFactory(req.body);
  if(mockData.find(existing => existing.id == member.id)){
    return res.status(400).json({
      status: 'fail',
      message: `a record with id: ${member.id} already exists`,
    });
  }
  if(member){
    mockData.push(member);
    res.status(200).json({
      status: 'success',
      message: 'created'
    });
  } else {
    res.status(400).json({
      status: 'fail',
      message: 'invalid data entered'
    });
  }
}

const updateMember = (req, res) => {
  const member = memberFactory(req.body);
  if(!member){
    return res.status(400).json({
      status: 'fail',
      message: 'invalid data entered'
    });
  }
  const oldMember = mockData.find(oldMember => oldMember.id == req.params.id);
  if(!oldMember){
    return res.status(404).json({
      status: 'fail',
      message: 'old data not found'
    });
  }
  Object.assign(oldMember, member);
  res.status(200).json({
    status: 'success',
    message: oldMember,
  });
};

app
  .route('/api/members')
  .get(getAllMembers)
  .post(createMember)

app
  .route('/api/members/:id')
  .get(getMemberById)
  .put(updateMember)
  .delete(deleteMember)

const port = 3000;
app.listen(port, () => console.log(`listening on port ${port}`));