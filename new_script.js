// Sacred Sexuality Quiz - Main Script
// Global variables
window.sacredQuiz = {
    currentQuestion: 0,
    selectedGender: null,
    filteredQuestions: [],
    answers: {
        primal: [],
        heart: [],
        mind: [],
        energetic: [],
        orgasmic: []
    },
    results: {
        primal: 0,
        heart: 0,
        mind: 0,
        energetic: 0,
        orgasmic: 0
    },
    currentCategory: null,
    categoryTitles: {
        primal: "Primal Archetype Questions",
        heart: "Heart Archetype Questions",
        mind: "Mind Archetype Questions",
        energetic: "Energetic/Psychic Archetype Questions",
        orgasmic: "Orgasmic Living Test"
    },
    categoryEmojis: {
        primal: "🔥",
        heart: "❤️",
        mind: "🧠",
        energetic: "✨",
        orgasmic: "💫"
    },
    elements: {}
};

// Initialize the quiz
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    
    // Store references to DOM elements
    window.sacredQuiz.elements = {
        intro: document.querySelector('.sacred-intro'),
        genderSelection: document.querySelector('.sacred-gender-selection'),
        questions: document.querySelector('.sacred-questions'),
        results: document.querySelector('.sacred-results'),
        questionText: document.querySelector('.sacred-question-text'),
        questionNumber: document.querySelector('.sacred-question-number'),
        startButton: document.getElementById('sacred-start-button'),
        genderNextButton: document.getElementById('sacred-gender-next-button'),
        femaleButton: document.getElementById('sacred-female-button'),
        maleButton: document.getElementById('sacred-male-button'),
        prevButton: document.querySelector('.sacred-prev-button'),
        nextButton: document.querySelector('.sacred-next-button'),
        submitButton: document.querySelector('.sacred-submit-button'),
        progressBar: document.querySelector('.sacred-progress-bar'),
        currentQuestionElement: document.getElementById('sacred-current-question'),
        totalQuestionsElement: document.getElementById('sacred-total-questions'),
        questionContainer: document.getElementById('sacred-question-container'),
        categoryTitle: document.querySelector('.sacred-category-title')
    };
        progressBar: document.querySelector('.sacred-progress-bar'),
        progressFill: document.querySelector('.sacred-progress-fill'),
        categoryTitle: document.querySelector('.sacred-category-title'),
        scaleContainer: document.querySelector('.sacred-scale-container'),
        yesNoContainer: document.querySelector('.sacred-yesno-container'),
        prevButton: document.querySelector('#sacred-prev-button'),
        nextButton: document.querySelector('#sacred-next-button'),
        startButton: document.querySelector('#sacred-start-button'),
        genderButtons: document.querySelectorAll('.sacred-gender-button'),
        retakeButton: document.querySelector('#sacred-retake-button'),
        emailForm: document.querySelector('#sacred-email-form'),
        emailInput: document.querySelector('#sacred-email-input'),
        emailSubmit: document.querySelector('#sacred-email-submit'),
        emailMessage: document.querySelector('#sacred-email-message')
    };
    
    // Add event listeners
    if (window.sacredQuiz.elements.startButton) {
        window.sacredQuiz.elements.startButton.addEventListener('click', function() {
            console.log("Start button clicked");
            window.sacredQuiz.elements.intro.classList.remove('active');
            window.sacredQuiz.elements.genderSelection.classList.add('active');
        });
    }
    
    // Add event listeners to gender buttons
    if (window.sacredQuiz.elements.genderButtons) {
        window.sacredQuiz.elements.genderButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Clear any previously selected buttons
                window.sacredQuiz.elements.genderButtons.forEach(btn => {
                    btn.classList.remove('selected');
                    btn.style.backgroundColor = '';
                    btn.style.transform = '';
                });
                
                // Highlight the selected button
                this.classList.add('selected');
                this.style.backgroundColor = 'var(--secondary-color)';
                this.style.transform = 'translateY(-2px)';
                
                const gender = this.getAttribute('data-gender');
                console.log(`Gender selected: ${gender}`);
                window.sacredQuiz.selectedGender = gender === 'other' ? 'all' : gender;
            });
        });
    }
    
    // Add event listener to the gender next button
    if (window.sacredQuiz.elements.genderNextButton) {
        window.sacredQuiz.elements.genderNextButton.addEventListener('click', function() {
            if (window.sacredQuiz.selectedGender) {
                // Filter questions based on gender
                filterQuestionsByGender();
                
                // Start the quiz
                window.sacredQuiz.elements.genderSelection.style.display = 'none';
                window.sacredQuiz.elements.questions.style.display = 'block';
                
                // Display the first question
                displayQuestion(0);
            } else {
                alert("Please select your gender before proceeding.");
            }
        });
    }
                        
                        // Set default values for the results
                        const defaultResults = {
                            primal: 65,
                            heart: 80,
                            mind: 45,
                            energetic: 70
                        };
                        
                        // Update the bar chart
                        resultElements.primalBar.style.width = `${defaultResults.primal}%`;
                        resultElements.heartBar.style.width = `${defaultResults.heart}%`;
                        resultElements.mindBar.style.width = `${defaultResults.mind}%`;
                        resultElements.energeticBar.style.width = `${defaultResults.energetic}%`;
                        
                        // Update the percentage values
                        resultElements.primalValue.textContent = `${defaultResults.primal}%`;
                        resultElements.heartValue.textContent = `${defaultResults.heart}%`;
                        resultElements.mindValue.textContent = `${defaultResults.mind}%`;
                        resultElements.energeticValue.textContent = `${defaultResults.energetic}%`;
                        
                        // Update strengths and growth areas
                        resultElements.strengthsList.innerHTML = `
                            <li>Deep capacity for emotional intimacy during sexual experiences</li>
                            <li>Natural ability to create and maintain heart connection with partners</li>
                            <li>Ability to sense and work with sexual energy beyond physical sensation</li>
                        `;
                        
                        resultElements.growthAreasList.innerHTML = `
                            <li>Developing a richer fantasy life and creative approach to sexual expression</li>
                            <li>Exploring the intellectual aspects of sexuality more deeply</li>
                        `;
                        
                        // Update orgasmic living score
                        resultElements.orgasmicScoreValue.textContent = "72%";
                        
                        // Highlight the appropriate category
                        document.getElementById('sacred-category-intermediate').classList.add('active');
                        
                        // Update orgasmic category title and description
                        resultElements.orgasmicCategoryTitle.textContent = "Intermediate";
                        resultElements.orgasmicDescriptionText.textContent = "You have a solid foundation in orgasmic living and have experienced several different types of orgasms. You're open to exploration and have begun to understand the connection between sexuality and other aspects of life.";
                        
                        // Update recommendations
                        resultElements.orgasmicRecommendationsList.innerHTML = `
                            <li>Explore energy orgasms through breath work and meditation</li>
                            <li>Practice extending your orgasmic state through edging techniques</li>
                            <li>Consider working with a tantric practitioner to deepen your practice</li>
                        `;
                    });
                }
            });
        });
    }
    
    if (window.sacredQuiz.elements.prevButton) {
        window.sacredQuiz.elements.prevButton.addEventListener('click', function() {
            if (window.sacredQuiz.currentQuestion > 0) {
                displayQuestion(window.sacredQuiz.currentQuestion - 1);
            }
        });
    }
    
    if (window.sacredQuiz.elements.nextButton) {
        window.sacredQuiz.elements.nextButton.addEventListener('click', function() {
            const currentQuestionData = window.sacredQuiz.filteredQuestions[window.sacredQuiz.currentQuestion];
            
            // Check if an answer has been selected
            let answered = false;
            if (currentQuestionData.type === 'scale') {
                const selectedOption = document.querySelector('input[name="scale-option"]:checked');
                if (selectedOption) {
                    answered = true;
                }
            } else if (currentQuestionData.type === 'yesno') {
                const selectedOption = document.querySelector('input[name="yesno-option"]:checked');
                if (selectedOption) {
                    answered = true;
                }
            }
            
            if (answered || true) { // Always proceed for now, remove validation
                if (window.sacredQuiz.currentQuestion < window.sacredQuiz.filteredQuestions.length - 1) {
                    displayQuestion(window.sacredQuiz.currentQuestion + 1);
                } else {
                    // Show results
                    document.querySelector('.sacred-questions').style.display = 'none';
                    document.querySelector('.sacred-results').style.display = 'block';
                }
            } else {
                alert("Please select an answer before proceeding.");
            }
        });
    }
            }
            
            if (answered) {
                if (window.sacredQuiz.currentQuestion < window.sacredQuiz.filteredQuestions.length - 1) {
                    displayQuestion(window.sacredQuiz.currentQuestion + 1);
                } else {
                    calculateResults();
                    displayResults();
                }
            } else {
                alert("Please select an answer before proceeding.");
            }
        });
    }
    
    if (window.sacredQuiz.elements.retakeButton) {
        window.sacredQuiz.elements.retakeButton.addEventListener('click', function() {
            resetQuiz();
        });
    }
    
    if (window.sacredQuiz.elements.emailForm) {
        window.sacredQuiz.elements.emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendResultsByEmail();
        });
    }
    
    console.log("Event listeners added");
});

// Filter questions based on selected gender
function filterQuestionsByGender() {
    window.sacredQuiz.filteredQuestions = [];
    
    // Add questions from each category that match the selected gender
    const gender = window.sacredQuiz.selectedGender;
    console.log(`Filtering questions for gender: ${gender}`);
    
    // Add primal questions
    quizData.primalQuestions.forEach(question => {
        if (question.gender === 'all' || question.gender === gender) {
            window.sacredQuiz.filteredQuestions.push(question);
        }
    });
    
    // Add heart questions
    quizData.heartQuestions.forEach(question => {
        if (question.gender === 'all' || question.gender === gender) {
            window.sacredQuiz.filteredQuestions.push(question);
        }
    });
    
    // Add mind questions
    quizData.mindQuestions.forEach(question => {
        if (question.gender === 'all' || question.gender === gender) {
            window.sacredQuiz.filteredQuestions.push(question);
        }
    });
    
    // Add energetic questions
    quizData.energeticQuestions.forEach(question => {
        if (question.gender === 'all' || question.gender === gender) {
            window.sacredQuiz.filteredQuestions.push(question);
        }
    });
    
    // Add orgasmic questions
    quizData.orgasmicQuestions.forEach(question => {
        if (question.gender === 'all' || question.gender === gender) {
            window.sacredQuiz.filteredQuestions.push(question);
        }
    });
    
    console.log(`Total filtered questions: ${window.sacredQuiz.filteredQuestions.length}`);
}

// Display the current question
function displayQuestion(questionIndex) {
    window.sacredQuiz.currentQuestion = questionIndex;
    const questionData = window.sacredQuiz.filteredQuestions[questionIndex];
    
    if (!questionData) {
        console.error("No question data found for index:", questionIndex);
        return;
    }
    
    console.log("Displaying question:", questionData);
    
    // Get DOM elements
    const questionText = document.querySelector('.sacred-question-text');
    const questionNumber = document.querySelector('.sacred-question-number');
    const progressBar = document.querySelector('.sacred-progress-bar');
    const scaleContainer = document.querySelector('.sacred-scale-container');
    const yesNoContainer = document.querySelector('.sacred-yesno-container');
    
    if (!questionText || !questionNumber || !progressBar || !scaleContainer || !yesNoContainer) {
        console.error("Required DOM elements not found");
        return;
    }
    
    // Update question text and number
    questionText.textContent = questionData.text;
    questionNumber.textContent = `Question ${questionIndex + 1} of ${window.sacredQuiz.filteredQuestions.length}`;
    
    // Update progress bar
    const progressPercentage = ((questionIndex + 1) / window.sacredQuiz.filteredQuestions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    
    // Clear previous options
    scaleContainer.innerHTML = '';
    yesNoContainer.innerHTML = '';
    
    // Hide both containers initially
    scaleContainer.style.display = 'none';
    yesNoContainer.style.display = 'none';
    
    // Display appropriate input type
    if (questionData.type === 'scale') {
        scaleContainer.style.display = 'flex';
        
        // Create scale options
        questionData.options.forEach((option, index) => {
            const optionContainer = document.createElement('div');
            optionContainer.className = 'sacred-scale-option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'scale-option';
            input.id = `scale-option-${index}`;
            input.value = index;
            
            const label = document.createElement('label');
            label.htmlFor = `scale-option-${index}`;
            label.textContent = option;
            
            optionContainer.appendChild(input);
            optionContainer.appendChild(label);
            scaleContainer.appendChild(optionContainer);
        });
    } else if (questionData.type === 'yesno') {
        yesNoContainer.style.display = 'flex';
        
        // Create Yes option
        const yesContainer = document.createElement('div');
        yesContainer.className = 'sacred-yesno-option';
        
        const yesInput = document.createElement('input');
        yesInput.type = 'radio';
        yesInput.name = 'yesno-option';
        yesInput.id = 'yesno-option-yes';
        yesInput.value = 'yes';
        
        const yesLabel = document.createElement('label');
        yesLabel.htmlFor = 'yesno-option-yes';
        yesLabel.textContent = 'Yes';
        
        yesContainer.appendChild(yesInput);
        yesContainer.appendChild(yesLabel);
        yesNoContainer.appendChild(yesContainer);
        
        // Create No option
        const noContainer = document.createElement('div');
        noContainer.className = 'sacred-yesno-option';
        
        const noInput = document.createElement('input');
        noInput.type = 'radio';
        noInput.name = 'yesno-option';
        noInput.id = 'yesno-option-no';
        noInput.value = 'no';
        
        const noLabel = document.createElement('label');
        noLabel.htmlFor = 'yesno-option-no';
        noLabel.textContent = 'No';
        
        noContainer.appendChild(noInput);
        noContainer.appendChild(noLabel);
        yesNoContainer.appendChild(noContainer);
    }
    
    // Show/hide prev button based on question index
    const prevButton = document.getElementById('sacred-prev-button');
    if (prevButton) {
        prevButton.style.visibility = questionIndex === 0 ? 'hidden' : 'visible';
    }
}
    
    // Clear previous options
    elements.scaleContainer.innerHTML = '';
    elements.yesNoContainer.innerHTML = '';
    
    // Hide both containers initially
    elements.scaleContainer.style.display = 'none';
    elements.yesNoContainer.style.display = 'none';
    
    // Display appropriate input type
    if (questionData.type === 'scale') {
        elements.scaleContainer.style.display = 'flex';
        
        // Create scale options
        questionData.options.forEach((option, index) => {
            const optionContainer = document.createElement('div');
            optionContainer.className = 'sacred-scale-option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'scale-option';
            input.id = `scale-option-${index}`;
            input.value = index;
            
            // Check if this option was previously selected
            if (window.sacredQuiz.answers[questionData.category][questionIndex] === index.toString()) {
                input.checked = true;
            }
            
            const label = document.createElement('label');
            label.htmlFor = `scale-option-${index}`;
            label.textContent = option;
            
            optionContainer.appendChild(input);
            optionContainer.appendChild(label);
            elements.scaleContainer.appendChild(optionContainer);
        });
    } else if (questionData.type === 'yesno') {
        elements.yesNoContainer.style.display = 'flex';
        
        // Create Yes option
        const yesContainer = document.createElement('div');
        yesContainer.className = 'sacred-yesno-option';
        
        const yesInput = document.createElement('input');
        yesInput.type = 'radio';
        yesInput.name = 'yesno-option';
        yesInput.id = 'yesno-option-yes';
        yesInput.value = 'yes';
        
        // Check if Yes was previously selected
        if (window.sacredQuiz.answers[questionData.category][questionIndex] === 'yes') {
            yesInput.checked = true;
        }
        
        const yesLabel = document.createElement('label');
        yesLabel.htmlFor = 'yesno-option-yes';
        yesLabel.textContent = 'Yes';
        
        yesContainer.appendChild(yesInput);
        yesContainer.appendChild(yesLabel);
        elements.yesNoContainer.appendChild(yesContainer);
        
        // Create No option
        const noContainer = document.createElement('div');
        noContainer.className = 'sacred-yesno-option';
        
        const noInput = document.createElement('input');
        noInput.type = 'radio';
        noInput.name = 'yesno-option';
        noInput.id = 'yesno-option-no';
        noInput.value = 'no';
        
        // Check if No was previously selected
        if (window.sacredQuiz.answers[questionData.category][questionIndex] === 'no') {
            noInput.checked = true;
        }
        
        const noLabel = document.createElement('label');
        noLabel.htmlFor = 'yesno-option-no';
        noLabel.textContent = 'No';
        
        noContainer.appendChild(noInput);
        noContainer.appendChild(noLabel);
        elements.yesNoContainer.appendChild(noContainer);
    }
    
    // Update button states
    elements.prevButton.disabled = questionIndex === 0;
    elements.nextButton.textContent = questionIndex === window.sacredQuiz.filteredQuestions.length - 1 ? 'See Results' : 'Next';
}

// Save the answer for the current question
function saveAnswer(answer) {
    const questionData = window.sacredQuiz.filteredQuestions[window.sacredQuiz.currentQuestion];
    const category = questionData.category;
    
    // Initialize the category array if it doesn't exist
    if (!window.sacredQuiz.answers[category]) {
        window.sacredQuiz.answers[category] = [];
    }
    
    // Save the answer
    window.sacredQuiz.answers[category][window.sacredQuiz.currentQuestion] = answer;
}

// Calculate the results based on the answers
function calculateResults() {
    // Reset results
    window.sacredQuiz.results = {
        primal: 0,
        heart: 0,
        mind: 0,
        energetic: 0,
        orgasmic: 0
    };
    
    // Count the number of questions in each category
    const categoryCounts = {
        primal: 0,
        heart: 0,
        mind: 0,
        energetic: 0,
        orgasmic: 0
    };
    
    // Count the number of points in each category
    const categoryPoints = {
        primal: 0,
        heart: 0,
        mind: 0,
        energetic: 0,
        orgasmic: 0
    };
    
    // Process each question
    window.sacredQuiz.filteredQuestions.forEach((question, index) => {
        const category = question.category;
        const answer = window.sacredQuiz.answers[category][index];
        
        if (answer !== undefined) {
            categoryCounts[category]++;
            
            if (question.type === 'scale') {
                // Scale questions: 0-3 points
                let points = parseInt(answer);
                
                // Handle reverse scoring
                if (question.reverse_score) {
                    points = 3 - points; // Reverse the score (0->3, 1->2, 2->1, 3->0)
                }
                
                // Handle gender-specific scoring for orgasm timing
                if (question.gender_score && question.text.includes("How long do u you usually take before orgasm")) {
                    if (window.sacredQuiz.selectedGender === 'male') {
                        // For men, higher is better (keep as is)
                    } else if (window.sacredQuiz.selectedGender === 'female') {
                        // For women, lower is better (reverse the score)
                        points = 3 - points;
                    }
                }
                
                categoryPoints[category] += points;
            } else if (question.type === 'yesno') {
                // Yes/No questions: 1 point for Yes, 0 for No
                categoryPoints[category] += answer === 'yes' ? 1 : 0;
            }
        }
    });
    
    // Calculate percentage scores for each category
    for (const category in categoryCounts) {
        if (categoryCounts[category] > 0) {
            // For scale questions, calculate percentage of maximum possible points
            if (category !== 'orgasmic') {
                const maxPoints = categoryCounts[category] * 3; // 3 is the maximum value for scale questions
                window.sacredQuiz.results[category] = Math.round((categoryPoints[category] / maxPoints) * 100);
            } else {
                // For orgasmic questions, calculate percentage of Yes answers
                const orgasmicYesCount = window.sacredQuiz.filteredQuestions
                    .filter(q => q.category === 'orgasmic')
                    .reduce((count, _, i) => {
                        return count + (window.sacredQuiz.answers.orgasmic[i] === 'yes' ? 1 : 0);
                    }, 0);
                
                window.sacredQuiz.results.orgasmic = Math.round((orgasmicYesCount / categoryCounts.orgasmic) * 100);
            }
        }
    }
    
    console.log("Results calculated:", window.sacredQuiz.results);
}

// Display the results
function displayResults() {
    const elements = window.sacredQuiz.elements;
    const results = window.sacredQuiz.results;
    
    // Hide questions, show results
    elements.questions.classList.remove('active');
    elements.results.classList.add('active');
    
    // Find dominant and weakest archetypes (excluding orgasmic)
    const archetypes = ['primal', 'heart', 'mind', 'energetic'];
    let dominantArchetype = archetypes[0];
    let weakestArchetype = archetypes[0];
    
    archetypes.forEach(archetype => {
        if (results[archetype] > results[dominantArchetype]) {
            dominantArchetype = archetype;
        }
        if (results[archetype] < results[weakestArchetype]) {
            weakestArchetype = archetype;
        }
    });
    
    // Find secondary archetype
    let secondaryArchetype = archetypes.filter(a => a !== dominantArchetype)[0];
    archetypes.forEach(archetype => {
        if (archetype !== dominantArchetype && results[archetype] > results[secondaryArchetype]) {
            secondaryArchetype = archetype;
        }
    });
    
    // Update archetype distribution bars
    archetypes.forEach(archetype => {
        const bar = document.querySelector(`.sacred-${archetype}-bar`);
        const percentage = document.querySelector(`.sacred-${archetype}-percentage`);
        const marker = document.querySelector(`.sacred-${archetype}-marker`);
        
        if (bar) bar.style.width = `${results[archetype]}%`;
        if (percentage) percentage.textContent = `${results[archetype]}%`;
        if (marker) marker.style.color = '#000'; // Ensure marker is visible
    });
    
    // Update dominant archetype text
    const dominantArchetypeElement = document.querySelector('#sacred-dominant-archetype');
    if (dominantArchetypeElement) {
        dominantArchetypeElement.textContent = `Your dominant archetype is ${dominantArchetype.charAt(0).toUpperCase() + dominantArchetype.slice(1)} with secondary influences from ${secondaryArchetype.charAt(0).toUpperCase() + secondaryArchetype.slice(1)}.`;
    }
    
    // Update archetype description
    const archetypeDescriptionElement = document.querySelector('#sacred-archetype-description');
    if (archetypeDescriptionElement) {
        let description = '';
        
        switch (dominantArchetype) {
            case 'primal':
                description = "You are most aligned with the Primal archetype. You lead with your body, crave intensity, and tend to be deeply connected to your physical desires. Your path is to embrace your raw power while maintaining awareness.";
                break;
            case 'heart':
                description = "You are most aligned with the Heart archetype. You lead with love, crave connection, and tend to feel everything deeply. Your path is to open without losing your boundaries.";
                break;
            case 'mind':
                description = "You are most aligned with the Mind archetype. You lead with your thoughts, crave intellectual stimulation, and tend to analyze your experiences. Your path is to balance thinking with feeling in your sexuality.";
                break;
            case 'energetic':
                description = "You are most aligned with the Energetic/Psychic archetype. You lead with your energy awareness, crave spiritual connection, and tend to experience sexuality as a transcendent force. Your path is to ground your spiritual experiences in your body.";
                break;
        }
        
        archetypeDescriptionElement.textContent = description;
    }
    
    // Update strengths list
    const strengthsList = document.querySelector('#sacred-strengths-list');
    if (strengthsList) {
        strengthsList.innerHTML = '';
        
        let strengths = [];
        switch (dominantArchetype) {
            case 'primal':
                strengths = [
                    "Strong connection to your body and physical desires",
                    "Natural ability to express passion and intensity",
                    "Comfort with power dynamics in sexuality",
                    "Ability to be present in sensory experiences"
                ];
                break;
            case 'heart':
                strengths = [
                    "Deep capacity for emotional intimacy during sex",
                    "Ability to create safe spaces for vulnerability",
                    "Natural talent for building trust and connection",
                    "Sensitivity to your partner's emotional needs"
                ];
                break;
            case 'mind':
                strengths = [
                    "Rich fantasy life that enhances your sexuality",
                    "Ability to articulate desires and boundaries clearly",
                    "Thoughtful approach to sexual experiences",
                    "Capacity to learn and integrate new information"
                ];
                break;
            case 'energetic':
                strengths = [
                    "Ability to experience transcendent states during sex",
                    "Sensitivity to subtle energies and spiritual dimensions",
                    "Capacity for whole-body pleasure beyond genitals",
                    "Natural understanding of sexuality as a healing force"
                ];
                break;
        }
        
        strengths.forEach(strength => {
            const li = document.createElement('li');
            li.textContent = strength;
            strengthsList.appendChild(li);
        });
    }
    
    // Update growth areas list
    const growthAreasList = document.querySelector('#sacred-growth-areas-list');
    if (growthAreasList) {
        growthAreasList.innerHTML = '';
        
        let growthAreas = [];
        switch (weakestArchetype) {
            case 'primal':
                growthAreas = [
                    "Developing a stronger connection to your body",
                    "Allowing yourself to express raw passion and desire",
                    "Becoming more comfortable with physical intensity",
                    "Embracing your animal nature without judgment"
                ];
                break;
            case 'heart':
                growthAreas = [
                    "Opening to greater emotional vulnerability during sex",
                    "Creating safer spaces for intimate connection",
                    "Developing trust with yourself and partners",
                    "Balancing giving and receiving in relationships"
                ];
                break;
            case 'mind':
                growthAreas = [
                    "Developing clearer communication about desires",
                    "Expanding your sexual imagination and fantasies",
                    "Finding balance between thinking and feeling",
                    "Learning to be more present during sexual experiences"
                ];
                break;
            case 'energetic':
                growthAreas = [
                    "Exploring the spiritual dimensions of sexuality",
                    "Developing sensitivity to subtle energies",
                    "Learning techniques for energy circulation",
                    "Expanding your capacity for non-genital pleasure"
                ];
                break;
        }
        
        growthAreas.forEach(area => {
            const li = document.createElement('li');
            li.textContent = area;
            growthAreasList.appendChild(li);
        });
    }
    
    // Update book recommendations
    updateBookRecommendations(dominantArchetype, weakestArchetype);
    
    // Update Orgasmic Living Score
    const orgasmicScoreElement = document.querySelector('#sacred-orgasmic-score');
    const orgasmicCategoryElement = document.querySelector('#sacred-orgasmic-category');
    const orgasmicDescriptionElement = document.querySelector('#sacred-orgasmic-description');
    
    if (orgasmicScoreElement) {
        orgasmicScoreElement.textContent = `${results.orgasmic}%`;
    }
    
    if (orgasmicCategoryElement && orgasmicDescriptionElement) {
        let category = '';
        let description = '';
        
        // Determine category based on score
        if (results.orgasmic < 20) {
            category = 'Beginner Orgasmic Explorer';
            description = "You're at the beginning of your orgasmic journey. Your experiences have been primarily focused on conventional forms of orgasm, if any. There's a vast world of orgasmic potential waiting for you to discover. Focus on self-pleasure, explore breath work, and learn about different types of orgasms. Consider starting with basic practices like extended foreplay and mindful masturbation.";
        } else if (results.orgasmic < 40) {
            category = 'Developing Orgasmic Explorer';
            description = "You've begun to explore beyond conventional orgasmic experiences. You're opening to new possibilities but still have much to discover. Continue exploring different types of orgasms through education and practice. Try incorporating breath work, sound, and movement into your sexual experiences. Consider exploring tantric practices for beginners.";
        } else if (results.orgasmic < 60) {
            category = 'Intermediate Orgasmic Explorer';
            description = "You have a solid foundation in orgasmic diversity. You've experienced several types of orgasms and are comfortable exploring new territory. Deepen your practice through more advanced techniques like energy circulation, extended orgasmic states, and conscious communication during sex. Consider working with a coach or joining workshops to refine your skills.";
        } else if (results.orgasmic < 80) {
            category = 'Advanced Orgasmic Explorer';
            description = "You have extensive experience with diverse orgasmic expressions. Your body is highly responsive, and you're familiar with subtle energy practices. Focus on integration and teaching others. Explore the spiritual dimensions of your sexuality more deeply. Consider advanced practices like full-body energy orgasms, tantric meditation, and sacred sexuality rituals.";
        } else {
            category = 'Master Orgasmic Explorer';
            description = "You've mastered multiple forms of orgasmic expression and have integrated them into your life. You likely have experiences that transcend conventional understanding of sexuality. Share your wisdom with others while continuing to explore the infinite depths of orgasmic potential. Consider becoming a guide or teacher for others on their journey.";
        }
        
        // Update elements
        orgasmicCategoryElement.textContent = category;
        orgasmicDescriptionElement.textContent = description;
        
        // Update category markers
        const categoryMarkers = document.querySelectorAll('.sacred-orgasmic-category-marker');
        categoryMarkers.forEach(marker => {
            marker.classList.remove('active');
        });
        
        let activeMarker;
        if (results.orgasmic < 20) {
            activeMarker = document.querySelector('.sacred-orgasmic-category-beginner');
        } else if (results.orgasmic < 40) {
            activeMarker = document.querySelector('.sacred-orgasmic-category-developing');
        } else if (results.orgasmic < 60) {
            activeMarker = document.querySelector('.sacred-orgasmic-category-intermediate');
        } else if (results.orgasmic < 80) {
            activeMarker = document.querySelector('.sacred-orgasmic-category-advanced');
        } else {
            activeMarker = document.querySelector('.sacred-orgasmic-category-master');
        }
        
        if (activeMarker) {
            activeMarker.classList.add('active');
        }
    }
}

// Update book recommendations based on dominant and weakest archetypes
function updateBookRecommendations(dominantArchetype, weakestArchetype) {
    // Book data
    const books = {
        primal: {
            title: "Urban Tantra",
            author: "Barbara Carrellas",
            image: "https://m.media-amazon.com/images/I/71jOmFkBJIL._SY466_.jpg",
            description: "A practical guide to sacred sexuality that embraces the primal, physical aspects of tantra.",
            link: "https://www.amazon.com/Urban-Tantra-Second-Edition-Sexuality/dp/0399579680/"
        },
        heart: {
            title: "Acupressure for Lovers",
            author: "Michael Reed Gach",
            image: "https://m.media-amazon.com/images/I/51YPWN95VVL._SY445_SX342_.jpg",
            description: "Explores how touch and pressure points can deepen intimacy and emotional connection.",
            link: "https://www.amazon.com/Acupressure-Lovers-Gach-Michael-Reed/dp/0553374001/"
        },
        mind: {
            title: "From Sex to Superconsciousness",
            author: "Osho",
            image: "https://m.media-amazon.com/images/I/71jnUxXxUxL._SY466_.jpg",
            description: "A philosophical exploration of how sexuality can be transformed into spiritual energy.",
            link: "https://www.amazon.com/Sex-Superconsciousness-Osho/dp/8172611544/"
        },
        energetic: {
            title: "The Multi-Orgasmic Man",
            author: "Mantak Chia",
            image: "https://m.media-amazon.com/images/I/71DGKkOcBVL._SY466_.jpg",
            description: "Teaches Taoist techniques for enhancing sexual energy and experiencing multiple orgasms.",
            link: "https://www.amazon.com/Multi-Orgasmic-Man-Sexual-Secrets-Should/dp/0062513362/",
            altTitle: "The Multi-Orgasmic Woman",
            altImage: "https://m.media-amazon.com/images/I/71RX7XC95BL._SY466_.jpg",
            altLink: "https://www.amazon.com/Multi-Orgasmic-Woman-Discover-Pleasure-Satisfaction/dp/0061898074/"
        }
    };
    
    // Update dominant archetype book recommendation
    const dominantBookContainer = document.querySelector('#sacred-dominant-book');
    if (dominantBookContainer) {
        let bookData = books[dominantArchetype];
        
        // For energetic archetype, randomly choose between male and female versions
        if (dominantArchetype === 'energetic' && window.sacredQuiz.selectedGender === 'female') {
            bookData = {
                title: bookData.altTitle,
                author: bookData.author,
                image: bookData.altImage,
                description: bookData.description,
                link: bookData.altLink
            };
        }
        
        dominantBookContainer.innerHTML = `
            <div class="sacred-book-image">
                <img src="${bookData.image}" alt="${bookData.title} book cover">
            </div>
            <div class="sacred-book-details">
                <h4>${bookData.title}</h4>
                <p class="sacred-book-author">by ${bookData.author}</p>
                <p class="sacred-book-description">${bookData.description}</p>
                <a href="${bookData.link}" target="_blank" class="sacred-book-link">Find on Amazon</a>
            </div>
        `;
    }
    
    // Update weakest archetype book recommendation
    const weakestBookContainer = document.querySelector('#sacred-weakest-book');
    if (weakestBookContainer) {
        let bookData = books[weakestArchetype];
        
        // For energetic archetype, randomly choose between male and female versions
        if (weakestArchetype === 'energetic' && window.sacredQuiz.selectedGender === 'female') {
            bookData = {
                title: bookData.altTitle,
                author: bookData.author,
                image: bookData.altImage,
                description: bookData.description,
                link: bookData.altLink
            };
        }
        
        weakestBookContainer.innerHTML = `
            <div class="sacred-book-image">
                <img src="${bookData.image}" alt="${bookData.title} book cover">
            </div>
            <div class="sacred-book-details">
                <h4>${bookData.title}</h4>
                <p class="sacred-book-author">by ${bookData.author}</p>
                <p class="sacred-book-description">${bookData.description}</p>
                <a href="${bookData.link}" target="_blank" class="sacred-book-link">Find on Amazon</a>
            </div>
        `;
    }
}

// Send results by email
function sendResultsByEmail() {
    const emailInput = window.sacredQuiz.elements.emailInput;
    const emailMessage = window.sacredQuiz.elements.emailMessage;
    
    if (!emailInput.value) {
        emailMessage.textContent = 'Please enter your email address.';
        emailMessage.style.color = 'red';
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailMessage.textContent = 'Please enter a valid email address.';
        emailMessage.style.color = 'red';
        return;
    }
    
    // Prepare email content
    const results = window.sacredQuiz.results;
    const archetypes = ['primal', 'heart', 'mind', 'energetic'];
    
    // Find dominant and weakest archetypes
    let dominantArchetype = archetypes[0];
    let weakestArchetype = archetypes[0];
    
    archetypes.forEach(archetype => {
        if (results[archetype] > results[dominantArchetype]) {
            dominantArchetype = archetype;
        }
        if (results[archetype] < results[weakestArchetype]) {
            weakestArchetype = archetype;
        }
    });
    
    // Prepare email parameters
    const emailParams = {
        to_email: emailInput.value,
        from_name: "Sacred Sexuality Quiz",
        to_name: "Sacred Explorer",
        message: `
            Your Sacred Sexuality Quiz Results:
            
            Archetype Distribution:
            - Primal: ${results.primal}%
            - Heart: ${results.heart}%
            - Mind: ${results.mind}%
            - Energetic/Psychic: ${results.energetic}%
            
            Your dominant archetype is ${dominantArchetype.charAt(0).toUpperCase() + dominantArchetype.slice(1)}.
            
            Orgasmic Living Score: ${results.orgasmic}%
            
            Thank you for taking the Sacred Sexuality Quiz!
            Visit https://www.honors-yoga.com for more resources on sacred sexuality.
        `
    };
    
    // Send email using EmailJS
    emailMessage.textContent = 'Sending...';
    emailMessage.style.color = 'var(--primary-color)';
    
    emailjs.send('service_5g8nt7g', 'template_9yjn1xj', emailParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            emailMessage.textContent = 'Results sent to your email!';
            emailMessage.style.color = 'green';
        }, function(error) {
            console.error('Email send failed:', error);
            emailMessage.textContent = 'Failed to send results. Please try again later.';
            emailMessage.style.color = 'red';
        });
}

// Reset the quiz to start over
function resetQuiz() {
    // Reset quiz state
    window.sacredQuiz.currentQuestion = 0;
    window.sacredQuiz.selectedGender = null;
    window.sacredQuiz.filteredQuestions = [];
    window.sacredQuiz.answers = {
        primal: [],
        heart: [],
        mind: [],
        energetic: [],
        orgasmic: []
    };
    window.sacredQuiz.results = {
        primal: 0,
        heart: 0,
        mind: 0,
        energetic: 0,
        orgasmic: 0
    };
    window.sacredQuiz.currentCategory = null;
    
    // Reset UI
    const elements = window.sacredQuiz.elements;
    elements.results.classList.remove('active');
    elements.intro.classList.add('active');
    
    // Clear email input
    if (elements.emailInput) {
        elements.emailInput.value = '';
    }
    
    if (elements.emailMessage) {
        elements.emailMessage.textContent = '';
    }
}
