// Sample movie data (in a real app, this would come from an API)
const movies = {
    featured: { 
        id: 16,
        title: 'Money Heist',
        description: 'A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain.',
        image: 'https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
        logo: 'https://image.tmdb.org/t/p/original/yV8PgzTbJkvF8WjzOgL8Acwh2VE.png'
    },
    trending: [
        { id: 1, title: 'Stranger Things', image: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg', type: 'tv' },
        { id: 2, title: 'The Witcher', image: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg', type: 'tv' },
        { id: 3, title: 'Dark', image: 'https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg', type: 'tv' },
        { id: 4, title: 'Breaking Bad', image: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg', type: 'tv' },
        { id: 5, title: 'Money Heist', image: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg', type: 'tv' },
    ],
    popular: [
        { id: 6, title: 'The Crown', image: 'https://image.tmdb.org/t/p/w500/uXkGjM6WH2cZGjvZvY6jBxQfXHf.jpg', type: 'tv' },
        { id: 7, title: 'Bridgerton', image: 'https://image.tmdb.org/t/p/w500/qaewZKBKmXjb4ZfFBb1LCug6BE8.jpg', type: 'tv' },
        { id: 8, title: 'Peaky Blinders', image: 'https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg', type: 'tv' },
        { id: 9, title: 'The Queens Gambit', image: 'https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg', type: 'tv' },
        { id: 10, title: 'Ozark', image: 'https://image.tmdb.org/t/p/w500/m73bD8VjibSKuTWg597GQVyVhSb.jpg', type: 'tv' },
    ],
    continue: [
        { id: 11, title: 'Black Mirror', image: 'https://image.tmdb.org/t/p/w500/pZg2NUDPJA54AmDs1Y1ZLizBrpd.jpg', type: 'tv' },
        { id: 12, title: 'Narcos', image: 'https://image.tmdb.org/t/p/w500/rTmal9fDbwh5nEWLtLobwmxfZS9.jpg', type: 'tv' },
        { id: 13, title: 'The Last Kingdom', image: 'https://image.tmdb.org/t/p/w500/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg', type: 'tv' },
        { id: 14, title: 'You', image: 'https://image.tmdb.org/t/p/w500/yxIdKGEjagaLs5kMjw92kAHmopH.jpg', type: 'tv' },
        { id: 15, title: 'Wednesday', image: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg', type: 'tv' },
    ],
    movies: [
        { id: 17, title: 'Inception', image: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg', type: 'movie' },
        { id: 18, title: 'Interstellar', image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', type: 'movie' },
        { id: 19, title: 'The Dark Knight', image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', type: 'movie' },
        { id: 20, title: 'Avengers: Endgame', image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg', type: 'movie' },
        { id: 21, title: 'Joker', image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg', type: 'movie' },
    ],
    newPopular: [
        { id: 22, title: 'The Last of Us', image: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg', type: 'tv' },
        { id: 23, title: 'House of the Dragon', image: 'https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg', type: 'tv' },
        { id: 24, title: 'Avatar: The Way of Water', image: 'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg', type: 'movie' },
        { id: 25, title: 'The Mandalorian', image: 'https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg', type: 'tv' },
        { id: 26, title: 'Top Gun: Maverick', image: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg', type: 'movie' },
    ]
};

// Initialize myList from localStorage or empty array
let myList = JSON.parse(localStorage.getItem('myList')) || [];

// Function to update hero section
function updateHeroSection() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const featuredMovie = movies.featured;

    hero.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8)), url('${featuredMovie.image}')`;
    heroContent.innerHTML = `
        <img src="${featuredMovie.logo}" alt="${featuredMovie.title}" class="hero-logo">
        <p class="hero-description">${featuredMovie.description}</p>
        <div class="hero-buttons">
            <button class="btn btn-play"><i class="fas fa-play"></i> Play</button>
            <button class="btn btn-more"><i class="fas fa-info-circle"></i> More Info</button>
        </div>
    `;
}

// Function to check if a movie is in My List
function isInMyList(movieId) {
    return myList.some(item => item.id === movieId);
}

// Function to toggle movie in My List
function toggleMyList(movie) {
    const index = myList.findIndex(item => item.id === movie.id);
    if (index === -1) {
        myList.push(movie);
    } else {
        myList.splice(index, 1);
    }
    localStorage.setItem('myList', JSON.stringify(myList));
    updateMyListSection();
}

// Function to create a movie card
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card loading';
    
    // Create a wrapper for better image loading handling
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'movie-image-wrapper';
    
    const loadingSkeleton = document.createElement('div');
    loadingSkeleton.className = 'loading-skeleton';
    imageWrapper.appendChild(loadingSkeleton);
    
    const img = new Image();
    img.className = 'movie-poster';
    img.alt = movie.title;
    
    // Set up image loading handlers before setting src
    img.onload = () => {
        card.classList.remove('loading');
        loadingSkeleton.style.display = 'none';
        img.style.opacity = '1';
    };
    
    img.onerror = () => {
        img.src = 'https://via.placeholder.com/230x130/141414/ffffff?text=Unable+to+load';
        card.classList.remove('loading');
        card.classList.add('error');
        loadingSkeleton.style.display = 'none';
    };
    
    // Start loading the image
    img.src = movie.image;
    imageWrapper.appendChild(img);
    
    const movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';
    const isInList = isInMyList(movie.id);
    movieInfo.innerHTML = `
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-controls">
            <button class="movie-btn" title="Play"><i class="fas fa-play"></i></button>
            <button class="movie-btn ${isInList ? 'in-list' : ''}" title="${isInList ? 'Remove from List' : 'Add to List'}"><i class="fas ${isInList ? 'fa-check' : 'fa-plus'}"></i></button>
            <button class="movie-btn" title="Like"><i class="fas fa-thumbs-up"></i></button>
        </div>
    `;
    
    card.appendChild(imageWrapper);
    card.appendChild(movieInfo);

    // Add event listener for Add to List button
    const addToListBtn = movieInfo.querySelector('.movie-btn:nth-child(2)');
    addToListBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMyList(movie);
        const isNowInList = isInMyList(movie.id);
        addToListBtn.classList.toggle('in-list');
        addToListBtn.title = isNowInList ? 'Remove from List' : 'Add to List';
        addToListBtn.innerHTML = `<i class="fas ${isNowInList ? 'fa-check' : 'fa-plus'}"></i>`;
    });

    return card;
}

// Function to update My List section
function updateMyListSection() {
    const mainContent = document.querySelector('.main-content');
    let myListSection = document.querySelector('.my-list-section');
    
    if (myList.length > 0) {
        if (!myListSection) {
            myListSection = document.createElement('section');
            myListSection.className = 'movie-section my-list-section';
            myListSection.innerHTML = `
                <h2 class="section-title">My List</h2>
                <div class="movie-row"></div>
            `;
            mainContent.insertBefore(myListSection, mainContent.firstChild);
        }
        const myListRow = myListSection.querySelector('.movie-row');
        myListRow.innerHTML = '';
        myList.forEach(movie => {
            myListRow.appendChild(createMovieCard(movie));
        });
    } else if (myListSection) {
        myListSection.remove();
    }
}

// Function to filter movies by type
function filterMoviesByType(type) {
    const allMovies = [
        ...movies.trending,
        ...movies.popular,
        ...movies.continue,
        ...movies.movies,
        ...movies.newPopular
    ];
    return type === 'all' ? allMovies : allMovies.filter(movie => movie.type === type);
}

// Function to populate movie rows
function populateMovieRows() {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
    
    // Get active section from navbar
    const activeSection = document.querySelector('.nav-link.active').textContent.toLowerCase();
    
    if (activeSection === 'home') {
        // Add all sections for home page
        const sections = [
            { title: 'Trending Now', data: movies.trending },
            { title: 'Popular on Netflix', data: movies.popular },
            { title: 'Continue Watching', data: movies.continue },
            { title: 'Movies', data: movies.movies },
            { title: 'New & Popular', data: movies.newPopular }
        ];
        
        sections.forEach(section => {
            const sectionElement = document.createElement('section');
            sectionElement.className = 'movie-section';
            sectionElement.innerHTML = `
                <h2 class="section-title">${section.title}</h2>
                <div class="movie-row"></div>
            `;
            const row = sectionElement.querySelector('.movie-row');
            section.data.forEach(movie => {
                row.appendChild(createMovieCard(movie));
            });
            mainContent.appendChild(sectionElement);
        });
    } else {
        // Filter content based on active section
        const filteredMovies = filterMoviesByType(activeSection === 'tv shows' ? 'tv' : 'movie');
        if (activeSection === 'new & popular') {
            const section = document.createElement('section');
            section.className = 'movie-section';
            section.innerHTML = `
                <h2 class="section-title">New & Popular</h2>
                <div class="movie-row"></div>
            `;
            const row = section.querySelector('.movie-row');
            movies.newPopular.forEach(movie => {
                row.appendChild(createMovieCard(movie));
            });
            mainContent.appendChild(section);
        } else {
            const section = document.createElement('section');
            section.className = 'movie-section';
            section.innerHTML = `
                <h2 class="section-title">${activeSection === 'tv shows' ? 'TV Shows' : 'Movies'}</h2>
                <div class="movie-row"></div>
            `;
            const row = section.querySelector('.movie-row');
            filteredMovies.forEach(movie => {
                row.appendChild(createMovieCard(movie));
            });
            mainContent.appendChild(section);
        }
    }
    
    // Update My List section if it exists
    updateMyListSection();
}

// Function to handle navbar background on scroll and navigation
function handleNavbarBackground() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = '#141414';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, transparent)';
        }
    });

    // Add click event listeners to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');
            // Populate content based on selected section
            populateMovieRows();
        });
    });
}

// Function to handle smooth scrolling for movie rows
function initializeMovieRowScrolling() {
    const movieRows = document.querySelectorAll('.movie-row');
    movieRows.forEach(row => {
        let isDown = false;
        let startX;
        let scrollLeft;
        let velocity = 0;
        let rafId = null;

        function momentumScroll() {
            if (Math.abs(velocity) > 0.1) {
                row.scrollLeft += velocity;
                velocity *= 0.95;
                rafId = requestAnimationFrame(momentumScroll);
            }
        }

        row.addEventListener('mousedown', (e) => {
            isDown = true;
            row.style.cursor = 'grabbing';
            startX = e.pageX - row.offsetLeft;
            scrollLeft = row.scrollLeft;
            cancelAnimationFrame(rafId);
        });

        row.addEventListener('touchstart', (e) => {
            isDown = true;
            startX = e.touches[0].pageX - row.offsetLeft;
            scrollLeft = row.scrollLeft;
            cancelAnimationFrame(rafId);
        });

        row.addEventListener('mouseleave', () => {
            isDown = false;
            row.style.cursor = 'grab';
        });

        row.addEventListener('mouseup', () => {
            isDown = false;
            row.style.cursor = 'grab';
            momentumScroll();
        });

        row.addEventListener('touchend', () => {
            isDown = false;
            momentumScroll();
        });

        row.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - row.offsetLeft;
            const walk = (x - startX) * 2;
            velocity = (walk - row.scrollLeft) * 0.1;
            row.scrollLeft = scrollLeft - walk;
        });

        row.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - row.offsetLeft;
            const walk = (x - startX) * 2;
            velocity = (walk - row.scrollLeft) * 0.1;
            row.scrollLeft = scrollLeft - walk;
        });
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    updateHeroSection();
    populateMovieRows();
    handleNavbarBackground();
    initializeMovieRowScrolling();
});