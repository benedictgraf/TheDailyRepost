//create firebase reference
var dbRef = new Firebase("https://ng-fire-try.firebaseio.com/");
var contactsRef = dbRef.child('contacts');

/*
$(document).ready(function() {
  $("div").click(
    function(event) {
      event.preventDefault();
      var elementURL = $(".linkprev").find("a").attr("href");;
      console.log(elementURL);
      $.colorbox({iframe: true, href: elementURL, innerWidth: 645, innerHeight: 509});
    });
});
*/

//load all contacts (limited to last 20 items)
contactsRef.limitToLast(20).on("child_added", function(snap) {
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
/*
$(document.gute-url.onClick).colorbox({rel: 'gal', title: function(){
  var url = $(this).attr('href');
  return '<a href="' + url + '" target="_blank">Open In New Window</a>';
}});
*/

//change value of element with ID "filter" - checkbox
function check() {document.getElementById("filter").checked = true;}
function uncheck() {document.getElementById("filter").checked = false;}

//save contact
  //save in database contacts
  document.querySelector(".addValue").addEventListener("click", function( event ) {  
  event.preventDefault();
    
  //url validation from inputfield using Regex
    var valpattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  
  var valselect = document.getElementById('url');

  var val = valpattern.test(valselect.value);
  
  //save in database contacts
  if(val){
    contactsRef.push({
    name: document.querySelector('#url').value,})
    contactForm.reset();}
  /*
  //save in database contacts
  else if(document.getElementById('url').value.charAt(0) == "h" && document.getElementById('url').value.charAt(3) == "p" && document.querySelector('#f2').checked){
  contactsRef.push({
  name: document.querySelector('#url').value,})
  contactForm.reset();} 
  //save in database contacts
  else if(document.getElementById('url').value.charAt(0) == "h" && document.getElementById('url').value.charAt(3) == "p" && document.querySelector('#f3').checked){
  contactsRef.push({
  name: document.querySelector('#url').value,})
  contactForm.reset();} 
  //save in database contacts
  else if(document.getElementById('url').value.charAt(0) == "h" && document.getElementById('url').value.charAt(3) == "p" && document.querySelector('#f3').checked){
  contactsRef.push({
  name: document.querySelector('#url').value,})
  contactForm.reset();} 
  */
  else {
  alert('Oops');}
}, false);
  