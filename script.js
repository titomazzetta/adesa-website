// HTML5 Audio player functions
let audioPlayer = null;
let fadeInterval = null;
let isPlaying = false;

function initAudioPlayer() {
    audioPlayer = document.getElementById('background-music');
    if (audioPlayer) {
        console.log('Audio player initialized');
        audioPlayer.volume = 0; // Start with volume 0 for fade in
        audioPlayer.loop = true;
        
        // Set up event listeners
        audioPlayer.addEventListener('loadeddata', function() {
            console.log('Audio file loaded');
        });
        
        audioPlayer.addEventListener('play', function() {
            console.log('Audio started playing');
        });
        
        audioPlayer.addEventListener('error', function(e) {
            console.error('Audio error:', e);
        });
        
        audioPlayer.addEventListener('timeupdate', function() {
            // Check if we've reached 2:10 (130 seconds) and loop back to beginning
            if (audioPlayer.currentTime >= 130) {
                console.log('Reached 2:10, looping back to beginning...');
                audioPlayer.currentTime = 0;
            }
        });
    } else {
        console.error('Audio element not found');
    }
}

function startBackgroundMusic() {
    if (audioPlayer && !isPlaying) {
        console.log('Attempting to start background music...');
        
        // Check if audio is ready
        if (audioPlayer.readyState < 2) {
            console.log('Audio not ready, waiting...');
            audioPlayer.addEventListener('canplaythrough', function() {
                startBackgroundMusic();
            }, { once: true });
            return;
        }
        
        audioPlayer.play().then(() => {
            fadeIn();
            isPlaying = true;
            console.log('Background music started');
        }).catch(e => {
            console.error('Audio play failed:', e);
            // Don't retry automatically - let user click to start
        });
    } else {
        console.error('Audio player not initialized or already playing');
    }
}

function stopBackgroundMusic() {
    if (audioPlayer) {
        fadeOut(() => {
            audioPlayer.pause();
            isPlaying = false;
        });
    }
}

function fadeIn() {
    if (fadeInterval) clearInterval(fadeInterval);
    
    let volume = 0;
    const targetVolume = 0.5; // Max volume 50%
    const fadeStep = 0.02;
    
    fadeInterval = setInterval(() => {
        volume += fadeStep;
        if (volume >= targetVolume) {
            volume = targetVolume;
            clearInterval(fadeInterval);
        }
        audioPlayer.volume = volume;
    }, 100);
}

function fadeOut(callback) {
    if (fadeInterval) clearInterval(fadeInterval);
    
    let volume = 0.5;
    const fadeStep = 0.02;
    
    fadeInterval = setInterval(() => {
        volume -= fadeStep;
        if (volume <= 0) {
            volume = 0;
            clearInterval(fadeInterval);
            if (callback) callback();
        }
        audioPlayer.volume = volume;
    }, 100);
}

function setAudioSource(audioPath) {
    if (audioPlayer) {
        audioPlayer.src = audioPath;
        audioPlayer.load();
        console.log('Audio source set to:', audioPath);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize audio player
    initAudioPlayer();
    
    // Make controls available globally
    window.ADESA = {
        startMusic: startBackgroundMusic,
        stopMusic: stopBackgroundMusic,
        setAudio: setAudioSource
    };
    
    // Set audio source
    setAudioSource("Interdimensional Fiume(Ambient Fiume).mp3");
    
    // Instructions for music controls
    console.log('🎵 Background music ready:');
    console.log('• Add your audio file to the project folder');
    console.log('• Run: ADESA.setAudio("your-song.mp3") to set audio file');
    console.log('• Run: ADESA.startMusic() to start playing');
    console.log('• Run: ADESA.stopMusic() to stop playing');
    console.log('• Music will loop at 2:10 (2 minutes 10 seconds)');
    console.log('• Smooth fade in/out effects included');
    
    // Add click functionality to ADESA logo to start/stop audio
    const adesaLogo = document.querySelector('.adesa-logo');
    if (adesaLogo) {
        adesaLogo.addEventListener('click', (e) => {
            e.preventDefault();
            if (isPlaying) {
                stopBackgroundMusic();
                console.log('Music stopped by click');
                // Visual feedback - brief pause effect
                adesaLogo.style.filter = 'brightness(0.8)';
                setTimeout(() => {
                    adesaLogo.style.filter = '';
                }, 200);
            } else {
                startBackgroundMusic();
                console.log('Music started by click');
                // Visual feedback - brief play effect
                adesaLogo.style.filter = 'brightness(1.2)';
                setTimeout(() => {
                    adesaLogo.style.filter = '';
                }, 200);
            }
        });
        
        // Add cursor pointer to indicate it's clickable
        adesaLogo.style.cursor = 'pointer';
        console.log('🎵 Click the ADESA logo to start/stop music');
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        console.log('Window resized');
    });
});

// Optional: Add smooth scroll behavior for any future navigation
document.addEventListener('DOMContentLoaded', function() {
    // Enable smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Optional: Add viewport resize handling for better responsive behavior
window.addEventListener('resize', function() {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(function() {
        // Any resize-specific logic can go here
        console.log('Viewport resized');
    }, 250);
}); 