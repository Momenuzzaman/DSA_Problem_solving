class HashTable {
    constructor(size) {
        this.size = size;
        this.array = new Array(size);
    }
    hashFunction(str) {
        str += '';
        let sum = 0;
        for (let letter in str) {
            sum = sum + letter.charCodeAt();
        }
        let index = sum % this.size;
        return index;
    }
    set(value) {
        let index = this.hashFunction(value);
        let indexArray = this.array[index];
        if (!indexArray) {
            indexArray = [value];
        }
        else {
            indexArray.push(value);
        }
        this.array[index] = indexArray;

    }
    get(value) {
        let index = this.hashFunction(value);
        let indexArray = this.array[index];
        for (let item of indexArray) {
            if (item === value) return true;
        }
        return false;
    }

}

let hash = new HashTable(5);

hash.set('apple');
hash.set('banana');
hash.set('mango');
hash.set('Rafsan');
hash.set('Jakaria');
hash.set('E');
hash.set('Rijwan');

console.log(hash.array);


console.log(hash.get('apple'));
console.log(hash.get('Jakaria'));
console.log(hash.get('orange'));
console.log(hash.get('Rijwan'));
console.log(hash.get('banana'));