<template>
    <div class="home-page">
        <div class="code-background">
            <CodeDisplay />
        </div>
        <div class="content-container">
            <div ref="scrollBox" class="scroll-box pulse fade-in">Scroll ↓</div>
            <div ref="welcomeSection" class="welcome-section fade-in">
                <div class="intro-box">
                    <img class="intro-image" src="/assets/pixply.png" alt="Profile" />
                    <div class="intro-text">
                        <h1>Chelsey Anderson</h1>
                        <p>Welcome to my site. Experience a unique developer environment built with Vue.</p>
                    </div>
                </div>
                <div class="action-boxes">
                    <router-link to="/about-me" class="action-box pulse fade-in">
                        Click here to learn more about me
                    </router-link>
                    <router-link to="/projects" class="action-box pulse fade-in">
                        Click here to see my work
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
    name: 'Home',
    setup() {
        const scrollBox = ref(null)
        const welcomeSection = ref(null)
        onMounted(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            }, { threshold: 0.1 })
            if (scrollBox.value) observer.observe(scrollBox.value)
            if (welcomeSection.value) observer.observe(welcomeSection.value)
        })
        return { scrollBox, welcomeSection }
    }
}
</script>

<style scoped>
.home-page {
    position: relative;
    min-height: 200vh;
}

.code-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.content-container {
    position: relative;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.scroll-box {
    width: fit-content;
    background: var(--box-bg, rgba(0, 0, 0, 0.5));
    color: var(--box-text, #f8f8f2);
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-size: 1.25rem;
    opacity: 0;
    transition: opacity 1s ease;
}

.welcome-section {
    opacity: 0;
    transition: opacity 1s ease;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.visible {
    opacity: 1;
}

.intro-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--box-bg, rgba(0, 0, 0, 0.5));
    padding: 1rem;
    border-radius: 8px;
}

.intro-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
}

.intro-text h1 {
    margin: 0;
    font-size: 2rem;
    color: var(--text-color);
}

.intro-text p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    color: var(--text-color);
}

.action-boxes {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.action-box {
    flex: 1;
    padding: 1rem;
    background: var(--box-bg, rgba(0, 0, 0, 0.5));
    color: var(--box-text, #f8f8f2);
    text-align: center;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.125rem;
    opacity: 0;
    transition: opacity 1s ease;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

.pulse {
    animation: pulse 2s infinite;
}
</style>