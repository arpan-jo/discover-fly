// function for to add event
function productNumber(id, isIncrease) {
  const ticketCount = document.getElementById(id).value;
  const ticket = parseInt(ticketCount);

  if (isIncrease == true) {
    ticketNew = ticket + 1;
  }
  if (isIncrease == false && ticket > 0) {
    ticketNew = ticket - 1;
  }
  document.getElementById(id).value = ticketNew;
  calculate();
}

// calculation for ticket price
let firstClassTicket = document.getElementById('first-class');
let economyClassTicket = document.getElementById('economy-class');
function calculate() {
  const total = firstClassTicket.value * 150 + economyClassTicket.value * 100;
  document.getElementById('sub-total').innerText = total;
  document.getElementById('vat').innerText = '$' + total * 0.1;
  document.getElementById('total').innerText = '$' + (total + total * 0.1);
}

// to show box message for empty ticket buy
function booking() {
  if (firstClassTicket.value === '0' && economyClassTicket.value === '0') {
    document.getElementById('empty-ticket').style.display = 'block';
    display();
  } else {
    display();
    document.getElementById('showMessage').style.display = 'block';
    const ticketFirstclass = firstClassTicket.value;
    const ticketFirst = parseInt(ticketFirstclass);
    const ticketEconomyclass = economyClassTicket.value;
    const ticketEconomy = parseInt(ticketEconomyclass);
    const ticketNumbers = ticketFirst + ticketEconomy;
    document.getElementById('ticketNumber').innerText = ticketNumbers;
  }
}

// for display block
function display() {
  document.getElementById('footer').style.display = 'none';
  document.getElementById('booking-section').style.display = 'none';
}
