function ticketSolder(tickets, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    } 

    let result = [];

    tickets.map((element) => {
        let [destination, price, status] = element.split(' | ');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    })

    return result.sort((a,b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare([b[sorting]]);
        }
    })
}

console.log(ticketSolder (['Sofia | 50 | available', 'London | 130 | available', 'Berlin | 99 | sold',
'Paris | 89.8 | available]'], 'price'));