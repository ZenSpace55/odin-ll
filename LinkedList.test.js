const linkedList = require('./LinkedList')

const myList = linkedList();
myList.prepend(5);
myList.prepend(3);
myList.prepend(8);
myList.prepend(2);
myList.pop();
test('link', () =>{
    expect(myList.getSize()).toBe(3)
})

test('index', () =>{
    expect(myList.at(2)).toBe(3)
})

test('string', () =>{
    expect(myList.toString()).toBe("2 -> 8 -> 3 -> null")
})