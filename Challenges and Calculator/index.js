let data;
if (localStorage.getItem("mainData") === null) {
  data = [
    {
      state: false,
      category: "Birthday party",
      icon: "/icons/birthdayPanda.png",
      subcategories: [
        {
          subState: false,
          subIcon: "/icons/paperClips.png",
          subCat:
            "<h1 class='subCardHeading'>Paper clips:</h1>Recyclable Paper clips are in form of metals or steel wire . And, so they are easily recyclable. As they are tiny, they may not be easily sorted with other metals. Hence it may pose problem while recycling.",
          des: "What you need to do to get them recycled is for you to gather them in bulk as scrap metals. This way, they don’t end up escaping recycling because of their size.",
        },
        {
          subState: false,
          subIcon: "/icons/plasticTape.jpg",
          subCat:
            "<h1 class='subCardHeading'> Plastic tape:</h1>Did you know that the tape you use to wrap gifts with is made entirely of plastics?",
          des: "Look for plastic free tape instead! There are plenty of options out there, like ones from signet https://www.signet.net.au/kraft-water-activated-tape-70mm-x-184m-46612.html or use cotton thread to tie your gifts",
        },
        {
          subState: false,
          subIcon: "/icons/wrappingPresent.jpg",
          subCat:
            "<h1 class='subCardHeading'>Wrapping Presents:</h1> Did you know that most wrapping paper has plastic lining that makes it impossible to recycle? Calling it wrapping “paper” is very misleading!And the tape you use to wrap the “paper” is also plastic!",
          des: "Go for actual wrapping paper and switch to natural cotton thread or paper tape which can be recycled. This makes your presents plastic – free . Have a look at https://www.wrapco.com.au/?gclid=CjwKCAjwsMGYBhAEEiwAGUXJaYyV2d_au6d67joWD23eRTzhS9wXX__woe_NYeVh9qxbjY4GYEDS4hoC8zEQAvD_BwE",
        },
        {
          subState: false,
          subIcon: "/icons/partyAccessories.jpg",
          subCat:
            "<h1 class='subCardHeading'>Party accessories:</h1> Garlands and other party decorations can also be made of plastics.",
          des: "You can make your own paper garlands and decorations and turn them into a very fun activity to do with friends and families.",
        },
        {
          subState: false,
          subIcon: "/icons/plasticConfetti.jpg",
          subCat:
            "<h1 class='subCardHeading'>Plastic confetti:</h1> Shooting a confetti cannon for birthday, graduation and other celebration is fun but a lot of confetti is actually plastic. ",
          des: "Choose paper confetti for your celebration. You can make your own paper confetti with friends and family.",
        },
        {
          subState: false,
          subIcon: "/icons/baloon.png",
          subCat:
            "<h1 class='subCardHeading'>Baloons:</h1> What goes up, must come down! Record of rubbish shows that increasing number of balloons, balloon pieces and ribbons are being found near beaches and streets.And the consequence for animals and ecosystem are terrible",
          des: "Try not to use balloons and, if you do, do not let them fly away!",
        },
      ],
    },

    {
      state: false,
      category: "Kitchen",
      icon: "/icons/kitchen.png",
      subcategories: [
        {
          subState: false,
          subIcon: "/icons/plasticCutlery.jpg",
          subCat:
            "<h1 class='subCardHeading'>Single use plastic cutlery:</h1> Are you using single use plastics. Get ready to say goodbye,single use, throw away plastic plates,cups,forks,knives,spoons,straws, and list goes on.",
          des: "Start using reusable kitchen wares. If not switch to paper and bamboo alernatives.",
        },
        {
          subState: false,
          subIcon: "/icons/straws.jpg",
          subCat:
            "<h1 class='subCardHeading'>Straws:</h1> Did you know? More that half a million plastic strwas are used every day around the world",
          des: "You can switch to bamboo and stainless-steel straws and try to avoid straws while having a drink",
        },
        {
          subState: false,
          subIcon: "/icons/plasticBag.png",
          subCat:
            "<h1 class='subCardHeading'>Plastic bag:</h1> Five trillion plastic bags are used yearly according to UN environment which can encircle the world seven times",
          des: "Switch toalternatives of cotton bags and make your groceries plastic -free. Make sure you keep your plastic bags safe from flying away!",
        },
        {
          subState: false,
          subIcon: "/icons/plasticWrap.jpg",
          subCat:
            "<h1 class='subCardHeading'>Plastic wrap:</h1> When getting ready for picnic or packing food to school, plastic wrapped sandwitches are a usual suspect.",
          des: "Why don’t you ask your parents to replace the plastic cling film with reusable containers or cloth pouch to carry your sandwitch.",
        },
      ],
    },
    {
      state: false,
      category: "Bathroom",
      icon: "/icons/bathroom.png",
      subcategories: [
        {
          subState: false,
          subIcon: "/icons/brushes.jpg",
          subCat:
            "<h1 class='subCardHeading'>Hair brushes and combs:</h1> Buying a new hair brush or comb? Buy a plastic- free comb and reduce your plastic usage",
          des: "There are endless options available for plastic free combs and hairbrushes made of bamboo or wood,like the ones from Chemist Warehouse ",
        },
        {
          subState: false,
          subIcon: "/icons/plasticShower.jpg",
          subCat:
            "<h1 class='subCardHeading'>Plastic shower:</h1> Plastic shower curtains are an often- used but very easy-to-eliminate source of plastic in bathroom",
          des: " You can simply switch to naturally water- resistant fabrics like hemp shower curtains or burlap . They can be easily washed in washing machine and do not release microfibers.",
        },
        {
          subState: false,
          subIcon: "/icons/soapShampoo.jpg",
          subCat:
            "<h1 class='subCardHeading'>Soaps and shampoos:</h1> The list of stores that sell soap bars, shampoo bars, conditioner bars, lotion bars and much more plastic – packed shower utilities that are endless",
          des: "The simplest way to cut down unnecessary plastic in your bathroom. It’s actually a lot of fun to look for alternatives to plastic packaged utilities. Try out some alternatives from tirtyl ",
        },
        {
          subState: false,
          subIcon: "/icons/wetWipes.jpg",
          subCat:
            "<h1 class='subCardHeading'>Wet wipes:</h1> Wet wipes are an important component of fat -bergs (lumps of hardened waste) that frequently accumulate in sewage systems across the world.",
          des: "Single use wet wipes made of plastic and packaged in plastic can be replaced with reusable organic cloth wipes that can be washed and used again and again. If you only want to use wet wipes make sure you don’t flush them ",
        },
        {
          subState: false,
          subIcon: "/icons/cosmetics.jpg",
          subCat:
            "<h1 class='subCardHeading'>Cosmetic and personal care:</h1> Do you know that cosmetic and your personal care products may contain microplastic ingredients",
          des: "Visit Beat the Microbead website to identify if your cosmetics has any kind plastic ingredients. There are some microplastic- free products that can be identified with ‘Zero Plastic Inside’ logo",
        },
        {
          subState: false,
          subIcon: "/icons/toothBrush.jpg",
          subCat:
            "<h1 class='subCardHeading'>Toothbrush:</h1> In a entire lifetime, a normal human being is estimated to use upto 300 toothbrushes, we know that toothbrushes are made of plastics which are often difficult to recycle.",
          des: "Imagine how much non-recyclable plastic you avoid if you switch to wooden or bamboo toothbrush. You can check the alternative here from zerowasteco.com",
        },
        {
          subState: false,
          subIcon: "/icons/cake.png",
          subCat:
            "<h1 class='subCardHeading'>Tongue Cleaner:</h1> If you’re replacing your toothbrush with a plastic-free alternative, why not replace your plastic toungue cleaner as well?",
          des: "Metal Tongue cleaners works same well as the plastic tongue cleaner and are made to last longer. Check alternative form zerowasteco.com",
        },
        {
          subState: false,
          subIcon: "/icons/tubToys.jpg",
          subCat:
            "<h1 class='subCardHeading'>Bath tub toys:</h1> Plastic ducks and other bath tub toys are usally made of PVC which is a type of plastics that may leak chemicals. Which are harmful of kids to even to bath with them.",
          des: "Make sure you have plastic toy-free bathtubs!",
        },
      ],
    },
  ];
} else {
  let retrievedData = localStorage.getItem("mainData");
  data = JSON.parse(retrievedData);
}

makeColumnAndAppend = (grid, outerIndex) => {
  let col = document.createElement("div");
  col.setAttribute("class", "column");
  grid.appendChild(col);
  let link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("onclick", "hideMain(event)");
  link.setAttribute("data-id", outerIndex);
  link.setAttribute("data-category", data[outerIndex].category);
  link.setAttribute("class", "cardMain");

  col.appendChild(link);
  let divCard = document.createElement("div");
  divCard.setAttribute("class", "card");
  link.appendChild(divCard);
  let img = document.createElement("img");
  img.setAttribute("src", data[outerIndex].icon);
  img.setAttribute("class", "cardImg");
  divCard.appendChild(img);
  let heading = document.createElement("h3");
  heading.innerHTML = data[outerIndex].category;
  divCard.appendChild(heading);
  if (data[outerIndex].state == true) {
    let tickMark = document.createElement("img");
    tickMark.setAttribute("src", "/icons/tickMark.png");
    tickMark.setAttribute("class", "tickMark");
    divCard.appendChild(tickMark);
  }
};
// Cards Formation
function card() {
  let count = 0;
  let makeNewRow = true;
  let grid = document.querySelector(".grid");
  // let card;
  for (let outerIndex = 0; outerIndex < data.length; outerIndex++) {
    makeColumnAndAppend(grid, outerIndex);
  }
}
card();

// Header Hidden
let header = document.getElementById("head");
header.style.display = "none";
let mainGrid = document.querySelector(".grid");
let subGrid = document.querySelector(".subGrid");
subGrid.style.display = "none";
let topHeader = document.querySelector(".topHeader");

// It hides the Main Page and display sub Categories page
hideMain = (event) => {
  let eventClick = event.currentTarget;
  if (data[eventClick.dataset.id].state == true) {
    eventClick.style.pointerEvents = "none";
  } else {
    header.style.display = "flex";
    mainGrid.style.display = "none";
    subGrid.style.display = "grid";
    topHeader.innerHTML = eventClick.dataset.category;
    let subCat = data[eventClick.dataset.id].subcategories;

    let x = subCat.filter((x) => x.subState == true);
    if (x.length == subCat.length) {
      hiddenBtn.style.display = "block";
    }
    function subCards(eventClick) {
      let subGrid = document.querySelector(".subGrid");
      var newData1 = eventClick.dataset.id;
      let newVal = parseInt(newData1);
      var newData = data[newVal];
      nextCat = () => {
        newVal += 1;
        newData = data[newVal];
        var newDataVal = newData.category;
        subGrid.innerHTML = "";
        hiddenBtn.style.display = "none";
        let selectedCat = document.querySelector(".cardMain");
        selectedCat.dataset.id = newVal;
        selectedCat.dataset.category = newDataVal;
        selectedCat.click();
      };
      for (
        let outerIndex = 0;
        outerIndex < newData.subcategories.length;
        outerIndex++
      ) {
        subcategoryCol(subGrid, outerIndex, eventClick);
      }
    }

    // Cards Flip on Click
    flipCard = (event) => {
      let currentEventClick = event.currentTarget;
      let subCat = data[eventClick.dataset.id].subcategories;
      let subCardState = (data[eventClick.dataset.id].subcategories[
        currentEventClick.dataset.subid
      ].subState = true);

      let x = subCat.filter((x) => x.subState == true);
      if (x.length == subCat.length) {
        data[eventClick.dataset.id].state = true;
        hiddenBtn.style.display = "block";
      }
      //All Categories are completed
      let y = data.filter((y) => y.state == true);
      if (y.length == data.length) {
        // alert("All Categories are completed. Click Restart Button to start again");
        let rBtn = document.querySelector(".restartBtn");
        hiddenBtn.style.display = "none";
        rBtn.style.display = "block";
        restartCat = () => {
          // debugger;
          localStorage.clear();
          location.reload();
        };
      }

      if (currentEventClick.lastChild.className !== "subTickMark") {
        let subTickMark = document.createElement("img");
        subTickMark.setAttribute("src", "/icons/tickMark.png");
        subTickMark.setAttribute("class", "subTickMark");
        currentEventClick.appendChild(subTickMark);
        currentEventClick.lastChild.src == true;
      }
      if (currentEventClick.style.transform == "") {
        currentEventClick.style.transform = "rotateY(180deg)";
        currentEventClick.lastChild.style.transform = "rotateY(180deg)";
      } else if (currentEventClick.style.transform == "rotateY(0deg)") {
        currentEventClick.style.transform = "rotateY(180deg)";
        currentEventClick.lastChild.style.transform = "rotateY(180deg)";
      } else {
        currentEventClick.style.transform = "rotateY(0deg)";
        currentEventClick.lastChild.style.transform = "rotateY(0deg)";
      }
      localStorage.setItem("mainData", JSON.stringify(data));
    };

    subCards(eventClick);
  }
};

// It hides the sub Categories Page and display Main page
showMain = () => {
  header.style.display = "none";
  mainGrid.style.display = "grid";
  subGrid.style.display = "none";
  subGrid.innerHTML = "";

  let hiddenBtn = document.querySelector(".subCatBtn");
  hiddenBtn.style.display = "none";

  // Disable the Selected Cards
  disableCards();
  for (let i = 0; i < data.length; i++) {
    if (data[i].state == true) {
      let c = document.querySelectorAll(".cardMain")[i];
      if (c.children[0].lastChild.className !== "tickMark") {
        let tickMark = document.createElement("img");
        tickMark.setAttribute("src", "/icons/tickMark.png");
        tickMark.setAttribute("class", "tickMark");
        c.children[0].appendChild(tickMark);
        tickMark.style.filter = "grayscale(100%)";
      }
    }
  }
};

// Sub-categories Formation
subcategoryCol = (subGrid, outerIndex, eventClick) => {
  let subCol = document.createElement("div");
  subCol.setAttribute("class", "subColumn");
  subGrid.appendChild(subCol);
  let flipCard = document.createElement("div");
  flipCard.setAttribute("class", "flip-card");
  subCol.appendChild(flipCard);
  let flipInnerCard = document.createElement("div");
  flipInnerCard.setAttribute("class", "flip-card-inner");
  flipInnerCard.setAttribute("onclick", "flipCard(event)");
  flipInnerCard.setAttribute("data-subId", outerIndex);
  flipInnerCard.setAttribute(
    "data-subCat",
    data[eventClick.dataset.id].subcategories[outerIndex].subCat
  );
  flipCard.appendChild(flipInnerCard);
  let flipCardFront = document.createElement("div");
  flipCardFront.setAttribute("class", "flip-card-front");
  flipInnerCard.appendChild(flipCardFront);
  let frontImg = document.createElement("img");
  frontImg.setAttribute(
    "src",
    data[eventClick.dataset.id].subcategories[outerIndex].subIcon
  );
  flipCardFront.appendChild(frontImg);
  let subCardPara = document.createElement("p");
  subCardPara.setAttribute("class", "frontPara");
  subCardPara.innerHTML =
    data[eventClick.dataset.id].subcategories[outerIndex].subCat;
  flipCardFront.appendChild(subCardPara);

  let flipCardBack = document.createElement("div");
  flipCardBack.setAttribute("class", "flip-card-back");
  flipInnerCard.appendChild(flipCardBack);
  let classTxt = document.createElement("div");
  classTxt.setAttribute("class", "txt");
  flipCardBack.appendChild(classTxt);

  let txtHeading = document.createElement("h1");
  txtHeading.innerHTML =
    data[eventClick.dataset.id].subcategories[outerIndex].des;
  classTxt.appendChild(txtHeading);

  if (data[eventClick.dataset.id].subcategories[outerIndex].subState == true) {
    let subTickMark = document.createElement("img");
    subTickMark.setAttribute("src", "/icons/tickMark.png");
    subTickMark.setAttribute("class", "subTickMark");
    flipInnerCard.appendChild(subTickMark);
  }
};

// Store main array in local storage
localStorage.setItem("mainData", JSON.stringify(data));

// Move to Next Category btn Hidden
let hiddenBtn = document.querySelector(".subCatBtn");
hiddenBtn.style.display = "none";

// Disable the marked cards
disableCards = () => {
  var state = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].state == true) {
      let c = document.querySelectorAll(".cardMain")[i];
      c.style.filter = "grayscale(100%)";
      c.style.pointerEvents = "none";
      let a = data.filter((a) => a.state == true);
      if (a.length == data.length) {
        let rBtn = document.querySelector(".restartBtn");
        rBtn.style.display = "block";
        restartCat = () => {
          localStorage.clear();
          location.reload();
        };
      }
    } else if (data[i].state == false && state == 0) {
      let c = document.querySelectorAll(".cardMain")[i];
      c.querySelector(".card").querySelector("h3").style.color = "black";
      c.style.filter = "none";
      c.style.pointerEvents = "";
      state += 1;
    }

    // Disable unvisited categories
    else if (i !== 0) {
      let c = document.querySelectorAll(".cardMain")[i];
      c.style.filter = "grayscale(100%)";
      c.style.pointerEvents = "none";
    }
  }
};
disableCards();
