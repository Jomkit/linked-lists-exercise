/** Node: node for a doubly linked list. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  /** doubly LinkedList: chained together nodes. */
  
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
        this.length++;
        return;
      }
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length += 1;
      return;
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }   
        
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return;
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
      return this.removeAt(this.length-1);
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
      return this.removeAt(0);
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
            newNode.prev = curr;
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
  
      if (idx === 0) {
        let val = this.head.val;
        this.head = this.head.next;
        this.length -= 1;
        if (this.length < 2) this.tail = this.head;
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
  