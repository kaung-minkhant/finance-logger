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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (typeInput.value === 'invoice') {
        doc = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    else {
        doc = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber);
    }
    list.render(doc, typeInput.value, 'end');
});
