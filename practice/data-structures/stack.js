"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
        this.count = 0;
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
        console.log("Added " + item + " at " + this.count);
        this.count++;
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack();
stack.push('test');
