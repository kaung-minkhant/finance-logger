import { Invoice } from "./classes/Invoice.js"; // .js
import { Payment } from "./classes/Payment.js";
import { Listtemplate } from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
const typeInput = document.querySelector('#type');
const toFromInput = document.querySelector('#toFrom');
const detailsInput = document.querySelector('#details');
const amountInput = document.querySelector('#amount');
const itemList = document.querySelector('.item-list');
const list = new Listtemplate(itemList);
let values;
values = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (typeInput.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, typeInput.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Shunn', age: 21 });
console.log(docOne.age);
var resourceType;
(function (resourceType) {
    resourceType[resourceType["BOOK"] = 0] = "BOOK";
    resourceType[resourceType["PERSON"] = 1] = "PERSON";
    resourceType[resourceType["FLOWER"] = 2] = "FLOWER";
})(resourceType || (resourceType = {}));
const docThree = {
    uid: 1,
    resourceName: resourceType.BOOK,
    data: 'So Good'
};
const docFour = {
    uid: 2,
    resourceName: resourceType.PERSON,
    data: ['kaung', 'shunn']
};
console.log(docThree);
console.log(docFour);
