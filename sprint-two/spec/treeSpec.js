describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild", "contains", "traverse" and "removeFromParent" and a property named "value" and a propetry named "parent"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.removeFromParent).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('parent')).to.equal(true);
  });

  it('should have a parent property that points to the correct tree', function() {
    tree.value = 1;
    tree.addChild(2);
    tree.children[0].addChild(3);
    expect(tree.children[0].parent).to.equal(tree);
    expect(tree.children[0].children[0].parent).to.equal(tree.children[0]);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should remove parent property when "removeFromParent" is called', function() {
    tree.value = 1;
    tree.addChild(2);
    var child = tree.children[0];
    expect(tree.children[0].parent).to.equal(tree);
    tree.children[0].removeFromParent();
    expect(child.parent).to.equal(null);
  });

  it('should return the child when "removeFromParent" is called', function() {
    tree.value = 1;
    tree.addChild(2);
    var child = tree.children[0];
    expect(tree.children[0].removeFromParent()).to.equal(child);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should execute callback on all nodes when traverse is called', function() {
    var array = [];
    tree.value = 1;
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.traverse(function(node) {
      array.push(node.value);
    });
    expect(array).to.deep.equal([1, 2, 4, 3]);
  });

});
