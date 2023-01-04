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
    remove(key) {
        delete this.map[key];
    }
}

let map = new HashMap();

map.put('name', 'Emon');
map.put('age', 24);
console.log(map.get('name'));
console.log(map.map);
map.remove('age');
console.log(map.map);