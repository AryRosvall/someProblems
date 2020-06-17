/**
 * Dada una lista de restricciones, se debe validar que una orden pueda ser validada cada vez que ocurre un cambio en la misma.
 * Si la orden pasa las validaciones entonces puede ser asignada a un tendero, de lo contrario queda excluida para la iteración en curso.

Crear una estructura tomando en cuenta que pueden haber X restricciones que se puedan aplicar y debe seguir los principios SOLID.

Documentación:
1- Una order con el atributo shopper=true y el atributo cooking_time=0 no puede asignarse
2- Una order con el atributo partner=true y el atributo cooking_time=0 no puede asignarse
3- Una order con el atributo lat=null y/o el atributo lng=null no puede asignarse

Ejemplo:
Order:
shopper=true
cooking_time=0
partner=true
lat=null
lng=null

is_valid = Validate(Order)
if is_valid:
print('puede asignarse')
*/

/**
 * @class Order
 */
class Order {

  constructor(id, cookingTime = 0, shopper = false, partner = false, lat = null, lng = null) {
    this._id = id;
    this._cookingTime = cookingTime;
    this._shopper = shopper;
    this._partner = partner;
    this._lat = lat;
    this._lng = lng;
  }

  setId(id) {
    this._id = id
  }

  setCookingTime(cookingTime) {
    this._cookingTime = cookingTime
  }

  setShopper(shopper) {
    this._shopper = shopper;
  }

  setPartner(partner) {
    this._partner = partner;
  }

  setLat(lat) {
    this._lat = lat;
  }

  setLng(lng) {
    this._lng = lng;
  }

  getId() {
    return this._id;
  }

  getCookingTime() {
    return this._cookingTime;
  }

  getShopper() {
    return this._shopper;
  }

  getPartner() {
    return this._partner;
  }

  getLat() {
    return this._lat;
  }

  getLng() {
    return this._lng;
  }

  validate() {

    let isValid = true;
    if (this._cookingTime === 0 && this._shopper === true) {
      isValid = false;
    }

    if (this._cookingTime === 0 && this._partner === true) {
      isValid = false;
    }

    if (this._lat === null || this._lng === null) {
      isValid = false;
    }

    return isValid;
  }

  isReadyMessage() {
    if (this.validate()) {
      console.log(`Orden ${this._id} puede asignarse`);
    } else {
      console.log(`Orden ${this._id} aún no está lista :(`);
    }
  }
}

//Caso 1
let order = new Order(1, 0, true, false, null, null);
order.isReadyMessage()

//Caso 2
let order2 = new Order(2, 0, false, true, 0, 0);
order2.isReadyMessage()

//Caso 3
let order3 = new Order(3, 10, false, false, null, 0);
order3.isReadyMessage()

//Caso 4
let order4 = new Order(4, 10, false, false, 0, null);
order4.isReadyMessage()

//Caso exitoso
let order5 = new Order(5, 10, false, false, 19.441831, -99.193907);
order5.isReadyMessage();