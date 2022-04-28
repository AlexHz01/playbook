const User = require('../../app/models/user')

describe('Unit Test para usar clases',() => {
test('Crear un objeto de usuario', () => {
    const user = new User  (1, "Kike", "Bio", "Datecreated", "LastUpdated" )
   expect(user.ID).toBe(1)
   expect(user.userName).toBe("Kike")
   expect(user.bio).toBe("Bio")
   expect(user.dateCreated).not.toBeUndefined()
   expect(user.lastUpdated).not.toBeUndefined()
   

});

})
