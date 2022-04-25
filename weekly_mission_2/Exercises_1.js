//primier ejemplo para modelar
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


// Modelando diagramas en objetos de JS

  const issue = {
      title : "Empezando a modelar graficas",
      repositoryNameAssociated : "Launch X",
      status : "Active",
      numberOfComments : 10,
      labels : 5,
      author : "kike",
      datecreated : "21/04/22",
      lastUpdated : "22/04/22",
      getTitleAndAuthor : function () {
       return ` Tilte :  ${this.title} was created by ${this.author}`
      }
    }
    console.log(issue.getTitleAndAuthor())


    // Segundo Ejemplo

    const PullRequest = {
        title : "Pull Request",
        branchName : "Modificando",
        dateCreated : "10/05/2022",
        status : "active",
        author : "Alex",
        repositoryNameAssociated : "Launch X",
        getStatus : function(){
            return ` Status : ${this.status}`
        },
        getTitleAndAuthor : function () {
            return `Titulo : ${this.title} was created by ${this.author}`
        }
    }
     console.log(PullRequest.getStatus())
     console.log(PullRequest.getTitleAndAuthor())
