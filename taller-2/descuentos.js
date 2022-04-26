const coupons = [
  {
    name: "Descuento grande",
    discount: 50,
  },
  {
    name: "Descuento mediano",
    discount: 25,
  },
  {
    name: "Descuento pequeño",
    discount: 10,
  },
];

//Función para calcular el precio final con descuento
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

//
function calcularPrecio() {
  const inputPrice = document.getElementById("InputPrice");
  const price = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
  };

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + couponValue + " no es válido");
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(price,descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
}
