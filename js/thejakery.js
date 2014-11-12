$(document).ready(function(){

  $('.carousel').carousel({
    interval: 10000
  });

  !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

  $('.recipe-thumbnail').hover(function(event) {
    $(this).toggleClass('hovered-image');
  });

});
