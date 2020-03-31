const express = require('express');
const router = express.Router();
const UsersController = require('../../controllers/users')
// const users = require ('../../state')
// const uuid =require('uuid')



//Gets all members
router.get('/', UsersController.getUsers);

//gets user by id
router.get('/:user_id', UsersController.getUsersById)

//gets users by city
router.get('/city/:city', UsersController.getUsersByCity)

//gets users by state
router.get('/state/:state', UsersController.getUsersByState)

//Create user
router.post('/', UsersController.createUser)

router.put('/:user_id', UsersController.updateUserById)


// router.post()

// // Get Single Member
// router.get('/:id', (req,res) => {
//   // create variable to check and see if the user has been found
//   //parseInt is required because the number is sent as a string and === requires it to be a number
//   const found = users.some(user => user._id === parseInt(req.params.id));
//   // if statement saying that if the user is found, .filter() and return the user that hs been requested
//   if(found) {
//     res.json(users.filter(user => user._id === parseInt(req.params.id)));
//   }
//   // else return an error code with a message
//   else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
//   }
// })

// router.put('/:id', (req,res) => {
//   const found = users.some(user => user._id === parseInt(req.params.id));
//   //if found perform forEach loop over users, and update the user/users that have been requested
//   //Update the name, if a new name is included, and do the same with occupation. If not updated, leave the same
//   if(found) {
//     const updUser = req.body;
//     users.forEach(user => {
//       if(user._id === parseInt(req.params.id)) {
//         user.name = updUser.name ? updUser.name : user.name ;
//         user.occupation = updUser.occupation? updUser.occupation : user.occupation;

//         res.json({msg: 'Member updated', user})
//       }
//     })
//   }
//   else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
//   }
// })


// // Create Member
// router.post('/', (req,res) => {

//   // res.send(req.body)
//   //Create new user
//   //uuid creates random id
//   const newUser = {
//     _id: uuid.v4(),
//     name: req.body.name,
//     occupation: req.body.occupation,
//     status: 'active'
//   } 
//   //If statement that states if the name or occupation aren't included, return error code with a message
//   if(!newUser.name || !newUser.occupation) {
//     return res.status(400).json({msg: 'Please include name and occupation'})
//   }
//   //push the new user to the users array
//   users.push(newUser)
//   //possible way to save
//   // users.save(newUser)
//   //return users
//   res.json(users)
// })

// //delete method
// router.delete('/:id', (req,res) => {
//   // create variable to check and see if the user has been found
//   //parseInt is required because the number is sent as a string and === requires it to be a number
//   const found = users.some(user => user._id === parseInt(req.params.id));
//   // if statement saying that if the user is found, .filter() and return the user that has been requested
//   if(found) {
//     res.json({
//       msg: 'Member deleted', 
//       users: users.filter(user => user._id !== parseInt(req.params.id))
//   });
//   }
//   // else return an error code with a message
//   else {
//     res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
//   }
// })

module.exports = router;