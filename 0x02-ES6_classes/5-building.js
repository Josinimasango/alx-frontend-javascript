export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate abstract class');
    }
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method evacuationWarningMessage
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
