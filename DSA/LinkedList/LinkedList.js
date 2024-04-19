
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

    deleteFrom1st(){
        this.head = this.head.next;
        this.size--
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

    deleteFromEnd(){
        if(this.isEmpty()){
            return console.log('Linked list has empty')
        }else{
            let curr = this.head;
            let prev;
            while(curr.next){
                prev = curr;
                curr=curr.next
            }
            prev.next = null
        }
        this.size--

    }

    insertAt(value,index){
        if(index<0 || index===undefined){
            return console.log('index must be a positive value')
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let count =0;
            let curr = this.head;
            let prev;
            while(count<index){
                prev = curr;
                curr = curr.next;
                count++
            }
            prev.next = node;
            node.next = curr
        }
        this.size++;
    }
    deleteAt(index){
        if(index<0 || index===undefined){
            return console.log('index must be a positive value')
        }
        if(index===0){
            this.deleteFrom1st
        }else{
            let count = 0;
            let curr = this.head;
            let prev;
            while(count<index){
                 prev = curr;
                 curr = curr.next  
                 count++
            }
            prev.next=curr.next;
        }
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
// list.deleteFrom1st()
list.append(60)
list.append(40)
list.print()
list.insertAt(2,5)
// list.deleteFromEnd()
list.deleteAt(4)
list.print()
// list.print()
// console.log(list.isEmpty())
// console.log(list.getSize())