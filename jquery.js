window.onload = function()
                {
                   $('#contentbox').load('news.html');
                };

$(document).ready(function () {  
  var top = $('#nav').offset().top - parseFloat($('#nav').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    // whether that's below the form
    if (y >= top) {
      // if so, add the fixed class
      $('#nav').addClass('fixed');
      $('#biobox').addClass('fixed');
      $('#content').css('marginTop','50px');
    } else {
      // otherwise remove it
      $('#nav').removeClass('fixed');
      $('#biobox').removeClass('fixed');
      $('#content').css('marginTop','0px');
    }
  });
});
function news(){
    $('#contentbox').load('news.html');
}
function shows(){
    $('#contentbox').load('shows.html');
}
function media(){
    $('#contentbox').load('media.html');
}
function members(){
    $('#contentbox').load('members.html');
}
function about(){
    $('#contentbox').load('about.html');
}
function contact(){
    $('#contentbox').load('contact.html');
}
function memberbox(member){
    $('#biobox').load('bios/' + member + '.html');
}
