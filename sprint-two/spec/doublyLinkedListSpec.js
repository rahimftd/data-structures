var doublyLinkedList;

describe('doublyLinkedList', function() {
  

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", "removeTail"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  it('should correct next and previous for newly added values', function() {
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(8);
    doublyLinkedList.addToTail(9);
    expect(doublyLinkedList.head.next).to.equal(doublyLinkedList.tail.previous);
    expect(doublyLinkedList.tail.previous.previous).to.equal(doublyLinkedList.head);
    expect(doublyLinkedList.head.next.next).to.equal(doublyLinkedList.tail);
  });

  it('should update previous property when removing head', function() {
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(8);
    doublyLinkedList.addToTail(9);
    doublyLinkedList.addToTail(10);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.previous).to.equal(null);
    expect(doublyLinkedList.head.next).to.equal(doublyLinkedList.tail.previous);
  });

  it('should update head when addToHead is called', function() {
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(8);
    doublyLinkedList.addToHead(9);
    expect(doublyLinkedList.head.value).to.equal(9);
    expect(doublyLinkedList.head.next.value).to.equal(7);
  });

  it('should remove tail when removeTail is called', function() {
    doublyLinkedList.addToHead(7);
    doublyLinkedList.addToHead(8);
    doublyLinkedList.addToHead(9);
    expect(doublyLinkedList.tail.value).to.equal(7);
    doublyLinkedList.removeTail();
    expect(doublyLinkedList.tail.value).to.equal(8);

  });

  it('should return the value of former tail when removeTail is called', function() {
    doublyLinkedList.addToTail(7);
    expect(doublyLinkedList.removeTail()).to.equal(7);
  });

  // add more tests here to test the functionality of doublyLinkedList
});
