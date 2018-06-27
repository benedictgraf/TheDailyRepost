var invRef = database.ref('innovation');
var desRef = database.ref('design');
var tecRef = database.ref('tech');
var worRef = database.ref('work');

var ref = [invRef, desRef, tecRef, worRef];
for(var j = 0; j < ref.length; j++)

ref[j].limitToLast(20).on('child_added', function(snap) {
  //console.log(snapshot.val());
snap.forEach(function (childSnapshot) {
  var childData = childSnapshot.val();
  var card = document.createElement('div');
  card.setAttribute('class', 'linkprev');
  card.setAttribute('data-aos', 'fade-up');
  $('#content').prepend($(card));

  var cardtitle = document.createElement('div');
  cardtitle.setAttribute('class', 'cardtitle');
  cardtitle.innerHTML = childData;
  card.appendChild(cardtitle);

  });
  $(document).ready(function () {
    document.guteUrls.execute('linkprev');
  });
});

var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnlogin');
var btnLogout = document.getElementById('btnlogout');
var btnSignUp = document.getElementById('btnsignup');

btnLogin.addEventListener('click', e => {
  //get email and pass
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();
  //log-in
  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e = console.log('log-in user'));
});

  //Add sign-up event
  btnSignUp.addEventListener('click', e=> {
    //get email and pass
    //TODO: Validate E-Mail
  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();
  //log-in
  var promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e = console.log('creating user')); 
  });

  //Add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){console.log('Auth State Changed');
    btnLogout.style.removeProperty('display:none');
    $('.btnLogout').attr("style", "display:normal;");
    }
    else{console.log('not logged in/Auth State Changed');    
  }
  });

  btnLogout.addEventListener('click', e=>{
    firebase.auth().signOut();
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
  var val = valpattern.test(valselect.value) && mailpattern.test(mailvalselect.value);
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

//Animation on scroll initialization
AOS.init({
  easing: 'ease-in-out-sine'
});
