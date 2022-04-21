
 const repo = {
     name : "Launch X",
     author : "Alejandro",
     language : "Java Script",
     numberOfCommits : 100,
     stars : 199,
     forks : 200,
     issues_open : 20,
     issues_close: 20,
     getTotalIssues : function () {
         return this.issues_open + this.issues_close
     },
    
     getGeneralInfo : function () {
         return `This repository ${this.name} was created by ${this.author}`
     }
    }

     console.log("Nombre del repo " + repo.name)
     console.log("Issus Totales" + repo.getTotalIssues())
     console.log(repo.getGeneralInfo())

 
