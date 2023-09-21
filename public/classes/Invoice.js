export class Invoice {
    // private client: string
    // readonly details: string
    // public amount: number
    // constructor(client: string, details: string, amount: number) {
    //     this.client = client
    //     this.details = details
    //     this.amount = amount
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes MMK ${this.amount} for ${this.details}.`;
    }
    print() {
        console.log(`${this.client} owed MMK ${this.amount} for ${this.details}.`);
    }
}
