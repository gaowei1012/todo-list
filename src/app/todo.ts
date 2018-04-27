export class Todo {
    id: number;
    // tslint:disable-next-line:no-inferrable-types
    title: string = '';
    // tslint:disable-next-line:no-inferrable-types
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
