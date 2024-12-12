document.addEventListener("DOMContentLoaded", () => {
    const welcomePage = document.querySelector('.welcome-page');
    const quizPage = document.querySelector('.quiz-page');
    const endPage = document.querySelector('.end-page');

    const startQuizButton = document.getElementById('start-quiz');
    const restartQuizButton = document.getElementById('restart-quiz');

    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const timerDisplay = document.getElementById('timer-display');
    const analogHand = document.getElementById('analog-hand');
    const questionNumber = document.getElementById('question-number');
    const finalScore = document.getElementById('final-score');
    const scoreDisplay = document.getElementById('score-display');
    const lightIndicator = document.getElementById('light-indicator');
    const sadEmoji = document.getElementById('sad-emoji');

    const fadeIn = (element) => {
        element.style.opacity = 0;
        element.style.display = 'block';
        let opacity = 0;
        const fadeInterval = setInterval(() => {
            opacity += 0.1;
            element.style.opacity = opacity;
            if (opacity >= 1) clearInterval(fadeInterval);
        }, 50);
    };

    const fadeOut = (element) => {
        let opacity = 1;
        const fadeInterval = setInterval(() => {
            opacity -= 0.1;
            element.style.opacity = opacity;
            if (opacity <= 0) {
                element.style.display = 'none';
                clearInterval(fadeInterval);
            }
        }, 50);
    };

    const slideIn = (element) => {
        element.style.transform = 'translateX(100%)';
        element.style.display = 'block';
        element.style.transition = 'transform 0.5s ease-out';
        setTimeout(() => (element.style.transform = 'translateX(0%)'), 50);
    };

    const slideOut = (element) => {
        element.style.transform = 'translateX(0%)';
        element.style.transition = 'transform 0.5s ease-out';
        setTimeout(() => {
            element.style.transform = 'translateX(-100%)';
            element.style.display = 'none';
        }, 50);
    };

    const bounce = (element) => {
        element.style.animation = 'bounce 1s infinite';
    };

    const addGlowEffect = (element) => {
        element.style.boxShadow = '0 0 15px rgba(255, 165, 0, 0.8)';
        setTimeout(() => (element.style.boxShadow = 'none'), 300);
    };

    const applyFontUpgrades = () => {
        document.querySelectorAll('h1, h2, h3, .question').forEach((el) => {
            el.style.fontFamily = "'Poppins', sans-serif";
            el.style.letterSpacing = '1px';
        });
        document.querySelectorAll('.btn, .answers button').forEach((el) => {
            el.style.fontFamily = "'Roboto', sans-serif";
        });
    };

    startQuizButton.addEventListener('click', () => {
        fadeOut(welcomePage);
        setTimeout(() => slideIn(quizPage), 500);
    });

    restartQuizButton.addEventListener('click', () => {
        slideOut(endPage);
        setTimeout(() => fadeIn(welcomePage), 500);
    });

    // Apply animations to answer buttons
    answersContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            addGlowEffect(event.target);
            bounce(lightIndicator);
        }
    });

    // Add effects to the sad emoji
    sadEmoji.addEventListener('animationend', () => {
        sadEmoji.style.animation = 'none';
    });

    // Enhance fonts and styles
    applyFontUpgrades();
});
      
