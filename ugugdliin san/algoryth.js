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
    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("bad index");
        }

        let current = this.head;
        let i = 0;

        while (i < index) {
            current = current.next;
            i++;
        }

        return current.value;
    }
    insert(index, item) {
        if (index < 0 || index > this.size) {
            throw new Error("bad index");
        }

        const newNode = new Node(item);

        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let i = 0;

            while (i < index - 1) {
                current = current.next;
                i++;
            }

            newNode.next = current.next;
            current.next = newNode;
        }

        this.size++;
    }
    delete(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("bad index");
        }

        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            let i = 0;

            while (i < index - 1) {
                current = current.next;
                i++;
            }

            current.next = current.next.next;
        }

        this.size--;
    }

    getSize() {
        return this.size;
    }
}
