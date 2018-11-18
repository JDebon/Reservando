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
    let adicionalHorario;
    let adicionalFinde;
    //DESCUENTOS POR PERSONA
    if (this.personas >= 4 && this.personas <= 6) {
        descuentoPersona = (this.calcularPrecioBase() * 5) / 100;
    } else if (this.personas >= 7 && this.personas <= 8) {
        descuentoPersona = (this.calcularPrecioBase() * 10) / 100;
    } else if (this.personas > 8) {
        descuentoPersona = (this.calcularPrecioBase() * 15) / 100;
    } else {
        descuentoPersona = 0;
    }

    //DESCUENTOS POR CODIGO
    if (this.codigo === 'DES1') {
        descuentoCodigo = this.precioXPersona;
    } else if (this.codigo === 'DES15') {
        descuentoCodigo = (this.calcularPrecioBase() * 15) / 100;
    } else if (this.codigo === 'DES200') {
        descuentoCodigo = 200;
    } else {
        descuentoCodigo = 0;
    }

    //ADICIONAL POR HORARIO
    if (this.horario.getHours() >= 13 && this.horario.getHours() <= 14) {
        adicionalHorario = descuentoPersona = (this.calcularPrecioBase() * 5) / 100;
    } else {
        adicionalHorario = 0;
    }

    //ADICIONAL POR FIN DE SEMANA
    if (this.horario.getDay() >= 5 && this.horario.getDay() <= 7) {
        adicionalFinde = (this.calcularPrecioBase() * 10) / 100;
    } else {
        adicionalFinde = 0;
    }
    return (
        this.calcularPrecioBase() -
        descuentoPersona -
        descuentoCodigo +
        adicionalHorario +
        adicionalFinde
    );
};
