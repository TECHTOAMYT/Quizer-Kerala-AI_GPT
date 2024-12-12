// Add button hover animation
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s ease';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

// Animate text appearance on page load
document.addEventListener('DOMContentLoaded', () => {
    const textElements = document.querySelectorAll('.animated-text');
    textElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    });

    // Trigger the animation
    setTimeout(() => {
        textElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 100);
});

// Font style enhancement
const enhanceFont = () => {
    document.body.style.fontFamily = "'Poppins', sans-serif";
    document.body.style.lineHeight = '1.6';
};
enhanceFont();

// Prevent text copying
document.addEventListener('copy', (event) => {
    event.preventDefault();
    alert("Text copying is disabled on this page.");
});

// Optional: Add custom button click animations
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            button.style.backgroundColor = '';
        }, 300);
    });
});

