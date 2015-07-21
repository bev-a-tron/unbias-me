
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

// Hide the universities
hideUni();

// individual profile page
$j("#profile-photo-image > img").attr("src", "https://robohash.org/blahblah.png");hideUni();
$j(".profile-educations").css("display", "none");
$j(".bookmark").next().text("I'm a robot");
$j(".panel, .question-answer > img").attr("src", "https://robohash.org/blahblah.png");
$j(".list-group-item > img").attr("src", "https://robohash.org/blahblah.png");
