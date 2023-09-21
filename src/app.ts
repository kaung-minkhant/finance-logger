import { Invoice } from "./classes/Invoice.js" // .js
import { Payment } from "./classes/Payment.js"
import { Listtemplate } from "./classes/ListTemplate.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

const form = document.querySelector('.new-item-form') as HTMLFormElement

const typeInput = document.querySelector('#type') as HTMLSelectElement
const toFromInput = document.querySelector('#toFrom') as HTMLInputElement
const detailsInput = document.querySelector('#details') as HTMLInputElement
const amountInput = document.querySelector('#amount') as HTMLInputElement

const itemList = document.querySelector('.item-list') as HTMLUListElement
const list = new Listtemplate(itemList)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter
    if (typeInput.value === 'invoice') {
        doc = new Invoice(toFromInput.value, detailsInput.value, amountInput.valueAsNumber)
    } else {
        doc = new Payment(toFromInput.value, detailsInput.value, amountInput.valueAsNumber)
    }

    list.render(doc, typeInput.value, 'end')
})