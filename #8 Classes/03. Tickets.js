function result(data, sortingCriteria) {
  let tickets = [];
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (let i = 0; i < data.length; i++) {
    let descriptionTokens = data[i].split("|");
    let destination = descriptionTokens[0];
    let price = Number(descriptionTokens[1]).toFixed(2);
    let status = descriptionTokens[2];
    let newTicket = new Ticket(destination, price, status);
    tickets.push(newTicket);
  }

  //sorting
  let sortedTickets = tickets.sort((a, b) => {
    if (sortingCriteria === "price") {
      return a.price - b.price;
    } else {
      return a[sortingCriteria].localeCompare(b[sortingCriteria]);
    }
  });

  return sortedTickets;
}

let resultArray = result(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "status"
);
console.log(resultArray);
