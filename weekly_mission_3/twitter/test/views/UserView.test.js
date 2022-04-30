const UserView = require('./../../app/views/UserView')

describe ("1. Test for UserView", () => {
    test("Return an arryr object when try to create a new user wirh an null payload", () => {
       const payload = null
       const result = UserView.createUser(payload)
      expect(result.error).toMatch(/payload no existe/) 
    });
  
    test ("2. Return an arrer object when try to create a new user whit a payload with invalid properties", () =>{
          const payload = {userName: null, name: 12, ID: "id"}
          const result = UserView.createUser(payload)
          expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

  test ("Create a user by a given valid payload",() =>{
    const payload ={userName: "username", ID: 1, name: "name"}
    const result = UserView.createUser(payload)
    expect(result.name).toBe("name")
    expect(result.userName).toBe("username")
    expect(result.ID).toBe(1)
  })

})

/// https://jestjs.io/docs/using-matchers#strings