class HashTable {
    constructor(size) {
        this.size = size;
        this.arr = new Array(size).fill([]);
        console.log(this.arr);
    }
    hashFunction(str) {
        str += '';
        let sum = 0;
        for (let letter in str) {
            sum = letter.charAt();
        }
        let index = sum % this.size;
        console.log({ str, index });
        return index;
    }
    set(value) {
        let index = this.hashFunction(value);
        this.arr[index].push(value);
    }
    get(value) {
        let index = this.hashFunction(value);
        let arrayResult = this.arr[index];
        // Linear search 
        for (let item of arrayResult) {
            if (item == value) {
                console.log(item);
                return true;
            }
            return false;
        }
    }
}

let hash = new HashTable(5);
hash.set('apple');
hash.set('orange');
console.log(hash.get('apple'));
console.log(hash.get('mango'));
