   
$("#background").hide();
    console.log("pehle");
var file;
$("#logoPreview").hide();

//Preview Logo
        console.log("dusra");
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#logoPreview').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
            file = input.files[0];
//            console.log(file);
            $("#logoPreview").show();
            
//            var test =  $("#logoNgo").val();
//    console.log(test);
        }
    }
    
    $("#logoNgo").change(function(){
        readURL(this);
    });


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}   

var checkedValue=[];
var checkedValueState =[];
var category = {};
var state = {};
var valueName;
var searchname;
var websiteLink;
var contactPeople;
var donatePeople;
var mission;
var vision;
var email;
var logoNgo;
//
//$('.selectall').click(function() {
//    if ($(this).is(':checked')) {
//        $('.all').attr('checked', true);
//    } else {
//        $('.all').attr('checked', false);
//    }
//});
//$('.selectmAll').click(function() {
//    if ($(this).is(':selected')) {
//        $('.mAll').attr('selected', true);
//    } else {
//        $('.mAll').attr('selected', false);
//    }
//});

//$("#mcategory15").is(':selected'){
//    
//}
var mq = window.matchMedia( "(max-width: 570px)" );
if (mq.matches) {
  $("#laptopScreen1").hide();
  $("#laptopScreen2").hide();
    // window width is at less than 500px
}
else {
  $("#mobileScreenOptions1").hide();
  $("#mobileScreenQuestion1").hide();
  $("#mobileScreenQuestion2").hide();
  $("#mobileScreenOptions2").hide();
    // window width is greater than 500px
}
 $(".messageCheckbox14").hide();

$('.messageCheckbox13').click(function() {
    if ($(this).is(':checked')) {
        $(".messageCheckbox14").fadeIn();
    }
    else{
       $(".messageCheckbox14").fadeOut(); 
    }
});


 $("#loading").hide();

    function createUser(){
        
    var email=document.getElementById("formEmail").value;
//    window.alert(email);
  //  window.location.href ="signin.html" ;
    var password=document.getElementById("formPassword").value;
    var confirmPassword= document.getElementById("formConfirmPassword").value;
//    console.log(email);
//    console.log(password);
    if(password !== confirmPassword){
        
        alert("Password does not match with above");    
    }
        
    else{
        $("#signUp").fadeOut(function(){
    $("#loading").fadeIn();
     });
        
firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
//    var user = result.user;
    var rootRef = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).child("userInfo");
    var can_post = true;
    var userName =valueName;
    var imageLink="";
    var ngoid = Date.now();
    console.log(ngoid); 
    rootRef.set({canPost: can_post, profilePicLink: imageLink, userName: userName,NGOId:ngoid}).then(function() {
        var storageRef = firebase.storage().ref('LogoImages/' + file.name);
    var task = storageRef.put(file);
    
    task.on('state_changed',
               
               function progress(snapshot){
           
        },
                
        function error(err){
            
        },
                
        function complete(){
            storageRef.getDownloadURL().then(function(url){
                imageURL = url;  
    
    var rootRefForm = firebase.database().ref().child("NgoList").push();
                
    rootRefForm.set({mOrgname: valueName, mImage: imageURL, NGOId:ngoid, mCategory:"testing",mState:state,
                 mCategoryNew:category,
                 mOrginfo: "This is also test",searchName:searchname, mVolunteer:websiteLink, mContact: contactPeople, mDonate:donatePeople, mMission:mission, mVision:vision }).then(function() {//ye hogya? test karne laga ok
    console.log('Synchronization succeeded');
//        window.location.href = "signUp.html";
                window.location.href = "index.html";

  })
  .catch(function(error) {
    console.log('Synchronization failed');
        
    });
                 });
                    });

    console.log('Synchronization succeeded');
  })
  .catch(function(error) {
    console.log('Synchronization failed');
        
    });
   
//  });
    
}).catch(function(error) {
  // Handle Errors here.
//    console.log('test');
  var errorCode = error.code;
  var errorMessage = error.message;
    
    $("#loading").fadeOut(function(){
          $("#signUp").fadeIn(function(){ 
       
     
    if (errorCode == 'auth/weak-password') {
    alert(errorMessage);
    }
        if (errorCode == 'auth/email-already-in-use') {
    alert(errorMessage);
        }
            if (errorCode == 'auth/invalid-email') {
    alert(errorMessage);
            }
                if (errorCode == 'auth/operation-not-allowed') {
    alert(errorMessage);
                }
      }); 
});
    });

}
    }
 function onEnter(){
     if(event.keyCode == 13){ 
     
   createUser();
 
   }
 }
function signUp(){
    createUser();
}
    
function submit(){
   
//    console.log($(".paddingTopics").text());      
//                console.log(file);
               
    
    for (var m = 1; m < 13 ; m++ ){
        if(typeof $('.messageCheckbox'+m+':checked').val()!=="undefined"){
//            console.log("chal gya");
     checkedValue.push($('.messageCheckbox'+m+':checked ').val()
                      );
//console.log(checkedValue);
        }
    }
    
    if ($('.messageCheckbox13').is(':checked')) {
        checkedValue.push($(".messageCheckbox14").val());
//        console.log("hero" +checkedValue);
    }
  
    
    for(var i = 0 ; i < 15 ; i ++ ){
        if(typeof $('#mcategory'+i+':selected').val()!=="undefined"){
           checkedValue.push($('#mcategory'+i+':selected ').val()
                      ); 
//            console.log(checkedValue);
        }
    }
    
   
     for(var i = 0 ; i <checkedValue.length; i++ ){
            category[i] = checkedValue[i];
        }
    for (var n = 1; n < 35 ; n++ ){
        if(typeof $('#checkbox'+n+':checked').val()!=="undefined"){
//            console.log("chal gya");
     checkedValueState.push($('#checkbox'+n+':checked ').val()
                      );
//console.log(checkedValueState);
        }
    }

    for(var i = 0 ; i < 34 ; i ++ ){
        if(typeof $('#mstate'+i+':selected').val()!=="undefined"){
           checkedValueState.push($('#mstate'+i+':selected ').val()
                      ); 
//            console.log(checkedValueState);
        }
    }
   
        for(var j = 0 ; j < checkedValueState.length ; j++){
            state[j] = checkedValueState[j];
        }
//    console.log(checkedValue);
    valueName = $('#ngoName').val();
    logoNgo = $("#logoNgo").val();
    searchname = valueName.toLowerCase();
    websiteLink = $('#websiteLink').val();
    contactPeople = $('#contactPeople').val();
    donatePeople = $("#donatePeople").val();
    mission = $("#mission").val();
    vision = $("#vision").val();
    email = $('#email').val();
    
    
//    var radioyes1 = document.getElementById('yes1').checked;
//        var radiono1 = document.getElementById('no1').checked;
//        var radioyes2 = document.getElementById('yes2').checked;
//        var radiono2 = document.getElementById('no2').checked;
    var checked = $('#laptopScreen1,#laptopScreen2 ').find(':checked').length;
    var checkedMobile = $("#exampleFormControlSelect2,#exampleFormControlSelect1").find(":selected").length;
//    console.log(checkedMobile);
    var terms = document.getElementById('terms').checked;
    
    if ( valueName == 0 || email == 0 || mission == 0 || vision == 0){
        alert("Please fill the text");
    }
    else if ( logoNgo == 0 ){
        alert("It is mandatory to upload your Organisation's Logo");
    }
    else if (!validateEmail(email)){
        alert("Please enter a valid email address! ");
    }


    else if (checked == 0 && checkedMobile == 0){
        alert("Please select atleast one option");
    }   
    else if(terms == false){
        alert("Please carefully read all the terms and conditions");
    }
    else{
        $("#formEmail").val(email);
         $("#form").fadeOut(function(){
       $("#background").fadeIn(); 
    });
        
        }
    
//$('#email').change(function() {
//    $('#formEmail').val($(this).val());
//});
}
