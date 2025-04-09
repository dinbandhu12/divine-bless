// collection data 
const collectionData = [
    {
        id: 1,
        title: "Brass Lord Ganesha Statue",
        description: "Handcrafted brass Ganesha idol with intricate detailing, perfect for home altars or office spaces. The remover of obstacles brings wisdom and prosperity to your space.",
        price: "₹1999.99",
        image: "/assets/p-imgs/1/img-1.jfif"
    },
    {
        id: 2,
        title: "Marble Shiva Lingam",
        description: "Sacred white marble Shiva Lingam with Nandi base, meticulously carved by temple artisans. Ideal for meditation spaces and daily worship.",
        price: "₹1799.99",
        image: "/assets/p-imgs/2/img-1.jfif"
    },
    {
        id: 3,
        title: "Lakshmi-Ganesha Diwali Set",
        description: "Gold-plated Lakshmi and Ganesha statue set for Diwali puja. Brings wealth, prosperity, and auspicious beginnings to your home.",
        price: "₹1299.99",
        image:  "/assets/p-imgs/3/img-1.jfif"
    },
    {
        id: 4,
        title: "Sandstone Buddha Statue",
        description: "Meditating Buddha carved from Rajasthan sandstone, radiating peace and serenity for your garden or living space.",
        price: "₹1499.99",
        image: "/assets/p-imgs/4/img-1.jpeg"
    },
    {
        id: 5,
        title: "Radha Krishna Bronze Murti",
        description: "Divine couple Radha-Krishna in traditional dance pose, cast in Panchaloha bronze (five sacred metals) by South Indian artisans.",
        price: "₹799.99",
        image: "/assets/p-imgs/5/img-1.jfif"
    },
    {
        id: 6,
        title: "Eco-Friendly Ganesha Idol",
        description: "Clay Ganesha idol for visarjan (immersion), made with natural dyes and seeds that grow into plants after dissolution.",
        price: "₹599.99",
        image: "/assets/p-imgs/6/img-1.jfif"
    },
    {
        id: 7,
        title: "Hanuman Chalisa Frame",
        description: "Hand-embossed copper frame containing the sacred Hanuman Chalisa text, with a small Hanuman murti for daily prayers.",
        price: "₹499.99",
        image: "/assets/p-imgs/7/img-1.jfif"
    },
    {
        id: 8,
        title: "Dancing Saraswati Statue",
        description: "Goddess of knowledge in dancing pose, cast in bronze with silver plating. Perfect for students, artists, and music rooms. Each piece is blessed at Varanasi temples.",
        price: "₹1199.99",
        image: "/assets/p-imgs/8/img-1.png"
    },
    {
        id: 9,
        title: "Durga Mahishasura Mardini",
        description: "Fierce Durga slaying the buffalo demon, hand-carved from black granite. Ideal for Navratri celebrations and Shakti worship.",
        price: "₹2499.99",
        image: "/assets/p-imgs/9/img-1.jpeg"
    },
    {
        id: 10,
        title: "Navagraha Planetary Set",
        description: "Complete set of nine planetary deities in brass for Vedic astrological remedies and home temple worship.",
        price: "₹799.99",
        image: "/assets/p-imgs/10/img-1.jpeg"
    },
    {
        id: 11,
        title: "Jain Tirthankara Statue",
        description: "Lord Mahavira in kayotsarga meditation posture, crafted from white marble with gold leaf detailing for Jain home temples.",
        price: "₹359.99",
        image: "/assets/p-imgs/11/img-1.jpeg"
    },
    {
        id: 12,
        title: "Nataraja Cosmic Dance",
        description: "Lord Shiva as Nataraja in traditional Chola bronze style, depicting the cosmic dance of creation and destruction.",
        price: "₹499.99",
        image: "/assets/p-imgs/12/img-1.jpeg"
    },
    {
        id: 13,
        title: "Tibetan Buddhist Thangka",
        description: "Hand-painted silk thangka of Green Tara, blessed by Tibetan monks. Comes with protective brocade frame for meditation spaces.",
        price: "₹399.99",
        image: "/assets/p-imgs/13/img-1.jpeg"
    },
    {
        id: 14,
        title: "Ram Darbar Set",
        description: "Complete Ayodhya royal court with Ram, Sita, Lakshman, and Hanuman in polished brass for daily Ramayana parayana.",
        price: "₹1599.99",
        image: "/assets/p-imgs/14/img-1.jpeg"
    },
    {
        id: 15,
        title: "Guru Nanak Dev Ji",
        description: "Sikhism's founder in meditation, cast in brass with gold plating. Ideal for gurdwara or home seva with included gutka sahib.",
        price: "₹659.99",
        image: "/assets/p-imgs/15/img-1.jpeg"
    },
    {
        id: 16,
        title: "Vrindavan Radha-Krishna",
        description: "Celestial couple on swing (Jhula), crafted from scented sandalwood with pearl inlay for romantic home shrines.",
        price: "₹899.99",
        image: "/assets/p-imgs/16/img-1.jpeg"
    }
];


// showing cards data on webpage 

// define dom elements 
const collectionsGrid = document.getElementById("collectionsGrid");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentPageSpan = document.getElementById("currentPage");
const totalPagesSpan = document.getElementById("totalPages");
// search elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// now init the page means showing the content or card data on webpage 
function initPage() {
    displayItems();
    updatePaginationControls();
    

    // Evnet listeners
    prevBtn.addEventListener('click', goToPreviewPage);
    nextBtn.addEventListener('click', goToNextPage);
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// creating and displying collection cards
function displayItems() {
    collectionsGrid.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = filteredItems.slice(startIndex, endIndex);

    if (itemsToDisplay.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No items match your search. Try different keywords.';
        collectionsGrid.appendChild(noResults);
        return;
    }

    itemsToDisplay.forEach(item => {
        const card = createCard(item);
        collectionsGrid.appendChild(card);
    });
}

// creating a card element for a collection item
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-id', item.id);
    
    card.innerHTML = `
    <div class="all-card-image">
        <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
        <div class="card-content-2">
            <div class="card-top-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
            </div>
            <div class="card-actions">
                <p class="card-price">${formatPrice(item.price)}</p>
                <button class="add-to-cart" data-id="${item.id}">
                    <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>     
    </div>
    `;

    // Add product link directly to the title
    const title = card.querySelector('.card-title');
    if (title) {
        title.addEventListener('click', function() {
            window.location.href = `buy.html?id=${item.id}`;
        });
    }

    // Add like button click handler
    // const likeBtn = card.querySelector('.like-btn');
    // if (likeBtn) {
    //     likeBtn.addEventListener('click', function() {
    //         this.classList.toggle('liked');
    //         const likeIcon = this.querySelector('.like-icon');
    //         if (this.classList.contains('liked')) {
    //             likeIcon.style.fill = '#e21818';
    //         } else {
    //             likeIcon.style.fill = 'none';
    //         }
    //     });
    // }

    // Add cart button click handler - now it will navigate to buy page
    const addToCartBtn = card.querySelector('.add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Navigate to buy page when cart button is clicked
            const itemId = this.getAttribute('data-id');
            window.location.href = `buy.html?id=${itemId}`;
        });
    }
    
    return card;
}

// format pricing to ensure displying
function formatPrice(price) {
    if(typeof price === 'string' && price.startsWith('₹')) {
        return price;
    }
    return `₹${parseFloat(price).toFixed(2)}`;
}

// go to preview page 
function goToPreviewPage() {
    if(currentPage > 1) {
        currentPage--;
        displayItems();
        updatePaginationControls();
        scrollToTop();
    }
}

// go to next page 
function goToNextPage() {
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    if(currentPage < totalPages) {
        currentPage++;
        displayItems();
        updatePaginationControls();
        scrollToTop();
    }
}

// perform search based on input values
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if(searchTerm === '') {
        filteredItems = [...collectionData];
    } else {
        filteredItems = collectionData.filter(item => 
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            formatPrice(item.price).toLowerCase().includes(searchTerm)
        );
    }

    currentPage = 1;
    displayItems();
    updatePaginationControls();
}

// Scroll to top of the grid when changing pages
function scrollToTop() {
    collectionsGrid.scrollIntoView({ behavior: 'smooth' });
}

// update the pagination controls
function updatePaginationControls() {
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
    
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

// Initialize the page when DOM is
const itemsPerPage = 8;
let currentPage = 1;
let filteredItems = [...collectionData];

// init page
document.addEventListener('DOMContentLoaded', initPage);