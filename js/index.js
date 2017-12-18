
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
      $('#load').on('mousewheel touchmove', function(e) {
      e.preventDefault();
});
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
       
      },2000);
    
    
    //Animation For Download Page//
    setTimeout(function(){
    $('.logo-wali').hide().fadeIn(500);
    $('.tag-line').hide();
    $('#playstore').hide()
    $('.tag-line').fadeIn({duration:1000,queue:false}).animate({
      "marginTop":"9%"
    },{duration:1000, queue:false});
      $('#playstore').fadeIn({duration:1000,queue:false})
 //End of Animations for download Page//
      
      
     
      }, 2000);
  }
}



//CODE ADDED BY ANSHUL STARTS HERE
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
var submit = document.getElementById('submit_button');

submit.addEventListener('click',function(event){
    console.log("triggered");
    
    
    var database = firebase.database().ref().child("Feedback").push();
    var email = $('#enter_email').val();
    var subject = $('#enter_subject').val();
    var message = $('#enter_text').val();
    console.log(subject);
    if(!validateEmail(email))
        alert("Please enter a valid email address!");
    else if(subject =="")
        alert("Please enter a subject!");
    else if(message=="")
        alert("Please enter a message to send!")
    else{
    database.set({Email: email, Subject: subject, Message: message}).then(function(){
        console.log('Feedback received');
  })
  .catch(function(error) {
    console.log('Feedback failed');
    });
    }
});

//CODE ADDED BY ANSHUL ENDS HERE
$("#features_a").click(function() {
    $('html, body').animate({
        scrollTop: $("#features").offset().top-80
    }, 1000);
});
$("#download_a").click(function() {
    $('html, body').animate({
        scrollTop: $("#download").offset().top
    }, 1000);
});

$("#contact_a").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top-80
    }, 1000);
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-bar") {
        x.className += " responsive";
    } else {
        x.className = "top-bar";
    }
}



$(document).ready(function(){
  $('.top-bar').hide()
});


 $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 150) {
                $('.top-bar').slideDown(400);
            } else {
                $('.top-bar').slideUp(400);
            }
        });
    });

/* Animations to Download Page */


// var slideIndex = 0;
// showSlides();
// var slides,dots;

// function showSlides() {
//     var i;
//     slides = document.getElementsByClassName("mySlides");
//     dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex> slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 8000); // Change image every 8 seconds
// }

// function plusSlides(position) {
//     slideIndex +=position;
//     if (slideIndex> slides.length) {slideIndex = 1}
//     else if(slideIndex<1){slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//         slides[slideIndex-1].style.display = "block";  
//         dots[slideIndex-1].className += " active";
//     }
// }

// function currentSlide(index) {
//     if (index> slides.length) {index = 1}
//     else if(index<1){index = slides.length}
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//         slides[index-1].style.display = "block";  
//         dots[index-1].className += " active";
//     }
// }


// // $(document).ready(function(){
// //   // Add smooth scrolling to all links
// //   $("a").on('click', function(event) {

// //     // Make sure this.hash has a value before overriding default behavior
// //     if (this.hash !== "") {
// //       // Prevent default anchor click behavior
// //       event.preventDefault();

// //       // Store hash
// //       var hash = this.hash;

// //       // Using jQuery's animate() method to add smooth page scroll
// //       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
// //       $('html, body').animate({
// //         scrollTop: $(hash).offset().top
// //       }, 1000, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

//Animation feature section//

$(".heading").css('opacity',0);
$(".heading").waypoint(function(){
  $(".heading").animate({opacity:1},500)
},{offset:480});
// Hiding all features of feature 1 and 3//
$(".screenshot").css('opacity',0);
$(".bullets").css('opacity',0);
$(".feature1_heading").css('opacity',0);
$(".bullet_text").css('opacity',0);
//Animating Feature 1 and 3//
$(".screenshot").waypoint(function(){ 
$(this).animate({opacity:1},{duration:500,queue:false})
  },{offset:400});

//$(".screenshot").waypoint(function(){ 
//$(this).animate({"marginLeft":"0px"},{duration:500,queue:false})
//  },{offset:400});


$(".bullets").waypoint(function(){ 
$(this).animate({opacity:1},{duration:700,queue:false})
  },{offset:450});

$(".bullet_text").waypoint(function(){ 
$(this).animate({opacity:1},{duration:700,queue:false})
  },{offset:550});

$(".feature1_heading").waypoint(function(){ 
$(this).animate({opacity:1},{duration:700,queue:false})
  },{offset:450});

//Hiding all features of feature 2 and 4//

$(".screenshot2").css('opacity',0);
$(".bullet2").css('opacity',0);
$(".feature2_heading").css('opacity',0);
$(".bullet_text2").css('opacity',0);

//Animating Feature 2 and 4//

$(".screenshot2").waypoint(function(){ 
$(this).animate({opacity:1},{duration:500,queue:false})
  },{offset:400});

//$(".screenshot2").waypoint(function(){ 
//$(this).animate({"marginLeft":"0px"},{duration:500,queue:false})
//  },{offset:400});

$(".bullet2").waypoint(function(){ 
$(this).animate({opacity:1},{duration:700,queue:false})
  },{offset:450});

$(".bullet_text2").waypoint(function(){ 
$(this).animate({opacity:1},{duration:700,queue:false})
  },{offset:550});
$(".feature2_heading").waypoint(function(){ 
$(this).animate({opacity:1},{duration:700,queue:false})
  },{offset:450});


$("#bottom").waypoint(function(){ 
$(this).animate({opacity:1},{duration:700,queue:false})
  },{offset:450});

//Hiding Contact Section//

$("#enter_email").animate({opacity:0});
$("#enter_subject").animate({opacity:0});
$("#enter_text").animate({opacity:0});
$("#submit_button").animate({opacity:0})

//Animating Contact Section//

$("#contact").waypoint(function(){
  $("#enter_email").animate({opacity:1},{duration:1000,queue:false})
  $("#enter_email").animate({
    "marginTop":"-30px"
  },{duration:700,queue:false})
  
},{offset:300});

$("#contact").waypoint(function(){
  $("#enter_subject").animate({opacity:1},{duration:1000,queue:false})
  $("#enter_subject").animate({
    "marginTop":"0px"
  },{duration:700,queue:false})
  
},{offset:300});
$("#contact").waypoint(function(){
  $("#enter_text").animate({opacity:1},{duration:1000,queue:false})
  $("#enter_text").animate({
    "marginTop":"0px"
  },{duration:700,queue:false})
  
},{offset:300});
$("#contact").waypoint(function(){
  $("#submit_button").animate({opacity:1},{duration:1000})
});

// Fade In/Out addNgo button //
$(document).ready(function() {
  
        $(window).scroll(function() {
//get the height of your menu
          var menuHeight = $('#addNgo').height(); 
          
          //get offset from top and bottom
          var top = $(this).scrollTop();
          var bottom = $(document).height() - $(this).height() - $(this).scrollTop();
            
          //check to see if we are at the top, bottom, or in between
          if (top < menuHeight) {
              //at top set classes to show menu at top
              $('#addNgo').removeClass( 'bottom' );
              $('#addNgo').addClass( 'top' );
            
              // use `show()` to show the div imediately
              //$('#hi').show();
            
              //or use `fadeIn()` to fade the div in gradually
              //The strings 'fast' and 'slow' can be supplied to 
              //indicate durations of 200 and 600 milliseconds, respectively
              $('#addNgo').fadeIn( 'slow' );
          } 
          else if (bottom < menuHeight) {
              //at bottom set classes to show menu at bottom
              $('#addNgo').removeClass( 'top' );
              $('#addNgo').addClass( 'bottom' );
              
              //$('#hi').show();
              $('#addNgo').fadeIn( 'slow' );
          }
          else {
              //somewhere in between, hide menu
              //$('#hi').hide();
              $('#addNgo').fadeOut( 'slow' );
          }

          
        });
  
});

//Showing addNgo on hovering floating dock//
$(document).ready(function(){
$("#floatingDock").mouseover(function(){
  $("#addNgo").fadeIn();  
});  
});

$(document).ready(function() {
    $("#myModal").modal();
  });

var email;
    var password;
    $("#loading").hide();

function login(){
    
         
   
//      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//
//    if (!filter.test(email)) {
//    alert('Please provide a valid email address');
//    email.focus;
// }
    
    $("#login").fadeOut(function(){
        ActualLogin();
     });
   //////

        
  // Handle Errors here.
//  var errorCode = error.code;
//  var errorMessage = error.message;
//         
////        $("#login").fadeOut(function(){
////    $("#loading").fadeIn(function(){
//        
//    
//  if (errorCode === 'auth/wrong-password') {
//    alert(errorMessage);
//  } 
//        else if (errorCode === 'auth/account-exists-with-different-credential') {
//    alert(errorMessage);
//  } 
//        else if (errorCode === 'auth/invalid-credential') {
//    alert(errorMessage);
//  } 
//        else if (errorCode === 'auth/operation-not-allowed') {
//    alert(errorMessage);
//  } 
//        else if (errorCode === 'auth/user-disabled') {
//    alert(errorMessage);
//  } 
//        else if (errorCode === 'auth/user-not-found') {
//    alert(errorMessage);
//  } 
//        else if (errorCode === 'auth/invalid-verification-code') {
//    alert(errorMessage);
//  } 
//        else if (errorCode === 'auth/invalid-verification-id') {
//    alert(errorMessage);
//  } 
//        else if(errorCode === "auth/invalid-email"){
////            $("#login").hide();
//            alert(errorMessage);
////            $("#loading").fadeIn();
//        }
        
//        else {
////       window.location.href = "signin.html";
//             $("#login-button").fadeOut();
//  }
//       
//  console.log(error);
//            });
//     });
        
//       $("#loading").fadeOut(function(){
//           $('#login').fadeIn();
//       });    

//});
    

     }

function ActualLogin(){ 
            $("#loading").fadeIn(function(){
                                 
    email=document.getElementById("formUsername").value;
//    window.alert(email);
  //  window.location.href ="signin.html" ;
    password=document.getElementById("formPassword").value;
    ////
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
         var childData;
       var can_post;
            var user = result.user;
                var ref = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).child("userInfo");
        return ref.on('value',function(snapshot) {
//            console.log("hdkjhdkdcd" + snapshot);
            snapshot.forEach(function(childSnapshot) {
       childData = childSnapshot.key;
                console.log(childData); 
                if(childData == "canPost"){
                     can_post = childSnapshot.val();
//                    console.log(can_post);
                }
                    });
//  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
  // ...
//            console.log("isko kya hua");
            if(can_post == true){
                
            window.location.href = "signin.html";
                }
            else{
                alert("You are not allowed to post news");
            }
});
    
  
    }).catch(function(error) {
    var errorCode = error.code;
  var errorMessage = error.message;
         
//        $("#login").fadeOut(function(){
//    $("#loading").fadeIn(function(){
        
    
  if (errorCode === 'auth/wrong-password') {
    alert(errorMessage);
  } 
        else if (errorCode === 'auth/account-exists-with-different-credential') {
    alert(errorMessage);
  } 
        else if (errorCode === 'auth/invalid-credential') {
    alert(errorMessage);
  } 
        else if (errorCode === 'auth/operation-not-allowed') {
    alert(errorMessage);
  } 
        else if (errorCode === 'auth/user-disabled') {
    alert(errorMessage);
  } 
        else if (errorCode === 'auth/user-not-found') {
    alert(errorMessage);
  } 
        else if (errorCode === 'auth/invalid-verification-code') {
    alert(errorMessage);
  } 
        else if (errorCode === 'auth/invalid-verification-id') {
    alert(errorMessage);
  } 
        else if(errorCode === "auth/invalid-email"){
//            $("#login").hide();
            alert(errorMessage);
//            $("#loading").fadeIn();
        }
        
        $("#loading").fadeOut(function(){
    $("#login").fadeIn();
     });
    

    });
                                 });

     
}
             

function onEnter(){
 if(event.keyCode == 13){ 
     
   login();
 
   }
   
}

//    var email;
//    var password;
function onSubmit() {
    
    login();
 
   }

function forgotPassword(){
    window.location.href = "forgotPassword.html";
}

//$("#test").submit(function(e) {
//    e.preventDefault();
//});
//function feedback(){
//
//}