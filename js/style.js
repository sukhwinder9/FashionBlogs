function showMoreBlogs(){
    $(".content-2").show();
}

function validateContactPage(){
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#subject').val();
    var message = $('#message').val();

    if(email.length > 0 && validateEmail(email)){
        return true;
    }
    else if(email.length == 0){
        return false;
    }
    else {
        alert("invalid emailid");
        email.val = "";
        return false;
    }

}

function validateEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(regex.test(email)) {
           return true;
        }else{
           return false;
        }
}

loadAllPageTitleContents();


async function getPages(id){
   const url = 'http://localhost/fashionblogs/wp-json/wp/v2/pages/' + id ; 
    const response = await fetch(url);
    const pageJson = await response.json();
    if(id == '63'){
        $('#streetfasion').html("<b>"+pageJson.title.rendered+"</b>");
    }
    if(id == '55'){
        $('#fashiondesign').html("<b>"+pageJson.title.rendered+"</b>");
    }
    
}

function loadAllPageTitleContents(){
    getPages('63');
    getPages('55');
}




