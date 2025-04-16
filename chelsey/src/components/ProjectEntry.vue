<template>
    <div class="project-entry">
        <img class="project-image" :src="image" alt="Project Image" />
        <div class="project-details">
            <h2 class="project-title">{{ title }}</h2>
            <p class="project-description">{{ description }}</p>
            <router-link :to="projectLink" class="learn-more-button">Learn More</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectEntry',
    props: {
        image: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    computed: {
        projectLink() {
            return `/projects/${this.title.trim().toLowerCase().replace(/\s+/g, '-')}`
        }
    }
}
</script>

<style scoped>
.project-entry {
    display: flex;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1rem;
}

.project-image {
    width: 200px;
    object-fit: cover;
}

.project-details {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--project-text, #f8f8f2);
}

.project-title {
    margin: 0;
    font-size: 1.5rem;
}

.project-description {
    flex: 1;
    margin: 0.5rem 0;
}

.learn-more-button {
    align-self: flex-end;
    text-decoration: none;
    background-color: var(--button-bg, #6272a4);
    color: var(--button-text, #f8f8f2);
    padding: 0.5rem 1rem;
    border-radius: 4px;
}

.learn-more-button:hover {
    opacity: 0.9;
}
</style>