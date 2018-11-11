describe('Listado.buscarRestaurante', function() {
    it('busqueda valida con id 2', function() {
        let result = listado.buscarRestaurante(2);
        expect(result).to.be.an('object');
        expect(result.id).to.be.equal(2);
    });
    it('busqueda invalia con id -1', function() {
        let result = listado.buscarRestaurante(-1);
        expect(result).to.be.equal('No se ha encontrado ningún restaurant');
    });
});
describe('Listado.obtenerRestaurantes', function() {
    it('busqueda valida buscando ubicacion Berlín', function() {
        let result = listado.obtenerRestaurantes(null, 'Berlín', null);
        expect(result).to.be.an('array');
        expect(result.length).to.be.at.least(1);
    });
    it('busqueda invalida buscando ubicacion hamburguesa', function() {
        let result = listado.obtenerRestaurantes(null, 'hamburguesa', null);
        expect(result).to.be.an('array');
        expect(result.length).to.be.equal(0);
    });
    it('busqueda valida con multiples filtros (Berlin, hamburguesa, 11:30)', function() {
        let result = listado.obtenerRestaurantes('Hamburguesa', 'Berlín', '11:30');
        expect(result).to.be.an('array');
        expect(result.length).to.be.at.least(1);
    });
});
