class spiderman {
    constructor(name, age, actor, peliculas, recordingStudio ) {
        this.name = name
        this.age = age
        this.actor = actor
        this.peliculas = peliculas
        this.recordingStudio = recordingStudio
    }
    getInfo() {
        return `Hey, I´m ${this.actor} from ${this.recordingStudio}`
    }
    //  /// guetter
    // get info() {
    //   return this.informe();
    // }
    //
    // //metodo
    // informe () {
    //     return `Hey, I´m ${this.name} from ${this.recordingStudio}`
    // }
}

// esta lina nos permite exportar nuestra clase
module.exports = spiderman
