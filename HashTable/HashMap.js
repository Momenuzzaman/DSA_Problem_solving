class HashMap {
    constructor() {
        this.map = {};
    }
    put(key, value) {
        this.map[key] = value;
    }
    get(key) {
        return this.map[key];
    }
}

let map = new HashMap();

console.log(map.put('name', 'Emon'));
console.log(map.get('name'));