// https://leetcode.com/problems/min-stack/discuss/49185/MinStack-JavaScript-solution

var MinStack = function() {
    this.container = [];
    this.minStack = [];
};

MinStack.prototype.push = function(x) {
    this.container.push(x);
    if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(x);
    }
};

MinStack.prototype.pop = function() {
    var x = this.container.pop();
    if (x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.container[this.container.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
}
