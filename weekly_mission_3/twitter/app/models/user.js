class user {
   constructor (ID, userName, name , bio, dateCreated, lastUpdated ){
        this.ID = ID
        this.userName = userName
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
    get getUsername () {
        return  `My name is ${this.userName}`
    }
    get getBio() {
        return this.bio
    }
    get getDateCreated() {
        return this.dateCreated
    }
    get getLastUpdated() {
        return this.lastUpdated
    }
    set setUsername(newUsername){
        this.username = newUsername
    }
    set setBio(NewBio){
        this.bio = NewBio
    }
}

module.exports = user



