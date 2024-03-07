// "추상화 > 구현화" 이 단계. 어떻게 써먹을지...
//

// 노드 조회, 수정, 등은 singlylist라는 클래스에서
// find, append, remove, insert, display
// 1. singly

/* 연결리스트
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    console.log(currNode);
    return currNode;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
  }

  insert(prevValue, value) {
    let newNode = new Node(value);
    let prevNode = this.find(prevValue);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  remove(value) {
    let removeNode = this.find(value);
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    prevNode.next = removeNode.next;
  }

  display() {
    let result = [];
    let currNode = this.head;
    while (currNode !== null) {
      result.push(currNode.value);
      currNode = currNode.next;
    }
    console.log(result);
    return result;
  }
}
const test = new SinglyLinkedList();
test.append(1);
test.append(4);
test.append(6);
test.append(10);
test.display();
test.find(1);
test.remove(6);
test.display();
test.insert(4, 15);
test.display();
*/

/*스택

Node
- value / pointer -> top / v
- 추가 : "맨위"로
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
*/

/* 스택 문제 : 올바른 괄호
 - 핵심은 문자열 맨 처음과 끝
  - 그냥 유사배열로서 맨처음 인덱스랑 맨끝 인덱스만 검사하면 되는거 아닌가..
  - 어떤 부분에서 스택을 적용하는건지..
*/

function solution(string) {
  const start = new Date().getTime();
  let result = string[0] === "(" && string[string.length - 1] === ")";
  const end = new Date().getTime();
  console.log("sol end" + String(end - start));
  return result;
}

function solution2(s) {
  const start = new Date().getTime();
  let count = 0;

  for (const c of s) {
    if (c === "(") {
      count += 1;
    } else {
      if (count === 0) {
        const end = new Date().getTime();
        console.log(`sol2 end : ${end - start}`);
        return false;
      }
      count -= 1;
    }
  }
  const end = new Date().getTime();
  console.log(`sol2 end : ${end - start}`);
  return count === 0;
}

function testCreate() {
  let result = "";

  for (let i = 0; i < 10000000; i++) {
    Math.floor(Math.random() * 2) ? (result += ")") : (result += "(");
  }

  return String(result);
}

let test = testCreate();
solution2(test);
console.log(performance.now(solution2));
console.log(performance.now(solution));
solution(test);
