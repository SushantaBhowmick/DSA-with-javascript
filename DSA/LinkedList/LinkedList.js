
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            this.head=node
        }
        this.size++
    }

    // append(value){
    //     const node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head=node;
    //     }else{
    //         let curr = this.head;
    //         let prev;
    //         while(curr){
    //             prev = curr;
    //             curr = curr.next;
    //         }
    //         prev.next = node;
    //     }
    //     this.size++
    // }

    // another way to append
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next=node;
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            return console.log("LinkedList is empty")
        }else{
            let curr = this.head;
            console.log(this.head)
            let ans = []
            while(curr){
                ans.push(curr.value)
                curr = curr.next;
            }
            console.log(ans)
        }
    }

    isEmpty(){
        return this.size===0;
    }
    getSize(){
        return this.size
    }

}

const list = new LinkedList();
list.prepend(10)
list.prepend(5)
list.prepend(20)
list.append(50)
list.append(60)
list.append(40)
list.print()
// list.print()
// console.log(list.isEmpty())
// console.log(list.getSize())