const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUser)
  .post(createUser);

router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:id/friends')
  .post(addFriend);   

router.route('/:id/friends/:friendsId')
  .delete(removeFriend);

// router
//   .route('/:id/friends/friendsId')
//   .post(addFriend)
//   .delete(removeFriend)

module.exports = router;
