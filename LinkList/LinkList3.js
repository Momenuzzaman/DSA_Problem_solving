
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
        this.tail.next = this.head
        this.length = 1;
    }
    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.tail.next = this.head
        this.length++;
    }
    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.tail.next = this.head
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
        else if (position === this.length + 1) {
            this.append(value);
        }
        else {
            let newNode = new Node(value);
            let preNode = this.findNode(position - 1);
            newNode.next = preNode.next;
            preNode.next = newNode;

            this.length++;
        }
    }
    findNode(n) {
        let count = 1;
        let data = this.head;
        while (data) {
            if (count === n) break;
            count++;
            data = data.next;
        }
        return data;
    }
}

const list = new LinkList(2);
list.append(3)
list.prepend(1)
console.log(list.head)