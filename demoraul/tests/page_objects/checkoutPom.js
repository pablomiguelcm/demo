//POM CHECKOUT
function checkout() {
    //Advertencias
    this.pagar = function () {
        var pagarAplazame = '.pay-with-aplazame';

        var checkout = {pagarAplazame};
        return checkout;
    }

    this.condiciones = function () {
        var aceptarCond = '/html/body/div/main/div[2]/collapser-container/collapser-summary/checkout-type-selector/div/section/label';
        var empiezoAhora = '/html/body/div/main/div[2]/collapser-container/collapser-summary/checkout-type-selector/div/section/div[3]/div/button';

        var condiciones = {aceptarCond, empiezoAhora};
        return condiciones;
    }
}

module.exports = checkout;
