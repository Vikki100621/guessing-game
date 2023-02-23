class GuessingGame {
    constructor() {
        this.start = null;
        this.end = null;
        this.middle = null;
    }

    setRange(min, max) {
        this.start = min;
        this.end = max;
    }

    guess() {
        this.middle = Math.round((this.start + this.end) / 2);
        return this.middle;
    }

    lower() {
        this.end = this.middle;
    }

    greater() {
        this.start = this.middle;
    }
}
module.exports = GuessingGame;
