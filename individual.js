
var uniFilter = function (_, elem){
  return elem.innerHTML.toLowerCase().includes('university');
};
var hideUni = function () {
  var elems = $j(".layout__item.lg-8of12 > p");
  var filtered = elems.filter(uniFilter);
  filtered.map(function(_, x) {$j(x).css('display', 'none')});
};
var $j = jQuery.noConflict();

var adjectives = new Array();
adjectives["a"] = "angry";
adjectives["b"] = "big";
adjectives["c"] = "cloudy";
adjectives["d"] = "dangerous";
adjectives["e"] = "energetic";
adjectives["f"] = "fancy";
adjectives["g"] = "greedy";
adjectives["h"] = "hairy";
adjectives["i"] = "icy";
adjectives["j"] = "juicy";
adjectives["k"] = "kooky";
adjectives["l"] = "loopy";
adjectives["m"] = "messy";
adjectives["n"] = "nutty";
adjectives["o"] = "ominous";
adjectives["p"] = "photogenic";
adjectives["q"] = "quixotic";
adjectives["r"] = "royal";
adjectives["s"] = "sexy";
adjectives["t"] = "tacky";
adjectives["u"] = "ugly";
adjectives["v"] = "vicious";
adjectives["w"] = "wonky";
adjectives["x"] = "xylophone";
adjectives["y"] = "yucky";
adjectives["z"] = "zesty";

var things = new Array();
things["a"] = "apple";
things["b"] = "binoculars";
things["c"] = "chocolate";
things["d"] = "donut";
things["e"] = "elephant";
things["f"] = "flower";
things["g"] = "gopher";
things["h"] = "hat";
things["i"] = "igloo";
things["j"] = "jabberwocky";
things["k"] = "kangaroo";
things["l"] = "lmeon";
things["m"] = "moon";
things["n"] = "night";
things["o"] = "octopus";
things["p"] = "pony";
things["q"] = "quail";
things["r"] = "romeo";
things["s"] = "science";
things["t"] = "tuxedo";
things["u"] = "unicorn";
things["v"] = "vampire";
things["w"] = "whale";
things["x"] = "xylophone";
things["y"] = "yesterday";
things["z"] = "zebra";

// individual profile page
var name = $j("h1 div:last")[0].textContent;
$j("#profile-photo-image > img").attr("src", "https://robohash.org/" + name + ".png");hideUni();
$j(".profile-educations").css("display", "none");

var name_split = name.trim().toLowerCase().split(" ");
$j(".bookmark").next().text(adjectives[name_split[0][0]] + " " + things[name_split[1][0]]);

$j(".panel, .question-answer > img").attr("src", "https://robohash.org/" + name + ".png");
$j(".list-group-item > img").attr("src", "https://robohash.org/" + name + ".png");
