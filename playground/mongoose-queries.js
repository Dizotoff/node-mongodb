const {ObjectID} = require('mongodb');
var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');
var id = "59413b55ed6648d4011f6b63";
//
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo' ,todo);
// });

User.findById(id).then((todo)=>{
  if(!todo) {
    console.log('user not found');
  } else {
  console.log('Todo By id' ,todo);
}
}).catch((e) => {
  console.log(e);
});
