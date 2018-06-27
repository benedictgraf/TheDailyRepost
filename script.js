//create firebase reference
var dbRef = new Firebase("https://ng-fire-try.firebaseio.com/");
var contactsRef = dbRef.child('contacts');

//load all contacts (limited to last 20 items)
contactsRef.limitToLast(5).on("child_added", function(snap) {
  snap.forEach(function(childSnapshot) {
  var key = childSnapshot.key();
  var childData = childSnapshot.val();

  //create divs from database-elements
  var card = document.createElement('div');
  card.setAttribute('class', 'linkprev');
  $('#content').prepend($(card));
  
  var cardtitle = document.createElement('div');
  cardtitle.setAttribute('class', 'cardtitle');
  cardtitle.innerHTML = childData;
  card.appendChild(cardtitle);
  });
  $(document).ready(function(){
  document.guteUrls.execute('linkprev');
});
});

function funcShow(_btn) {
  var ov = $("#Overlay");
  var pos = $(_btn).offset();
  var doc = $(document);
  ov.css({
  left: pos.left + 'px',
  top: pos.top + 'px',
  width: 0,
  height: 0})
  .show()
  .animate({
  left: 0,
  top: 0,
  width: '50%',
  height: '100%'}, 1000);
}

function funcClose() {$("#Overlay").hide("slow");}


//save contact
  //save in database contacts
  var elements = $('.f');
  //console.log(elements);
  
  var buttonPressed = function( event ) {  
    event.preventDefault();
      
    //url validation from inputfield using Regex
    var valpattern = new RegExp('^(http|https)://'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    var valselect = document.getElementById('url');
    var val = valpattern.test(valselect.value);
    
    //save in database contacts
    if(val && document.querySelector(".f1")){contactsRef.push({name: document.querySelector('#url').value,})
      contactForm.reset();}
    else if(val && document.querySelector(".f2")){contactsRef.push({name: document.querySelector('#url').value,})
      contactForm.reset();}
    else if(val && document.querySelector(".f3")){contactsRef.push({name: document.querySelector('#url').value,})
      contactForm.reset();}
    else if(val && document.querySelector(".f4")){contactsRef.push({name: document.querySelector('#url').value,})
      contactForm.reset();}
    else {
    alert('Oops');}
};

for (var i = 0; i < elements.length; i++) {elements[i].addEventListener("click", buttonPressed, false);}