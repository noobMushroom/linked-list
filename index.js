class Node {
    constructor(name = null, nextNode = null) {
        this.name = name;
        this.nextNode = nextNode;
    };
};

class List {
    constructor(head = null) {
        this.head = head
    }
    append(node) {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode;
            }
        }
        lastNode.nextNode = node;
    }
    prepend(node) {
        let firstNode = node
        firstNode.nextNode = this.head;
        this.head = firstNode;
    }
    size() {
        let length = 0;
        let first = this.head;
        while (first) {
            length++
            first = first.nextNode;
        }
        return length;
    }
    firstNode() {
        let firstNode = this.head
        return firstNode;
    }
    tail() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.nextNode) {
                lastNode = lastNode.nextNode;
            }
        }
        return lastNode;
    }
    find(node) {
        let index = 1;
        let firstNode = this.head;
        while (firstNode) {
            if (firstNode == node) {
                return index
            } else {
                index++
                firstNode = firstNode.nextNode;
            }
        }
        return null
    }
    contains(node) {
        let firstNode = this.head;
        while (firstNode) {
            if (firstNode == node) {
                return true
            } else {
                firstNode = firstNode.nextNode;
            }
        }
        return false;
    }

    at(index) {
        let length = this.size();
        if (index > length) {
            console.log('index is out of range')
            return;
        }
        let firstNode = this.head
        for (let i = 1; i < index; i++) {
            firstNode = firstNode.nextNode
        }
        return firstNode
    }

    pop() {
        let last = this.tail();
        let index = this.find(last);
        let perv = this.at(index - 1);
        perv.nextNode = null;
    }

    toString() {
        let lastNode = this.tail()
        let firstNode = this.head;
        let index = this.find(lastNode)
        let output = `(${firstNode.name})`
        for (let i = 2; i <= index; i++) {
            let node = this.at(i);
            output = output + `->(${node.name})`
        }
        return output;
    }


    insertAt(value, index) {
        let size = this.size();
        if (size < index) {
            console.log('index is out of range')
            return;
        }
        if (index === 1) {
            this.prepend(value)
        } else if (index === size) {
            this.append(value);
        } else {
            let perv = this.at(index - 1);
            let next = this.at(index);
            perv.nextNode = value;
            value.nextNode = next;
        }
    }


    removeAt(index) {
        let size = this.size()
        if (size < index) {
            console.log('index is out of range')
            return;
        }
        if (index === 1) {
            let next = this.at(index + 1);
            this.head = next;
        } else if (index === list.size()) {
            this.pop();
        } else {
            let perv = this.at(index - 1);
            let next = this.at(index + 1);
            perv.nextNode = next;
        }
    }
}


// tests;


let headNode = new Node('I am the head node')
let secondNode = new Node("I am the second node");
let thirdNode = new Node(' I am the third node');
let tailNode = new Node("I am the tail node");

let tailNode1 = new Node('I am the new tail Node');

let headNode1 = new Node('I am the new head Node');

let insertNode = new Node('insert me anywhere')

headNode.nextNode = secondNode;
secondNode.nextNode = thirdNode;
thirdNode.nextNode = tailNode;

let list = new List(headNode);

list.append(tailNode1)
list.prepend(headNode1)

console.log(list.size());

console.log(list.find(headNode1))
console.log(list.find(tailNode1))


// list.pop()   this will delete the last node.

console.log(list.toString())


// list.insertAt(insertNode, 1)
// list.insertAt(insertNode, 6)
// list.insertAt(insertNode, 3)
// list.insertAt(insertNode, 980)


// list.removeAt(insertNode, 1)
// list.removeAt(insertNode, 6)
// list.removeAt(insertNode, 3)
// list.removeAt(insertNode, 980)

console.log('I am the first node', list.firstNode())
console.log('i am the last node', list.tail())

console.log(list)