
var uniFilter = function (_, elem){
  return elem.innerHTML.toLowerCase().includes('university');
};
var hideUni = function () {
  var elems = $j(".layout__item.lg-8of12 > p");
  var filtered = elems.filter(uniFilter);
  filtered.map(function(_, x) {$j(x).css('display', 'none')});
};
var $j = jQuery.noConflict();

//alert('hi');
$j(".xs-none, .sm-block > img").css("display", "none");hideUni();
//
////document.addEventListener('DOMContentLoaded', function() {
//chrome.browserAction.onClicked.addListener(function(tab) {
//      $(".xs-none, .sm-block > img").css("display", "none");hideUni();
//      //alert('hi');
//        console.log('hi running');
//      chrome.tabs.executeScript({
//        code: 'alert("hi inside");'
//      })
//      //// Hide images
//      //$(".xs-none, .sm-block > img").css("display", "none");
//
//// Hide education, and some other shit.
//
//    }
//);

  //
  //m.fn.init[186]
  //document.getElementsByTagName("img").src = "https://robohash.org/blahblah.png";
  //document.getElementsByClassName("candidate-info--name").innerHTML = "I'm a robot!";
  //alert('hellooooo!');

//});

