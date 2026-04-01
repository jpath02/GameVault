//Game Vault

//I created an array of objects to store each game's properties so that I can access the properties more easily when I need them later on
const games = [
  {
    id: 1, //gave every game an id number so i can reference it solely for any buttons i create later on
    title: "League of Legends",
    price: 25.0,
    rating: 4.8,
    category: "MOBA",
    platform: "PC",
    description:
      "Strategy team game where each player is competing in a five versus five match to destroy the enemy team’s base.",
    release: "2009-10-27",
    image: "images/leagueoflegends/lol_main_image.jpg", //main image
    recommended: true, //boolean to access the recommended games in the hero section

    //created another array but this time for all of my images to prevent myself from hardcoding them anywhere else in my code
    gallery: {
      main: "images/leagueoflegends/lol_main_image.jpg",
      thumbs: [
        //thumbnail images
        "images/leagueoflegends/lol_thumbnail1.jpg",
        "images/leagueoflegends/lol_thumbnail2.jpg",
        "images/leagueoflegends/lol_thumbnail3.jpg",
        "images/leagueoflegends/lol_thumbnail4.jpg",
      ],
      shots: [
        //screenshot images
        "images/leagueoflegends/lol_screenshot1.jpg",
        "images/leagueoflegends/lol_screenshot2.jpg",
        "images/leagueoflegends/lol_screenshot3.jpg",
        "images/leagueoflegends/lol_screenshot4.jpg",
      ],
    },

    //one more array to store my reviews for each game, which i will need in my game details page later on”.
    reviews: [
      "Bobby - Difficult game to understand at first, but with more practice it becomes more fun! I highly recommend playing with friends instead of alone.",
      "James - Unique playstyle that I never came across before and tons of variety with how many different characters are available in the game! Very addicting to play once I got used to the playstyle.",
    ],
  },

  //now i repeat this process 8 times for my 8 games and my array will end up being full and organized so that i can handle and use everything when necessary

  {
    id: 2,
    title: "Fortnite",
    price: 50.0,
    rating: 4.8,
    category: "Battle Royale",
    platform: "Console, PC",
    description:
      "100 players competing in a battle royale style system where shooting mechanics are combined with a building aspect to see who is skilled enough to be the last man standing!",
    release: "2017-07-21",
    image: "images/fortnite/fortnitemainimage.jpeg",
    recommended: false,
    gallery: {
      main: "images/fortnite/fortnitemainimage.jpeg",
      thumbs: [
        "images/fortnite/fortnite_thumbnail1.jpg",
        "images/fortnite/fortnite_thumbnail2.jpg",
        "images/fortnite/fortnite_thumbnail3.jpg",
        "images/fortnite/fortnite_thumbnail4.jpg",
      ],
      shots: [
        "images/fortnite/fortnite_screenshot1.jpg",
        "images/fortnite/fortnite_screenshot2.jpg",
        "images/fortnite/fortnite_screenshot3.jpg",
        "images/fortnite/fortnite_screenshot4.jpg",
      ],
    },
    reviews: [
      "Harrison - Such a refreshing concept to battle royale style games, the fact that I can build structures while trying to shoot at the enemies gives the game a whole new skill in itself!",
      "Sally - The game visually looks stunning! All of the scenery as well as the customizable outfits in the shop are so appealing and definitely make the game seem cooler!",
    ],
  },

  {
    id: 3,
    title: "Minecraft",
    price: 10.0,
    rating: 4.9,
    category: "Open World Sandbox",
    platform: "Console, PC",
    description:
      "3D open-world where players aim to find resources and craft materials in order to survive and fully explore Minecraft.",
    release: "2009-05-17",
    image: "images/minecraft/minecraft_main_image.jpg",
    recommended: true,
    gallery: {
      main: "images/minecraft/minecraft_main_image.jpg",
      thumbs: [
        "images/minecraft/minecraft_thumbnail1.jpg",
        "images/minecraft/minecraft_thumbnail2.jpg",
        "images/minecraft/minecraft_thumbnail3.jpg",
        "images/minecraft/minecraft_thumbnail4.jpg",
      ],
      shots: [
        "images/minecraft/minecraft_screenshot1.jpg",
        "images/minecraft/minecraft_screenshot2.jpg",
        "images/minecraft/minecraft_screenshot3.jpg",
        "images/minecraft/minecraft_screenshot4.jpg",
      ],
    },
    reviews: [
      "David - Always a pleasure to load up Minecraft when I have spare time and feel adventurous! The amount of details in this game are amazing, considering the low price value and simple look of the characters.",
      "Carlos - This game has been out for such a long time now and still never gets old for me! I love how I can always get an unique experience from exploring and trying to survive with all the different settings such as hardcore mode!",
    ],
  },

  {
    id: 4,
    title: "Mario Kart 8",
    price: 79.99,
    rating: 4.7,
    category: "Multiplayer Racing",
    platform: "Console",
    description:
      "Chaotic racing game where players select their favourite characters within the world of Mario and compete head-to-head on who drives their kart the fastest!",
    release: "2014-05-29",
    image: "images/mariokart8/mariokart8_main_image.jpg",
    recommended: false,
    gallery: {
      main: "images/mariokart8/mariokart8_main_image.jpg",
      thumbs: [
        "images/mariokart8/mariokart8_thumbnail1.jpg",
        "images/mariokart8/mariokart8_thumbnail2.jpg",
        "images/mariokart8/mariokart8_thumbnail3.jpg",
        "images/mariokart8/mariokart8_thumbnail4.jpg",
      ],
      shots: [
        "images/mariokart8/mariokart8_screenshot1.jpg",
        "images/mariokart8/mariokart8_screenshot2.jpg",
        "images/mariokart8/mariokart8_screenshot3.jpg",
        "images/mariokart8/mariokart8_screenshot4.jpg",
      ],
    },
    reviews: [
      "Jason - Whenever I get off my work shift, I’m always looking forward to playing some Mario Kart with my friends. Such a fun competitive game and with the amount of chaos that occurs during one sitting, it keeps me and my friends constantly coming back for another session!",
      "Timmy - Great game, but the price seems a bit too high for me… maybe I’ll give it a try when there’s a discount?",
    ],
  },

  {
    id: 5,
    title: "NBA 2K25",
    price: 60.0,
    rating: 4.7,
    category: "Sports Simulation",
    platform: "Console",
    description:
      "A basketball-simulated game to play as your favourite players that you watch in the NBA while customizing and unlocking different features to show your own unique flair!",
    release: "2024-09-06",
    image: "images/nba2k25/nba2k25_main_image.jpg",
    recommended: true,
    gallery: {
      main: "images/nba2k25/nba2k25_main_image.jpg",
      thumbs: [
        "images/nba2k25/nba2k25_thumbnail1.jpg",
        "images/nba2k25/nba2k25_thumbnail2.jpg",
        "images/nba2k25/nba2k25_thumbnail3.jpg",
        "images/nba2k25/nba2k25_thumbnail4.jpg",
      ],
      shots: [
        "images/nba2k25/nba2k25_screenshot1.jpg",
        "images/nba2k25/nba2k25_screenshot2.jpg",
        "images/nba2k25/nba2k25_screenshot3.jpg",
        "images/nba2k25/nba2k25_screenshot4.jpg",
      ],
    },
    reviews: [
      "Alex - I suck at playing basketball in real life, but when I play this game, I feel unstoppable! The mechanics and design of the game make it feel seamless from playing in front of a screen versus a real hoop!",
      "Kevin - My kids never get out of the house ever since I bought them this game! I guess that shows how well the game was made haha!",
    ],
  },

  {
    id: 6,
    title: "Pokémon Platinum",
    price: 15.0,
    rating: 4.3,
    category: "RPG",
    platform: "Console",
    description:
      "Based in the Sinnoh region of the Pokémon world, you must venture through battles by catching and training your own Pokémon, slowly completing the Pokédex and working towards becoming the Pokémon master!",
    release: "2008-09-13",
    image: "images/pokemonplatinum/pokemonplatinum_main_image.jpg",
    recommended: false,
    gallery: {
      main: "images/pokemonplatinum/pokemonplatinum_main_image.jpg",
      thumbs: [
        "images/pokemonplatinum/pokemonplatinum_thumbnail1.jpg",
        "images/pokemonplatinum/pokemonplatinum_thumbnail2.jpg",
        "images/pokemonplatinum/pokemonplatinum_thumbnail3.jpg",
        "images/pokemonplatinum/pokemonplatinum_thumbnail4.jpg",
      ],
      shots: [
        "images/pokemonplatinum/pokemonplatinum_screenshot1.jpg",
        "images/pokemonplatinum/pokemonplatinum_screenshot2.jpg",
        "images/pokemonplatinum/pokemonplatinum_screenshot3.jpg",
        "images/pokemonplatinum/pokemonplatinum_screenshot4.jpg",
      ],
    },
    reviews: [
      "Andrew - Pokémon is my childhood and the fact that I get to relive it through this game makes me feel so content with making the purchase. Thanks Game Vault for having such an awesome game available!",
      "Jamal - Great game, but please release more updates, I’ve been done with the storyline for months now!",
    ],
  },

  {
    id: 7,
    title: "Call of Duty: Black Ops II",
    price: 39.99,
    rating: 4.6,
    category: "FPS",
    platform: "Console",
    description:
      " A juggernaut within the FPS genre, where players will combat with various types of enemies within the campaign mode using futuristic weapons and customizable loadouts to fight for their lives.",
    release: "2012-11-13",
    image: "images/callofdutyblackops2/callofdutyblackops2_main_image.jpg",
    recommended: false,
    gallery: {
      main: "images/callofdutyblackops2/callofdutyblackops2_main_image.jpg",
      thumbs: [
        "images/callofdutyblackops2/callofdutyblackops2_thumbnail1.jpg",
        "images/callofdutyblackops2/callofdutyblackops2_thumbnail2.jpeg",
        "images/callofdutyblackops2/callofdutyblackops2_thumbnail3.jpg",
        "images/callofdutyblackops2/callofdutyblackops2_thumbnail4.jpg",
      ],
      shots: [
        "images/callofdutyblackops2/callofdutyblackops2_screenshot1.jpg",
        "images/callofdutyblackops2/callofdutyblackops2_screenshot2.jpg",
        "images/callofdutyblackops2/callofdutyblackops2_screenshot3.jpg",
        "images/callofdutyblackops2/callofdutyblackops2_screenshot4.jpg",
      ],
    },
    reviews: [
      "Aaron - The graphics of this game are unreal, it truly feels like I’m in a warzone each time!",
      "Ryan - This game is a masterpiece! I recommend multiplayer mode because the controls here don’t feel as clunky versus Black Ops I.",
    ],
  },

  {
    id: 8,
    title: "Animal Crossing: New Leaf",
    price: 24.99,
    rating: 4.9,
    category: "Social Life Simulation",
    platform: "Console",
    description:
      "You arrive in the Animal Crossing kingdom with the role of mayor, where you are now a focal point in the town, helping other animals with their day-to-day tasks and improving their livelihood here.",
    release: "2012-11-08",
    image: "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_main_image.jpg",
    recommended: true,
    gallery: {
      main: "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_main_image.jpg",
      thumbs: [
        "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_thumbnail1.jpg",
        "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_thumbnail2.jpg",
        "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_thumbnail3.jpg",
        "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_thumbnail4.jpg",
      ],
      shots: [
        "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_screenshot1.jpeg",
        "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_screenshot2.jpg",
        "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_screenshot3.JPG",
        "images/animalcrossingnewleaf/AnimalCrossingNewLeaf_screenshot4.jpg",
      ],
    },
    reviews: [
      "Josh - Such a peaceful game for when I come home all stressed from my schoolwork (10/10)!",
      "Julian - All of the villagers here are well-made and esthetically-pleasing to look at!",
    ],
  },
];

let viewMode = "grid"; //setting the games page to be in grid view (but can be changed to list view)
let cart = []; //created array to update the shopping cart for each time an item gets placed in it
let wishlist = []; //created array for wishlist which is similar functionality to the cart array
let currentPage = "home"; //shows which page user is seeing
let heroIndex = 0; //shows which slide is being seen on carousel based on index
let loggedInUser = null; //user log in, defaults to guest

let filterState = {
  //filters on Games page
  category: "All",
  platform: "All",
  sortBy: "price-asc",
  maxPrice: 80,
  search: "", //text from search input
};

function parsePlatforms(p) {
  //turns "Console, PC" into ["console", "pc"] so its easier to check even if there are whitespaces or case mismatches
  return String(p)
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean); //removes empty strings
}

function initCategoryFilter() {
  //fills the category dropdown menu and event listener.
  const sel = document.getElementById("catFilter");
  if (!sel) return;
  const ordered = [
    "All",
    "MOBA",
    "FPS",
    "Battle Royale",
    "Open World Sandbox",
    "Multiplayer Racing",
    "Sports Simulation",
    "RPG",
    "Social Life Simulation",
  ];

  sel.innerHTML = ordered
    .map((opt) => `<option value="${opt}">${opt}</option>`)
    .join(""); //builds the options list once using HTML
  sel.value = filterState.category; // keep control in sync with current state
  sel.onchange = () => {
    filterState.category = sel.value;
    applyFilters(); //saves chosen value and re-renders list
  };
}

function initPlatformFilter() {
  //same thing as category, but for platform dropdown now
  const sel = document.getElementById("platFilter");
  if (!sel) return;

  const options = ["All", "PC", "Console"];
  sel.innerHTML = options
    .map((o) => `<option value="${o}">${o}</option>`)
    .join("");
  sel.value = filterState.platform;
  sel.onchange = () => {
    filterState.platform = sel.value;
    applyFilters();
  };
}

function initSortFilter() {
  const sel = document.getElementById("sortBy"); //same for sort dropdown menu
  if (!sel) return;
  sel.value = filterState.sortBy;
  sel.onchange = () => {
    filterState.sortBy = sel.value;
    applyFilters();
  };
}

function initPriceFilter() {
  const slider = document.getElementById("filterPrice");
  const valueLabel = document.getElementById("priceVal");
  if (!slider || !valueLabel) return;
  slider.value = filterState.maxPrice; //initializes slider
  valueLabel.textContent = `$${filterState.maxPrice}`;

  slider.oninput = () => {
    filterState.maxPrice = Number(slider.value);
    valueLabel.textContent = `$${slider.value}`; //updates label
    applyFilters();
  };
}

function initSearchFilter() {
  //search box user input
  const input = document.getElementById("searchText");
  if (!input) return;

  input.value = filterState.search; //keeps the input

  input.oninput = () => {
    filterState.search = input.value; //saves the text
    applyFilters();
  };
}

//filter list and render to page
function applyFilters() {
  let list = games.slice(); //start with empty copy so the original doesn't change

  if (filterState.category !== "All") {
    list = list.filter((g) => g.category === filterState.category);
  }

  if (filterState.platform !== "All") {
    const wanted = filterState.platform.toLowerCase();
    list = list.filter((g) => parsePlatforms(g.platform).includes(wanted));
  }

  list = list.filter((g) => g.price <= filterState.maxPrice);

  if (filterState.search.trim()) {
    const q = filterState.search.trim().toLowerCase();
    list = list.filter((g) => g.title.toLowerCase().includes(q));
  }

  switch (filterState.sortBy) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "rating-desc":
      list.sort((a, b) => b.rating - a.rating);
      break;
    case "name-asc":
      list.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  renderGames(list); //show cards to page
}

const btnClear = document.getElementById("clearFilters");
if (btnClear)
  btnClear.onclick = () => {
    //resets state
    filterState = {
      category: "All",
      platform: "All",
      sortBy: "price-asc",
      maxPrice: 80,
      search: "",
    };

    //resets form controls
    const cat = document.getElementById("catFilter");
    const plat = document.getElementById("platFilter");
    const sort = document.getElementById("sortBy");
    const price = document.getElementById("filterPrice");
    const priceVal = document.getElementById("priceVal");
    const search = document.getElementById("searchText");

    if (cat) cat.value = "All";
    if (plat) plat.value = "All";
    if (sort) sort.value = "price-asc";
    if (price) price.value = 80;
    if (priceVal) priceVal.textContent = "$80";
    if (search) search.value = "";

    applyFilters();
  };

const STORAGE_KEYS = { cart: "pt_cart", wishlist: "pt_wishlist" };

function loadState() {
  try {
    cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart)) || [];
    wishlist = JSON.parse(localStorage.getItem(STORAGE_KEYS.wishlist)) || [];
  } catch {
    cart = [];
    wishlist = [];
  }
  updateCart(); //update cart
  updateWishlist(); //update wishlist
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}
function saveWishlist() {
  localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist));
}

const pages = document.querySelectorAll(".page"); //no page reloads
const links = document.querySelectorAll(".nav-link");

//click handler calls showSection
links.forEach((lnk) =>
  lnk.addEventListener("click", () => showSection(lnk.dataset.link)),
);

function showSection(id) {
  //hides all pages
  pages.forEach((pg) => pg.classList.add("hidden"));

  //shows selected page
  document.getElementById(`page-${id}`).classList.remove("hidden");

  links.forEach((l) => l.classList.remove("active"));
  document.querySelector(`[data-link='${id}']`).classList.add("active");

  currentPage = id; //saves current page

  // When switching to Games page, ensure filters are initialized and the list renders.
  if (id === "games") {
    initCategoryFilter();
    initPlatformFilter();
    initSortFilter();
    initPriceFilter();
    initSearchFilter();
    if (typeof setView === "function") setView(viewMode); //keep last view
    applyFilters();
  }

  //when entering these pages, render their info
  if (id === "cart") renderCart();
  if (id === "wishlist") renderWishlist();
  if (id === "profile") renderProfile();
}

document.getElementById("loginBtn").onclick = () => {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!username || !password) {
    alert("Please enter both a username and password.");
    return;
  }

  loggedInUser = username;

  const profileLink = document.querySelector('[data-link="profile"]');
  if (profileLink) profileLink.textContent = `👤 ${username}`;

  alert(`Welcome, ${username}! You're now logged in.`);
  showSection("profile");
};

const heroGames = games.filter((g) => g.recommended); //picks featured games
const heroTrack = document.getElementById("heroTrack"); //container row for the slides

function renderHero() {
  heroTrack.innerHTML = heroGames
    .map(
      (g) => `
    <div class="hero-card">
      <img src="${g.image}" alt="${g.title}">
    </div>`,
    )
    .join("");
}

function moveHero(dir) {
  //moves the carousel by +1 or -1.
  heroIndex = (heroIndex + dir + heroGames.length) % heroGames.length;
  heroTrack.style.transform = `translateX(-${heroIndex * 100}%)`; //slides the row using "translateX"
}

//left and right arrow buttons
document.getElementById("heroPrev").onclick = () => moveHero(-1);
document.getElementById("heroNext").onclick = () => moveHero(1);

//auto-advance every 6 seconds (coordinated with CSS)
setInterval(() => moveHero(1), 6000);

function renderRecommended() {
  document.getElementById("recommendedGrid").innerHTML = heroGames
    .map(
      (g) => `
    <div class="card">
      <div class="thumb">
        <img class="media cover" src="${g.image}" alt="${g.title}">
      </div>

      <div class="pad">
        <h3>${g.title}</h3>
        <p class="meta">$${g.price.toFixed(2)} • ${g.rating}★</p>
        <button class="btn small" onclick="viewGame(${g.id})">View Details</button>
      </div>
    </div>`,
    )
    .join("");
}

function setView(mode) {
  //grid/list toggle
  viewMode = mode; //remembers user choice

  const box = document.getElementById("gamesList"); //switches classes on container for CSS to handle layout
  if (box) {
    box.classList.remove("grid", "list");
    box.classList.add(mode);
  }

  const btnGrid = document.getElementById("viewGrid");
  const btnList = document.getElementById("viewList");
  if (btnGrid && btnList) {
    btnGrid.classList.toggle("active", mode === "grid");
    btnList.classList.toggle("active", mode === "list");
  }
}

//event handlers for both buttons
document.getElementById("viewGrid")?.addEventListener("click", () => {
  setView("grid");
  applyFilters(); //re-render for list
});
document.getElementById("viewList")?.addEventListener("click", () => {
  setView("list");
  applyFilters();
});

function renderGames(list = games) {
  //renders list of cards
  const el = document.getElementById("gamesList");
  el.innerHTML = list
    .map(
      (g) => `
      <div class="card">
        <div class="thumb">
          <img class="media cover" src="${g.image}" alt="${g.title}">
        </div>

        <div class="pad">
          <h3>${g.title}</h3>
          <p class="meta">${g.category} • ${g.platform}</p>
          <p>$${g.price.toFixed(2)} | ${g.rating}★</p>
          <button class="btn small" onclick="viewGame(${g.id})">View Details</button>
        </div>
      </div>`,
    )
    .join("");
}

function viewGame(id) {
  const g = games.find((x) => x.id === id); //finds id from the games array
  if (!g) return;

  const galleryImages = [
    g.gallery.main,
    ...g.gallery.thumbs,
    ...g.gallery.shots,
  ].slice(0, 9); //builds a flat array of 1 main, 4 thumbnails and 4 screenshot images

  //filling the game detail page
  const el = document.getElementById("detailContent");
  el.innerHTML = `
    <div class="detail">
      <div class="gallery">
        <img id="detailMain" src="${galleryImages[0]}" class="mainimg media contain" alt="${g.title} main image">

        <div class="thumbrow" id="detailThumbs">
          ${galleryImages
            .map(
              (src, i) =>
                `<img class="thumb ${i === 0 ? "active" : ""}" src="${src}" data-src="${src}" alt="${g.title} image ${i + 1}">`,
            )
            .join("")}
        </div>
      </div>

      <div>
        <h2>${g.title}</h2>

        <h3>Description:</h3>
        <p>${g.description}</p>

        <h3>Specs:</h3>
        <p class="specs">
          Category: ${g.category}<br>
          Platform: ${g.platform}<br>
          Rating: ${g.rating} out of 5 stars<br>
          Released: ${g.release}
        </p>

        <p><strong>$${g.price.toFixed(2)}</strong></p>
        <div class="row">
          <button class="btn small" onclick="addCart(${g.id})">Add to Cart</button>
          <button class="btn small outline" onclick="addWishlist(${g.id})">Wishlist</button>
        </div>

        <h3>Game Reviews:</h3>
        <div class="reviews">
          ${
            g.reviews && g.reviews.length
              ? g.reviews.map((r) => `<blockquote>${r}</blockquote>`).join("")
              : "<p>No reviews yet.</p>"
          }
        </div>
      </div>
    </div>`;

  //click handlers to click on each image
  const main = document.getElementById("detailMain");
  document.querySelectorAll("#detailThumbs .thumb").forEach((t) => {
    t.addEventListener("click", () => {
      main.src = t.dataset.src; //swaps image
      document
        .querySelectorAll("#detailThumbs .thumb")
        .forEach((x) => x.classList.remove("active"));
      t.classList.add("active");
    });
  });

  showSection("detail");
}

document.getElementById("backToGames").onclick = () => showSection("games");

function addCart(id) {
  const game = games.find((g) => g.id === id);
  const item = cart.find((i) => i.id === id);
  if (item)
    item.qty++; //already in cart = +1
  else cart.push({ ...game, qty: 1 }); //else add to quantity 1

  updateCart(); //updates cart button
  if (currentPage === "cart") renderCart(); //refresh list if user is on cart page
  alert(`${game.title} added to cart.`);
}

function addWishlist(id) {
  if (!wishlist.includes(id)) wishlist.push(id); //only add once
  updateWishlist();
  if (currentPage === "wishlist") renderWishlist();
  alert("Added to wishlist.");
}

function updateCart() {
  //button shows total quantity of all items
  document.getElementById("cartCount").textContent = cart.reduce(
    (s, i) => s + i.qty,
    0,
  );
  saveCart();
}

function updateWishlist() {
  document.getElementById("wishCount").textContent = wishlist.length; //number of saved games
  saveWishlist();
}

function renderCart() {
  const box = document.getElementById("cartItems");

  if (!cart.length) {
    box.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cartTotals").innerHTML = "";
    return;
  }

  //render each item with a quantity input and remove button
  box.innerHTML = cart
    .map(
      (i) => `
      <div class="card">
        <div class="pad">
          <h3>${i.title}</h3>
          <p>$${i.price.toFixed(2)} x 
          <input type="number" value="${i.qty}" min="1" class="qty"
          onchange="changeQty(${i.id}, this.value)">
          = $${(i.price * i.qty).toFixed(2)}</p>
          <button class="btn small outline" onclick="removeCart(${i.id})">Remove</button>
        </div>
      </div>`,
    )
    .join("");

  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = sub * 0.13;
  const total = sub + tax;
  document.getElementById("cartTotals").innerHTML =
    `<p>Subtotal: $${sub.toFixed(2)}<br>Tax (13%): $${tax.toFixed(
      2,
    )}<br><strong>Total: $${total.toFixed(2)}</strong></p>`;
}

function changeQty(id, val) {
  const item = cart.find((i) => i.id === id); //updates the item quantity and re-render
  if (item) item.qty = Number(val);
  renderCart(); //new total
}

function removeCart(id) {
  cart = cart.filter((i) => i.id !== id);
  renderCart();
  updateCart();
}

document.getElementById("emptyCart").onclick = () => {
  cart = [];
  renderCart();
  updateCart();
};

document.getElementById("toCheckout").onclick = () => showSection("checkout");

function renderWishlist() {
  const el = document.getElementById("wishItems");
  if (!wishlist.length) {
    el.innerHTML = "<p>No wishlist items.</p>";
    return;
  }

  el.innerHTML = wishlist
    .map((id) => {
      const g = games.find((x) => x.id === id);
      if (!g) return "";
      return `
        <div class="card">
          <div class="thumb">
            <img class="media cover" src="${g.image}" alt="${g.title}">
          </div>
          <div class="pad">
            <h3>${g.title}</h3>
            <p class="meta">${g.category} • ${g.platform}</p>
            <p>$${g.price.toFixed(2)} | ${g.rating}★</p>
            <div class="row">
              <button class="btn small" onclick="addCart(${g.id})">Add to Cart</button>
              <button class="btn small outline" onclick="removeWish(${g.id})">Remove</button>
            </div>
          </div>
        </div>`;
    })
    .join("");
}

function renderProfile() {
  const name = loggedInUser || "Guest";
  document.getElementById("profileAvatar").textContent = name
    .charAt(0)
    .toUpperCase();
  document.getElementById("profileName").textContent = loggedInUser
    ? loggedInUser
    : "Guest User";
  document.getElementById("profileEmail").textContent = loggedInUser
    ? `Logged in as ${loggedInUser}`
    : "Not logged in — visit the Login page";

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const cartValue = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById("statCart").textContent = totalItems;
  document.getElementById("statWish").textContent = wishlist.length;
  document.getElementById("statSpend").textContent = `$${cartValue.toFixed(2)}`;

  const cartEl = document.getElementById("profileCartGames");
  if (!cart.length) {
    cartEl.innerHTML =
      '<p class="profile-empty">No games in your cart yet.</p>';
  } else {
    cartEl.innerHTML = cart
      .map(
        (i) => `
      <div class="profile-game-card">
        <div class="thumb"><img src="${i.image}" alt="${i.title}"></div>
        <div class="pad">
          <h4>${i.title}</h4>
          <p class="meta">Qty: ${i.qty} • $${(i.price * i.qty).toFixed(2)}</p>
        </div>
      </div>`,
      )
      .join("");
  }

  const wishEl = document.getElementById("profileWishGames");
  if (!wishlist.length) {
    wishEl.innerHTML = '<p class="profile-empty">Your wishlist is empty.</p>';
  } else {
    wishEl.innerHTML = wishlist
      .map((id) => {
        const g = games.find((x) => x.id === id);
        if (!g) return "";
        return `
        <div class="profile-game-card">
          <div class="thumb"><img src="${g.image}" alt="${g.title}"></div>
          <div class="pad">
            <h4>${g.title}</h4>
            <p class="meta">${g.category} • $${g.price.toFixed(2)}</p>
          </div>
        </div>`;
      })
      .join("");
  }
}

function removeWish(id) {
  //removes an id from wishlist
  wishlist = wishlist.filter((x) => x !== id);
  renderWishlist();
  updateWishlist();
}

document.getElementById("payForm").onsubmit = (e) => {
  e.preventDefault(); //stops page from reloading

  let valid = true;

  const name = document.getElementById("nameOnCard").value.trim();
  const card = document.getElementById("cardNumber").value.replace(/\s+/g, "");
  const exp = document.getElementById("exp").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const email = document.getElementById("email").value.trim();

  //front-end validation
  if (!name) ((valid = false), (nameErr.textContent = "Required"));
  else nameErr.textContent = "";

  if (!/^\d{16}$/.test(card))
    ((valid = false), (cardErr.textContent = "Must be 16 digits"));
  else cardErr.textContent = "";

  if (!/^\d{2}\/\d{2}$/.test(exp))
    ((valid = false), (expErr.textContent = "Format MM/YY"));
  else expErr.textContent = "";

  if (!/^\d{3,4}$/.test(cvv))
    ((valid = false), (cvvErr.textContent = "3–4 digits only"));
  else cvvErr.textContent = "";

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    ((valid = false), (emailErr.textContent = "Invalid email"));
  else emailErr.textContent = "";

  if (!valid) return;

  document.getElementById("payStatus").textContent = "Processing..."; //simulating
  setTimeout(showReceipt, 1500);
};

function showReceipt() {
  const now = new Date();
  const ordNum =
    "ORD-" +
    now.getFullYear() +
    (now.getMonth() + 1).toString().padStart(2, "0") +
    now.getDate().toString().padStart(2, "0") +
    "-" +
    Math.floor(Math.random() * 9000 + 1000); //order number = date string + random 4 digits.

  const dateStr =
    String(now.getDate()).padStart(2, "0") +
    "/" +
    String(now.getMonth() + 1)
      .toString()
      .padStart(2, "0") +
    "/" +
    now.getFullYear();

  const sub = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const tax = sub * 0.13;
  const total = sub + tax;

  const userEmail = document.getElementById("email").value.trim();

  document.getElementById("receiptMeta").innerHTML = `
    <p>
      <strong>Order Number:</strong> ${ordNum}<br>
      <strong>Order Date:</strong> ${dateStr}<br>
      <strong>Email:</strong> ${userEmail || "Not provided"}
    </p>`;

  document.getElementById("receiptItems").innerHTML = `
    <h3>Ordered Items:</h3>
    ${cart
      .map(
        (i) =>
          `<p>${i.title} × ${i.qty} = $${(i.qty * i.price).toFixed(2)}</p>`,
      )
      .join("")}
  `;

  document.getElementById("receiptTotals").innerHTML = `
    <p>
      Subtotal: $${sub.toFixed(2)}<br>
      Tax (13%): $${tax.toFixed(2)}<br>
      <strong>Total: $${total.toFixed(2)}</strong>
    </p>`;

  showSection("receipt"); //goes to receipt page
  cart = []; //clears cart
  updateCart(); //updates button
}

document.getElementById("printBtn").onclick = () => print(); //print option
document.getElementById("continueBtn").onclick = () => showSection("home"); //continue shopping button sends to home page

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMsg");
  const emailErr = document.getElementById("contactEmailErr");
  const msgErr = document.getElementById("contactMsgErr");
  const statusEl = document.getElementById("contactStatus");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    //clears previous messages.
    emailErr.textContent = "";
    msgErr.textContent = "";
    statusEl.textContent = "";

    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      emailErr.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (!message) {
      msgErr.textContent = "Message cannot be empty.";
      valid = false;
    }

    if (!valid) return;
    statusEl.textContent = "Message sent successfully!";
    contactForm.reset();
  });
}

document.getElementById("newsForm").onsubmit = (e) => {
  e.preventDefault();

  const email = newsEmail.value.trim();
  const message = newsMsg.value.trim();

  let valid = true;

  newsErr.textContent = "";
  newsStatus.textContent = "";

  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    newsErr.textContent = "Please enter a valid email address.";
    valid = false;
  }

  if (!message) {
    newsErr.textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    newsErr.textContent = "";
    newsStatus.textContent = "Thank you for subscribing!";
  }
};

//runs this setup when the website first loads:
loadState(); //update cart and wishlist states
renderHero(); //creates hero carousel
renderRecommended(); //creates recommended grid under hero carousel
showSection("home"); //shows home page first by hiding other pages
initCategoryFilter(); //loads the category dropdown menu so that it is ready for when user clicks on the games page
