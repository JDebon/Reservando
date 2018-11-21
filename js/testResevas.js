describe('TDD', function() {
    it('Calculo de reserva (8 personas, 350 c/u, descuento de 1 persona, fin de semana, no hora pico)', function() {
        var reserva = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1');
        let precioBase = reserva.calcularPrecioBase();
        let precioFinal = reserva.calcularPrecioFinal();
        expect(precioBase).to.be.equal(2800);
        expect(precioFinal).to.be.equal(2450); //Cambio en el test debido a error de calculo en las guias.
    });
    it('Calculo de reserva (2 personas, 150 c/u, descuentos de $200, no fin de semana, no hora pico)', function() {
        var reserva = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, 'DES200');
        let precioBase = reserva.calcularPrecioBase();
        let precioFinal = reserva.calcularPrecioFinal();
        expect(precioBase).to.be.equal(300);
        expect(precioFinal).to.be.equal(100);
    });
});
