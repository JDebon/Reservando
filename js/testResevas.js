describe('TDD', function() {
    it('Calculo de reserva', function() {
        var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1');
        let precioBase = reserva1.calcularPrecioBase();
        let precioFinal = reserva1.calcularPrecioFinal();
        expect(precioBase).to.be.equal(2800);
        expect(precioFinal).to.be.equal(2450); //Cambio en el test debido a error de calculo en las guias.
    });
});
