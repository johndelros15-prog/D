// Speed control variables - higher numbers = slower falling
const SPEED_MULTIPLIER = 2; // 2x slower, change to 3 for even slower, etc.

// Use these variables in your animation durations
const HEART_DURATION = 6 * SPEED_MULTIPLIER; // 12s if multiplier is 2
const TULIP_DURATION = 3 * SPEED_MULTIPLIER; // 6s if multiplier is 2
const CONFETTI_DURATION = 3 * SPEED_MULTIPLIER; // 6s if multiplier is 2
const FIELD_TULIP_DURATION = 2 * SPEED_MULTIPLIER; // 4s if multiplier is 2
// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '💙';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 6 + 's';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    document.querySelector('.hearts-container').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 12000);
}

// Create hearts continuously
setInterval(createHeart, 1000);

// Create fireworks for New Year
function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * 100 + '%';
    firework.style.top = Math.random() * 50 + '%';
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c'];
    firework.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.querySelector('.fireworks-container').appendChild(firework);
    
    setTimeout(() => {
        firework.remove();
    }, 4000);
}

// Create fireworks for special moments
setInterval(createFirework, 2000);

// Fade in animation for paragraphs
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = Math.random() * 0.5 + 's';
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all paragraphs
document.querySelectorAll('.letter-content p, .love-section, .missing-section, .apology-section, .new-year-section').forEach(el => {
    observer.observe(el);
});

// Tulip button functionality (changed from rose)
function showTulip() {
    const tulip = document.createElement('div');
    tulip.className = 'tulip';
    tulip.innerHTML = '🌷';
    tulip.style.left = Math.random() * 80 + 10 + '%';
    tulip.style.fontSize = '60px';
    
    document.body.appendChild(tulip);
    
    setTimeout(() => {
        tulip.remove();
    }, 6000);
}

// Music button functionality
let musicPlaying = false;
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const button = document.querySelector('.music-button');
    
    if (musicPlaying) {
        audio.pause();
        button.innerHTML = '🎵 Play Our Song';
        musicPlaying = false;
    } else {
        audio.play().catch(e => console.log('Audio play failed:', e));
        button.innerHTML = '⏸️ Pause Our Song';
        musicPlaying = true;
    }
}

// ---------- auto-play Lizzy ----------
let musicStarted = false;          // must be OUTSIDE the handler
document.addEventListener('scroll', () => {
  if (!musicStarted) {
    const audio = document.getElementById('bgMusic');
    audio.muted = false;           // remove mute
    audio.volume = 0.4;
    audio.play().catch(() => {});
    musicStarted = true;           // flag so it runs once
  }
}, { once: true });
// ---------- end ----------


// Typewriter effect for the title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typewriter effect to main title
window.addEventListener('load', () => {
    const title = document.querySelector('.title');
    const originalText = title.innerHTML;
    typeWriter(title, originalText, 150);
});

// Create sparkles on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.98) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.innerHTML = '✨';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: scale(2) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Confetti effect for New Year
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '1000';
    confetti.style.animation = 'confettiFall 3s linear forwards';
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
        confetti.remove();
    }, 6000);
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(confettiStyle);

// Create confetti for celebration
setInterval(createConfetti, 200);

// Add romantic quotes that appear randomly
const romanticQuotes = [
    "You are my today and all of my tomorrows. 💕",
    "In you, I've found a beautiful universe and my closest friend. 🌷",
    "Every moment with you is a beautiful dream come true. ✨",
    "Your smile is the sunshine that brightens my darkest days. ☀️",
    "Loving you is like breathing - so effortless and essential. 💖",
    "You are my Moon,let's exchange bracelets, Joke. 🌷"
];

function showRandomQuote() {
    const quote = romanticQuotes[Math.floor(Math.random() * romanticQuotes.length)];
    const quoteElement = document.createElement('div');
    quoteElement.style.position = 'fixed';
    quoteElement.style.top = '20px';
    quoteElement.style.left = '50%';
    quoteElement.style.transform = 'translateX(-50%)';
    quoteElement.style.background = 'rgba(255, 255, 255, 0.9)';
    quoteElement.style.padding = '15px 25px';
    quoteElement.style.borderRadius = '25px';
    quoteElement.style.fontSize = '1.1em';
    quoteElement.style.color = '#e74c3c';
    quoteElement.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    quoteElement.style.zIndex = '1000';
    quoteElement.style.animation = 'quoteFade 4s ease-in-out forwards';
    quoteElement.textContent = quote;
    
    document.body.appendChild(quoteElement);
    
    setTimeout(() => {
        quoteElement.remove();
    }, 4000);
}

// Add quote fade animation
const quoteStyle = document.createElement('style');
quoteStyle.textContent = `
    @keyframes quoteFade {
        0%, 100% {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        20%, 80% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
document.head.appendChild(quoteStyle);

// Show random quotes
setInterval(showRandomQuote, 15000);

// Add click heart effect
document.addEventListener('click', (e) => {
    const heart = document.createElement('div');
    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.innerHTML = '💖';
    heart.style.fontSize = '30px';
    heart.style.animation = 'clickHeart 1s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
});

// Add click heart animation
const clickHeartStyle = document.createElement('style');
clickHeartStyle.textContent = `
    @keyframes clickHeart {
        0% {
            transform: scale(0) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(2) translateY(-50px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(clickHeartStyle);

// Create tulip field effect on scroll
window.addEventListener('scroll', () => {
    if (Math.random() > 0.95) {
        const fieldTulip = document.createElement('div');
        fieldTulip.style.position = 'fixed';
        fieldTulip.style.left = Math.random() * 100 + '%';
        fieldTulip.style.bottom = '0px';
        fieldTulip.innerHTML = '🌷';
        fieldTulip.style.fontSize = '40px';
        fieldTulip.style.pointerEvents = 'none';
        fieldTulip.style.zIndex = '1';
        fieldTulip.style.animation = 'fieldTulipGrow 2s ease-out forwards';
        
        document.body.appendChild(fieldTulip);
        
        setTimeout(() => {
            fieldTulip.remove();
        }, 2000);
    }
});

// Add field tulip animation
const fieldTulipStyle = document.createElement('style');
fieldTulipStyle.textContent = `
    @keyframes fieldTulipGrow {
        0% {
            transform: translateY(100px) scale(0);
            opacity: 0;
        }
        100% {
            transform: translateY(0) scale(1);
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(fieldTulipStyle);

console.log("🌷 Love letter with tulips loaded! Made with love for Saki 🌷");

window.addEventListener('scroll', () => {
  const a = document.getElementById('bgMusic');
  a.muted = false;
  a.volume = 0.4;
  a.play();
}, { once: true });

