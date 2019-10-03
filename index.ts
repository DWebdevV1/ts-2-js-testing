/**
 * To compile ts to js file run command: 
 * npm run tsc
 * (See package.json for custom scripts)
 */
class MyTsClass {

    helper: string;

    constructor() {}

    printAll(): void {

        this.helper = 'Hello World';

        console.log(`Printing All: ${this.helper}`);
    }

}