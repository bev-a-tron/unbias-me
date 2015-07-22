
var uniFilter = function (_, elem){
  return elem.innerHTML.toLowerCase().includes('university');
};
var hideUni = function () {
  var elems = $j(".layout__item.lg-8of12 > p");
  var filtered = elems.filter(uniFilter);
  filtered.map(function(_, x) {$j(x).css('display', 'none')});
};
var $j = jQuery.noConflict();

// individual profile page
var name = $j("h1 div:last")[0].textContent;
$j("#profile-photo-image > img").attr("src", "https://robohash.org/" + name + ".png");hideUni();
$j(".profile-educations").css("display", "none");
$j(".bookmark").next().text("I'm a robot");
$j(".panel, .question-answer > img").attr("src", "https://robohash.org/" + name + ".png");
$j(".list-group-item > img").attr("src", "https://robohash.org/" + name + ".png");
