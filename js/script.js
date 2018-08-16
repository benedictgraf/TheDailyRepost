//Change forLoops to for of
//Hide loader when site is loaded
$(window).on('load', hideLoader = () => {
  console.log("loaded");
  $('#loader-wrapper').delay(1000).fadeOut("slow")});

let invRef = database.ref('innovation');
let desRef = database.ref('design');
let tecRef = database.ref('tech');
let worRef = database.ref('work');
let ref = [invRef, desRef, tecRef, worRef];
for(let j = 0; j < ref.length; j++)

ref[j].limitToLast(20).on('value', funcSnap = (snap) => {
  snap.forEach(funcSnapEach = (snapshot) => {
  childDataLink = snapshot.val().link;
  card = document.createElement('a');
    card.setAttribute('class', 'linkprev');
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-easing','ease-in-back');
    //card.setAttribute('href', this.val  );
    console.log(snapshot.val());


  $('#content').prepend($(card));
  postLink = document.createElement('div');
    postLink.setAttribute('class', 'postLink');
    postLink.innerHTML = childDataLink;
  card.appendChild(postLink);

  childDataTags = snapshot.val().tags;
  postTags = document.createElement('div');
  postTags.setAttribute('class', 'postTags');
  postTags.innerHTML = childDataTags;
card.appendChild(postTags);
});

  $(document).ready(funcLinkPrev = () => {
    document.guteUrls.execute('linkprev');
  })
});

let txtEmail = document.querySelector('#txtEmail');
let txtPassword = document.querySelector('#txtPassword');
let btnLogin = document.querySelector('#btnlogin');
let btnLogout = document.querySelector('#btnlogout');
let btnSignUp = document.querySelector('#btnsignup');

  //Add log-in event
  btnLogin.addEventListener('click', e => {
  let email = txtEmail.value;
  let pass = txtPassword.value;
  let auth = firebase.auth();
  let promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e = console.log('log-in user'));
});

  //Add sign-up event
  btnSignUp.addEventListener('click', e=> {
  let email = txtEmail.value;
  let pass = txtPassword.value;
  let auth = firebase.auth();
  let promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e = console.log('creating user')); 
  });

  //Add realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){console.log('Auth State Changed');
        //Following is fucking crappy -> change!
    btnLogout.style.removeProperty('display:none');
    $('.show').attr("style", "display:block;");
    $('#btnlogout').attr("style", "display:block;"); 
    $('#authfield').attr("style", "display:none;");
    $('#content').removeClass('inactiveLink')  
  }
    else{console.log('not logged in/Auth State Changed');    
  } 
  });
  //Add log-out event
  btnLogout.addEventListener('click', e=>{
    firebase.auth().signOut();
        //Following is fucking crappy -> change!
    $('.show').attr("style", "display:none;");
    $('#authfield').attr("style", "display:block;"); 
    $('#btnlogout').attr("style", "display:none;"); 
    $('#content').addClass('inactiveLink')    
  });

function funcShow(_btn) {
  let ov = $("#Overlay");
  let pos = $(_btn).offset();
  let doc = $(document);
  ov.css({
    top: pos.left + 'px',
    width: 0,
    height: 0
  })
    .show()
    $("#content").animate({top: '35%'});
}

funcClose = () => {
  $("#Overlay").hide("fast");$(".show").show(900) && $("#content").animate({top: '25%'});}
funcHide = () => {if($("#Overlay")){$(".show").hide("fast")}}

let buttonPressed = function (event) {event.preventDefault()};

//url validation from inputfield using Regex
let valpattern = new RegExp('^(http|https)://' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
let valselect = document.querySelector('url');
//let val = valpattern.test(valselect.value);

//mail validation from inputfield using Regex
let mailpattern = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
let mailvalselect = document.getElementById('txtEmail');
let mailval = mailpattern.test(mailvalselect.value); 

$(".cardtitle").click(console.log(this));

//tags & tag-editor
//Create spans by adding tags and get the values of all spans & tag-editor
$("#button").click(function(){
  $(".tagval").each(function(){
    tagValue = $(this).text();
    console.log("tagValue is:" + tagValue);
  });
});

//Try to get all values (not just the last tag-value entered)
tagValueAll =  $(".tagval").each(function(){
  tagValue = $(this).text()});

//$("#button").click(function(){
//  console.log("getTagValue: " + getTagVal);});

//push data to specific location in firebase
var push = function(j){j.push({link: document.querySelector('#url').value, tags: tagValue})
};

for(var y = 0; y < 5; y++) {
  $(".f" + y).click(function(id) {
    return function() {
      var dtcBtn = (id); 
      $("#button").click(console.log(dtcBtn));
      function push(Ref){Ref.push({link: document.querySelector('#url').value, tags: tagValue})
      contactForm.reset() + $('#tags').importTags('') + funcClose();}
      if(dtcBtn === 1){push(invRef)}
      else if(dtcBtn === 2){push(desRef)}
      else if(dtcBtn === 3){push(tecRef)}
      else if(dtcBtn === 4){push(worRef)};
     };
  }(y));
}

//Animation on scroll initialization
AOS.init({
  easing: 'ease-in-out-sine'
});