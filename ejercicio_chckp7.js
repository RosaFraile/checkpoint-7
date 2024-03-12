/* EJERCICIO JAVASCRIPT Cree una función JS que incluya 4 argumentos.
   Suma los dos primeros argumentos, luego los dos segundos y multiplícalos.
   Si el número creado es mayor que 50, registre la consola "¡El número es mayor que 50!".
   Si es más pequeño, registre la consola "¡El número es inferior a 50!"
*/

function fourArgs(first, second, third, fourth) {
    result = (first + second) * (third + fourth);
    mensaje = result > 50 ? "¡El número es mayor que 50!" : "¡El número es inferior a 50!";
    console.log(mensaje);
}
   
  
fourArgs(1, 5, 4, 8);