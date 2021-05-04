const  Park = function (name, price) {
    this.name = name;
    this.price = price;
    this.dinosaurs = [];
}

Park.prototype.add = function(dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.remove = function (dinosaur) {
    //deleteCount - the number of elements to be deleted
    this.dinosaurs.splice(this.dinosaurs.indexOf(dinosaur), 1);
};

Park.prototype.mostPopularDinosaur = function () {
    let mostPopular = this.dinosaurs[0];

    for (let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
            mostPopular = dinosaur;
        }
    }
    return mostPopular
};

Park.prototype.findSpecies = function (species) {
    let dinosaursOfSameSpecies = [];

    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            dinosaursOfSameSpecies.push(dinosaur);
        }
    }
    return dinosaursOfSameSpecies;
};

Park.prototype.totalVisitorsPerDay = function () {
    let total = 0;

    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
};

Park.prototype.totalVisitorsPerYear = function () {
    return this.totalVisitorsPerDay() * 365;
};

Park.prototype.revenuePerYear = function () {
    return this.totalVisitorsPerYear() * this.price;
};

