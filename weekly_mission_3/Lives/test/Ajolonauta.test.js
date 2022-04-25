const Ajolonauta = require ('./../app/Ajolonauta')

    describe("Prueba de unidad de ajolonauta",() => {
        test('caso de prueba 1: Creacion de objetos', () =>{
            // aqui puedes colocar el codigo como lo vas u tilizar
            const woopa = new Ajolonauta("woopa")

            // validar el resultado esperado
            expect(woopa.name).toBe("woopa");
        });
})