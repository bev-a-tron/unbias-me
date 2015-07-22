
var uniFilter = function (_, elem){
  return elem.innerHTML.toLowerCase().includes('university');
};
var hideUni = function () {
  var elems = $j(".layout__item.lg-8of12 > p");
  var filtered = elems.filter(uniFilter);
  filtered.map(function(_, x) {$j(x).css('display', 'none')});
};
var $j = jQuery.noConflict();

var names = $j(".candidate-info--name.hover-link");
var pics = $j(".sm-block > img");

// Give each person a robot picture
pics.each(function(index, element){
  var name = names[index];
  $j(element).attr("src", "https://robohash.org/" + names[index].textContent + ".png");
});

// Change each name to "I'm a robot"
$j(".candidate-info--name, .hover-link").text("I'm a robot");
//names.each(function(index, element) {
//});

// Hide the universities
hideUni();
