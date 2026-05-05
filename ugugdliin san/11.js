class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(index, item) {
        if (index < 0 || index > this.size) {
            throw new Error('bad index');
        }
        const newNode = new Node(item);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }

        let current = this.head;
        let i = 1;

        while (i < index) {
            current = current.next;
            i++;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
}
