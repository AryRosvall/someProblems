/**
 * Considere una orden y un tendero, cada uno con un tag de complejidad asociado. Por cada ciclo en el tiempo, el tag de las órdenes puede ser menos riguroso para que otros tenderos puedan realizarla, abriendo las posibilidades de búsqueda.

Ejemplo:
Orden:
tag: 4
iteration: 0

tag: 4, 3 (nivel 3 abierto)
iteration: 5

tag: 4, 3, 2 (nivel 3 y 2 abiertos)
iteration: 10

tag: 4, 3, 2, 1 (nivel 3, 2 y 1 abiertos)
iteration: 15

Basándose en esta  configuracion:
config = {
  "1": 15,
  "2": 10,
  "3": 5,
  "4": 0
}

Resultado:
>> x(od_skill=4, od_ite=0)  = [4]
>> x(od_skill=4, od_ite=5)  = [4, 3]
>> x(od_skill=4, od_ite=10) = [4, 3, 2]
>> x(od_skill=4, od_ite=15) = [4, 3, 2, 1]
*/

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

let getTags = {
  x: function () {
    let tags = [];
    return function (od_skill, od_ite) {

      config = {
        "1": 15,
        "2": 10,
        "3": 5,
        "4": 0
      }

      let newTag = getKeyByValue(config, od_ite);

      if (newTag === undefined) {
        return;
      }

      let exists = tags.indexOf(newTag)

      if (exists === -1) {
        tags.push(newTag);
      }
      return tags;
    }
  }()
}

let tags = [];
tags = getTags.x(4, 0);
console.log("results", tags);

tags = getTags.x(4, 5);
console.log("results", tags);

tags = getTags.x(4, 10);
console.log("results", tags);

tags = getTags.x(4, 15);
console.log("results", tags);

tags = getTags.x(4, 15);
console.log("results", tags);