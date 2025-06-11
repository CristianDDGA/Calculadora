class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
            raizCuadrada: '√',
            potenciaCuadrado: '^2'
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        if (tipo === 'igual') {
            this.calcular();
            actualizarHistorial(`${this.valorAnterior} ${this.tipoOperacion} ${this.valorActual}`, this.valorActual);
            this.tipoOperacion = undefined;
            this.valorAnterior = '';
            this.imprimirValores();
            return;
        }
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        // Muestra toda la operación en una sola línea
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''} ${this.valorActual}`.trim();
        this.displayValorActual.textContent = '';
    }

    calcular() {
        let valor = parseFloat(this.valorActual || this.valorAnterior);

        if (this.tipoOperacion === 'raizCuadrada') {
            if (!isNaN(valor)) {
                this.valorActual = this.calculador.raizCuadrada(valor);
            }
            return;
        }

        if (this.tipoOperacion === 'potenciaCuadrado') {
            if (!isNaN(valor)) {
                this.valorActual = this.calculador.potenciaCuadrado(valor);
            }
            return;
        }

        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}