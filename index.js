let scorehome = 0;
let scoreaway = 0;

let homescore = document.getElementById('hscore');
let awayscore = document.getElementById('ascore');

let resetsc = document.getElementById('reset');

const phonebtn = document.getElementById('hscb1');
const phtwobtn = document.getElementById('hscb2');
const phthreebtn = document.getElementById('hscb3');

const paonebtn = document.getElementById('ascb1');
const patwobtn = document.getElementById('ascb2');
const pathreebtn = document.getElementById('ascb3');

function updatescore(team, points) {

  if(team === 'home'){

    scorehome += points;
    homescore.textContent = scorehome;

  }

  else if(team === 'away'){

    scoreaway += points;
    awayscore.textContent = scoreaway;

  }

}

phonebtn.addEventListener('click', () => updatescore('home', 1));
phtwobtn.addEventListener('click', () => updatescore('home', 2));
phthreebtn.addEventListener('click', () => updatescore('home', 3));

paonebtn.addEventListener('click', () => updatescore('away', 1));
patwobtn.addEventListener('click', () => updatescore('away', 2));
pathreebtn.addEventListener('click', () => updatescore('away', 3));

function resetscores() {

  scoreaway = 0;
  scorehome = 0;
  homescore.textContent = scorehome;
  awayscore.textContent = scoreaway;
  
}

resetsc.addEventListener('click', () => resetscores());