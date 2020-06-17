/**
Dada una lista de funciones, se requiere minimizar la complejidad utilizando una abstracción de la mismas, en la cual al ejecutar una sola función se ejecutan todas(x) al mismo tiempo.
 (Utilizar solo programación funcional para resolver el problema / Composicion de funciones)
Ejemplo:
>> sum(x=1, y=2) == 3
>> mul(x=1, y=2) == 2
>> sub(x=1, y=2) == -1
>> result = sum(3, 2, -1) = 4
Resultado:>> x(1, 2) = 4
 */

async function sum(arr = []) {
  return await arr.reduce((acc, number) => acc += number);
}

async function mul(number1 = 0, number2 = 0) {
  return await number1 * number2;
}

async function sub(number1 = 0, number2 = 0) {
  return await number1 - number2;
}

async function x(number1 = 0, number2 = 0) {

  let results = []
  let res = 0;
  Promise.all([
    results.push(await sum([number1, number2])),
    results.push(await mul(number1, number2)),
    results.push(await sub(number1, number2)),
    res = await sum(results)
  ]);

  return res
}

x(1, 2).then(result => console.log(result))
