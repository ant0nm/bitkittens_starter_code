document.addEventListener("DOMContentLoaded", function() {
  const summonKittens = document.querySelector('.summon-cats');
  summonKittens.addEventListener('click', function(event) {
    const catDivs = document.querySelectorAll('.cat-box');
    // convert our nodelist to an array
    const catArray = Array.from(catDivs);
    axios.get('http://bitkittens.herokuapp.com/cats.json', {'params': {'number': 5}}).then(function(response) {
      response.data.cats.forEach((cat) => {
        const newImg = document.createElement('img');
        newImg.src = cat.photo;
        newImg.alt = `Photo of ${cat.name}`;
        const randomCatDiv = catArray[Math.floor(Math.random()*catArray.length)];
        catArray.splice(catArray.indexOf(randomCatDiv), 1);
        console.log(randomCatDiv);
        // clear HTML contents of div before appending the new img
        randomCatDiv.innerHTML = "";
        randomCatDiv.append(newImg);
      });
    })
  });
});
