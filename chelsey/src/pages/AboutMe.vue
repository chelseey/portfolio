<template>
    <div class="about-me-page">
        <div class="intro-box">
            <img class="profile-image" src="/assets/pixply.png" alt="Profile Picture" />
            <div class="intro-text">
                <h1>Chelsey Anderson</h1>
                <h2>Full-Stack Web Developer</h2>
                <p>I build scalable, efficient web applications and love working with modern technologies. I'm dedicated
                    to continuous learning and creative problem-solving.</p>
            </div>
        </div>
        <div class="tech-stack-box">
            <h3>Tech Stack</h3>
            <div class="tech-stack-list">
                <div class="tech-item">
                    <img src="/assets/vue.svg" alt="Vue.js" />
                    <span>Vue.js</span>
                </div>
                <div class="tech-item">
                    <img src="/assets/node.svg" alt="Node.js" />
                    <span>Node.js</span>
                </div>
                <div class="tech-item">
                    <img src="/assets/react.svg" alt="React" />
                    <span>React</span>
                </div>
                <div class="tech-item">
                    <img src="/assets/tailwind.svg" alt="Tailwind" />
                    <span>Tailwind</span>
                </div>
                <div class="tech-item">
                    <img src="/assets/aws.svg" alt="AWS" />
                    <span>AWS</span>
                </div>
            </div>
        </div>
        <div class="hobbies-box">
            <h3>Hobbies</h3>
            <p>I enjoy hiking, photography, playing guitar, and reading sci-fi novels.</p>
        </div>
        <div class="pets-box">
            <h3>Pets</h3>
            <p>I share my home with a friendly dog and a curious cat who keep life interesting.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>
.about-me-page {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: var(--text-color);
}

.intro-box {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--box-bg, rgba(0, 0, 0, 0.5));
    padding: 1rem;
    border-radius: 8px;
}

.profile-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
}

.intro-text h1 {
    margin: 0;
    font-size: 2rem;
}

.intro-text h2 {
    margin: 0.25rem 0;
    font-size: 1.5rem;
}

.intro-text p {
    margin: 0.5rem 0 0;
    font-size: 1rem;
}

.tech-stack-box,
.hobbies-box,
.pets-box {
    background: var(--box-bg, rgba(0, 0, 0, 0.5));
    padding: 1rem;
    border-radius: 8px;
}

.tech-stack-box h3,
.hobbies-box h3,
.pets-box h3 {
    margin-top: 0;
}

.tech-stack-list {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
}

.tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 80px;
}

.tech-item img {
    width: 50px;
    height: 50px;
}

.tech-item span {
    font-size: 0.9rem;
    text-align: center;
}
</style>