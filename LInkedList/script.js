// class Node so that it can be reused any no of times
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// class LinkedList that can make use of the class Node
class LinkedList {
    constructor(value) {
        if (!value) {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        else {
            const newNode = new Node(value);
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        }
    }

    push (value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop () {
        if (!this.head.next) this.head = null;
        else {
            let temp = this.head;
            while (temp.next.next) {
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp;
        }
        this.length--;
        return this;
    }

    unshift (value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift () {
        if (!this.head.next) this.head = null;
        else {
            let temp = this.head;
            this.head = temp.next;
            temp.next = null;
        }
        this.length--;
        return this;
    }

    get (index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp.value;
    }

    set (index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insert (index, value) {
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return false;
        const newNode = new Node(value);
        const temp = this.get(index-1);
        newNode.next = temp.next;
        temp.next = newNode
        this.length++;
        return true;
    }

    remove (index) {
        if (index === 0) return this.shift(value);
        if (index === this.length) return this.pop(value);
        if (index < 0 || index > this.length) return undefined;
        const before = this.get(index-1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return this;
    }

    reverse () {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let next = temp.next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        return this;
    }

    //printing a linkedlist
    printList () {
        let temp = this.head;
        let s = '';
        while(temp) {
            s += temp.value + '->';
            temp = temp.next;
        }
        return s + 'null';
    }
}

// LinkedList object
let myLL = new LinkedList(1);
myLL.push(2);
myLL.push(3);
myLL.push(4);
console.log(myLL);
console.log(myLL.printList());

// myLL.unshift(0);
// myLL.shift();

// console.log(myLL.get(1));
myLL.reverse();
console.log(myLL);
console.log(myLL.printList());