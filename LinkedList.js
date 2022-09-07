const linkedList = () => {
    let size = 0;
    let head;
    let tail;

    let newNode;
    return{
        append(val){
            newNode = node(val);
            if (tail){
                tail.nextNode = newNode;
                if (!head){
                    head = tail;
                }
            }
            tail = newNode;
            size++;
        },
        prepend(val){
            newNode = node(val);
            console.log(newNode.value);
            if (head){
                newNode.nextNode = head;
                if (!tail){
                    tail = head;
                }
            }
            head = newNode;
            size++;
            console.log(size + " ll size");
        },
        at(index){
            if (index < 0 || index >= size){
                return -1;
            }
            newNode = head;
            for (let i = 0; i < index; i++){
                console.log(newNode.value + " node value");
                newNode = newNode.nextNode;
            }
            return newNode.value;
        },
        pop(){

        },
        contains(val){

        },
        find(val){

        },
        toString(){

        },
        getSize(){
            return size;
        },
        head,
        tail,

    }
}

const node = (val) => {
    let value;
    let nextNode;
    return{
        value: val,
    }

}

module.exports = linkedList, node