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
  var name = $('#movie-name').val();
  var director = $('#director').val();
  var date = $('#release-date').val();
  var ticket = $('#ticket').val();

  if (name !== "" && director !== "" && date !== "" && ticket !== "") {
    movieDataRef.push({ name: name, director: director, release_date: date, ticket: ticket});
  } else {
    alert('Please complete this form!');
  }
});

movieDataRef.on('child_added', function(snapshot) {
   var name = snapshot.val().name;
   var director = snapshot.val().director;
   var date = snapshot.val().release_date;
   var ticket = snapshot.val().ticket;
   var movieRow = $("<tr>").appendTo('.movie-table');
   $("<td>").addClass('column1').html(name).appendTo(movieRow);
   $("<td>").html(date).appendTo(movieRow);
   $("<td>").html(director).appendTo(movieRow);
   var buyTicket = $("<td>").addClass('center-icon').appendTo(movieRow);
   $("<button>").addClass('ticket-btn').html('<i class="fa fa-ticket fa-2x"></i><span>' +  ticket + '</span> Left').appendTo(buyTicket);
});


/*
<tr>
  <td class="column1">Deadpool</td>
  <td>February 12, 2016</td>
  <td>Tim Miller</td>
  <td class="center-icon">
  <button class="ticket-btn">
  <i class="fa fa-ticket fa-2x"></i><span id="deadpool">10</span> Left
  </button>
  </td>
</tr>
*/