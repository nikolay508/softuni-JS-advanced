function result(arr, criteria){
    let finalArr = [];

    class Ticket{
        constructor(a, b, c) {
            this.destination = a; this.price = b; this.status = c;
        }
    }

    for (const each of arr) {
        let [name, price, status] = each.split('|');
        let eachTicket = new Ticket(name, Number(price), status);
        finalArr.push(eachTicket)
    }

    let sorted = []
    if(criteria === 'destination'){
        sorted = finalArr.sort((a, b) => {return (a.destination).localeCompare(b.destination)})
    }else if(criteria === 'status'){
        sorted = finalArr.sort((a, b) => {return (a.status).localeCompare(b.status)})
    }else if(criteria === 'price'){
        sorted = finalArr.sort((a, b) => {return (a.price) - (b.price)})
    }
    return sorted;
}
