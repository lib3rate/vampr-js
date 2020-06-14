class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let currentNumberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      currentNumberOfVampires++;
    }

    let comparedNumberOfVampires = 0;
    let comparedVampire = vampire;

    while (comparedVampire.creator) {
      comparedVampire = comparedVampire.creator;
      comparedNumberOfVampires++;
    }

    if (currentNumberOfVampires > comparedNumberOfVampires) {
      return false;
    }
    return true;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    for (const child of this.offspring) {
      child.vampireWithName(name);
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let descendentsCount = 0;
    for (const child of this.offspring) {
      descendentsCount += 1;
      child.totalDescendents;
      // let childDescendantsCount = child.totalDescendents;
      // descendentsCount = descendentsCount + childDescendantsCount;
    }
    return descendentsCount;
    // for (const child of this.offspring) {
    //   let childDescendantsCount = child.totalDescendents;
    //   // descendentsCount += 1;
    //   descendentsCount = descendentsCount + childDescendantsCount;
    // }
    // return descendentsCount;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millennialVampires = [];
    if (this.yearConverted > 1980) {
      millennialVampires.push(this);
    }
    for (const child of this.offspring) {
      const millenials = child.allMillennialVampires;
      millennialVampires = millennialVampires.concat(millenials);
    }
    return millennialVampires;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

