Feature: Checkout
  Tests Checkout de la web.

  @procederPago
  Scenario: Un usuario procede al pago a Plazos
    Given Un usuario se encuentra en la web de Aplazame
    When Pulsa el botón Pagar con Aplazame
    Then Se muestra la opción de pagar a plazos

  @selecionarMetodoPago
  Scenario: Un usuario selecciona Pago a plazos avanza con la compra
    When El usuario pulsa el check para confirmar las politicas de cookies
    When Pulsa en Empiezo ahora


