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

let firstClassTicket = document.getElementById('first-class');
let economyClassTicket = document.getElementById('economy-class');

function calculate() {
  const total = firstClassTicket.value * 150 + economyClassTicket.value * 100;
  document.getElementById('sub-total').innerText = total;
  document.getElementById('vat').innerText = '$' + total * 0.1;
  document.getElementById('total').innerText = '$' + (total + total * 0.1);
}
function booking() {
  if (firstClassTicket.value === '0' && economyClassTicket.value === '0') {
    alert('You do not buy any ticket');
  } else {
    document.getElementById('booking-section').style.display = 'none';
    document.getElementById('showMessage').style.display = 'block';
  }
}
