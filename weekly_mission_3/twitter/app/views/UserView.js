const UserService = require('./../services/UserService')
 
class UserView{
    
  static createUser(payload) {

           if (payload === null)
           {
             return {error: "payload no existe"} }  

          else if (
          (typeof payload.userName !== 'string', payload.userName === null ) ||
          (typeof payload.name !== 'string', payload.name === null) ||
          (typeof payload.ID !== 'number',  payload.ID === null))
           {
             return {error: "necesitan tener un valor valido"}}

          else {
              return UserService.create( payload.ID, payload.userName, payload.name)
            }
     }  
     
        
  
  
}
module.exports = UserView;


