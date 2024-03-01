// "추상화 > 구현화" 이 단계. 어떻게 써먹을지...
//

// 노드 조회, 수정, 등은 singlylist라는 클래스에서
// find, append, remove, insert, display
// 1. singly

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   find(value) {
//     let currNode = this.head;
//     while (currNode.value !== value) {
//       currNode = currNode.next;
//     }
//     console.log(currNode);
//     return currNode;
//   }

//   append(value) {
//     let newNode = new Node(value);
//     if (this.head) {
//       newNode.next = this.head;
//       this.head = newNode;
//     } else {
//       this.head = newNode;
//     }
//   }

//   insert(prevValue, value) {
//     let newNode = new Node(value);
//     let prevNode = this.find(prevValue);
//     newNode.next = prevNode.next;
//     prevNode.next = newNode;
//   }

//   remove(value) {
//     let removeNode = this.find(value);
//     let prevNode = this.head;
//     while (prevNode.next.value !== value) {
//       prevNode = prevNode.next;
//     }
//     prevNode.next = removeNode.next;
//   }

//   display() {
//     let result = [];
//     let currNode = this.head;
//     while (currNode !== null) {
//       result.push(currNode.value);
//       currNode = currNode.next;
//     }
//     console.log(result);
//     return result;
//   }
// }
// const test = new SinglyLinkedList();
// test.append(1);
// test.append(4);
// test.append(6);
// test.append(10);
// test.display();
// test.find(1);
// test.remove(6);
// test.display();
// test.insert(4, 15);
// test.display();

// 2. stack;

// Node
// - value / pointer -> top / v
// - 추가 : "맨위"로
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}
