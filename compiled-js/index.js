/**
 * To compile ts to js file run command:
 * npm run tsc
 * (See package.json for custom scripts)
 */
var MyTsClass = /** @class */ (function () {
    function MyTsClass() {
    }
    MyTsClass.prototype.printAll = function () {
        this.helper = 'Hello World';
        console.log("Printing All: " + this.helper);
    };
    return MyTsClass;
}());
