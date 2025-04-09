// Extended product data
const productsData = {
    1: {
        id: 1,
        title: "Brass Lord Ganesha Statue",
        description: "Handcrafted brass Ganesha idol featuring intricate detailing and a polished finish. Ideal for altars or desks, this statue symbolizes wisdom and prosperity, making it a meaningful addition to any spiritual or decorative space",
        price: "1999.99",
        originalPrice: "2499.99",
        discountPercentage: "20",
        images: [
            "/assets/p-imgs/1/img-1.jfif",
            "/assets/p-imgs/1/img-2.jfif",
            "/assets/p-imgs/1/img-3.jfif",
            "/assets/p-imgs/1/img-4.jfif",
        ],
        details: [
            "Handcrafted in pure brass",
            "Polished antique finish",
            "Symbol of wisdom and prosperity",
            "Ideal for home or office altars",
            "Traditional Indian craftsmanship"
          ]
    },

// upove are trial only

    2: {
        id: 2,
        title: "Marble Shiva Lingam",
        description: "White marble Shiva Lingam with Nandi base, carved by traditional artisans. This sacred piece is perfect for daily worship or meditation, offering a serene and devotional presence in home temples or personal prayer areas.",
        price: "1799.99",
        originalPrice: "119.99",
        discountPercentage: "25",
        images: [
            "/assets/p-imgs/2/img-1.jfif",
            "/assets/p-imgs/2/img-2.jfif",
            "/assets/p-imgs/2/img-3.jfif",
            "/assets/p-imgs/2/img-4.jfif",
        ],
        details: [
            "White Makrana marble",
            "Includes Nandi base",
            "Hand-carved by temple artisans",
            "Suitable for daily worship",
            "Smooth natural stone texture"
          ]
    },
    3: {
        id: 3,
        title: "Lakshmi-Ganesha Diwali Set",
        description: "Gold-plated Lakshmi-Ganesha statue set designed for Diwali rituals. Crafted with care and fine detailing, this divine duo brings wealth, success, and auspicious energy to any sacred or festive setting in your home.",
        price: "1299.99",
        originalPrice: "1599.99",
        discountPercentage: "19",
        images: [
            "/assets/p-imgs/3/img-1.jfif",
            "/assets/p-imgs/3/img-2.jfif",
            "/assets/p-imgs/3/img-3.jfif",
            "/assets/p-imgs/3/img-4.jfif"
        ],
        details: [
            "Gold-plated brass idols",
            "Intricate festive design",
            "Lakshmi and Ganesha set",
            "Perfect for Diwali puja",
            "Compact and altar-ready"
          ]
    },
    4: {
        id: 4,  
        title: "Sandstone Buddha Statue",
        description: "Meditating Buddha statue carved from natural Rajasthan sandstone. This peaceful piece radiates calm and balance, making it perfect for gardens, balconies, or indoor meditation corners where tranquility is cherished",
        price: "1499.99",
        originalPrice: "1899.99",
        discountPercentage: "21",
        images: [
            "/assets/p-imgs/4/img-1.jpeg",
            "/assets/p-imgs/4/img-2.jpeg",
            "/assets/p-imgs/4/img-3.jpeg",
            "/assets/p-imgs/4/img-4.jpeg",
        ],
        details: [
            "Natural Rajasthan sandstone",
            "Serene meditative pose",
            "Weather-resistant for gardens",
            "Smooth hand-finished surface",
            "Promotes peace and calm"
          ]
    },
    5: {
        id: 5,
        title: "Radha Krishna Bronze Murti",
        description: "Radha-Krishna statue in traditional dance posture, cast in Panchaloha bronze. A symbol of divine love and devotion, this piece adds charm and elegance to your puja space or sacred display shelf.",
        price: "799.99",
        originalPrice: "999.99",
        discountPercentage: "20",
        images: [
            "/assets/p-imgs/5/img-1.jfif",
            "/assets/p-imgs/5/img-2.jfif",
            "/assets/p-imgs/5/img-3.jfif",
            "/assets/p-imgs/5/img-4.jfif"
        ],
        details: [
            "Cast in Panchaloha bronze",
            "Radha-Krishna in dance form",
            "Fine South Indian detailing",
            "Represents divine love",
            "Long-lasting metallic finish"
          ]
    },
    6: {
        id: 6,
        title: "Eco-Friendly Ganesha Idol",
        description: "Eco-friendly Ganesha idol crafted from natural clay and organic dyes. Designed for immersion during visarjan, it dissolves into the soil and sprouts plants, promoting sustainability and spiritual connection to nature.",
        price: "599.99",
        originalPrice: "799.99",
        discountPercentage: "25",
        images: [
            "/assets/p-imgs/6/img-1.jfif",
            "/assets/p-imgs/6/img-2.jfif",
            "/assets/p-imgs/6/img-3.jfif",
            "/assets/p-imgs/6/img-4.jfif"
        ],
        details: [
            "Eco-friendly clay material",
            "Natural plant-based dyes",
            "Dissolves in water for visarjan",
            "Contains sprouting seeds",
            "Safe for rivers and soil"
          ]
    },
    7: {
        id: 7,
        title: "Hanuman Chalisa Frame",
        description: "Copper Hanuman Chalisa frame with embossed sacred text and a small Hanuman murti. Ideal for prayer rooms, this piece brings divine protection and serves as a daily spiritual anchor",
        price: "459.99",
        originalPrice: "599.99",
        discountPercentage: "23",
        images: [
            "/assets/p-imgs/7/img-1.jfif",
            "/assets/p-imgs/7/img-2.jfif",
            "/assets/p-imgs/7/img-3.jfif",
            "/assets/p-imgs/7/img-4.jfif"
        ],
        details: [
            "Embossed copper design",
            "Includes Hanuman murti",
            "Sacred Hanuman Chalisa text",
            "Wall-mount or tabletop display",
            "Ideal for daily prayers"
          ]
    },
    8: {
        id: 8,
        title: "Dancing Saraswati Statue",
        description: "Saraswati statue in a dynamic dancing pose, cast in silver-plated bronze. Perfect for students and artists, this idol is blessed in Varanasi and represents knowledge, creativity, and refined craftsmanship.",
        price: "1199.99",
        originalPrice: "1499.99",
        discountPercentage: "20",
        images: [
            "/assets/p-imgs/8/img-1.png",
            "/assets/p-imgs/8/img-2.jpg",
            "/assets/p-imgs/8/img-3.jpg",
            "/assets/p-imgs/8/img-4.jpg"
        ],
        details: [
            "Silver-plated bronze casting",
            "Blessed at Varanasi temples",
            "Dancing Saraswati posture",
            "Inspires creativity and wisdom",
            "Great for students and artists"
          ]
    },
    9: {
        id: 9,
        title: "Durga Mahishasura Mardini",
        description: "Mahishasura Mardini Durga idol carved from solid black granite. Fierce and powerful, this sculpture honors the goddess’s victory over evil, ideal for Navratri or year-round Shakti worship.",
        price: "2499.99",
        originalPrice: "2999.99",
        discountPercentage: "17",
        images: [
            "/assets/p-imgs/9/img-1.jpeg",
            "/assets/p-imgs/9/img-2.jpeg",
            "/assets/p-imgs/9/img-3.jpeg",
            "/assets/p-imgs/9/img-4.jpeg"
        ],
        details: [
            "Hand-carved black granite",
            "Durga slaying Mahishasura",
            "Powerful and fierce form",
            "Great for Navratri worship",
            "Durable stone finish"
          ]
    },
    10: {
        id: 10,
        title: "Navagraha Planetary Set",
        description: "Complete Navagraha set featuring all nine planetary deities in brass. Used in Vedic astrology and rituals, this set brings balance, cosmic harmony, and spiritual alignment to home temples.",
        price: "799.99",
        originalPrice: "999.99",
        discountPercentage: "20",
        images: [
            "/assets/p-imgs/10/img-1.jpeg",
            "/assets/p-imgs/10/img-2.jpeg",
            "/assets/p-imgs/10/img-3.jpeg",
            "/assets/p-imgs/10/img-4.jpeg"
        ],
        details: [
            "Set of 9 brass deities",
            "Includes all planetary gods",
            "Polished golden finish",
            "Used in Vedic rituals",
            "Compact and temple-ready"
          ]
    },
    11: {
        id: 11,
        title: "Jain Tirthankara Statue",
        description: "Jain Tirthankara Mahavira statue in pure white marble with gold accents. A calm, meditative figure ideal for Jain home temples, promoting inner peace, detachment, and spiritual discipline.",
        price: "359.99",
        originalPrice: "499.99",
        discountPercentage: "28",
        images: [
            "/assets/p-imgs/11/img-1.jpeg",
            "/assets/p-imgs/11/img-2.jpeg",
            "/assets/p-imgs/11/img-3.jpeg",
            "/assets/p-imgs/11/img-4.jpeg"
        ],
        details: [
            "White marble with gold detailing",
            "Tirthankara Mahavira posture",
            "Ideal for Jain altars",
            "Symbol of spiritual detachment",
            "Smooth and elegant finish"
          ]
    },
    12: {
        id: 12,
        title: "Nataraja Cosmic Dance",
        description: "Shiva Nataraja idol in cosmic dance form, cast in traditional Chola bronze style. Symbolizing the cycle of creation and destruction, it is a stunning and symbolic centerpiece for sacred décor.",
        price: "499.99",
        originalPrice: "699.99",
        discountPercentage: "28",
        images: [
            "/assets/p-imgs/12/img-1.jpeg",
            "/assets/p-imgs/12/img-2.jpeg",
            "/assets/p-imgs/12/img-3.jpeg"
        ],
        details: [
            "Chola-style bronze casting",
            "Shiva in cosmic dance",
            "Symbol of universal rhythm",
            "Traditional South Indian design",
            "Perfect for sacred décor"
          ]
    },
    13: {
        id: 13,
        title: "Tibetan Buddhist Thangka",
        description: "Tibetan Green Tara thangka hand-painted on silk and framed in protective brocade. Blessed by monks, it serves as a meditation aid and sacred art piece for spiritual seekers and collectors.",
        price: "399.99",
        originalPrice: "499.99",
        discountPercentage: "20",
        images: [
            "/assets/p-imgs/13/img-1.jpeg",
            "/assets/p-imgs/13/img-2.jpeg",
            "/assets/p-imgs/13/img-3.jpeg",
            "/assets/p-imgs/13/img-4.jpeg"
        ],
        details: [
            "Silk thangka with brocade",
            "Green Tara hand-painted icon",
            "Blessed by Tibetan monks",
            "Comes with protective scroll frame",
            "Ideal for meditation rooms"
          ]
    },
    14: {
        id: 14,
        title: "Ram Darbar Set",
        description: "Ram Darbar brass set with Ram, Sita, Lakshman, and Hanuman. Reflecting the royal court of Ayodhya, this piece is perfect for Ramayana parayana and devotional home worship",
        price: "1599.99",
        originalPrice: "1999.99",
        discountPercentage: "20",
        images: [
            "/assets/p-imgs/14/img-1.jpeg",
            "/assets/p-imgs/14/img-2.jpeg",
            "/assets/p-imgs/14/img-3.jpeg",
            "/assets/p-imgs/14/img-4.jpeg"
        ],
        details: [
            "Polished brass idols",
            "Includes Ram, Sita, Lakshman, Hanuman",
            "Ayodhya royal court design",
            "Perfect for Ramayana worship",
            "Compact and detailed finish"
          ]
    },
    15: {
        id: 15,
        title: "Guru Nanak Dev Ji",
        description: "Guru Nanak Dev Ji idol in meditative posture, crafted from gold-plated brass. Includes a gutka sahib booklet and is ideal for gurdwara offerings or peaceful home devotion.",
        price: "659.99",
        originalPrice: "899.99",
        discountPercentage: "26",
        images: [
            "/assets/p-imgs/15/img-1.jpeg",
            "/assets/p-imgs/15/img-2.jpeg",
            "/assets/p-imgs/15/img-3.jpeg",
            "/assets/p-imgs/15/img-4.jpeg"
        ],
        details: [
            "Gold-plated brass statue",
            "Guru Nanak in seated form",
            "Includes gutka sahib booklet",
            "Ideal for gurdwara or home",
            "Spiritual and cultural icon"
          ]
    },
    16: {
        id: 16,
        title: "Vrindavan Radha-Krishna",
        description: "Radha-Krishna on a sandalwood swing with delicate pearl inlay. A fragrant and romantic piece, it brings beauty, divinity, and craftsmanship into your home shrine or gifting occasion.",
        price: "899.99",
        originalPrice: "1199.99",
        discountPercentage: "25",
        images: [
            "/assets/p-imgs/16/img-1.jpeg",
            "/assets/p-imgs/16/img-2.jpeg",
            "/assets/p-imgs/16/img-3.jpeg",
            "/assets/p-imgs/16/img-4.jpeg"
        ],
        details: [
            "Sandalwood carving with pearl inlay",
            "Radha-Krishna on swing (Jhula)",
            "Delicate fragrance and finish",
            "Perfect for romantic shrines",
            "Handcrafted devotional décor"
          ]
    }
};




// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    // if productId is not valid, redirect to collections page
    if (!productId || !productsData[productId]) {
        alert('Product not found');
        window.location.href = 'collections.html';
        return;
    }

    const product = productsData[productId];
    
    // Populate product details
    populateProductDetails(product);
    
    // Setup thumbnails
    setupThumbnails(product);
    
    // Generate recommendations
    generateRecommendations(productId);
    
    // Add to cart functionality
    document.querySelector('.add-to-cart-btn').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value);
        if (quantity > 0) {
            alert(`Added ${quantity} ${product.title} to cart!`);
        } else {
            alert('Please select a valid quantity');
        }
    });
    
    // Buy now functionality
    document.querySelector('.buy-now-btn').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value);
        if (quantity > 0) {
            alert(`Proceeding to checkout with ${quantity} ${product.title}...`);
        } else {
            alert('Please select a valid quantity');
        }
    });
});

// Populate all product details on the page
function populateProductDetails(product) {
    document.title = product.title + " - Product Details";
    
    // Set product title and description
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productDescription').textContent = product.description;
    
    // Set product prices
    const priceElement = document.getElementById('productPrice');
    priceElement.textContent = `₹${parseFloat(product.price).toFixed(2)}`;
    
    const originalPrice = document.getElementById('originalPrice');
    originalPrice.textContent = product.originalPrice;
    originalPrice.parentElement.style.display = product.originalPrice ? 'inline' : 'none';
    
    const discount = document.getElementById('discountPercentage');
    discount.textContent = product.discountPercentage;
    discount.parentElement.style.display = product.discountPercentage ? 'inline' : 'none';
    
    // Set main product image
    const mainImage = document.getElementById('mainImage');
    mainImage.src = product.images[0];
    mainImage.alt = product.title;
    
    // Add thumbnail images
    const thumbnails = document.querySelectorAll('.thumbnail img');
    thumbnails.forEach((thumbnail, index) => {
        if (product.images[index]) {
            thumbnail.src = product.images[index];
            thumbnail.alt = `${product.title} - Image ${index + 1}`;
        }
    });
    
    // Populate product details list
    const detailsList = document.getElementById('productDetails');
    detailsList.innerHTML = '';
    product.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
}

// Setup thumbnail image switching
function setupThumbnails(product) {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach((thumbnail, index) => {
        // Skip if no image exists for this index
        if (!product.images[index]) return;
        
        thumbnail.addEventListener('click', function() {
            // Update active thumbnail
            document.querySelector('.thumbnail.active').classList.remove('active');
            this.classList.add('active');
            
            // Update main image
            mainImage.src = product.images[index];
            mainImage.alt = `${product.title} - Image ${index + 1}`;
        });
    });
}

// Generate product recommendations
function generateRecommendations(currentProductId) {
    const recommendationsGrid = document.getElementById('recommendationsGrid');
    recommendationsGrid.innerHTML = '';
    
    // Get all products except the current one
    const allProducts = Object.values(productsData).filter(p => p.id !== currentProductId);
    
    // Shuffle and take first 4 products
    const recommendations = shuffleArray(allProducts).slice(0, 4);
    
    // Add recommendation cards to the grid
    recommendations.forEach(product => {
        const card = createRecommendationCard(product);
        recommendationsGrid.appendChild(card);
    });
}

// Create a recommendation card element
function createRecommendationCard(product) {
    const card = document.createElement('div');
    card.className = 'recommendation-card';
    card.setAttribute('data-id', product.id);
    
    card.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" loading="lazy">
        <div class="recommendation-content">
            <h3 class="recommendation-title">${product.title}</h3>
            <p class="recommendation-price">₹${parseFloat(product.price).toFixed(2)}</p>
        </div>
    `;
    
    // Add click event to navigate to the product page
    card.addEventListener('click', function() {
        window.location.href = `buy.html?id=${product.id}`;
    });
    
    return card;
}

// Helper function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}