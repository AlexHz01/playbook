const User = require('./../models/user')

class UserService {

   static create(ID, userName, name){
     return new User(ID, userName, name, "Sin bio")
    }
    static getInfo(user){
      return [user.ID, user.userName, user.name, user.bio];
    }

    static updateUserUsername (user, newUsername){
      return user.userName = newUsername
    }

    static getAllUsernames ([user1, user2, user3]){
        return  [user1.userName, user2.userName, user3.name] 
    }
}

module.exports = UserService
