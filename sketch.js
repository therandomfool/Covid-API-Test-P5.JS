//   https://covidtracking.com/data/api
let data;
function preload() {
  let url = 'https://api.covidtracking.com/v1/us/current.json';
  httpGet(url, 'json', false, function(response) {
    data = response;
  });
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  
  if (!data) { // Wait until the data has loaded before drawing.
    return;
  }
  frameRate(0);
  background(12, 12, 230);
  let death = data[0].death;
  let dateChecked = data[0].dateChecked;
  dateChecked = JSON.parse(JSON.stringify(dateChecked));
  let date = new Date(dateChecked);
  date = String(date);
  let month = date.split(' ')[1];
  let day = date.split(' ')[2];
  let year = date.split(' ')[3];
  
  textAlign(CENTER);
  textSize(26)
  textStyle(BOLD)
  text('Total US deaths as of '+ month + ' ' + day + ', ' + year + ':  ' + death + " Americans", 0, height - 300, width, 30);
}
