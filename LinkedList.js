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
            if (head){
                newNode.nextNode = head;
                if (!tail){
                    tail = head;
                }
            }
            head = newNode;
            size++;
        },
        at(index){
            if (index < 0 || index >= size){
                return -1;
            }
            newNode = head;
            for (let i = 0; i < index; i++){
                newNode = newNode.nextNode;
            }
            return newNode.value;
        },
        pop(){
            if (tail && head){
                newNode = head;
                for (let i = 0; i < size; i++){
                    if (newNode.nextNode == tail){
                        newNode.nextNode = null;
                        tail = newNode;
                        size--;
                        return;
                    }
                    newNode = newNode.nextNode;
                }
            }
            else if (head){
                head = null;
            }
        },
        contains(val){
            if (head){
                newNode = head;
                for (let i = 0; i < size; i++){
                    if (newNode.value == val){
                        return true;
                    }
                    newNode = newNode.nextNode;
                }
            }
            return false;
        },
        find(val){
            if (head){
                newNode = head;
                for (let i = 0; i < size; i++){
                    if (newNode.value == val){
                        return i;
                    }
                    newNode = newNode.nextNode;
                }
            }
            return null;
        },
        toString(){
            let myString = "";
            if (head){
                newNode = head;
                console.log("value: " + newNode.value);
                for (let i = 0; i < size; i++){
                    myString += newNode.value + " -> ";
                    newNode = newNode.nextNode;
                }
            }
            myString += "null";
            return myString;
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