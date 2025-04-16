<template>
    <pre>
      <code ref="codeBlock" class="language-html"></code>
    </pre>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import Typed from 'typed.js'
  import hljs from 'highlight.js/lib/core'
  import vue from 'highlight.js/lib/languages/xml'
  
  hljs.registerLanguage('xml', vue)
  
  export default {
    name: 'CodeDisplay',
    setup() {
      const codeBlock = ref(null)
      const route = useRoute()
      const codeContent = ref('')
  
      const baseUrl = 'https://raw.githubusercontent.com/chelseey/chelsey/main/src/pages/'
  
      const codeLinkMap = {
        Home: `${baseUrl}Home.vue`,
        AboutMe: `${baseUrl}AboutMe.vue`,
        Projects: `${baseUrl}Projects.vue`,
        Settings: `${baseUrl}Settings.vue`,
        Contact: `${baseUrl}Contact.vue`
      }
  
      const fetchCode = async () => {
        const currentRouteName = route.name
        let codeUrl = codeLinkMap[currentRouteName]
        if (!codeUrl) {
          codeContent.value = '// Code not available for this page.'
          return
        }
        try {
          const response = await fetch(codeUrl)
          if (!response.ok) {
            codeContent.value = `// Error fetching code from ${codeUrl}`
            return
          }
          codeContent.value = await response.text()
        } catch (error) {
          codeContent.value = `// Error fetching code: ${error}`
        }
      }
  
      const startTyping = () => {
        if (!codeBlock.value) return
        const typed = new Typed(codeBlock.value, {
          strings: [codeContent.value],
          typeSpeed: 40,
          backSpeed: 20,
          showCursor: false,
          onComplete: () => {
            hljs.highlightElement(codeBlock.value)
          }
        })
      }
  
      onMounted(async () => {
        await fetchCode()
        startTyping()
      })
  
      return {
        codeBlock
      }
    }
  }
  </script>
  
  <style scoped>
  pre {
    background: var(--code-bg);
    color: var(--code-text);
    padding: 1rem;
    margin: 0;
    border-radius: 8px;
    overflow-x: auto;
    height: 300px;
  }
  </style>
  