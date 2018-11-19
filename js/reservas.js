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
    return this.calcularPrecioBase() - this.descuentos() + this.adicionales();
};

Reserva.prototype.descuentos = function descuentosFn() {
    let descuentos = 0;

    //DESCUENTOS POR PERSONA
    if (this.personas >= 4 && this.personas <= 6) {
        descuentos += (this.calcularPrecioBase() * 5) / 100;
    } else if (this.personas >= 7 && this.personas <= 8) {
        descuentos += (this.calcularPrecioBase() * 10) / 100;
    } else if (this.personas > 8) {
        descuentos += (this.calcularPrecioBase() * 15) / 100;
    }

    //DESCUENTOS POR CODIGO
    if (this.codigo === 'DES1') {
        descuentos += this.precioXPersona;
    } else if (this.codigo === 'DES15') {
        descuentos += (this.calcularPrecioBase() * 15) / 100;
    } else if (this.codigo === 'DES200') {
        descuentos += 200;
    }

    return descuentos;
};

Reserva.prototype.adicionales = function adicionalesFn() {
    let adicionales = 0;
    //ADICIONAL POR HORARIO
    if (this.horario.getHours() >= 13 && this.horario.getHours() <= 14) {
        adicionales += (this.calcularPrecioBase() * 5) / 100;
    }

    //ADICIONAL POR FIN DE SEMANA
    if (this.horario.getDay() >= 5 && this.horario.getDay() <= 7) {
        adicionales += (this.calcularPrecioBase() * 10) / 100;
    }

    return adicionales;
};
