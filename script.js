//create firebase reference
var dbRef = new Firebase("https://ng-fire-try.firebaseio.com/");
var contactsRef = dbRef.child('contacts')


//load all contacts
contactsRef.on("child_added", function(snap) {
  snap.forEach(function(childSnapshot) {
      var key = childSnapshot.key();
      var childData = childSnapshot.val();

  //create divs from database-elements
  var card = document.createElement('div');
  card.setAttribute('class', 'linkprev');
  card.setAttribute('id', 'all');
  $('#content-list').prepend($(card));
  
  var cardtitle = document.createElement('div');
  cardtitle.setAttribute('class', 'cardtitle');
  cardtitle.innerHTML = childData;
  card.appendChild(cardtitle);
  
 var y =  document.getElementsByClassName("linkprev")
for( var i = 0; i < y.length; i++){
 document.guteUrls.execute('')};

  });
});

  
//change value of element with ID "filter" - checkbox
function check() {
  document.getElementById("filter").checked = true;
}

function uncheck() {
  document.getElementById("filter").checked = false;
}

//save contact
  //save in database contacts
document.querySelector(".addValue").addEventListener("click", function( event ) {  
  event.preventDefault();
  if( document.querySelector('#url').value != '' && document.querySelector('#url').value.charAt(0) == "h" && document.querySelector('#url').value.charAt(3) == "p" && document.querySelector('#f1').checked == true){
    contactsRef.push({
        name: document.querySelector('#url').value,})
      contactForm.reset();}

  else {
    alert('Oops, seems like an error with the url-format. Just paste in from your browser with the "http" or "https"');
  }
}, false);