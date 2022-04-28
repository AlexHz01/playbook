const User = require('../../app/models/user')

describe('Unit Test para usar clases',() => {
  test('Crear un objeto de usuario', () => {
    const user = new User  (1, "Riusey", "kike", "Bio", "Datecreated", "LastUpdated" )
   expect(user.ID).toBe(1)
   expect(user.userName).toBe("Riusey")
   expect(user.bio).toBe("Bio")
   expect(user.dateCreated).not.toBeUndefined()
   expect(user.lastUpdated).not.toBeUndefined()
   
  });
  
  test('2da Prueba de usuario agregando get', () => {
    const user2 = new User  (1, "Riusey", "kike", "Bio")
    expect(user2.ID).toBe(1)
    expect(user2.getUsername).toBe("My name is Riusey")
    expect(user2.bio).toBe("Bio")
    expect(user2.getDateCreated).not.toBeUndefined()
    expect(user2.getLastUpdated).not.toBeUndefined()

  });

  test('3ea prueba agregando setters', () =>{
      const user3 = new User(1,"Riusey","kike","Bio")
      user3.setUsername = "Alex"
      expect (user3.username).toBe("Alex")

      user3.setBio = "New Bio"
      expect (user3.bio).toBe("New Bio")
  });



})
