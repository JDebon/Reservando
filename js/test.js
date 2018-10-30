var expect = chai.expect;

describe('reservarHorarios', function() {
    it('reserva correcta a las 13:00', function() {
        let rest = new Restaurant(
            1,
            'TAO Uptown',
            'Asiática',
            'Nueva York',
            ['13:00', '15:30', '18:00'],
            '../img/asiatica1.jpg',
            [6, 7, 9, 10, 5]
        );
        let horariosLength = rest.horarios.length;
        rest.reservarHorario('13:00');
        expect(rest.horarios).to.not.include('13:00');
        expect(rest.horarios.length).to.be.equal(horariosLength - 1);
    });
    it('reserva incorrecta a las 19:00', function() {
        let rest = new Restaurant(
            1,
            'TAO Uptown',
            'Asiática',
            'Nueva York',
            ['13:00', '15:30', '18:00'],
            '../img/asiatica1.jpg',
            [6, 7, 9, 10, 5]
        );
        let horariosLength = rest.horarios.length;
        rest.reservarHorario('19:00');
        expect(rest.horarios).to.not.include('19:00');
        expect(rest.horarios.length).to.be.equal(horariosLength);
    });
});

describe('obetenerPuntuacion', function() {
    it('promedio de las calificaciones 5,5,5,5,10', function() {
        let rest = new Restaurant(
            1,
            'TAO Uptown',
            'Asiática',
            'Nueva York',
            ['13:00', '15:30', '18:00'],
            '../img/asiatica1.jpg',
            [5, 5, 5, 5, 10]
        );
        expect(rest.obtenerPuntuacion()).to.be.equal(6);
    });
    it('promedio de las restaurant sin clasificaciones', function() {
        let rest = new Restaurant(
            1,
            'TAO Uptown',
            'Asiática',
            'Nueva York',
            ['13:00', '15:30', '18:00'],
            '../img/asiatica1.jpg',
            []
        );
        expect(rest.obtenerPuntuacion()).to.be.equal(0);
    });
});
