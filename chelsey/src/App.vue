<template>
  <div id="app-container">
    <!-- Full‑screen typing background -->
    <div class="code-background">
      <CodeDisplay />
    </div>

    <!-- Your UI layers -->
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
import TopBar      from './components/TopBar.vue'
import Sidebar     from './components/Sidebar.vue'
import CodeDisplay from './components/CodeDisplay.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Sidebar,
    CodeDisplay
  }
}
</script>

<style scoped>
#app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  /* Keep your app-bg only on the parts you want: */
  background-color: transparent;
  color: var(--app-text);
}

/* 🍔 Make the code sit just above the page background,
        but *below* your sidebar & content panels */
.code-background {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 0;     /* was -1; now 0 so it's *above* the page bg */
  opacity: 1;
}

/* All your UI layers need to sit above the code: */
.TopBar,
.Sidebar,
.page-content {
  position: relative;
  z-index: 1;
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
