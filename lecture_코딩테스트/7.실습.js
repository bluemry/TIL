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
- value / pointer -> head / v
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
    const value = this.top.value;zx
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

/*
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
*/

// 안보고 큐 구현해보자 >> 연결리스트

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }

//   getTest() {
//     return test;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }

//   enqueue(node) {
//     if (!this.head) {
//       this.head = this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//   }

//   dequeue() {
//     let result = this.head.value;
//     this.head = this.head.next;
//     this.size--;
//     return result;
//   }

//   peek() {
//     return this.head.value;
//   }

//   getSize() {
//     return this.size;
//   }
// }

// const testQueue = new Queue();
// testQueue.enqueue(new Node(1));
// testQueue.enqueue(new Node(2));
// testQueue.enqueue(new Node(3));
// testQueue.enqueue(new Node(4));
// console.log(testQueue);
// console.log(testQueue.dequeue());
// console.log(testQueue.getSize());
// console.log(testQueue.peek());

function solution(priorities, location) {
  /* 특정 프로세스가 몇번째로 실행되는지.
      이해) 꺼내서 우선순위 확인
          - 최우선이면 실행
          - 아니면 다시 넣음.
          - 우선순위가 같으면, 우선순위가 높은 것으로부터 순서대로
              - [2,1,1,4,1] 일경우, DABCE
              - [2,4,1,1,1] 일경우, BACDE
      
      구현) 일단 정렬 > 해당 '위치'를 조회해서 '순서'
      -1) 정렬
          - 숫자 크기에 따른 정렬 > 이거만으로도 n^아닌가..
          - 동일 크기일 시, 위치에 따른 정렬.
      -2) 결과배열의 요소로 기존 위치 정보까지 넣으면..> 물론 탐색에 O(n)
          - 위치정보까지 넣는다면, 객체가 나을지도..
      -3) 순서 : 결과 배열의 인덱스
      
  */
  let arr = priorities.map((element, index) => {
    return {
      priority: element,
      index: index,
      front: priorities[index - 1] ? priorities[index - 1] : 0,
    };
  });

  // 직접 정렬구하든가, 아니면 sort함수. > 혹은 환형큐로
  let answer = 0;
  let sortedArr = arr
    .sort((a, b) => b.priority - a.priority)
    .sort((a, b) => {
      if (a.priority === b.priority) {
        return a.front - b.front;
      }
    })
    .map((obj, idx) => {
      if (
        obj.priority === priorities[location] &&
        obj.front !== priorities[location]
      ) {
        answer = idx + 1;
      }
      return obj;
    });

  console.log(sortedArr);
  console.log(answer);
}

solution([5, 1, 9, 4, 1, 1], 1);
// 예상 답변 6

const table = [];
table["a"] = 100;
table["b"] = 200;
console.log(table);
console.log(table["a"]);
console.log(table[0]);
