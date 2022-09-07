const linkedList = require('./LinkedList')

const myList = linkedList();
myList.prepend(5);
myList.prepend(3);
myList.prepend(8);
myList.prepend(2);
test('link', () =>{
    expect(myList.getSize()).toBe(4)
})

test('index', () =>{
    expect(myList.at(3)).toBe(5)
})