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


$('body').on('click', '.ticket-btn', function() {

  var key = $(this).parent().parent().attr('id');
  console.log(key);

  var currentMovie = new Firebase('https://hb5wnko1hrt.firebaseio-demo.com/' + key);


  var ticketNum = $($(this).find('span')).html();
  // get number of ticket from button span
  var currentTicket = ticketNum - 1;
  if (currentTicket >= 0) {

    if (currentTicket > 0) {

      $($(this).find('span')).html(currentTicket);
      
      } else {

      $(this).addClass('alert-btn').html('Sold Out');
      // change text to sold out and add alert button class when ticket number equals zero
    }

    currentMovie.update({ticket: currentTicket});
    // set number of ticket left
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
   var movieRow = $("<tr>").attr('id', snapshot.key()).appendTo('.movie-table');
   $("<td>").addClass('column1').html(name).appendTo(movieRow);
   $("<td>").html(date).appendTo(movieRow);
   $("<td>").html(director).appendTo(movieRow);
   var buyTicket = $("<td>").addClass('center-icon').appendTo(movieRow);

   if (ticket > 0) {
      $("<button>").addClass('ticket-btn').html('<i class="fa fa-ticket fa-2x"></i><span>' +  ticket + '</span> Left').appendTo(buyTicket);
   } else {
      $("<p>").html('Sold Out').appendTo(buyTicket);
   }

   
});


/*
<tr id="abcdefghijk">
  <td class="column1">Deadpool</td>
  <td>February 12, 2016</td>
  <td>Tim Miller</td>
  <td class="center-icon">
  <button class="ticket-btn">
  <i class="fa fa-ticket fa-2x"></i><span id="deadpool">10</span> Left
  </button>
  </td>
</tr>

<tr id="xyzabcdefg">
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