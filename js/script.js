//Change all var to let
//Change forLoops to for of

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
  var card = document.createElement('a');
  card.setAttribute('class', 'linkprev');
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('href', this.val  );
  //card.setAttribute('data-aos-duration', '3000');
  card.setAttribute('data-aos-easing','ease-in-back');
  //card.setAttribute('data-aos-delay','300');
  

  $('#content').prepend($(card));

  var cardtitle = document.createElement('div');
  cardtitle.setAttribute('class', 'cardtitle');
  cardtitle.innerHTML = childData;
  card.appendChild(cardtitle);

  });
 
  $(document).ready(function () {
    document.guteUrls.execute('linkprev');
  })
});

	$('a').click(function(){
    oldFrame = $('href');
    console.log(oldFrame);
		oldFrame.remove();
    newSrc = "https://www.sitepoint.com/community/t/click-link-replace-src-of-iframe-with-link-src-how/17082/5"
    console.log(newSrc);
		newFrame = $('<iframe>').attr('src',newSrc).attr('id','mess').attr('width','597').attr('height','602');
		return false;
	});

/*
$(window).ajaxComplete(function() {
  // Run code
$('body').toggleClass('loaded')});
*/
setTimeout( function(){ 
  $('body').toggleClass('loaded');
  //$(content).ajaxComplete(console.log("loaded"),$('body').toggleClass('loaded'));  
}  , 1000 );

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
    //Following is fucking crappy -> change!
    $('.show').attr("style", "display:block;");
    $('#btnlogout').attr("style", "display:block;"); 
    $('#authfield').attr("style", "display:none;");
    $('#content').removeClass('inactiveLink')
    
  }
    else{console.log('not logged in/Auth State Changed');    
  } 
  
  });

  btnLogout.addEventListener('click', e=>{
    firebase.auth().signOut();
    $('.show').attr("style", "display:none;");
    $('#authfield').attr("style", "display:block;"); 
    $('#btnlogout').attr("style", "display:none;"); 
    $('#content').addClass('inactiveLink')    
  });


function funcShow(_btn) {
  var ov = $("#Overlay");
  var pos = $(_btn).offset();
  var doc = $(document);
  ov.css({
    top: pos.left + 'px',
    width: 0,
    height: 0
  })
    .show()
    $("#content").animate({top: '35%'});
}


var iframe = document.getElementsByTagName('iframe')[0];
var url = iframe.src;
var getData = function (data) {
    if (data && data.query && data.query.results && data.query.results.resources && data.query.results.resources.content && data.query.results.resources.status == 200) loadHTML(data.query.results.resources.content);
    else if (data && data.error && data.error.description) loadHTML(data.error.description);
    else loadHTML('Error: Cannot load ' + url);
};
var loadURL = function (src) {
    url = src;
    var script = document.createElement('script');
    script.src = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.headers%20where%20url%3D%22' + encodeURIComponent(url) + '%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=getData';
    document.body.appendChild(script);
};
var loadHTML = function (html) {
    iframe.src = 'about:blank';
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(html.replace(/<head>/i, '<head><base href="' + url + '"><scr' + 'ipt>document.addEventListener("click", function(e) { if(e.target && e.target.nodeName == "A") { e.preventDefault(); parent.loadURL(e.target.href); } });</scr' + 'ipt>'));
    iframe.contentWindow.document.close();
}

loadURL(iframe.src);

function funcClose() { $("#Overlay").hide("fast");$(".show").show(900) && $("#content").animate({top: '25%'});
;}
//$(".show").show("fast");
function funcHide() {if($("#Overlay")){$(".show").hide("fast");}}

//save contact
//save in database contacts
var elements = $('.f');
//console.log(elements);

var buttonPressed = function (event) {event.preventDefault()};



//url validation from inputfield using Regex
var valpattern = new RegExp('^(http|https)://' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
var valselect = document.getElementById('url');
//var val = valpattern.test(valselect.value);


//mail validation from inputfield using Regex
var mailpattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
var mailvalselect = document.getElementById('txtEmail');
var mailval = mailpattern.test(mailvalselect.value); 

var push = function(j){j.push({name: document.querySelector('#url').value})
};

for(var y = 0; y < 5; y++) {
  $(".f"+y).click((function(id) {
     return function() {
      var dtcBtn = (id);
       
       $("#button").click(console.log(dtcBtn));

function push(Ref){Ref.push({name: document.querySelector('#url').value})
contactForm.reset() + funcClose();}

      if(dtcBtn === 1){push(invRef)}
      else if(dtcBtn === 2){push(desRef)}
      else if(dtcBtn === 3){push(tecRef)}
      else if(dtcBtn === 4){push(worRef)};

     };
  }(y)));
}


for (var i = 0; i < elements.length; i++) { elements[i].addEventListener("click", function add(i){}); }


//Animation on scroll initialization
AOS.init({
  easing: 'ease-in-out-sine'
});