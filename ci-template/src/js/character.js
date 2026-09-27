class character {
    constructor(attack) {
        this._baseAttack = attack;
        this._stoned = false;
        this._distance = 1;
    }

    get stoned() {
        return this._stoned;
    }
    
    set stoned(value) {
        this._stoned = Boolean(value);
    }

    get distance() {
        return this._distance;
    }
    
    set distance(value) {
        this._distance = value;
    }

    get attack() {
        let result = this._baseAttack * (1 - 0.1 * (this._distance - 1));
        if (this._stoned) {
            result -= Math.log2(this._distance) * 5;
        }
        return result;
    }
    set attack(value) {
        this._baseAttack = value;
    }
}

export class Magician extends character {}

export class Daemon extends character {}
