const Spiderverse = require ( './../app/sipiderverse')

describe('Unit  tests for Spiderman class', () => {
    test('Create an spiderman object',() => {

        // Aqui escribimos el código que queremos usar tal cual
        // Quiero poder instanciar un objeto Spiderman con esta información
        const tomHolland = new Spiderverse ("Spiderman Disney", 24, "Tom Holland", 5, "Marvel Studio")

        // Validamos que este codigo funcione de la forma esperada
        expect(tomHolland.name).toBe("Spiderman Disney");
        expect(tomHolland.age).toBe(24);
        expect(tomHolland.actor).toBe("Tom Holland");
        expect(tomHolland.peliculas).toBe(5);
        expect(tomHolland.recordingStudio).toBe("Marvel Studio");

    })

    test('2) test Use de metodo getInfo', () => {
        const tobeyMaguire = new Spiderverse ("Spiderman Sony","41", "Tobey Maguire", "4", "Sony")
        expect(tobeyMaguire.getInfo()).toBe("Hey, I´m Tobey Maguire from Sony");

    });
})
