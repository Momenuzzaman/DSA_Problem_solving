class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class linkList {
    constructor(value) {
        let node = new Node(value);
        this.head = node;
        this.tail = node;
    }
    myaAppend(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
    }
}

const link = new linkList(500);
link.myaAppend(600);
link.myaAppend(700);
link.myaAppend(800);

console.log(link);