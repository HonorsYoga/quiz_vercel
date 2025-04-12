// Updated script to handle yes/no questions and fix quiz flow issues
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired");
    
    // DOM Elements
    const sacredElements = {
        welcomeContainer: document.querySelector('.sacred-intro'),
        quizContainer: document.querySelector('.sacred-questions'),
        resultsContainer: document.querySelector('.sacred-results'),
        questionContainer: document.getElementById('sacred-question-container'),
        scaleContainer: document.createElement('div'),
        yesNoContainer: document.createElement('div'),
        categoryHeader: document.getElementById('sacred-category-title'),
        nextButton: document.getElementById('sacred-next-button'),
        prevButton: document.getElementById('sacred-prev-button'),
        progressBar: document.querySelector('.sacred-progress-bar'),
        progressText: document.querySelector('.sacred-progress-text'),
        beginButton: document.getElementById('sacred-start-button'),
        currentQuestionSpan: document.getElementById('sacred-current-question'),
        totalQuestionsSpan: document.getElementById('sacred-total-questions')
    };

    // Create scale container if it doesn't exist
    sacredElements.scaleContainer.id = 'sacred-scale-container';
    sacredElements.scaleContainer.className = 'sacred-scale-container';
    sacredElements.scaleContainer.innerHTML = `
        <div class="sacred-number-scale">
            <div class="sacred-number-labels">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>
            <input type="range" min="1" max="10" value="5" class="sacred-scale-slider" id="sacred-scale">
            <div id="sacred-selected-value" class="sacred-selected-value">Selected: 5</div>
        </div>
    `;
    
    // Create yes/no container
    sacredElements.yesNoContainer.id = 'sacred-yesno-container';
    sacredElements.yesNoContainer.className = 'sacred-yesno-container';
    sacredElements.yesNoContainer.innerHTML = `
        <button class="sacred-yesno-button" data-value="yes">Yes</button>
        <button class="sacred-yesno-button" data-value="no">No</button>
    `;
    
    // Add containers to question container
    sacredElements.questionContainer.appendChild(sacredElements.scaleContainer);
    sacredElements.questionContainer.appendChild(sacredElements.yesNoContainer);
    
    // Initially hide both input types
    sacredElements.scaleContainer.style.display = 'none';
    sacredElements.yesNoContainer.style.display = 'none';

    // Quiz state
    let currentQuestionIndex = 0;
    let allQuestions = [];
    let userResponses = {};
    
    // Combine all questions into a single array
    function initializeQuiz() {
        allQuestions = [
            ...quizData.primalQuestions.map(q => ({...q, header: '🔥 Primal Archetype 🔥'})),
            ...quizData.heartQuestions.map(q => ({...q, header: '❤️ Heart Archetype ❤️'})),
            ...quizData.mindQuestions.map(q => ({...q, header: '🧠 Mind Archetype 🧠'})),
            ...quizData.energeticQuestions.map(q => ({...q, header: '⚡️ Energetic/Psychic Archetype ⚡️'})),
            ...quizData.orgasmicQuestions.map(q => ({...q, header: '✨ Orgasmic Living Test ✨'}))
        ];
        
        // Update total questions count
        sacredElements.totalQuestionsSpan.textContent = allQuestions.length;
    }

    // Display current question
    function displayQuestion(index) {
        if (!allQuestions || allQuestions.length === 0 || index < 0 || index >= allQuestions.length) {
            console.error("Invalid question index or questions not initialized");
            return;
        }
        
        const question = allQuestions[index];
        
        // Create a paragraph for the question text
        sacredElements.questionContainer.innerHTML = `<p class="sacred-question-text">${question.text}</p>`;
        
        // Re-append the input containers after clearing the question text
        sacredElements.questionContainer.appendChild(sacredElements.scaleContainer);
        sacredElements.questionContainer.appendChild(sacredElements.yesNoContainer);
        
        // Set the category header
        sacredElements.categoryHeader.innerHTML = question.header;
        
        // Update progress bar
        const progress = ((index + 1) / allQuestions.length) * 100;
        sacredElements.progressBar.style.width = `${progress}%`;
        
        // Update progress text
        sacredElements.currentQuestionSpan.textContent = index + 1;
        
        // Show/hide prev button based on index
        sacredElements.prevButton.style.display = index === 0 ? 'none' : 'inline-block';
        
        // Update next button text on last question
        sacredElements.nextButton.textContent = index === allQuestions.length - 1 ? 'See Results' : 'Next';
        
        // Show appropriate input type based on question type
        if (question.type === 'yesno') {
            sacredElements.scaleContainer.style.display = 'none';
            sacredElements.yesNoContainer.style.display = 'flex';
            
            // Add glossary link for orgasmic questions
            if (question.category === 'orgasmic') {
                const glossaryLinkContainer = document.createElement('p');
                glossaryLinkContainer.className = 'sacred-glossary-link-container';
                glossaryLinkContainer.innerHTML = '<a href="glossary.html" target="_blank" class="sacred-glossary-link">View Orgasmic Living Glossary</a>';
                
                // Only add if it doesn't already exist
                if (!document.querySelector('.sacred-question-container .sacred-glossary-link-container')) {
                    sacredElements.questionContainer.appendChild(glossaryLinkContainer);
                }
            } else {
                // Remove glossary link if not an orgasmic question
                const existingLink = document.querySelector('.sacred-question-container .sacred-glossary-link-container');
                if (existingLink) {
                    existingLink.remove();
                }
            }
            
            // Reset button states
            const yesNoButtons = sacredElements.yesNoContainer.querySelectorAll('.sacred-yesno-button');
            yesNoButtons.forEach(button => {
                button.classList.remove('selected-yes', 'selected-no');
                
                // If user has already answered this question, show their selection
                if (userResponses[index] !== undefined) {
                    if (button.dataset.value === 'yes' && userResponses[index] === true) {
                        button.classList.add('selected-yes');
                    } else if (button.dataset.value === 'no' && userResponses[index] === false) {
                        button.classList.add('selected-no');
                    }
                }
            });
        } else {
            sacredElements.yesNoContainer.style.display = 'none';
            sacredElements.scaleContainer.style.display = 'block';
            
            // Reset scale value
            const scaleSlider = document.getElementById('sacred-scale');
            const selectedValue = document.getElementById('sacred-selected-value');
            
            // If user has already answered this question, show their selection
            if (userResponses[index] !== undefined) {
                scaleSlider.value = userResponses[index];
            } else {
                scaleSlider.value = 5; // Default to middle value
            }
            
            selectedValue.textContent = `Selected: ${scaleSlider.value}`;
        }
    }

    // Calculate results
    function calculateResults() {
        // Initialize scores
        const scores = {
            primal: 0,
            heart: 0,
            mind: 0,
            energetic: 0,
            orgasmic: 0
        };
        
        let primalCount = 0;
        let heartCount = 0;
        let mindCount = 0;
        let energeticCount = 0;
        let orgasmicCount = 0;
        let orgasmicYesCount = 0;
        let orgasmicTotalCount = 0;
        
        // Calculate scores for each category
        allQuestions.forEach((question, index) => {
            if (userResponses[index] !== undefined) {
                if (question.category === 'primal') {
                    scores.primal += parseInt(userResponses[index]);
                    primalCount++;
                } else if (question.category === 'heart') {
                    scores.heart += parseInt(userResponses[index]);
                    heartCount++;
                } else if (question.category === 'mind') {
                    scores.mind += parseInt(userResponses[index]);
                    mindCount++;
                } else if (question.category === 'energetic') {
                    scores.energetic += parseInt(userResponses[index]);
                    energeticCount++;
                } else if (question.category === 'orgasmic') {
                    if (question.type === 'yesno') {
                        // For yes/no questions, true = 10 points, false = 0 points
                        scores.orgasmic += userResponses[index] ? 10 : 0;
                        orgasmicYesCount += userResponses[index] ? 1 : 0;
                        orgasmicTotalCount++;
                    } else {
                        // For scale questions, use the value directly
                        scores.orgasmic += parseInt(userResponses[index]);
                        orgasmicCount++;
                    }
                }
            }
        });
        
        // Calculate averages - ensure we're using proper number conversion and handling NaN
        const primalAvg = primalCount > 0 ? Math.round((scores.primal / primalCount) * 10) / 10 : 0;
        const heartAvg = heartCount > 0 ? Math.round((scores.heart / heartCount) * 10) / 10 : 0;
        const mindAvg = mindCount > 0 ? Math.round((scores.mind / mindCount) * 10) / 10 : 0;
        const energeticAvg = energeticCount > 0 ? Math.round((scores.energetic / energeticCount) * 10) / 10 : 0;
        
        // Ensure orgasmicTotalCount is not zero to avoid division by zero
        const orgasmicPercentage = orgasmicTotalCount > 0 ? Math.round((orgasmicYesCount / orgasmicTotalCount) * 100) : 0;
        
        // Determine dominant archetype
        const archetypes = [
            { name: 'Primal', score: primalAvg },
            { name: 'Heart', score: heartAvg },
            { name: 'Mind', score: mindAvg },
            { name: 'Energetic/Psychic', score: energeticAvg }
        ];
        
        archetypes.sort((a, b) => b.score - a.score);
        
        // Determine orgasmic category
        let orgasmicCategory = '';
        let orgasmicDescription = '';
        let orgasmicRecommendations = [];
        
        if (orgasmicPercentage < 20) {
            orgasmicCategory = 'Beginner Orgasmic Explorer';
            orgasmicDescription = 'You\'re at the beginning of your orgasmic journey. Your experiences have been primarily focused on conventional forms of orgasm, if any. There\'s a vast world of orgasmic potential waiting for you to discover.';
            orgasmicRecommendations = [
                'Focus on self-pleasure and self-discovery without pressure',
                'Explore basic breath work and body awareness practices',
                'Learn about different types of orgasms through reading and education'
            ];
        } else if (orgasmicPercentage < 40) {
            orgasmicCategory = 'Developing Orgasmic Adventurer';
            orgasmicDescription = 'You\'ve begun to explore beyond conventional orgasmic experiences and are discovering new possibilities. You\'re opening up to the diversity of pleasure your body can experience.';
            orgasmicRecommendations = [
                'Practice mindful masturbation techniques',
                'Experiment with different types of stimulation',
                'Incorporate breath and sound to enhance pleasure'
            ];
        } else if (orgasmicPercentage < 60) {
            orgasmicCategory = 'Intermediate Orgasmic Practitioner';
            orgasmicDescription = 'You have a solid foundation in orgasmic experiences and have explored multiple pathways to pleasure. You understand that orgasm is more than just a physical release.';
            orgasmicRecommendations = [
                'Explore energy circulation techniques during arousal',
                'Practice extending the duration of your orgasmic states',
                'Experiment with non-genital orgasmic triggers'
            ];
        } else if (orgasmicPercentage < 80) {
            orgasmicCategory = 'Advanced Orgasmic Alchemist';
            orgasmicDescription = 'You have significant experience with diverse orgasmic states and can access different types of orgasms. You understand how to channel sexual energy and use it creatively.';
            orgasmicRecommendations = [
                'Develop practices to circulate orgasmic energy throughout your entire body',
                'Explore the connection between orgasm and spiritual experiences',
                'Learn to share expanded orgasmic states with partners'
            ];
        } else {
            orgasmicCategory = 'Master Orgasmic Sage';
            orgasmicDescription = 'You have mastered multiple orgasmic pathways and can access expanded states of pleasure with ease. Your orgasmic experiences transcend the physical and connect to spiritual dimensions.';
            orgasmicRecommendations = [
                'Share your wisdom through teaching or mentoring others',
                'Explore the most subtle and transcendent forms of orgasmic experience',
                'Integrate your orgasmic mastery with your life purpose'
            ];
        }
        
        return {
            archetypes,
            orgasmicPercentage,
            orgasmicCategory,
            orgasmicDescription,
            orgasmicRecommendations
        };
    }

    // Display results
    function displayResults() {
        const results = calculateResults();
        
        // Hide quiz, show results
        sacredElements.quizContainer.style.display = 'none';
        sacredElements.resultsContainer.style.display = 'block';
        
        // Display archetype results
        const archetypeResults = document.getElementById('sacred-bar-chart-container');
        archetypeResults.innerHTML = `
            <h3>Your Archetype Distribution</h3>
            <div style="margin: 30px 0; position: relative;">
                <div class="sacred-bar-container" style="width: 90%;">
                    <div class="sacred-bar sacred-primal-bar" style="width: ${Math.round(results.archetypes.find(a => a.name === 'Primal').score * 10)}%">
                        <span class="sacred-bar-label" style="color: black;">Primal</span>
                    </div>
                    <span class="sacred-bar-value">${Math.round(results.archetypes.find(a => a.name === 'Primal').score * 10)}%</span>
                </div>
                
                <div class="sacred-bar-container" style="width: 90%;">
                    <div class="sacred-bar sacred-heart-bar" style="width: ${Math.round(results.archetypes.find(a => a.name === 'Heart').score * 10)}%">
                        <span class="sacred-bar-label" style="color: black;">Heart</span>
                    </div>
                    <span class="sacred-bar-value">${Math.round(results.archetypes.find(a => a.name === 'Heart').score * 10)}%</span>
                </div>
                
                <div class="sacred-bar-container" style="width: 90%;">
                    <div class="sacred-bar sacred-mind-bar" style="width: ${Math.round(results.archetypes.find(a => a.name === 'Mind').score * 10)}%">
                        <span class="sacred-bar-label" style="color: black;">Mind</span>
                    </div>
                    <span class="sacred-bar-value">${Math.round(results.archetypes.find(a => a.name === 'Mind').score * 10)}%</span>
                </div>
                
                <div class="sacred-bar-container" style="width: 90%;">
                    <div class="sacred-bar sacred-energetic-bar" style="width: ${Math.round(results.archetypes.find(a => a.name === 'Energetic/Psychic').score * 10)}%">
                        <span class="sacred-bar-label" style="color: black;">Energetic/Psychic</span>
                    </div>
                    <span class="sacred-bar-value">${Math.round(results.archetypes.find(a => a.name === 'Energetic/Psychic').score * 10)}%</span>
                </div>
            </div>
        `;
        
        // Update the dominant archetype section
        const dominantArchetype = results.archetypes[0].name;
        const secondaryArchetype = results.archetypes[1].name;
        const resultDescription = document.getElementById('sacred-result-description');
        const weakestArchetype = results.archetypes[3].name;
        
        // Clear the result description to rebuild in the correct order
        resultDescription.innerHTML = '';
        
        // 1. Your Dominant Archetype
        resultDescription.innerHTML += `
            <h3>Your Dominant Archetype</h3>
            <p>Your dominant archetype is <strong>${dominantArchetype}</strong> with secondary influences from ${secondaryArchetype}.</p>
        `;
        
        // Add personalized archetype description
        let archetypeDescription = '';
        if (dominantArchetype === 'Heart') {
            archetypeDescription = "You are most aligned with the Heart archetype. You lead with love, crave connection, and tend to feel everything deeply. Your path is to open without losing your boundaries.";
        } else if (dominantArchetype === 'Primal') {
            archetypeDescription = "You are most aligned with the Primal archetype. You lead with your body, crave intensity, and tend to be deeply connected to your physical desires. Your path is to embrace your raw power while maintaining awareness.";
        } else if (dominantArchetype === 'Mind') {
            archetypeDescription = "You are most aligned with the Mind archetype. You lead with your thoughts, crave intellectual stimulation, and tend to analyze your experiences. Your path is to balance thinking with feeling in your sexuality.";
        } else if (dominantArchetype === 'Energetic/Psychic') {
            archetypeDescription = "You are most aligned with the Energetic/Psychic archetype. You lead with your energy awareness, crave spiritual connection, and tend to experience sexuality as a transcendent force. Your path is to ground your spiritual experiences in your body.";
        }
        
        resultDescription.innerHTML += `
            <p class="sacred-archetype-description">${archetypeDescription}</p>
        `;
        
        // 2. Strengths
        resultDescription.innerHTML += `
            <h3>Strengths:</h3>
            <ul id="sacred-strengths-list">
                <li>Loading strengths...</li>
            </ul>
        `;
        
        // 3. Go Deeper (Book recommendation for dominant archetype)
        // Dominant archetype book recommendation
        let dominantBookTitle = '';
        let dominantBookImage = '';
        let dominantBookDescription = '';
        let dominantBookLink = 'https://www.amazon.com/s?k=';
        
        if (dominantArchetype === 'Heart') {
            dominantBookTitle = "Acupressure for Lovers";
            dominantBookImage = "acupressure for lovers.jpg";
            dominantBookDescription = "Learn how to use touch to deepen intimacy and connection with your partner.";
            dominantBookLink += "acupressure+for+lovers+michael+reed+gach";
        } else if (dominantArchetype === 'Primal') {
            dominantBookTitle = "Urban Tantra";
            dominantBookImage = "51NJc5AZ9cL._AC_UF1000,1000_QL80_.jpg";
            dominantBookDescription = "Explore sacred sexuality in a modern context with practical techniques for embodied pleasure.";
            dominantBookLink += "urban+tantra+barbara+carrellas";
        } else if (dominantArchetype === 'Energetic/Psychic') {
            if (Math.random() > 0.5) {
                dominantBookTitle = "The Multi-Orgasmic Man";
                dominantBookImage = "multi orgasmic man.jpg";
                dominantBookDescription = "Discover techniques for male sexual energy cultivation and multiple orgasms.";
                dominantBookLink += "multi+orgasmic+man+mantak+chia";
            } else {
                dominantBookTitle = "The Multi-Orgasmic Woman";
                dominantBookImage = "multi orgasmic woman.jpeg";
                dominantBookDescription = "Learn practices for female sexual energy cultivation and expanded orgasmic potential.";
                dominantBookLink += "multi+orgasmic+woman+mantak+chia";
            }
        } else if (dominantArchetype === 'Mind') {
            dominantBookTitle = "From Sex to Superconsciousness";
            dominantBookImage = "91ItLoQcIqL._AC_UF1000,1000_QL80_.jpg";
            dominantBookDescription = "Explore the philosophical and spiritual dimensions of sexuality as a path to higher consciousness.";
            dominantBookLink += "from+sex+to+superconsciousness+osho";
        }
        
        resultDescription.innerHTML += `
            <div class="sacred-book-section">
                <h3>🎯 Go Deeper</h3>
                <div class="sacred-book-container">
                    <div class="sacred-book-cover">
                        <img src="${dominantBookImage}" alt="${dominantBookTitle}" class="sacred-book-image">
                    </div>
                    <div class="sacred-book-details">
                        <h4 class="sacred-book-title">${dominantBookTitle}</h4>
                        <p class="sacred-book-summary">${dominantBookDescription}</p>
                        <a href="${dominantBookLink}" target="_blank" class="sacred-book-link">Find on Amazon</a>
                    </div>
                </div>
            </div>
        `;
        
        // 4. Growth Edge (Book recommendation for weakest archetype)
        // Weakest archetype book recommendation
        let weakestBookTitle = '';
        let weakestBookImage = '';
        let weakestBookDescription = '';
        let weakestBookLink = 'https://www.amazon.com/s?k=';
        
        if (weakestArchetype === 'Heart') {
            weakestBookTitle = "Acupressure for Lovers";
            weakestBookImage = "acupressure for lovers.jpg";
            weakestBookDescription = "Learn how to use touch to deepen intimacy and connection with your partner.";
            weakestBookLink += "acupressure+for+lovers+michael+reed+gach";
        } else if (weakestArchetype === 'Primal') {
            weakestBookTitle = "Urban Tantra";
            weakestBookImage = "51NJc5AZ9cL._AC_UF1000,1000_QL80_.jpg";
            weakestBookDescription = "Explore sacred sexuality in a modern context with practical techniques for embodied pleasure.";
            weakestBookLink += "urban+tantra+barbara+carrellas";
        } else if (weakestArchetype === 'Energetic/Psychic') {
            if (Math.random() > 0.5) {
                weakestBookTitle = "The Multi-Orgasmic Man";
                weakestBookImage = "multi orgasmic man.jpg";
                weakestBookDescription = "Discover techniques for male sexual energy cultivation and multiple orgasms.";
                weakestBookLink += "multi+orgasmic+man+mantak+chia";
            } else {
                weakestBookTitle = "The Multi-Orgasmic Woman";
                weakestBookImage = "multi orgasmic woman.jpeg";
                weakestBookDescription = "Learn practices for female sexual energy cultivation and expanded orgasmic potential.";
                weakestBookLink += "multi+orgasmic+woman+mantak+chia";
            }
        } else if (weakestArchetype === 'Mind') {
            weakestBookTitle = "From Sex to Superconsciousness";
            weakestBookImage = "91ItLoQcIqL._AC_UF1000,1000_QL80_.jpg";
            weakestBookDescription = "Explore the philosophical and spiritual dimensions of sexuality as a path to higher consciousness.";
            weakestBookLink += "from+sex+to+superconsciousness+osho";
        }
        
        resultDescription.innerHTML += `
            <div class="sacred-book-section">
                <h3>🌱 Your Growth Edge</h3>
                <div class="sacred-book-container">
                    <div class="sacred-book-cover">
                        <img src="${weakestBookImage}" alt="${weakestBookTitle}" class="sacred-book-image">
                    </div>
                    <div class="sacred-book-details">
                        <h4 class="sacred-book-title">${weakestBookTitle}</h4>
                        <p class="sacred-book-summary">${weakestBookDescription}</p>
                        <a href="${weakestBookLink}" target="_blank" class="sacred-book-link">Find on Amazon</a>
                    </div>
                </div>
            </div>
        `;
        
        // 5. Growth Areas
        resultDescription.innerHTML += `
            <h3 class="sacred-growth-areas-title">🌿 Growth Areas:</h3>
            <ul id="sacred-growth-areas-list" class="sacred-growth-areas-list">
                <li>Loading growth areas...</li>
            </ul>
        `;
        }
        
        archetypeResults.innerHTML += `
            <div class="sacred-book-section">
                <h3>🎯 Go Deeper: Recommended Reading for Your ${dominantArchetype} Archetype</h3>
                <div class="sacred-book-container">
                    <div class="sacred-book-cover">
                        <img src="${dominantBookImage}" alt="${dominantBookTitle}" class="sacred-book-image">
                    </div>
                    <div class="sacred-book-details">
                        <h4 class="sacred-book-title">${dominantBookTitle}</h4>
                        <p class="sacred-book-summary">${dominantBookDescription}</p>
                        <a href="${dominantBookLink}" target="_blank" class="sacred-book-link">Find on Amazon</a>
                    </div>
                </div>
            </div>
            
            <div class="sacred-book-section">
                <h3>🌱 Your Growth Edge: Support for Your ${weakestArchetype} Archetype</h3>
                <div class="sacred-book-container">
                    <div class="sacred-book-cover">
                        <img src="${weakestBookImage}" alt="${weakestBookTitle}" class="sacred-book-image">
                    </div>
                    <div class="sacred-book-details">
                        <h4 class="sacred-book-title">${weakestBookTitle}</h4>
                        <p class="sacred-book-summary">${weakestBookDescription}</p>
                        <a href="${weakestBookLink}" target="_blank" class="sacred-book-link">Find on Amazon</a>
                    </div>
                </div>
            </div>
        `;
        
        // Update the "Your Results" section with strengths and growth areas
        let dominantArchetypeLower = dominantArchetype.toLowerCase();
        if (dominantArchetypeLower === 'energetic/psychic') {
            dominantArchetypeLower = 'energetic';
        }
        
        // Get the strengths for the dominant archetype
        const archetypeData = sacredQuizData.archetypeDescriptions[dominantArchetypeLower];
        
        if (archetypeData) {
            // Update strengths list
            const strengthsList = document.getElementById('sacred-strengths-list');
            strengthsList.innerHTML = archetypeData.strengths.map(strength => `<li>${strength}</li>`).join('');
            
            // Update growth areas based on the weakest archetype
            const weakestArchetype = results.archetypes[3].name;
            const weakestArchetypeLower = weakestArchetype.toLowerCase();
            let growthAreas = [];
            
            if (weakestArchetypeLower === 'primal' || weakestArchetypeLower === 'primal archetype') {
                growthAreas = [
                    "Connecting more deeply with your physical body and sensations",
                    "Allowing yourself to express raw desire and passion",
                    "Embracing the animal nature within your sexuality",
                    "Practicing being more present in your body during sexual experiences"
                ];
            } else if (weakestArchetypeLower === 'heart' || weakestArchetypeLower === 'heart archetype') {
                growthAreas = [
                    "Developing greater emotional intimacy during sexual experiences",
                    "Practicing vulnerability and authentic expression with partners",
                    "Cultivating deeper heart connection during intimate moments",
                    "Balancing physical pleasure with emotional connection"
                ];
            } else if (weakestArchetypeLower === 'mind' || weakestArchetypeLower === 'mind archetype') {
                growthAreas = [
                    "Exploring fantasy and creative expression in your sexuality",
                    "Developing greater conscious awareness during sexual experiences",
                    "Learning to articulate your desires and boundaries clearly",
                    "Engaging the power of imagination to enhance pleasure"
                ];
            } else {
                // Energetic/Psychic
                growthAreas = [
                    "Exploring the spiritual dimensions of your sexuality",
                    "Learning to sense and circulate sexual energy throughout your body",
                    "Developing awareness of subtle energetic exchanges during intimacy",
                    "Practicing techniques to expand orgasmic energy beyond physical release"
                ];
            }
            
            // Update growth areas list
            const growthAreasList = document.getElementById('sacred-growth-areas-list');
            growthAreasList.innerHTML = growthAreas.map(area => `<li>${area}</li>`).join('');
        }
        
        // Display orgasmic living score in the dedicated section
        const orgasmicResults = document.getElementById('sacred-orgasmic-results');
        
        // Update orgasmic score section
        const orgasmicScoreValue = document.getElementById('sacred-orgasmic-score-value');
        orgasmicScoreValue.textContent = `${results.orgasmicPercentage}%`;
        
        // Update category indicators
        document.getElementById('sacred-category-beginner').classList.remove('active');
        document.getElementById('sacred-category-developing').classList.remove('active');
        document.getElementById('sacred-category-intermediate').classList.remove('active');
        document.getElementById('sacred-category-advanced').classList.remove('active');
        document.getElementById('sacred-category-master').classList.remove('active');
        
        if (results.orgasmicPercentage < 20) {
            document.getElementById('sacred-category-beginner').classList.add('active');
        } else if (results.orgasmicPercentage < 40) {
            document.getElementById('sacred-category-developing').classList.add('active');
        } else if (results.orgasmicPercentage < 60) {
            document.getElementById('sacred-category-intermediate').classList.add('active');
        } else if (results.orgasmicPercentage < 80) {
            document.getElementById('sacred-category-advanced').classList.add('active');
        } else {
            document.getElementById('sacred-category-master').classList.add('active');
        }
        
        // Update category title and description
        document.getElementById('sacred-orgasmic-category-title').textContent = results.orgasmicCategory;
        document.getElementById('sacred-orgasmic-description-text').textContent = results.orgasmicDescription;
        
        // Update recommendations
        const recommendationsList = document.getElementById('sacred-orgasmic-recommendations-list');
        recommendationsList.innerHTML = results.orgasmicRecommendations.map(rec => `<li>${rec}</li>`).join('');
        
        // Add restart button (only if it doesn't already exist)
        const existingRestartButton = document.querySelector('.sacred-restart-button');
        if (!existingRestartButton) {
            const restartButton = document.createElement('button');
            restartButton.textContent = 'Retake Quiz';
            restartButton.className = 'sacred-restart-button sacred-button';
            restartButton.addEventListener('click', () => {
                // Reset quiz state
                currentQuestionIndex = 0;
                userResponses = {};
                
                // Show welcome screen
                sacredElements.resultsContainer.style.display = 'none';
                sacredElements.welcomeContainer.style.display = 'block';
            });
            
            sacredElements.resultsContainer.appendChild(restartButton);
        }
    }

    // Event listeners
    console.log("Setting up event listeners");
    console.log("Begin button:", sacredElements.beginButton);
    
    // Direct DOM query as fallback
    const startButton = document.getElementById('sacred-start-button');
    console.log("Direct query for start button:", startButton);
    
    // Use both references to ensure the event is attached
    if (sacredElements.beginButton) {
        console.log("Adding event listener to sacredElements.beginButton");
        sacredElements.beginButton.addEventListener('click', function() {
            console.log("Begin button clicked via sacredElements reference");
            // Initialize quiz
            initializeQuiz();
            
            // Hide welcome, show quiz
            sacredElements.welcomeContainer.style.display = 'none';
            sacredElements.quizContainer.style.display = 'block';
            
            // Display first question
            displayQuestion(currentQuestionIndex);
        });
    }
    
    // Add event listener directly to the button as a fallback
    if (startButton) {
        console.log("Adding event listener directly to startButton");
        startButton.addEventListener('click', function() {
            console.log("Begin button clicked via direct reference");
            // Initialize quiz
            initializeQuiz();
            
            // Hide welcome, show quiz
            document.querySelector('.sacred-intro').style.display = 'none';
            document.querySelector('.sacred-questions').style.display = 'block';
            
            // Display first question
            if (typeof displayQuestion === 'function') {
                displayQuestion(0);
            } else {
                console.error("displayQuestion function not available");
            }
        });
    }
    
    if (sacredElements.nextButton) {
        sacredElements.nextButton.addEventListener('click', () => {
            // Check if user has answered current question
            if (userResponses[currentQuestionIndex] === undefined) {
                // If using yes/no buttons, default to "no"
                if (allQuestions[currentQuestionIndex].type === 'yesno') {
                    userResponses[currentQuestionIndex] = false;
                } else {
                    // If using scale, use current slider value
                    const scaleSlider = document.getElementById('sacred-scale');
                    userResponses[currentQuestionIndex] = scaleSlider.value;
                }
            }
            
            // Check if last question
            if (currentQuestionIndex === allQuestions.length - 1) {
                // Show results
                displayResults();
            } else {
                // Go to next question
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex);
            }
        });
    }
    
    if (sacredElements.prevButton) {
        sacredElements.prevButton.addEventListener('click', () => {
            // Go to previous question
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion(currentQuestionIndex);
            }
        });
    }
    
    // Scale slider event
    document.addEventListener('input', function(e) {
        if (e.target && e.target.id === 'sacred-scale') {
            const selectedValue = document.getElementById('sacred-selected-value');
            selectedValue.textContent = `Selected: ${e.target.value}`;
            
            // Store response
            userResponses[currentQuestionIndex] = e.target.value;
        }
    });
    
    // Yes/No buttons event
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('sacred-yesno-button')) {
            const yesNoButtons = sacredElements.yesNoContainer.querySelectorAll('.sacred-yesno-button');
            
            // Remove selected class from all buttons
            yesNoButtons.forEach(button => {
                button.classList.remove('selected-yes', 'selected-no');
            });
            
            // Add selected class to clicked button
            if (e.target.dataset.value === 'yes') {
                e.target.classList.add('selected-yes');
                userResponses[currentQuestionIndex] = true;
            } else {
                e.target.classList.add('selected-no');
                userResponses[currentQuestionIndex] = false;
            }
        }
    });
    
    // Email button event handler
    const emailButton = document.getElementById('sacred-email-button');
    const emailInput = document.getElementById('sacred-email-input');
    const emailMessage = document.getElementById('sacred-email-message');
    
    if (emailButton) {
        emailButton.addEventListener('click', function() {
            // Validate email
            const email = emailInput.value.trim();
            if (!email || !isValidEmail(email)) {
                emailMessage.textContent = 'Please enter a valid email address.';
                emailMessage.style.display = 'block';
                emailMessage.style.color = '#e74c3c';
                return;
            }
            
            // Get quiz results
            const results = calculateResults();
            
            // Prepare email content
            const emailContent = {
                to: email,
                subject: 'Your Sacred Sexuality Quiz Results',
                results: results,
                archetypes: {
                    primal: Math.round(results.archetypes.find(a => a.name === 'Primal').score * 10),
                    heart: Math.round(results.archetypes.find(a => a.name === 'Heart').score * 10),
                    mind: Math.round(results.archetypes.find(a => a.name === 'Mind').score * 10),
                    energetic: Math.round(results.archetypes.find(a => a.name === 'Energetic/Psychic').score * 10)
                },
                dominantArchetype: results.archetypes[0].name,
                secondaryArchetype: results.archetypes[1].name,
                orgasmicPercentage: results.orgasmicPercentage,
                orgasmicCategory: results.orgasmicCategory
            };
            
            // Send email using EmailJS service
            emailjs.send('service_id', 'template_id', emailContent)
                .then(function(response) {
                    console.log('Email sent successfully:', response);
                    emailMessage.textContent = 'Results sent! Check your inbox.';
                    emailMessage.style.display = 'block';
                    emailMessage.style.color = '#2ecc71';
                }, function(error) {
                    console.error('Email sending failed:', error);
                    emailMessage.textContent = 'There was an error sending your results. Please try again.';
                    emailMessage.style.display = 'block';
                    emailMessage.style.color = '#e74c3c';
                });
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add EmailJS script if not already present
    if (!document.getElementById('emailjs-sdk')) {
        const emailJsScript = document.createElement('script');
        emailJsScript.id = 'emailjs-sdk';
        emailJsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        document.head.appendChild(emailJsScript);
        
        emailJsScript.onload = function() {
            // Initialize EmailJS with your user ID
            emailjs.init("YOUR_USER_ID");
        };
    }
});
