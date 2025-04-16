<template>
    <div class="projects-page">
        <h1>Projects</h1>
        <ProjectEntry image="/assets/vs-code-themed.png" title="VS Code Themed Website"
            description="This project is a VS Code themed website built using Vue and Vite. It features a live code typing effect, dynamic theme switching, and a modern design that mimics a developer environment. Explore the project to see the implementation details and enjoy a unique browsing experience." />
    </div>
</template>

<script>
import ProjectEntry from '../components/ProjectEntry.vue'
export default {
    name: 'Projects',
    components: {
        ProjectEntry
    }
}
</script>

<style scoped>
.projects-page {
    padding: 1rem;
    color: var(--text-color);
}
</style>