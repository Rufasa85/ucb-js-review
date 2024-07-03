let cat = "shiva";
cat = "Shiva Koopa Ebesten-Rehfuss";
let catAge = 4;
let isCute = true;

const pets = [
  "Shiva",
  "Bahamut",
  "Puppy",
  "Cocoa",
  "Ferdinand",
  "Henry David T",
  "Bette Midler",
  "Chinua Achebe",
];

const shiva = {
  name: "Shiva",
  species: "cat",
  words: "mew",
  isCute: true,
  age: 4,
};

const petObjs = [
  {
    name: "Shiva",
    species: "cat",
    words: "mew",
    isCute: true,
    age: 4,
  },
  {
    name: "Bahamut",
    species: "cat",
    words: "MEOOOOOWW",
    isCute: true,
    age: 4,
  },
  {
    name: "Puppy",
    species: "dog",
    words: "WOOOF",
    isCute: false,
    age: 13,
  },
  {
    name: "Cocoa",
    species: "dog",
    words: "Arf",
    isCute: true,
    age: 8,
  },
  {
    name: "Ferdinand",
    species: "cat",
    words: "meowmeow",
    isCute: true,
    age: 15,
  },
  {
    name: "Bette Midler",
    species: "Leopard Gecko",
    words: "...",
    isCute: false,
    age: 1,
  },
];

console.log(petObjs);
for (let i = 0; i < petObjs.length; i++) {
  const petCard = document.createElement("div");
  petCard.setAttribute("class", "card");

  if (petObjs[i].isCute) {
    petCard.classList.add("cute");
  }

  const petNameH3 = document.createElement("h3");
  petNameH3.textContent = petObjs[i].name;
  petCard.append(petNameH3);

  const speciesH4 = document.createElement("h4");
  speciesH4.textContent = `species: ${petObjs[i].species}`;
  petCard.append(speciesH4);

  const ageh4 = document.createElement("h4");
  ageh4.textContent = `age: ${petObjs[i].age}`;
  petCard.append(ageh4);

  const speakP = document.createElement("p");
  speakP.textContent = petObjs[i].words;
  petCard.append(speakP);

  document.querySelector("main").append(petCard);
}
