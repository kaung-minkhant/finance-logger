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

let values: [string, string, number]
values = [toFromInput.value, detailsInput.value, amountInput.valueAsNumber] 

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter
    if (typeInput.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }

    list.render(doc, typeInput.value, 'end')
})

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100)
    return {...obj, uid}
}

let docOne = addUID({name: 'Shunn', age: 21})

console.log(docOne.age);

enum resourceType {BOOK, PERSON, FLOWER}

interface Resource<T> {
    uid: number;
    resourceName: resourceType;
    data: T
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: resourceType.BOOK,
    data: 'So Good' 
}

const docFive: Resource<string[]> = {
    uid: 2,
    resourceName: resourceType.PERSON,
    data: ['kaung', 'shunn']
}

console.log(docThree);
console.log(docFive);
