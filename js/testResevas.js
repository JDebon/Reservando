describe('TDD', function() {
    it('Calculo de reserva', function() {
        var reserva = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, 'DES200');
        let precioBase = reserva.calcularPrecioBase();
        let precioFinal = reserva.calcularPrecioFinal();
        expect(precioBase).to.be.equal(300);
        expect(precioFinal).to.be.equal(100);
    });
    it('Calculo de reserva', function() {
        var reserva = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, 'DES1');
        let precioBase = reserva.calcularPrecioBase();
        let precioFinal = reserva.calcularPrecioFinal();
        expect(precioBase).to.be.equal(2800);
        expect(precioFinal).to.be.equal(2450);
    });
});
