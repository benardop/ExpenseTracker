export class Expense {

    constructor(
        public id: number,
        public date: Date,
        public merchant: string,
        public total: number,
        public comment?: string
    ) { }
}
