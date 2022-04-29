const UserServices = require('./../../app/services/UserService')

describe('test for UserService',() =>{
  
    test('1. Create a new user using the UserService',() =>{
       const user= UserServices.create(1, "Riusey", "kike")
       expect(user.ID).toBe(1)
       expect(user.userName).toBe("Riusey")
       expect(user.name).toBe("kike")
       expect(user.bio).not.toBeUndefined()
   });

   test("2. Get all user data in a list", () => {
       const user = UserServices.create(1, "Riusey", "kike")
       const userInfoInList = UserServices.getInfo(user)
       expect(userInfoInList[0]).toBe(1)
       expect(userInfoInList[1]).toBe("Riusey")
       expect(userInfoInList[2]).toBe("kike")
       expect(userInfoInList[3]).toBe("Sin bio")
   })
 
   test("3. Update User name", () => {
       const user = UserServices.create (1, "Riusey", "kike")
       UserServices.updateUserUsername(user, "yagami")
       expect(user.userName).toBe("yagami")
   })

   test ("4 Given a list of users give me the list of usernames ",() =>{
      const user1 = UserServices.create(1, "Riusey1", "kike")
      const user2 = UserServices.create(2, "Riusey2", "kike")
      const user3 = UserServices.create(2, "Riusey3", "kike")
      const usernames = UserServices.getAllUsernames([user1, user2, user3])
      expect(usernames).toContain("Riusey1")
      expect(usernames).toContain("Riusey2")
      expect(usernames).toContain("kike")
   })
})


