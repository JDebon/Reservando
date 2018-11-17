let Reserva = function(horario, personas, precioXPersona, codigo) {
    this.horario = horario;
    this.personas = personas;
    this.precioXPersona = precioXPersona;
    this.codigo = codigo;
};

Reserva.prototype.calcularPrecioBase = function calcularPrecioBaseFn() {
    return this.personas * this.precioXPersona;
};

Reserva.prototype.calcularPrecioFinal = function calcularPrecioFinalFn() {
    let descuentoPersona;
    let descuentoCodigo;

    //DESCUENTOS POR PERSONA
    if (this.personas >= 4 || this.personas <= 6) {
        descuentoPersona = (this.calcularPrecioBase() * 5) / 100;
    } else if (this.personas >= 7 || this.personas <= 8) {
        descuentoPersona = (this.calcularPrecioBase() * 10) / 100;
    } else if (this.personas > 8) {
        descuentoPersona = (this.calcularPrecioBase() * 15) / 100;
    }

    //DESCUENTOS POR CODIGO
    if (this.codigo === 'DES1') {
        descuentoCodigo = this.precioXPersona;
    } else if (this.codigo === 'DES15') {
        descuentoCodigo = (this.calcularPrecioBase() * 15) / 100;
    } else if (this.codigo === 'DES200') {
        descuentoCodigo = 200;
    }

    //TODO: DESCUENTOS ADICIONALES POR HORARIO

    return this.calcularPrecioBase() - descuentoPersona - descuentoCodigo;
};
