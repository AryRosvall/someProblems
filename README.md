# Algunos problemas para resolver

Se presentan los siguientes problemas y sus respuestas escritas en JavaScript.

## Problema 1

Dada una lista de funciones, se requiere minimizar la complejidad utilizando una abstracción de la mismas, en la cual al ejecutar una sola función se ejecutan todas(x) al mismo tiempo.
 (Utilizar solo programación funcional para resolver el problema / Composicion de funciones)


Ejemplo:
```
>> sum(x=1, y=2) == 3
>> mul(x=1, y=2) == 2
>> sub(x=1, y=2) == -1
>> result = sum(3, 2, -1) = 4


Resultado:>> x(1, 2) = 4
```

[Respuesta](src/problem1.js) 

## Problema 2

Considere una orden y un rappitendero, cada uno con un tag de complejidad asociado. Por cada ciclo en el tiempo, el tag de las órdenes puede ser menos riguroso para que otros rappitenderos
 puedan realizarla, abriendo las posibilidades de búsqueda.

Ejemplo:

```
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
```

[Respuesta](src/problem2.js)

## Problema 3

Dada una lista de restricciones, se debe validar que una orden pueda ser validada cada vez que ocurre un cambio en la misma. Si la orden pasa las validaciones entonces puede ser asignada a un tendero, de lo contrario queda excluida para la iteración en curso.

Crear una estructura tomando en cuenta que pueden haber X restricciones que se puedan aplicar y debe seguir los principios SOLID.

Documentación:
1- Una order con el atributo shopper=true y el atributo cooking_time=0 no puede asignarse
2- Una order con el atributo partner=true y el atributo cooking_time=0 no puede asignarse
3- Una order con el atributo lat=null y/o el atributo lng=null no puede asignarse

Ejemplo:

```
Order:
shopper=true
cooking_time=0
partner=true
lat=null
lng=null

is_valid = Validate(Order)
if is_valid:
print('puede asignarse')
```

[Respuesta](src/problem3.js)