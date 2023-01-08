
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
        this.length = 1;
    }
    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    print() {
        let data = this.head;
        while (data) {
            console.log(data.value);
            data = data.next;
        }
    }
    appendAt(value, position) {
        if (position === 1) {
            this.prepend(value);
        }
    }
}

const list = new LinkList(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(1);
console.log(list);

list.print();