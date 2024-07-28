class SnakeNode {
  constructor() {
    this.next = null;
    // this.prev = null;
    this.position = null;
  }
}

export class Snake {
  constructor(_radius = 50) {
    this.head = null;
    // this.tail = null;
    this.length = null;
    this.radius = _radius;
    this.speed = 3;
  }

  addSegment() {
    let node = new SnakeNode();
    let current = this.head;

    if (this.head == null) this.head = node;
    else {
      while (current.next) current = current.next;
      current.next = node;
    }
    this.length++;
  }
}

function randomBetween(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
