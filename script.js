
//create firebase reference
var dbRef = new Firebase("https://ng-fire-try.firebaseio.com/");
var invRef = dbRef.child('innovation');
var desRef = dbRef.child('design');
var tecRef = dbRef.child('tech');
var worRef = dbRef.child('work');

/*invRef.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("name: " + newPost.name);
  console.log("mail: " + newPost.mail);
});
*/
//Auth
//get elements
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnlogin = document.getElementById('btnlogin');
var btnsignin = document.getElementById('btnsignin');
var btnlogout = document.getElementById('btnlogout');

btnlogin.addEventListener("click", e => {
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();
  //signin
  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
});




//load all contacts (limited to last 20 items)
var allRef = [invRef, desRef, tecRef, worRef];

for(var j = 0; j < allRef.length; j++)

allRef[j].limitToLast(20).on("child_added", function (snap) {
    snap.forEach(function (childSnapshot) {
    var key = childSnapshot.key();
    var childData = childSnapshot.val();
    //console.log(childData);
    //var y = key['mail'];
    //console.log(y);
    //create divs from database-elements
    var card = document.createElement('div');
    card.setAttribute('class', 'linkprev');
    $('#content').prepend($(card));

    var cardtitle = document.createElement('div');
    cardtitle.setAttribute('class', 'cardtitle');
    cardtitle.innerHTML = childData;
    card.appendChild(cardtitle);
  });
 // $(document).ready(function () {
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
    height: 0
  })
    .show()
    .animate({
      
      left: 0,
      top: 100,
      width: '100%',
      height: '200%'
    }, 500);
}

function funcClose() { $("#Overlay").hide("slow");$(".show").show(2000);}
//$(".show").show("fast");
function funcHide() {if($("#Overlay")){$(".show").hide("fast");}}

//save contact
//save in database contacts
var elements = $('.f');
//console.log(elements);

var buttonPressed = function (event) {
  event.preventDefault();
}


//url validation from inputfield using Regex
var valpattern = new RegExp('^(http|https)://' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
var valselect = document.getElementById('url');
var val = valpattern.test(valselect.value);

//mail validation from inputfield using Regex
var mailpattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
var mailvalselect = document.getElementById('mail');
var mailval = mailpattern.test(mailvalselect.value); 

function add() {
  var val = valpattern.test(valselect.value) && mailpattern.test(mailvalselect.value);
  //save in database contacts
  if (buttonPressed && val && document.querySelector(".f1")) {
    invRef.push({name: document.querySelector('#url').value, mail: document.querySelector('#mail').value})
    contactForm.reset() + funcClose();
  }
  else {
    alert('Oops, please enter the whole url and your e-mail.');
  }
};

function add2() {
  var val = valpattern.test(valselect.value);
  //save in database contacts
  if (buttonPressed && val && document.querySelector(".f2")) {
    desRef.push({name: document.querySelector('#url').value, mail: document.querySelector('#mail').value})
    contactForm.reset() + funcClose();
  }
  else {
    alert('Oops, please enter the whole url and your e-mail.');
  }
};

function add3() {
  var val = valpattern.test(valselect.value);
  //save in database contacts
  if (buttonPressed && val && document.querySelector(".f3")) {
    tecRef.push({name: document.querySelector('#url').value, mail: document.querySelector('#mail').value})
    contactForm.reset() + funcClose();
  }
  else {
    alert('Oops please enter the whole url and your e-mail.');
  }
};

function add4() {
  var val = valpattern.test(valselect.value);
  //save in database contacts
  if (buttonPressed && val && document.querySelector(".f4")) {
    worRef.push({name: document.querySelector('#url').value, mail: document.querySelector('#mail').value})
    contactForm.reset() + funcClose();
  }
  else {
    alert('Oops, please enter the whole url and your e-mail.');
  }
};

for (var i = 0; i < elements.length; i++) { elements[i].addEventListener("click", buttonPressed, false); }