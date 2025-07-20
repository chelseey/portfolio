<template>
    <div class="top-bar">
        <div class="top-bar-logo">
            <img class="logo-img" src="/assets/vue.svg" alt="Vue Icon" />
        </div>
        <div class="top-bar-tabs">
            <router-link v-for="tab in subPages" :key="tab.name" :to="tab.path" class="top-bar-tab"
                :class="{ active: $route.name === tab.name }">
                <img :src="getIconPath(tab.name)" class="tab-icon" alt="" />
                <span class="tab-label">{{ tab.label }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
    name: 'TopBar',
    setup() {
        const route = useRoute()
        const mapping = {
            Home: [
                { name: 'Home', label: 'Home', path: '/' },
                { name: 'AboutMe', label: 'About Me', path: '/about-me' }
            ],
            AboutMe: [
                { name: 'Home', label: 'Home', path: '/' },
                { name: 'AboutMe', label: 'About Me', path: '/about-me' }
            ],
            Projects: [
                { name: 'Overview', label: 'Overview', path: '/projects/overview' },
                { name: 'FriendsForLife', label: 'Friends for Life', path: '/projects/friends-for-life' },
                { name: 'Axoltols', label: 'Axoltols', path: '/projects/axoltols' },
                { name: 'Portfolio', label: 'Portfolio', path: '/projects/portfolio' },
                { name: 'RecyclingApp', label: 'Recycling App', path: '/projects/recycling-app' }
            ],
            Settings: [
                { name: 'Theme', label: 'Theme', path: '/settings' }
            ],
            Contact: [
                { name: 'Contact', label: 'Contact', path: '/contact' }
            ]
        }
        const subPages = computed(() => {
            const mainPage = (route.name === 'AboutMe' ? 'Home' : route.name) || 'Home'
            return mapping[mainPage] || []
        })
        function getIconPath(name) {
            const iconMap = {
                Home: '/assets/home.svg',
                AboutMe: '/assets/about.svg',
                Overview: '/assets/overview.svg',
                FriendsForLife: '/assets/friends.svg',
                Axoltols: '/assets/axoltols.svg',
                Portfolio: '/assets/portfolio.svg',
                RecyclingApp: '/assets/recycling.svg',
                Theme: '/assets/settings.svg',
                Contact: '/assets/contact.svg'
            }
            return iconMap[name] || '/assets/default.svg'
        }
        return { subPages, getIconPath }
    }
}
</script>

<style scoped>
.top-bar {
    display: flex;
    align-items: center;
    background-color: var(--top-bar-bg, #1e1e1e);
    padding: 0;
    height: 2rem;
}

.top-bar-logo {
    margin-right: 1rem;
}

.logo-img {
    height: 100%;
}

.top-bar-tabs {
    display: flex;
    flex-grow: 1;
}

.top-bar-tab {
    display: flex;
    align-items: center;
    color: var(--top-bar-text, #ccc);
    padding: 0.5rem 1rem;
    text-decoration: none;
    margin-right: 1rem;
}

.top-bar-tab.active {
    background-color: var(--top-bar-active-bg, #3e3e3e);
    color: var(--top-bar-active-text, #fff);
}

.top-bar-tab:hover {
    background-color: var(--top-bar-hover-bg, #2d2d2d);
    color: var(--top-bar-hover-text, #fff);
}

.tab-icon {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
}

.tab-label {
    font-size: 0.9rem;
}
</style>