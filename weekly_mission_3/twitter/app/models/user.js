class user {
   constructor (ID, userName, bio, dateCreated, lastUpdated ){
        this.ID = ID
        this.userName = userName
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }
}

module.exports = user



