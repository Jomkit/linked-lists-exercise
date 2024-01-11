/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    let temp = this.head;
    this.head = newNode;
    this.head.next = temp;
    this.length += 1;
    
    return;
  }

  /** pop(): return & remove last item. */

  pop() {
    let curr = this.head;
    while(curr){
      if(curr.next === this.tail){
        const tail = curr.next.val;
        this.tail = curr;
        this.tail.next = null;
        this.length -= 1;
        return tail;
      }else if(curr === this.tail){
        const tail = curr.val;
        this.tail = null;
        this.head = null;
        this.length -= 1;
        return tail;
      }
      curr = curr.next;
    }
    return;
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.head === this.tail){
      const head = this.head.val;
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return head;
    }
    else {
      const head = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      return head;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx >= this.length){
      return;
    }

    let curr = this.head;
    let i = 0;
    while(i < this.length){
      if(i === idx){
        return curr.val;
      }
      i++;
      curr = curr.next;
    }
    return;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length){
      return;
    }

    let curr = this.head;
    let i = 0;
    while(i < this.length){
      if(i === idx){
        return curr.val = val;
      }
      i++;
      curr = curr.next;
    }
    return;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    {
      if(idx > this.length){
        return;
      }
      if(this.length === 0){
        this.push(val);
      }
  
      let curr = this.head;
      let i = 0;
      while(i < this.length){
        if(i == idx - 1){
          const newNode = new Node(val);
          if(curr === this.tail){
            this.tail = newNode;
          }
          newNode.next = curr.next;
          curr.next = newNode;
          this.length += 1;
          return;
        }
        i++;
        curr = curr.next;
      }
      return;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx > this.length){
      throw new Error;
    }
    
    let curr = this.head;

    if(this.length === 1){
      const val = curr.val;
      this.head = null;
      this.tail = null;
      this.length--;
      return val;
    }

    let i = 0;
    while(i < this.length){
      if(i === idx - 1){
        const val = curr.next.val;
        curr.next = curr.next.next;
        this.tail = curr;
        this.length -= 1;
        return val;
      }
      curr = curr.next;
      i++;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0;
    let i = 0;
    let curr = this.head;
    while(i < this.length){
      sum += curr.val;
      curr = curr.next;
      i++;
    }
    if(this.length === 0) return 0;
    const avg = sum/(this.length);
    return avg;
  }
}

// module.exports = LinkedList;
