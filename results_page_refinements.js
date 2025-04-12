// Book recommendation data
const bookRecommendations = {
    primal: {
        title: "Urban Tantra",
        author: "Barbara Carrellas",
        summary: "Explore sacred sensuality, kink, and body-based Tantra.",
        coverUrl: "https://m.media-amazon.com/images/I/71JUQkrUOQL._SY466_.jpg",
        purchaseUrl: "https://www.amazon.com/Urban-Tantra-Second-Edition-Hierodules/dp/0399579680/"
    },
    heart: {
        title: "Acupressure for Lovers",
        author: "Michael Reed Gach",
        summary: "Learn to unlock intimacy and energy through healing touch.",
        coverUrl: "https://m.media-amazon.com/images/I/51WBHT94YVL._SY466_.jpg",
        purchaseUrl: "https://www.amazon.com/Acupressure-Lovers-Gach-Michael-Reed/dp/0553374001/"
    },
    mind: {
        title: "From Sex to Superconsciousness",
        author: "Osho",
        summary: "Discover how sexuality can be transformed into spiritual energy.",
        coverUrl: "https://m.media-amazon.com/images/I/71Yk8-ZXPSL._SY466_.jpg",
        purchaseUrl: "https://www.amazon.com/Sex-Matters-Superconsciousness-Osho/dp/0312180993/"
    },
    energetic: {
        male: {
            title: "The Multi-Orgasmic Man",
            author: "Mantak Chia",
            summary: "Master sexual energy cultivation and multiple orgasms for men.",
            coverUrl: "https://m.media-amazon.com/images/I/71Yk8-ZXPSL._SY466_.jpg",
            purchaseUrl: "https://www.amazon.com/Multi-Orgasmic-Man-Sexual-Secrets-Should/dp/0062513362/"
        },
        female: {
            title: "The Multi-Orgasmic Woman",
            author: "Mantak Chia",
            summary: "Discover techniques for multiple orgasms and sexual energy cultivation.",
            coverUrl: "https://m.media-amazon.com/images/I/61NRPG9AARL._SY466_.jpg",
            purchaseUrl: "https://www.amazon.com/Multi-Orgasmic-Woman-Discover-Fullest-Pleasure/dp/0061898074/"
        }
    }
};

// Growth areas by archetype
const growthAreas = {
    primal: [
        "Developing deeper emotional connections during intimacy",
        "Exploring the mental and spiritual dimensions of sexuality",
        "Finding balance between physical desires and other aspects of sexuality"
    ],
    heart: [
        "Embracing raw passion and primal desires",
        "Developing comfort with sexual expression outside of emotional contexts",
        "Finding balance between giving and receiving"
    ],
    mind: [
        "Developing deeper embodiment and physical presence",
        "Balancing thinking with feeling and sensing",
        "Letting go of overthinking during intimate encounters"
    ],
    energetic: [
        "Grounding spiritual experiences in the physical body",
        "Balancing transcendent aspects with emotional connection",
        "Avoiding spiritual bypassing of physical or emotional aspects"
    ]
};

// Modified displayArchetypeResults function
function displayArchetypeResults() {
    const dominantArchetype = sacredQuizState.results.dominantArchetype;
    const archetypeData = sacredQuizData.archetypeDescriptions[dominantArchetype];
    const archetypes = sacredQuizState.results.archetypes;
    
    // Find the weakest archetype
    let weakestArchetype = 'primal';
    let lowestScore = archetypes.primal;
    
    if (archetypes.heart < lowestScore) {
        weakestArchetype = 'heart';
        lowestScore = archetypes.heart;
    }
    if (archetypes.mind < lowestScore) {
        weakestArchetype = 'mind';
        lowestScore = archetypes.mind;
    }
    if (archetypes.energetic < lowestScore) {
        weakestArchetype = 'energetic';
        lowestScore = archetypes.energetic;
    }
    
    // Store the weakest archetype in the results
    sacredQuizState.results.weakestArchetype = weakestArchetype;
    
    // Create horizontal bar chart with percentages on the right
    sacredElements.barChartContainer.innerHTML = `
        <h3>Your Archetype Distribution</h3>
        <div style="margin: 30px 0; position: relative;">
            <div class="sacred-bar-container" style="width: 90%;">
                <div class="sacred-bar sacred-primal-bar" style="width: ${archetypes.primal}%;">
                    <span class="sacred-bar-label">Primal</span>
                </div>
                <span class="sacred-bar-value">${archetypes.primal}%</span>
            </div>
            
            <div class="sacred-bar-container" style="width: 90%;">
                <div class="sacred-bar sacred-heart-bar" style="width: ${archetypes.heart}%;">
                    <span class="sacred-bar-label">Heart</span>
                </div>
                <span class="sacred-bar-value">${archetypes.heart}%</span>
            </div>
            
            <div class="sacred-bar-container" style="width: 90%;">
                <div class="sacred-bar sacred-mind-bar" style="width: ${archetypes.mind}%;">
                    <span class="sacred-bar-label">Mind</span>
                </div>
                <span class="sacred-bar-value">${archetypes.mind}%</span>
            </div>
            
            <div class="sacred-bar-container" style="width: 90%;">
                <div class="sacred-bar sacred-energetic-bar" style="width: ${archetypes.energetic}%;">
                    <span class="sacred-bar-label">Energetic</span>
                </div>
                <span class="sacred-bar-value">${archetypes.energetic}%</span>
            </div>
        </div>
    `;
    
    // Display archetype description with title
    sacredElements.resultDescription.innerHTML = `
        <h2 class="sacred-result-title">You Are ${capitalizeFirstLetter(dominantArchetype)}-Dominant</h2>
        <p>${archetypeData.description}</p>
        
        <h3>Strengths:</h3>
        <ul>
            ${archetypeData.strengths.map(strength => `<li>${strength}</li>`).join('')}
        </ul>
        
        <h3 class="sacred-growth-areas-title">🌿 Growth Areas:</h3>
        <ul class="sacred-growth-areas-list">
            ${growthAreas[dominantArchetype].map(area => `<li>${area}</li>`).join('')}
        </ul>
    `;
    
    // Get book recommendations
    const dominantBook = getDominantBookRecommendation(dominantArchetype);
    const growthBook = getGrowthBookRecommendation(weakestArchetype);
    
    // Create book recommendations section
    const bookRecommendationsHTML = `
        <div class="sacred-book-recommendations">
            <div class="sacred-book-section">
                <h3 class="sacred-book-section-title">🎯 Go Deeper</h3>
                <div class="sacred-book-container">
                    <div class="sacred-book-cover">
                        <img src="${dominantBook.coverUrl}" alt="${dominantBook.title} cover" class="sacred-book-image">
                    </div>
                    <div class="sacred-book-details">
                        <h4 class="sacred-book-title">${dominantBook.title}</h4>
                        <p class="sacred-book-author">by ${dominantBook.author}</p>
                        <p class="sacred-book-summary">"${dominantBook.summary}"</p>
                        <a href="${dominantBook.purchaseUrl}" target="_blank" class="sacred-book-link">Get the Book</a>
                    </div>
                </div>
            </div>
            
            <div class="sacred-book-section">
                <h3 class="sacred-book-section-title">🌱 Your Growth Edge</h3>
                <div class="sacred-book-container">
                    <div class="sacred-book-cover">
                        <img src="${growthBook.coverUrl}" alt="${growthBook.title} cover" class="sacred-book-image">
                    </div>
                    <div class="sacred-book-details">
                        <h4 class="sacred-book-title">${growthBook.title}</h4>
                        <p class="sacred-book-author">by ${growthBook.author}</p>
                        <p class="sacred-book-summary">"${growthBook.summary}"</p>
                        <a href="${growthBook.purchaseUrl}" target="_blank" class="sacred-book-link">Get the Book</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Create call to action section
    const callToActionHTML = `
        <div class="sacred-cta-section">
            <h3 class="sacred-cta-title">🎓 Ready to Go Deeper?</h3>
            <div class="sacred-cta-buttons">
                <a href="https://www.honors-yoga.com/tantra-teacher-training" target="_blank" class="sacred-cta-button">Take the Tantra Teacher Training</a>
                <a href="https://www.honors-yoga.com/tantra-for-couples" target="_blank" class="sacred-cta-button">💞 Explore Tantra for Couples</a>
            </div>
        </div>
    `;
    
    // Insert book recommendations and call to action after the result description
    sacredElements.resultDescription.insertAdjacentHTML('afterend', bookRecommendationsHTML + callToActionHTML);
}

// Helper function to get dominant book recommendation
function getDominantBookRecommendation(archetype) {
    if (archetype === 'energetic') {
        // For energetic archetype, we should ideally ask for gender
        // For now, we'll default to the male version
        return bookRecommendations.energetic.male;
    }
    return bookRecommendations[archetype];
}

// Helper function to get growth book recommendation
function getGrowthBookRecommendation(archetype) {
    if (archetype === 'energetic') {
        // For energetic archetype, we should ideally ask for gender
        // For now, we'll default to the male version
        return bookRecommendations.energetic.male;
    }
    return bookRecommendations[archetype];
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add these styles to the CSS
const additionalStyles = `
/* Book recommendations styles */
.sacred-book-recommendations {
    margin: 40px 0;
}

.sacred-book-section {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #f2e9e4;
    border-radius: 8px;
}

.sacred-book-section-title {
    margin-bottom: 20px;
    color: #9c6644;
    font-size: 2.2rem;
}

.sacred-book-container {
    display: flex;
    align-items: flex-start;
}

.sacred-book-cover {
    flex: 0 0 120px;
    margin-right: 20px;
}

.sacred-book-image {
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.sacred-book-details {
    flex: 1;
}

.sacred-book-title {
    margin: 0 0 5px;
    font-size: 1.8rem;
    color: #333;
}

.sacred-book-author {
    margin: 0 0 10px;
    font-style: italic;
    color: #666;
    font-size: 1.4rem;
}

.sacred-book-summary {
    margin-bottom: 15px;
    font-size: 1.5rem;
}

.sacred-book-link {
    display: inline-block;
    padding: 8px 16px;
    background-color: #d4a373;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: bold;
    transition: background-color 0.3s;
}

.sacred-book-link:hover {
    background-color: #9c6644;
}

/* Call to action styles */
.sacred-cta-section {
    margin: 40px 0;
    padding: 30px;
    background-color: #f2e9e4;
    border-radius: 8px;
    text-align: center;
}

.sacred-cta-title {
    margin-bottom: 20px;
    color: #9c6644;
    font-size: 2.2rem;
}

.sacred-cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    margin: 0 auto;
}

.sacred-cta-button {
    display: block;
    padding: 15px 20px;
    background-color: #d4a373;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1.6rem;
    transition: background-color 0.3s, transform 0.2s;
}

.sacred-cta-button:hover {
    background-color: #9c6644;
    transform: translateY(-2px);
}

/* Result title styles */
.sacred-result-title {
    font-size: 3rem;
    color: #9c6644;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Playfair Display', Georgia, serif;
}

/* Growth areas styles */
.sacred-growth-areas-title {
    color: #9c6644;
    margin-top: 30px;
    font-size: 2.2rem;
}

.sacred-growth-areas-list li {
    margin-bottom: 10px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .sacred-book-container {
        flex-direction: column;
    }
    
    .sacred-book-cover {
        margin-right: 0;
        margin-bottom: 15px;
        max-width: 150px;
    }
}
`;
