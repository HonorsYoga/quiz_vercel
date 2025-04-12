// Comprehensive console logging wrapper for Sacred Sexuality Quiz
// This script adds detailed logging to help diagnose issues across different devices

// Create a global logging object
window.SacredQuizLogger = {
    // Log levels
    LEVELS: {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3
    },
    
    // Current log level (can be adjusted)
    currentLevel: 0, // DEBUG by default
    
    // Store logs for later retrieval
    logs: [],
    
    // Maximum number of logs to store
    maxLogs: 1000,
    
    // Initialize logging
    init: function() {
        console.log("SacredQuizLogger initialized");
        this.log("INFO", "Quiz logging system initialized");
        
        // Log browser and device information
        this.logEnvironment();
        
        // Set up error tracking
        this.setupErrorTracking();
    },
    
    // Log a message
    log: function(level, message, data) {
        // Convert string level to numeric
        let numericLevel = this.LEVELS[level] || 0;
        
        // Only log if level is at or above current level
        if (numericLevel >= this.currentLevel) {
            const timestamp = new Date().toISOString();
            const logEntry = {
                timestamp: timestamp,
                level: level,
                message: message,
                data: data || null
            };
            
            // Add to logs array
            this.logs.push(logEntry);
            
            // Trim logs if needed
            if (this.logs.length > this.maxLogs) {
                this.logs.shift();
            }
            
            // Format console output
            let consoleMessage = `[${timestamp}] [${level}] ${message}`;
            
            // Log to console with appropriate method
            switch(level) {
                case "DEBUG":
                    console.debug(consoleMessage, data || '');
                    break;
                case "INFO":
                    console.info(consoleMessage, data || '');
                    break;
                case "WARN":
                    console.warn(consoleMessage, data || '');
                    break;
                case "ERROR":
                    console.error(consoleMessage, data || '');
                    break;
                default:
                    console.log(consoleMessage, data || '');
            }
        }
    },
    
    // Shorthand methods
    debug: function(message, data) {
        this.log("DEBUG", message, data);
    },
    
    info: function(message, data) {
        this.log("INFO", message, data);
    },
    
    warn: function(message, data) {
        this.log("WARN", message, data);
    },
    
    error: function(message, data) {
        this.log("ERROR", message, data);
    },
    
    // Log environment information
    logEnvironment: function() {
        const env = {
            userAgent: navigator.userAgent,
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            devicePixelRatio: window.devicePixelRatio,
            touchEnabled: ('ontouchstart' in window),
            cookiesEnabled: navigator.cookieEnabled,
            language: navigator.language,
            platform: navigator.platform,
            screenSize: {
                width: window.screen.width,
                height: window.screen.height
            }
        };
        
        this.info("Environment information", env);
    },
    
    // Set up global error tracking
    setupErrorTracking: function() {
        window.addEventListener('error', (event) => {
            this.error("Uncaught error", {
                message: event.message,
                filename: event.filename,
                lineno: event.lineno,
                colno: event.colno,
                error: event.error ? event.error.stack : null
            });
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            this.error("Unhandled promise rejection", {
                reason: event.reason
            });
        });
    },
    
    // Log DOM element state
    logElementState: function(elementId, description) {
        const element = document.getElementById(elementId);
        if (element) {
            this.debug(`Element state: ${description || elementId}`, {
                exists: true,
                visible: element.offsetParent !== null,
                display: window.getComputedStyle(element).display,
                dimensions: {
                    width: element.offsetWidth,
                    height: element.offsetHeight
                },
                position: {
                    top: element.offsetTop,
                    left: element.offsetLeft
                },
                classes: Array.from(element.classList),
                attributes: Array.from(element.attributes).map(attr => ({
                    name: attr.name,
                    value: attr.value
                }))
            });
        } else {
            this.warn(`Element not found: ${elementId}`);
        }
    },
    
    // Log quiz state
    logQuizState: function() {
        this.info("Quiz state", {
            currentQuestionIndex: window.currentQuestionIndex,
            totalQuestions: window.allQuestions ? window.allQuestions.length : 0,
            responseCount: window.userResponses ? Object.keys(window.userResponses).length : 0
        });
    },
    
    // Get all logs
    getLogs: function() {
        return this.logs;
    },
    
    // Clear logs
    clearLogs: function() {
        this.logs = [];
        this.debug("Logs cleared");
    },
    
    // Export logs as JSON
    exportLogs: function() {
        return JSON.stringify(this.logs);
    }
};

// Initialize logger when script loads
document.addEventListener('DOMContentLoaded', function() {
    window.SacredQuizLogger.init();
});

// Add logging hooks to key quiz functions
document.addEventListener('DOMContentLoaded', function() {
    // Wait for main script to load
    setTimeout(function() {
        if (window.initializeQuiz) {
            const originalInitializeQuiz = window.initializeQuiz;
            window.initializeQuiz = function() {
                window.SacredQuizLogger.info("initializeQuiz called");
                try {
                    const result = originalInitializeQuiz.apply(this, arguments);
                    window.SacredQuizLogger.info("initializeQuiz completed successfully");
                    return result;
                } catch (error) {
                    window.SacredQuizLogger.error("Error in initializeQuiz", error);
                    throw error;
                }
            };
        }
        
        if (window.displayQuestion) {
            const originalDisplayQuestion = window.displayQuestion;
            window.displayQuestion = function(index) {
                window.SacredQuizLogger.info(`displayQuestion called with index: ${index}`);
                try {
                    const result = originalDisplayQuestion.apply(this, arguments);
                    window.SacredQuizLogger.info(`displayQuestion completed for index: ${index}`);
                    return result;
                } catch (error) {
                    window.SacredQuizLogger.error(`Error in displayQuestion for index: ${index}`, error);
                    throw error;
                }
            };
        }
        
        if (window.displayResults) {
            const originalDisplayResults = window.displayResults;
            window.displayResults = function() {
                window.SacredQuizLogger.info("displayResults called");
                try {
                    const result = originalDisplayResults.apply(this, arguments);
                    window.SacredQuizLogger.info("displayResults completed successfully");
                    return result;
                } catch (error) {
                    window.SacredQuizLogger.error("Error in displayResults", error);
                    throw error;
                }
            };
        }
        
        // Log when key elements are clicked
        const keyElements = [
            'sacred-start-button',
            'sacred-next-button',
            'sacred-prev-button'
        ];
        
        keyElements.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                const originalOnClick = element.onclick;
                element.addEventListener('click', function(event) {
                    window.SacredQuizLogger.info(`Element clicked: ${id}`);
                    window.SacredQuizLogger.logElementState(id);
                });
            }
        });
        
        window.SacredQuizLogger.info("Logging hooks added to quiz functions");
    }, 500); // Wait for main script to initialize
});
