<template>
    <div class="sidebar">
      <router-link
        v-for="item in sidebarItems"
        :key="item.name"
        :to="item.path"
        class="sidebar-item"
        :class="{ active: $route.name === item.name }"
      >
        <img class="sidebar-icon" :src="getIconPath(item.name)" alt="" />
        <div class="sidebar-label">{{ item.label }}</div>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
    data() {
      return {
        sidebarItems: [
          { name: 'Home', label: 'Home', path: '/' },
          { name: 'Projects', label: 'Projects', path: '/projects' },
          { name: 'Settings', label: 'Settings', path: '/settings' },
          { name: 'Contact', label: 'Contact', path: '/contact' }
        ]
      }
    },
    methods: {
      getIconPath(name) {
        const iconMap = {
          Home: '/assets/home.svg',
          Projects: '/assets/projects.svg',
          Settings: '/assets/settings.svg',
          Contact: '/assets/contact.svg'
        }
        return iconMap[name] || '/assets/default.svg'
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    width: 4rem;
    background-color: var(--sidebar-bg, #1e1e1e);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    overflow: auto;
  }
  .sidebar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--sidebar-text, #ccc);
    text-decoration: none;
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    width: 100%;
  }
  .sidebar-item:hover {
    background-color: var(--sidebar-hover-bg, #2d2d2d);
    color: var(--sidebar-hover-text, #fff);
  }
  .sidebar-item.active {
    background-color: var(--sidebar-active-bg, #3e3e3e);
    color: var(--sidebar-active-text, #fff);
  }
  .sidebar-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .sidebar-label {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
  </style>
  