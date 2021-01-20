//CUCUMBER CONF
var {Given, When, Then, Before, After, BeforeAll} = require('cucumber');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

//IMPORT POM CHECKOUT
var Checkout = require('../page_objects/checkoutPom');
var checkoutPom;
checkoutPom = new Checkout();
var pagar = checkoutPom.pagar();
var condiciones = checkoutPom.condiciones();

//STEPS
Given(/^Un usuario se encuentra en la web de Aplazame$/, async function () {
    //Acceder a la web y maximizar ventana
    await browser.maximizeWindow();
    await browser.url('/');
});

When(/^Pulsa el botón Pagar con Aplazame$/, async function () {
    var botonPagar = await browser.$(pagar.pagarAplazame);
    await botonPagar.scrollIntoView();
    await browser.waitUntil(() => botonPagar.isClickable());
    await botonPagar.click();
    await browser.pause(3000);
});

Then(/^Se muestra la opción de pagar a plazos$/, async function () {
    console.log('OK');
});


When(/^El usuario pulsa el check para confirmar las politicas de cookies$/, async function () {
    await browser.pause(3000);
    await browser.switchToFrame(1);
    var aceptarCond = await browser.$(condiciones.aceptarCond);
    await browser.waitUntil(() => aceptarCond.isExisting());
    await aceptarCond.click();
});

When(/^Pulsa en Empiezo ahora$/, async function () {
    var botonEmpiezoAhora = await browser.$(condiciones.empiezoAhora);
    await browser.waitUntil(() => botonEmpiezoAhora.isExisting());
    await botonEmpiezoAhora.click();
    await browser.pause(3000);
});
