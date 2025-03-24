/**
 * Studio Ghibli Inspired Universe
 * Interactive JavaScript functionality for parallax scrolling and entity interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const universeContainer = document.querySelector('.universe-container');
    const parallaxLayers = document.querySelectorAll('.parallax-layer');
    const islands = document.querySelectorAll('.island');
    const entities = document.querySelectorAll('.entity');
    const welcomeMessage = document.querySelector('.welcome-message');
    const navLeft = document.getElementById('nav-left');
    const navRight = document.getElementById('nav-right');
    
    // State variables
    let currentPosition = { x: 0, y: 0 };
    let targetPosition = { x: 0, y: 0 };
    let mousePosition = { x: 0, y: 0 };
    let isWelcomeVisible = true;
    
    // Initialize
    function init() {
        // Add event listeners
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);
        navLeft.addEventListener('click', navigateLeft);
        navRight.addEventListener('click', navigateRight);
        
        // Entity interactions
        entities.forEach(entity => {
            entity.addEventListener('click', () => showEntityInfo(entity));
        });
        
        // Hide welcome message on click
        welcomeMessage.addEventListener('click', hideWelcomeMessage);
        
        // Start animation loop
        requestAnimationFrame(animateUniverse);
    }
    
    // Handle mouse movement for subtle parallax effect
    function handleMouseMove(event) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        
        // Calculate mouse position relative to the center of the screen
        mousePosition.x = (clientX - innerWidth / 2) / innerWidth;
        mousePosition.y = (clientY - innerHeight / 2) / innerHeight;
    }
    
    // Handle window resize
    function handleResize() {
        // Adjust any necessary dimensions or positions
    }
    
    // Navigate left
    function navigateLeft() {
        targetPosition.x += 100;
        hideWelcomeMessage();
    }
    
    // Navigate right
    function navigateRight() {
        targetPosition.x -= 100;
        hideWelcomeMessage();
    }
    
    // Hide welcome message
    function hideWelcomeMessage() {
        if (isWelcomeVisible) {
            welcomeMessage.style.opacity = '0';
            setTimeout(() => {
                welcomeMessage.style.display = 'none';
            }, 1000);
            isWelcomeVisible = false;
        }
    }
    
    // Show entity information
    function showEntityInfo(entity) {
        // Highlight the selected entity
        entities.forEach(e => e.classList.remove('active'));
        entity.classList.add('active');
        
        // Hide welcome message when interacting with entities
        hideWelcomeMessage();
    }
    
    // Main animation loop
    function animateUniverse() {
        // Smooth transition to target position
        currentPosition.x += (targetPosition.x - currentPosition.x) * 0.05;
        currentPosition.y += (targetPosition.y - currentPosition.y) * 0.05;
        
        // Apply parallax effect to layers
        parallaxLayers.forEach(layer => {
            const depth = 0.1; // Base parallax depth
            const offsetX = currentPosition.x * depth + mousePosition.x * 20;
            const offsetY = currentPosition.y * depth + mousePosition.y * 20;
            
            layer.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
        });
        
        // Apply parallax effect to islands with different depths
        islands.forEach(island => {
            const depth = parseFloat(island.getAttribute('data-depth')) || 0.2;
            const offsetX = currentPosition.x * depth + mousePosition.x * 30 * depth;
            const offsetY = currentPosition.y * depth + mousePosition.y * 30 * depth;
            
            island.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
        });
        
        // Apply subtle movement to entities
        entities.forEach(entity => {
            const depth = 0.15; // Subtle movement for entities
            const offsetX = mousePosition.x * 15 * depth;
            const offsetY = mousePosition.y * 15 * depth;
            
            const entityBody = entity.querySelector('.entity-body');
            if (entityBody) {
                entityBody.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
            }
        });
        
        // Continue animation loop
        requestAnimationFrame(animateUniverse);
    }
    
    // Start the universe
    init();
});