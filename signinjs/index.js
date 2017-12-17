
var base64encodedImage;
var imageURL;
var title;
var date;
var ngoId;

var description;
$('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text("No file chosen..."); 
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
  }
});


$('#description-input').each(function () {
  this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
}).on('input', function () {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

//        Crop Photo
        
        let cropper;
let cropperModalId = $('#cropperModal');
let $jsPhotoUploadInput = $('.js-photo-upload');

$jsPhotoUploadInput.on('change', function() {
    var files = this.files;
    if (files.length > 0) {
        var photo = files[0];

        var reader = new FileReader();
        reader.onload = function(event) {
            var image = $('.js-avatar-preview')[0];
            image.src = event.target.result;

            cropper = new Cropper(image, {
                viewMode: 1,
                aspectRatio: 1,
                minContainerWidth: 400,
                minContainerHeight: 400,
                minCropBoxWidth: 50,
                minCropBoxHeight: 50,
                movable: true,
                ready: function () {
                    console.log('ready');
                    console.log(cropper.ready);
                }
            });

            $(cropperModalId).modal();
        };
        reader.readAsDataURL(photo);
    }
});

$('.js-save-cropped-avatar').on('click', function(event) {
    event.preventDefault();

    console.log(cropper.ready);

    var $button = $(this);
    $button.text('uploading...');
    $button.prop('disabled', true);

    const canvas = cropper.getCroppedCanvas();
    base64encodedImage = canvas.toDataURL();
    $('#avatar-crop').attr('src', base64encodedImage);
//    function openInNewTab(url) {
//  var win = window.open(base64encodedImage, '_blank');
//  win.focus();
//}
    $(cropperModalId).modal('hide');

    });
 // Initialize Firebase
  

var config = {
    apiKey: "AIzaSyDJNQRwOA3ndOdi9paH1hhq20yj1kDFgeY",
    authDomain: "heartful-dc3ac.firebaseapp.com",
    databaseURL: "https://heartful-dc3ac.firebaseio.com",
    projectId: "heartful-dc3ac",
    storageBucket: "heartful-dc3ac.appspot.com",
    messagingSenderId: "1029282124604"
  };
  firebase.initializeApp(config); 
    var uploader = document.getElementById('uploader');
    var cropped = document.getElementById('upload-button');
    var chooseFile = document.getElementById('chooseFile');

    var file;
    chooseFile.addEventListener('change',function(e){
                                file = e.target.files[0];
                                });
//    window.alert(cropped);

     cropped.addEventListener('click', function(e){
         title = $('#title-input').val();
         description = $('#description-input').val();
//         console.log(title);
         if (title == 0 || description == 0){
    alert("Please enter some text");
}
         
         else{

       var storageRef = firebase.storage().ref('NewsImages/' + file.name);
        
        var task = storageRef.putString(base64encodedImage, 'data_url');
         
         
//    console.log( storageRef.child("NewsImages/").getDownloadUrl().getResult()); 
        
        task.on('state_changed',
               
               function progress(snapshot){
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
            
        },
                
        function error(err){
            
        },
                
        function complete(){
            storageRef.getDownloadURL().then(function(url){
                imageURL = url;
            
 
var rootRef = firebase.database().ref().child("News").push();
    
     title = $('#title-input').val();
     description = $('#description-input').val();
     date = Date();
    var refForNGOID = firebase.database().ref().child("Users").child(firebase.auth().currentUser.uid).child("userInfo");
                
    refForNGOID.on('value',function(snapshot) {
snapshot.forEach(function(childSnapshot) {
       childData = childSnapshot.key;
                console.log(childData); 
                if(childData == "NGOId"){
                     ngoId = childSnapshot.val();
//                    console.log(can_post);
                }
                    });
        rootRef.set({Title: title, Description: description, DateAndTime: date, Image: imageURL, NGOId: ngoId}).then(function() {
    console.log('Synchronization succeeded');
  })
  .catch(function(error) {
    console.log('Synchronization failed');
    });
        });


   
  });
           
        }
               
     );  
             }
    });


//Go Back

function onSignOut(){
    
firebase.auth().signOut().then(function() {
  // Sign-out successful.
    window.location.href = "index.html";
}).catch(function(error) {
  // An error happened.
});
}

// Title and Description

