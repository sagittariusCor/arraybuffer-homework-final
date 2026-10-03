import { Magician, Daemon } from "../character";



describe('Magician / Daemon', () => {

    describe('тест на расстояние', () => {
    test('тест на клетке 1', () => {
        const m = new Magician(100);
        m.distance = 1;
        expect(m.attack).toBe(100);
    });

    test('тест на клетке 2', () => {
        const m = new Magician(100);
        m.distance = 2;
        expect(m.attack).toBe(90);
    });

    test('тест на клетке 3', () => {
        const m = new Magician(100);
        m.distance = 3;
        expect(m.attack).toBe(80);
    });

    test('тест на клетке 4', () => {
        const m = new Magician(100);
        m.distance = 4;
        expect(m.attack).toBe(70);
    });

    test('тест на клетке 5', () => {
        const m = new Magician(100);
        m.distance = 5;
        expect(m.attack).toBe(60);
    });
});


describe('дурман (stoned)', () => {

test('на клетке 1', () => {
    const m = new Magician(100);
    m.distance = 1;
    m.stoned = true;
    expect(m.attack).toBe(100);
});

test('на клетке 2', () => {
    const m = new Magician(100);
    m.distance = 2;
    m.stoned = true;
    expect(m.attack).toBe(85);
});

test('на клетке 3', () => {
    const m = new Magician(100);
    m.distance = 3;
    m.stoned = true;
    expect(m.attack).toBeCloseTo(72.075, 3);
});

test('на клетке 4', () => {
    const m = new Magician(100);
    m.distance = 4;
    m.stoned = true;
    expect(m.attack).toBe(60);
});

test('на клетке 5', () => {
    const m = new Magician(100);
    m.distance = 5;
    m.stoned = true;
    expect(m.attack).toBeCloseTo(48.39, 2);
});
});

describe('сеттер stoned', () => {
    test('по умолчанию stoned = false', () => {
        const m = new Magician(100);
        expect(m.stoned).toBe(false);
    });

    test('stoned = true', () => {
        const m = new Magician(100);
        m.stoned = true;
        expect(m.stoned).toBe(true);
    });

    test('обратно в false', () => {
        const m = new Magician(100);
        m.stoned = true;
        m.stoned = false;
        expect(m.stoned).toBe(false);
    });
});

describe('сеттер/геттер distance', () => {
    test('по умолчанию distance = 1', () => {
        const m = new Magician(100);
        expect(m.distance).toBe(1);
    });

    test('distance = 3', () => {
        const m = new Magician(100);
        m.distance = 3;
        expect(m.distance).toBe(3);
    });

    test('distance = 5', () => {
        const m = new Magician(100);
        m.distance = 5;
        expect(m.distance).toBe(5);
});
});

describe('сеттер/геттер attack', () => {
    test('по умолчанию attack = 100', () => {
        const m = new Magician(100);
        expect(m.attack).toBe(100);
    });

    test('attack = 50', () => {
        const m = new Magician(100);
        m.attack = 50;
        expect(m.attack).toBe(50);
    });

    test('attack = 0', () => {
        const m = new Magician(100);
        m.attack = 0;
        expect(m.attack).toBe(0);
    });
});

describe('Daemon', () => {
    test('тест на клетке 1', () => {
        const d = new Daemon(100);
        d.distance = 1;
        expect(d.attack).toBe(100);
    });

    test('тест на клетке 2', () => {
        const d = new Daemon(100);
        d.distance = 2;
        expect(d.attack).toBe(90);
    });

    test('тест на клетке 3', () => {
        const d = new Daemon(100);
        d.distance = 3;
        expect(d.attack).toBe(80);
    });

    test('тест на клетке 4', () => {
        const d = new Daemon(100);
        d.distance = 4;
        expect(d.attack).toBe(70);
    });

    test('тест на клетке 5', () => {
        const d = new Daemon(100);
        d.distance = 5;
        expect(d.attack).toBe(60);
});
    test('на клетке 4, stoned', () => {
        const d = new Daemon(100);
        d.distance = 4;
        d.stoned = true;
        expect(d.attack).toBe(60);
    });
});
});