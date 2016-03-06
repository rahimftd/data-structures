describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should be able to add and remove numbers', function() {
    set.add(1);
    set.remove(1);
    set.add(2);
    expect(set.contains(1)).to.equal(false);
    expect(set.contains(2)).to.equal(true);
  });

  it('should be able to add and remove booleans', function() {
    set.add(true);
    set.remove(true);
    set.add(false);
    expect(set.contains(true)).to.equal(false);
    expect(set.contains(false)).to.equal(true);
  });

  it('should be able to add and remove objects and arrays', function() {
    set.add({ one: 1 });
    set.remove({ one: 1 });
    set.add({ two: 2 });
    set.add([1, 2, 3]);
    set.remove([1, 2, 3]);
    set.add([4, 5, 6]);
    expect(set.contains({ one: 1 })).to.equal(false);
    expect(set.contains({ two: 2 })).to.equal(true);
    expect(set.contains([1, 2, 3])).to.equal(false);
    expect(set.contains([4, 5, 6])).to.equal(true);
  });

});
