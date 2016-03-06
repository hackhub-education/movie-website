// function buyTicket(e) {
//   console.log(e);
//   var ticketNum = e.children[1].innerText;
//   if (ticketNum > 0) {
//     e.children[1].innerText--;
//   } else {
//     alert("Ticket Sold Out");
//   }
// }

var movieDataRef = new Firebase('https://hb5wnko1hrt.firebaseio-demo.com/');


$('.ticket-btn').click(function() {
  var ticketNum = $($(this).find('span')).html();
  // get number of ticket from button span
  if (ticketNum > 1) {
    $($(this).find('span')).html(ticketNum - 1);
    // set number of ticket left
  } else {
    $(this).addClass('alert-btn').html('Sold Out');
    // change text to sold out and add alert button class when ticket number equals zero
  }
});

$('#add-movie').click(function() {
  console.log("Add movie button is clicked");
  var name = "Avengers";
  var director = "Joss Whedon";
  var date = "Feb. 15, 2016";
  var ticket = 100;
  movieDataRef.push({ name: name, director: director, release_date: date, ticket: ticket});
});


