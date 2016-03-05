var doublyLinkedList;

describe('doublyLinkedList', function() {
  

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
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

  it('newly added values have correct next and previous pointers', function() {
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(8);
    doublyLinkedList.addToTail(9);
    expect(doublyLinkedList.head.next).to.equal(doublyLinkedList.tail.previous);
    expect(doublyLinkedList.tail.previous.previous).to.equal(doublyLinkedList.head);
    expect(doublyLinkedList.head.next.next).to.equal(doublyLinkedList.tail);
  });

  it('previous property should update when removing head', function() {
    doublyLinkedList.addToTail(7);
    doublyLinkedList.addToTail(8);
    doublyLinkedList.addToTail(9);
    doublyLinkedList.addToTail(10);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.previous).to.equal(null);
    expect(doublyLinkedList.head.next).to.equal(doublyLinkedList.tail.previous);
  });

  // add more tests here to test the functionality of doublyLinkedList
});
