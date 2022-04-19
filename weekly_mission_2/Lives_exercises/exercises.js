const woopa_obj = {
    name: "woppa",
    mission: "Node JS",
    age : "12",
    color: "pink"
}

console.log(woopa_obj)
// crear una clase
/*
1. crear una clase
2. como intanciar un objeto de una clases
3. intanciar varios objeto de una misma clase
4 como agregar el contructor para guardar el clase
5. Crear metodos
*/

class Ajolonauta {
    constructor(name, mission, age, color) {
        this.name = name
        this. mission = mission
        this.color = color
        this.age = age
    }

    sayHello() {
        return `Hey! Hello ${this.name} is saying hello!`
    }
}

 class pokemon {
     constructor(name){
         this.name = name
     }
 }

 const pikachu = new pokemon("pikachu")
 console.log(pikachu)

const woppa = new Ajolonauta ("woopa", "NodeJS", "24", "pink") // intanciara un objeto
console.log (woppa)
console.log(woppa.sayHello())

const wooper = new Ajolonauta ("Wooper", "Java", "15", "Blue")
console.log (wooper)
console.log (wooper.sayHello())
