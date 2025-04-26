
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const mentorCards = document.querySelectorAll('.mentor-card');
        const prevButton = document.querySelector('.carousel-control.prev');
        const nextButton = document.querySelector('.carousel-control.next');

        let cardIndex = 0;
        let cardWidth = 0;
        let maxScroll = 0;

        function updateCardWidth() {
            if (mentorCards.length > 0) {
                cardWidth = mentorCards[0].offsetWidth + 20;
                maxScroll = carouselWrapper.scrollWidth - carouselContainer.offsetWidth;
            }
        }

        function updateButtons() {
            prevButton.disabled = cardIndex === 0;
            nextButton.disabled = cardIndex >= mentorCards.length - 1;
        }

        function scrollToCard(index, smooth = true) {
            cardIndex = index;
            updateButtons();
            const newScrollLeft = index * cardWidth;
            if (smooth) {
                carouselContainer.scrollTo({
                    left: newScrollLeft,
                    behavior: 'smooth'
                });
            } else {
                carouselContainer.scrollLeft = newScrollLeft;
            }
        }

        function nextCard() {
            if (cardIndex < mentorCards.length - 1) {
                scrollToCard(cardIndex + 1);
            }
        }

        function prevCard() {
            if (cardIndex > 0) {
                scrollToCard(cardIndex - 1);
            }
        }

        prevButton.addEventListener('click', prevCard);
        nextButton.addEventListener('click', nextCard);

        // --- Dragging functionality ---
        let isDragging = false;
        let startX = 0;
        let scrollLeft = 0;

        carouselContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            scrollLeft = carouselContainer.scrollLeft;
            carouselContainer.style.scrollBehavior = 'auto';
        });

        carouselContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            carouselContainer.scrollLeft = scrollLeft - deltaX;
        });

        const resetDrag = () => {
            isDragging = false;
            carouselContainer.style.scrollBehavior = 'smooth';
        };

        carouselContainer.addEventListener('mouseup', resetDrag);
        carouselContainer.addEventListener('mouseleave', resetDrag);

        // --- Touch events for mobile ---
        carouselContainer.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
            scrollLeft = carouselContainer.scrollLeft;
            carouselContainer.style.scrollBehavior = 'auto';
        });

        carouselContainer.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const deltaX = e.touches[0].clientX - startX;
            carouselContainer.scrollLeft = scrollLeft - deltaX;
        });

        const resetTouch = () => {
            isDragging = false;
            carouselContainer.style.scrollBehavior = 'smooth';
        };

        carouselContainer.addEventListener('touchend', resetTouch);
        carouselContainer.addEventListener('touchcancel', resetTouch);

        // --- ऑटोमेटिक scrolling ---
        let autoScrollInterval;
        let scrollDirection = 1;

        function startAutoScroll() {
            autoScrollInterval = setInterval(() => {
                if (carouselContainer.scrollLeft >= maxScroll) {
                    scrollDirection = -1;
                } else if (carouselContainer.scrollLeft <= 0) {
                    scrollDirection = 1;
                }
                carouselContainer.scrollLeft += scrollDirection * 2;
            }, 3000);
        }

        // startAutoScroll();

        // --- Stop auto scroll on interaction ---
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });
        carouselContainer.addEventListener('mouseleave', () => {
            // startAutoScroll();
        });

        // --- Initial ---
        window.addEventListener('load', () => {
            updateCardWidth();
            updateButtons();
            scrollToCard(0, false);
        });

        window.addEventListener('resize', () => {
            updateCardWidth();
            scrollToCard(cardIndex, false);
        });
    