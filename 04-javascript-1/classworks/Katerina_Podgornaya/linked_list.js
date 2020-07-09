class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.repeate = false;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addNodeToTheEnd(value) {
        let node = new Node(value);

        if (this.length == 0) {
            this.head = node;
        } else {
            let currentNode = this.head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = new Node(value);
        }

        this.length++;
    }

    addNodeIntoPosition(value, position) {
        if (position < 0 | position > this.length) {
            console.log("Sorry, this list doesn't have this position.")
            return;
        }

        let node = new Node(value);

        if (this.length == 0) {
            this.head = node;
        } else {
            let currentNode = this.head;
            let previousNode = null;
            let currentPosition = 0;

            while (currentPosition != position && currentPosition < this.length) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentPosition++;
            }

            previousNode.next = node;
            node.next = currentNode;
        }
        this.length++;
    }

    getNodeByPosition(position) {
        if (position < 0 || position > this.length) {
            return "Sorry, this list doesn't have this position.";
        }

        let currentNode = this.head;
        let currentPosition = 0;

        while (currentPosition < position) {
            currentNode = currentNode.next;
            currentPosition++;
        }
        return currentNode.value;
    }

    doLoop() {
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = this.head;
    }
}

function detectLoopInLinkedList(linkedList) {
    let loop = false;
    let currentNode = linkedList.head;

    while (currentNode.next) {
        console.log("i'm in the loop");
        if (currentNode.repeate === true) {
            loop = true;
            return console.log("true");
        }
        currentNode.repeate = true;
        currentNode = currentNode.next;
    }
    if (loop === false) {
        return console.log("false");
    }
}

//create linked list
let linkedList = new LinkedList();

//add nodes
linkedList.addNodeToTheEnd(1); //1
linkedList.addNodeToTheEnd(2); //1 --> 2
linkedList.addNodeToTheEnd(3); //1 --> 2 --> 3

//add nodes into position
linkedList.addNodeIntoPosition(1.3, 1); // 1 --> 1.3 --> 2 --> 3
linkedList.addNodeIntoPosition(1.6, 2); // 1 --> 1.3 --> 1.6 --> 2 --> 3

//add nodes into position not exists
linkedList.addNodeIntoPosition(1.3, 10); // error
linkedList.addNodeIntoPosition(1.6, 20); // error

//get node by position
console.log(linkedList.getNodeByPosition(2)); // 1.6

//detect if loop in this linked list
detectLoopInLinkedList(linkedList); //false

/*create loop linked list*/
linkedList.doLoop();
detectLoopInLinkedList(linkedList); //true

console.log(linkedList);
