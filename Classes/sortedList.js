class SortedList {
    constructor() {
        this.list = [];
    }

    add(item) {
        this.list.push(item);
        this.list.sort((a,b) => a - b);
    }

    remove(item) {
        const index = this.list.indexOf(item);
        if (index !== -1) {
            this.list.splice(index, 1);
        } else {
            throw new Error('Item with invalid index');
        }
    }

    size() {
        return this.list.length;
    }

    getValue(index) {
        if(index >=0 && index < this.list.length) {
            return this.list[index];
        } else {
            throw new Error('Invalid index');
        }
    }
}

let list1 = new SortedList;

list1.add(1);
list1.add(23);
list1.add(16);
list1.add(6);
let size = list1.size();
console.log(size);
console.log(list1.getValue(1));
list1.add(12);
console.log(list1);
list1.remove(16);
console.log(list1);
console.log(list1.getValue(3));
console.log(list1.getValue(4));