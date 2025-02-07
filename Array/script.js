function List() {
    this.length = 0;
}

List.prototype.push = function (value) {
    this[this.length] = value;
    this.length++;
    return this;
}

List.prototype.pop = function() {
    delete this[this.length - 1];
    this.length--;
    return this;
}

List.prototype.unshift = function (value) {
    for (let i = this.length; i > 0; i--) {
        this[i] = this[i-1];
    }
    this[0] = value;
    this.length++;
    return this;
}

List.prototype.shift = function() {
    for (let i = 1; i < this.length; i++) {
        this[i-1] = this[i];
    }
    this.pop();
    return this;
}

List.prototype.map = function(callback) {
    const newList = new List();
    for (let i = 0; i < this.length; i++) {
        newList.push(callback(this[i], i, this));
    }
    return newList
}

const list = new List();
list.push(1);
list.push(2);
list.push(3);
list.unshift(0);
list.shift();

let newArr = list.map(item => item.length);
console.log(list);
console.log(newArr);
