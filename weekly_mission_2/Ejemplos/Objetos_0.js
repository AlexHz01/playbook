console.log("Objetos")

// Ejemplo 1: Crear un objeto
const myObjetc = {} // Esto es un objeto vacío
console.log("Ejemplo 1: Crear un objeto vacío")
console.log(myObjetc)

// Ejemplo 2: Crear un objeto con propiedades
const myObjetc2 = {
  name: "Kike",
  age: 24
}
console.log("Ejemplo 2: Crear un objeto con propiedades")
console.log(myObjetc2)

// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
  name: "Tulio",
  age: 24,
  nicknames: [
   "Tulipan",
    "Tulancingo",
    "Tulish"
  ],
  address: {
    zip_code: "10000",
    street: "Macuspaba",
    city: "Tabasco"
  }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.age)
console.log(myObject3["address"])

// Ejemplo 4: Objeto con métodos
const pet = {
  name: "Kira",
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`)
  }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Alejandro")