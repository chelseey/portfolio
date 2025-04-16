<template>
  <div id="app-container">
    <TopBar />
    <div class="main-layout">
      <Sidebar />
      <div class="page-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Sidebar
  }
}
</script>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: var(--app-bg);
  color: var(--app-text);
}

.main-layout {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.page-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}
</style>
