import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter {
    // private client: string
    // readonly details: string
    // public amount: number

    // constructor(client: string, details: string, amount: number) {
    //     this.client = client
    //     this.details = details
    //     this.amount = amount
    // }

    constructor(
        private client:string,
        readonly details: string,
        public amount: number
    ) {}

    format(): string {
        return `${this.client} owes MMK ${this.amount} for ${this.details}.` 
    }

    print(): void {
        console.log(`${this.client} owed MMK ${this.amount} for ${this.details}.`);
    }

}