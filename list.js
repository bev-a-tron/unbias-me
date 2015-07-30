
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
var pics = $j(".candidate-info").find("img");

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
things["l"] = "lemon";
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

// Give each person a robot picture
pics.each(function(index, element){
  var name = names[index];
  if (name == undefined) {
    console.log('name is undefined!');
  } else {
    $j(element).attr("src", "https://robohash.org/" + name.textContent + ".png");
  }
});

names.each(function(index, element) {
  var name = $j(element)[0].text.trim().toLowerCase().split(" ");
  $j(element).text(adjectives[name[0][0]] + " " + things[name[1][0]]);
});

// Hide the universities
hideUni();
