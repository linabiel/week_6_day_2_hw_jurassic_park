const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

assert.deepStrictEqual = function (findSpecies, param2) {
  
}
describe('Park', function() {
  let park;
  let velociraptor1;
  let velociraptor2;
  let velociraptor3;
  let diplodocus1;
  let diplodocus2;
  let brontosaurus1;
  let brontosaurus2;

  beforeEach(function () {
    park = new Park('Jurassic Park', 30);
    velociraptor1 = new Dinosaur('Velociraptor', 'carnivore', 15)
    velociraptor2 = new Dinosaur('Velociraptor', 'carnivore', 25)
    velociraptor3 = new Dinosaur('Velociraptor', 'carnivore', 45)
    diplodocus1 = new Dinosaur('Diplodocus', 'herbivore', 50)
    diplodocus2 = new Dinosaur('Diplodocus', 'herbivore', 20)
    brontosaurus1 = new Dinosaur('Brontosaurus', 'herbivore', 10)
    brontosaurus2 = new Dinosaur('Brontosaurus', 'herbivore', 5)
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });
  it('should have a ticket price', function () {
    const actual = park.price;
    assert.strictEqual(actual, 30)
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual([], actual);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.add(velociraptor1)
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [velociraptor1])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.remove(velociraptor1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, park.dinosaurs);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(velociraptor3);
    assert.deepStrictEqual(park.mostPopularDinosaur(), velociraptor3);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(velociraptor3);
    park.add(diplodocus1);
    park.add(diplodocus2);
    park.add(brontosaurus1);
    park.add(brontosaurus2);
    assert.deepStrictEqual(park.findSpecies('brontosaurus'), [brontosaurus1, brontosaurus2]);

  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(velociraptor3);
    park.add(diplodocus1);
    park.add(diplodocus2);
    park.add(brontosaurus1);
    park.add(brontosaurus2);
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 170);
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(velociraptor3);
    park.add(diplodocus1);
    park.add(diplodocus2);
    park.add(brontosaurus1);
    park.add(brontosaurus2);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 62050);
  });

  it('should be able to calculate total revenue for one year', function () {
    park.add(velociraptor1);
    park.add(velociraptor2);
    park.add(velociraptor3);
    park.add(diplodocus1);
    park.add(diplodocus2);
    park.add(brontosaurus1);
    park.add(brontosaurus2);
    const actual = park.revenuePerYear();
    assert.strictEqual(actual, 1861500);
  });



});
