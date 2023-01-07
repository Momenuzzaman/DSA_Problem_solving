class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkList {
    constructor(value) {
        let node = new Node(value);
        this.head = node;
        this.tail = node;
    }
    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
    }
}

const list = new LinkList(1);
list.append(2);
list.append(3);
console.log(list); 