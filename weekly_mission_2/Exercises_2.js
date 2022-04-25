const explorer = [
    {
        name: "Explorer 1",
        exercises_completed: 20,
        rate: 99,
        city: "Tabasco",
        stack : [
            "JS",
            "C#"
        ]
 ,
missions: {
    onboarding: {
        isFinished: true,
        exercises_finished:true
    },
    frontend: {
        isFinished: true,
        exercises_finished:true
    }  
  }
}, 

{
    name: "Explorer 2",
    exercises_completed: 3,
    rate: 100,
    city: "CDMX",
    stack : [
        "Elixir"
    ],
missions: {

onboarding: {
    isFinished: true,
    exercises_finished:true
},

frontend: {
    isFinished: false,
    exercises_finished:false
    }  
 
  }
},
{
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
]
const stackNew = explorer.map(function (stack) {return stack.stack})
const stackJS = explorer.filter ((JS) => JS.stack.includes('JS'))
const Country = explorer.find((smallVille) => smallVille.city === 'CDMX') 
const all_exercises_completed = explorer.reduce((acc, element) => acc + element.exercises_completed, 0)
const validated = explorer.some ((Curso) => Curso.onboarding === true)
const validatedOnboarding = explorer.every((completed) => typeof completed.onboarding === true) // every


// 1 Imprimir el nombre de (propiedad name) de cada explorer en 
//la lista usando FOR EACHq
explorer.forEach(name => console.log(name.name))
// 2 imprimir  el stack de cada explrer usando FOR EAChH
explorer.forEach(stack => console.log(stack.stack))
// 3 Crea una nueva lista con las listas de stacks de cada explorer, usa MAP  
console.log(stackNew)
// 4 Obtén la lista de explorers que tengan en su stack "js", usa FILTER
// (para validar un elemento en un lista se usa el método includes)
console.log("Explorer Con JS")
console.log(stackJS)
// 5 Busca el primer explorer que sea de la CDMX, usa FIND
console.log("Primer usuario de la CDMX")
console.log(Country)
// 6 Obtener la suma de todos los  exercises_completed, usa REDUCE
console.log("Todso los exercises_completed = "+ all_exercises_completed)
 // Obtén la validación si al menos uno de los explorers 
 //tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log("Todos los explorer tienen completa fronted = "+validated)
//Obtén la validación si todos los explorers tienen la propiedad isFinished 
//del onboarding como true. Usa EVERY.
console.log(validatedOnboarding)
