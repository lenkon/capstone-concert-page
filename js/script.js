const header = document.getElementById('header-container');
const menu = document.getElementById('hamburger-menu');
const menuShow = document.getElementById('menu-show');
const mainBody = document.getElementById('main');
const menuClose = document.getElementById('menu-close');
const menuList = document.querySelectorAll('.menu-item');

// Mobile menu
const openMenu = () => {
  menuShow.classList.add('show-menu');
  menuShow.style.display = 'block';
  header.classList.add('blur-filter');
  menu.classList.add('blur-filter');
  mainBody.classList.add('blur-filter');
};

const closeMenu = () => {
  menuShow.classList.remove('show-menu');
  menuShow.style.display = 'none';
  header.classList.remove('blur-filter');
  menu.classList.remove('blur-filter');
  mainBody.classList.remove('blur-filter');
};

menu.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

menuList.forEach((item) => {
  item.addEventListener('click', closeMenu);
});

// Artist Details
const artistDetails = [
  {
    image: './images/Justin Bieber.png',
    alt: 'justin bieber image',
    name: 'Justin Bieber',
    genres: 'Pop, Post-teen pop, Canadian pop',
    description: 'Justin Drew Bieber is a Canadian pop musician, actor, and singer-songwriter. Bieber was discovered in 2008 by American talent manager Scooter Braun.',
  },

  {
    image: './images/bad-bunny.png',
    alt: 'bad bunny image',
    name: 'Bad Bunny',
    genres: 'Latin, Reggaeton, Trap latino',
    description: 'Bad Bunny is a Puerto Rican singer, rapper, and producer based out of San Juan. His musical style is defined as Latin trap and reggaeton.',
  },

  {
    image: './images/Ed-Sheeran.png',
    alt: 'ed sheeran image',
    name: 'Ed Sheeran',
    genres: 'Pop, Uk pop',
    description: 'Edward Christopher "Ed" Sheeran is a singer songwriter currently signed under Atlantic (WMG).',
  },

  {
    image: './images/drake.png',
    alt: 'drake image',
    name: 'Drake',
    genres: 'Hip Hop, Rap, Pop rap, Canadian pop, Canadian hip hop, Toronto rap',
    description: 'Aubrey Drake Graham is a Canadian rapper, singer, songwriter, record producer, actor, and businessman.',
  },

  {
    image: './images/Rihanna_Fenty_2018.png',
    alt: 'rihanna image',
    name: 'Rihanna',
    genres: 'Dance pop, Urban contemporary, R&b, Pop, Post-teen pop',
    description: 'Robyn Rihanna Fenty is a Bajan singer. Her song "Umbrella" was one of the highest-selling songs of 2007.',
  },

  {
    image: 'images/Harry-Styles.png',
    alt: 'harry styles image',
    name: 'Harry Styles',
    genres: 'Pop, Post-teen pop',
    description: 'Harry Edward Styles is an English singer, songwriter, and actor. As a member of the British boy band One Direction, singer Harry Styles topped the charts.',
  },
]
// Create featured artists details
const featuredContainer = document.getElementById('container');

const createArtistDetails = (item) => {
  const card = document.createElement('div');
  card.classList.add('artist-sizing');  
  const innerHtml = `
    <div class="artist-item-container">
      <div class="col-md-6 artist-image">
        <img src="${item.image}" alt="${item.alt}">
      </div>
      <div class="card-content">
        <h6 class="artist-name">${item.name}</h6>
        <p class="genres">${item.genres}</p>
        <p class="artist-desc">${item.description}</p>
      </div>
    </div>`;
  card.innerHTML = innerHtml;
  featuredContainer.classList.add('container');
  featuredContainer.appendChild(card);  
};

artistDetails.forEach((item) => createArtistDetails(item));
