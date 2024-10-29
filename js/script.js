const sparkContainer = document.querySelector('.spark-container');

// Function to create sparks
function createSpark() {
    const spark = document.createElement('div');
    spark.classList.add('spark');
    const xPos = Math.random() * window.innerWidth;
    const duration = Math.random() * 500 + 300; // Duration between 300ms to 800ms
    const opacity = Math.random() * 0.5 + 0.5; // Opacity between 0.5 and 1

    spark.style.left = `${xPos}px`;
    spark.style.opacity = opacity;

    sparkContainer.appendChild(spark);

    anime({
        targets: spark,
        translateY: [
            { value: -50, duration: duration, easing: 'easeInQuad' },
            { value: 0, duration: 0, easing: 'easeOutQuad' }
        ],
        opacity: [
            { value: 0, duration: duration, easing: 'easeOutQuad' }
        ],
        complete: () => {
            spark.remove(); // Remove spark after animation
        }
    });
}

// Create sparks at intervals
setInterval(createSpark, 300); // Change the interval for more/less sparks
