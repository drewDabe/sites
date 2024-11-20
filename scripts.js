document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', function() {
        document.getElementById('main-site').src = this.getAttribute('data-site');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('intro-text');
    const typingCursor = document.getElementById('typing-cursor');
    const catContainer = document.getElementById('cat-container');
    const catFrame1 = document.getElementById('cat-frame1');
    const catFrame2 = document.getElementById('cat-frame2');
    const container = document.querySelector('.container');
    const introScreen = document.getElementById('intro-screen');
    
    const text = [
        "Hi, I'm Drew!",
        "This is a compilation of some of the sites I've worked on.",
        "I'm a sophomore in college right now so I plan on adding more as I make them.",
        "I hope you like it :)"
    ];
    
    let index = 0;
    let charIndex = 0;
    let lineIndex = 0;
    
    function typeLine() {
        if (lineIndex < text.length) {
            if (charIndex < text[lineIndex].length) {
                introText.textContent += text[lineIndex][charIndex];
                charIndex++;
                setTimeout(typeLine, 50);
            } else {
                introText.textContent += '\n';
                charIndex = 0;
                lineIndex++;
                if (lineIndex === 1) {
                    setTimeout(() => {
                        catContainer.style.display = 'block';
                        animateCat();
                    }, 500);
                }
                setTimeout(typeLine, 1000);
            }
        } else {
            setTimeout(() => {
                introScreen.style.opacity = 0;
                setTimeout(() => {
                    introScreen.style.display = 'none';
                }, 1000);
            }, 3000);
        }
        updateCursor();
    }
    
    function updateCursor() {
        const lines = introText.textContent.split('\n');
        const currentLine = lines[lines.length - 1];
        const rect = introText.getBoundingClientRect();
        typingCursor.style.left = `${rect.left + window.scrollX + currentLine.length * 10 + 5}px`;
        typingCursor.style.top = `${rect.top + window.scrollY + (lines.length - 1) * 24 + 12}px`;
    }
    
    function animateCat() {
        setInterval(() => {
            if (catFrame1.style.display === 'none') {
                catFrame1.style.display = 'block';
                catFrame2.style.display = 'none';
            } else {
                catFrame1.style.display = 'none';
                catFrame2.style.display = 'block';
            }
        }, 500);
    }
    
    typeLine();
});
