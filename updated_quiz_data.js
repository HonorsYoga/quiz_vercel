// Updated quiz data with comprehensive question list and gender attributes
const quizData = {
    // Primal category questions
    primalQuestions: [
        {
            text: "How important is physical attraction in a sexual encounter?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "Are you turned on by the sounds your partner makes during sex?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How important is maintaining good sexual chemistry with your partner(s)?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How often are you sexually active?",
            type: "scale",
            options: ["1", "4", "7", "10"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How important is it to keep your sex life spicy (trying new positions, incorporating BDSM, etc.)?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How comfortable are you with the idea of BDSM in your sexual relationship(s)?",
            type: "scale",
            options: ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How important is the feeling of sensual foreplay?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How important is it for your partner(s) to express strong feminine/masculine qualities?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How important is it for you to express strong feminine/masculine qualities?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "Do you like dirty talk?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "primal",
            gender: "all"
        },
        {
            text: "Do you like your partner(s) to be rough (i.e., biting, scratching, hair pulling, etc.)?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "primal",
            gender: "all"
        },
        {
            text: "Do you enjoy role play during sex or foreplay (boss/secretary, cop/criminal)?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How interested are you in having a dominant partner?",
            type: "scale",
            options: ["Not interested", "Somewhat interested", "Interested", "Very interested"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How interested are you in having a submissive partner?",
            type: "scale",
            options: ["Not interested", "Somewhat interested", "Interested", "Very interested"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How important is fiery passion during the sexual experience?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "What's the importance of both partners having equal power during the sexual experience?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "How important is having a highly physically skilled partner?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "Rate the importance of feeling physical chemistry with a partner prior to engaging with them sexually.",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        },
        {
            text: "Would you have sex with someone you're not physically attracted to?",
            type: "scale",
            options: ["Definitely not", "Probably not", "Probably yes", "Definitely yes"],
            category: "primal",
            gender: "all"
        },
        {
            text: "If you felt a strong connection with someone you didn't find sexy, how interested would you be in engaging with them sexually?",
            type: "scale",
            options: ["Not interested", "Somewhat interested", "Interested", "Very interested"],
            category: "primal",
            gender: "all"
        },
        {
            text: "Do you consider yourself in good physical shape?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "primal",
            gender: "all"
        },
        {
            text: "Do you either enjoy spanking or being spanked?",
            type: "yesno",
            category: "primal",
            gender: "all"
        },
        {
            text: "Do you enjoy blindfolds?",
            type: "yesno",
            category: "primal",
            gender: "all"
        },
        {
            text: "Do you enjoy handcuffs?",
            type: "yesno",
            category: "primal",
            gender: "all"
        },
        {
            text: "How important is the smell of your sexual partner?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "primal",
            gender: "all"
        }
    ],
    
    // Heart category questions
    heartQuestions: [
        {
            text: "Do you create a safe space during intimate encounters?",
            type: "scale",
            options: ["Never", "Sometimes", "Often", "Always"],
            category: "heart",
            gender: "all"
        },
        {
            text: "How important is safe space during intimate encounters?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Do you feel like you are emotionally present/expressive during sex?",
            type: "scale",
            options: ["Never", "Sometimes", "Often", "Always"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Do you stare into the other person's eyes during sex?",
            type: "scale",
            options: ["Never", "Sometimes", "Often", "Always"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Do you want someone that will stare in your eyes during sex?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },

        {
            text: "Would you welcome tears during sex as a sign of deep emotional release?",
            type: "scale",
            options: ["Definitely not", "Probably not", "Probably yes", "Definitely yes"],
            category: "heart",
            gender: "all"
        },
        {
            text: "How important is the energy of love during the sexual encounter?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Do you enjoy intimate foreplay?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Are you turned on by deeply personal conversations?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Do you easily trust others?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Are you trustworthy?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "How important is it that you are close friends with the person you are being intimate with?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Do you create a safe environment for open and honest communication between yourself and your partner(s)?",
            type: "scale",
            options: ["Never", "Sometimes", "Often", "Always"],
            category: "heart",
            gender: "all"
        },
        {
            text: "On a scale from 1 to 10, how well do you receive constructive sexual criticism?",
            type: "scale",
            options: ["1-2", "3-5", "6-8", "9-10"],
            category: "heart",
            gender: "all"
        },
        {
            text: "How important is intimacy and vulnerability?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart",
            gender: "all"
        },
        {
            text: "How comfortable are you to openly express your sexual desires with your partner?",
            type: "scale",
            options: ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"],
            category: "heart",
            gender: "all"
        },
        {
            text: "How comfortable are you to be honest about your sexual desires with yourself?",
            type: "scale",
            options: ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Do you feel being in love makes the sexual experience better?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Do you like your partner(s) to be soft and gentle during sex?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Is praise and positive words of affirmation during sex a turn on for you?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Is vulnerability in your partner(s) a turn on?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Is emotional intelligence a turn on?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "heart",
            gender: "all"
        },
        {
            text: "How important is knowing/understanding your partner's traumas prior to engaging with them sexually?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "heart",
            gender: "all"
        },
        {
            text: "Could you have a sexual encounter with someone without having any level of intimacy or emotional connection whatsoever?",
            type: "scale",
            options: ["Definitely not", "Probably not", "Probably yes", "Definitely yes"],
            category: "heart",
            gender: "all",
            reverse_score: true
        },
        {
            text: "Do you often feel disconnected from your heart during sex?",
            type: "scale",
            options: ["Never", "Sometimes", "Often", "Always"],
            category: "heart",
            gender: "all",
            reverse_score: true
        }
    ],
    
    // Mind category questions
    mindQuestions: [
        {
            text: "Are you a sapiosexual? (turned on by the way someone's mind works)",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Is lack of intelligence a turn off?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you enjoy exploring your sexual fantasies during intimacy?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you enjoy exploring your partner's sexual fantasies during intimacy?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you often feel disconnected from your body during sex?",
            type: "scale",
            options: ["Never", "Sometimes", "Often", "Always"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you spend too much time in your head during sex?",
            type: "scale",
            options: ["Never", "Sometimes", "Often", "Always"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Is being in the present moment during sex important for you?",
            type: "scale",
            options: ["Not important", "Somewhat important", "Important", "Very important"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you enjoy verbal feedback from your partner during sex?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "How often do you learn things from porn and try them in the bedroom?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you enjoy fantasizing about possible sexual experiences?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "How often do you actually fantasize about possible sexual experiences?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you use visualization to enhance your experience during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you use orgasm as a space for manifestation?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you like phone sex?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Are you an over thinker?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Have you ever thought of a different person while having sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you enjoy sexting?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you enjoy watching porn?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        },
        {
            text: "Do you enjoy reading erotica?",
            type: "scale",
            options: ["Not at all", "Somewhat", "Considerably", "Very much"],
            category: "mind",
            gender: "all"
        }
    ],
    
    // Energetic/Psychic category questions
    energeticQuestions: [
        {
            text: "Have you experienced energy exchange during intimacy?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic",
            gender: "all"
        },
        {
            text: "How often do you feel drained after a sexual encounter?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic",
            gender: "all",
            reverse_score: true
        },
        {
            text: "Have you experienced orgasms through energy healing?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced telepathic connection during sex?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced spiritual connection during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced transcendence during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced out of body experiences during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced psychic connection during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced visions during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced time distortion during sex?",
            type: "scale",
            options: ["Never", "Rarely", "Sometimes", "Often"],
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced kundalini awakening during sex?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced chakra activation during sex?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced energy orgasms?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced non-ejaculatory orgasms?",
            type: "yesno",
            category: "energetic",
            gender: "male"
        },
        {
            text: "Do you practice semen retention?",
            type: "yesno",
            category: "energetic",
            gender: "male"
        },
        {
            text: "Have you experienced multiple orgasms?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced full body orgasms?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms without physical stimulation?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through breath work?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through meditation?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through sound?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through visualization?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through movement?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through dance?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through yoga?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through tantra?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through energy work?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through spiritual practices?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms through prayer?",
            type: "yesno",
            category: "energetic",
            gender: "all"
        }
    ],
    
    // Orgasmic Living Test questions
    orgasmicQuestions: [
        {
            text: "Have you experienced multiple orgasms in one session?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced dream-gasms (orgasms during sleep)?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced clitoral orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "female"
        },
        {
            text: "Have you experienced or caused vaginal orgasm?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced chakra orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced full body orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced throat orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "female"
        },
        {
            text: "Have you experienced anal orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "female"
        },
        {
            text: "Have you experienced or caused G-spot orgasms or squirting?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you or caused experienced cervical orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced orgasms from a body organ other than genitals?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced or caused breast orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced cry-gasms during sex?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced laugh-gasms during sex?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced valley orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced music-gasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced birth-gasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "female"
        },
        {
            text: "Have you experienced pain-gasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "Have you experienced self-induced sexual orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "How easily do you reach orgasm during sex?",
            type: "scale",
            options: ["Very difficult", "Somewhat difficult", "Easily", "Very easily"],
            category: "orgasmic",
            gender: "all"
        },
        {
            text: "How long do u you usually take before orgasm (5 mins) 1 to 10 (over an hour)",
            type: "scale",
            options: ["1 (5 mins)", "3", "5 (30 mins)", "7", "10 (over an hour)"],
            category: "orgasmic",
            gender: "all",
            gender_score: true
        },
        {
            text: "Have you experienced prostate orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "male"
        },
        {
            text: "Have you experienced penile orgasms?",
            type: "yesno",
            category: "orgasmic",
            gender: "male"
        },
        {
            text: "Have you experienced dry orgasms (non-ejaculatory)?",
            type: "yesno",
            category: "orgasmic",
            gender: "male"
        }
    ]
};
