// Updated quiz data with yes/no questions for Orgasmic Living Test
const quizData = {
    // Primal category questions
    primalQuestions: [
        {
            text: "How important is physical attraction in a sexual encounter?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal"
        },
        {
            text: "How interested are you in having a dominant partner?",
            type: "scale",
            options: ["Not interested", "Somewhat interested", "Interested", "Very interested"],
            category: "primal"
        },
        {
            text: "How interested are you in having a submissive partner?",
            type: "scale",
            options: ["Not interested", "Somewhat interested", "Interested", "Very interested"],
            category: "primal"
        },
        {
            text: "How much does your partner's physical body correlate to a passionate fiery sexual experience?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "primal"
        },
        {
            text: "How important is having a highly physically skilled partner?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal"
        },
        {
            text: "Rate the importance of feeling physical chemistry with a partner prior to engaging with them sexually.",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal"
        },
        {
            text: "How important is the smell of your partner during intimacy?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal"
        },
        {
            text: "How important is maintaining good sexual chemistry with your partner(s)?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal"
        },
        {
            text: "How important is it to keep your sex life spicy (trying new positions, incorporating BDSM, etc.)?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal"
        },
        {
            text: "How important is it for your partner(s) to express strong feminine/masculine qualities?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal"
        }
    ],
    
    // Heart category questions
    heartQuestions: [
        {
            text: "How important is safe space during intimate encounters?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart"
        },
        {
            text: "How important is the energy of love during the sexual encounter?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart"
        },
        {
            text: "How important is intimacy and vulnerability?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart"
        },
        {
            text: "How comfortable are you to openly express your sexual desires with your partner?",
            type: "scale",
            options: ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"],
            category: "heart"
        },
        {
            text: "How comfortable are you to be honest about your sexual desires with yourself?",
            type: "scale",
            options: ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"],
            category: "heart"
        },
        {
            text: "How important is knowing/understanding your partner's traumas prior to engaging with them sexually?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart"
        },
        {
            text: "How important is it that you are friends with the person you are being intimate with?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart"
        },
        {
            text: "On a scale from 1 to 10, how well do you receive constructive sexual criticism?",
            type: "scale",
            options: ["Not well", "Somewhat well", "Well", "Very well"],
            category: "heart"
        },
        {
            text: "How important is it for you to create a safe environment for open and honest communication between yourself and your partner(s)?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart"
        },
        {
            text: "How important is emotional intelligence in a sexual partner?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart"
        }
    ],
    
    // Mind category questions
    mindQuestions: [
        {
            text: "How often do you fantasize about possible sexual experiences?",
            type: "scale",
            options: ["Rarely", "Sometimes", "Often", "Very often"],
            category: "mind"
        },
        {
            text: "How important is intelligence in a sexual partner?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "mind"
        },
        {
            text: "How often do you learn things from porn and try them in the bedroom?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind"
        },
        {
            text: "How often do you use visualization to enhance your experience during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind"
        },
        {
            text: "How important is verbal feedback from your partner during sex?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "mind"
        },
        {
            text: "How often do you use orgasm as a space for manifestation?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind"
        },
        {
            text: "How important is it to be present in the moment during sex?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "mind"
        },
        {
            text: "How often do you feel disconnected from your body during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind"
        },
        {
            text: "How often do you spend too much time in your head during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind"
        },
        {
            text: "How important is exploring your sexual fantasies during intimacy?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "mind"
        }
    ],
    
    // Energetic/Psychic category questions
    energeticQuestions: [
        {
            text: "How important is music to your bedroom experience?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "energetic"
        },
        {
            text: "How important are mood enhancers (candles, lights, fragrances) during sex?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "energetic"
        },
        {
            text: "How important is location during sex?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "energetic"
        },
        {
            text: "Does time of day affect the sexual experience?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "energetic"
        },
        {
            text: "How easily do you get in the mood?",
            type: "scale",
            options: ["Very difficult", "Somewhat difficult", "Easily", "Very easily"],
            category: "energetic"
        },
        {
            text: "How often do you feel drained after a sexual encounter?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic"
        },
        {
            text: "How often do you consciously circulate sexual energy throughout your body during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic"
        },
        {
            text: "How often do you experience becoming one with a person during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic"
        },
        {
            text: "How much do you use sexual energy for spiritual growth?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "energetic"
        },
        {
            text: "How often do you use sexual energy you have cultivated to be creative, manifest or heal?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic"
        }
    ],
    
    // Orgasmic Living Test questions - converted to yes/no format
    orgasmicQuestions: [
        {
            text: "Have you experienced extended orgasmic states (2 minutes or more)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced multiple orgasms in a single session?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced energy healing through orgasm?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced non-sexual orgasmic experiences (from nature, food, or other sensory inputs)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced spiritual orgasms (through thought, breath, consciousness, or meditation)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced orgasms during dreams (dream-gasms)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced vaginal orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced chakra orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced full body orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced throat orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced anal orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced G-spot orgasms or squirting?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced cervical orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced orgasms from a body organ other than genitals?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced breast orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced crying during orgasm (cry-gasm)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced laughing during orgasm (laugh-gasm)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced valley orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced orgasms from music (music-gasm)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced orgasms during childbirth (birth-gasm)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced orgasms from pain (pain-gasm)?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "Have you experienced self-induced sexual orgasms?",
            type: "yesno",
            category: "orgasmic"
        },
        {
            text: "How easily do you reach orgasm during sex?",
            type: "scale",
            options: ["Very difficult", "Somewhat difficult", "Easily", "Very easily"],
            category: "orgasmic"
        },
        {
            text: "How long do you usually take before reaching orgasm? (5 mins) 1 to 10 (over an hour)",
            type: "scale",
            options: ["1 (5 mins)", "3", "5 (30 mins)", "7", "10 (over an hour)"],
            category: "orgasmic"
        }
    ]
};
