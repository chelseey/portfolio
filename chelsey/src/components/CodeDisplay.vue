<template>
    <pre class="line-numbers">
      <code ref="codeBlock" class="language-html"></code>
    </pre>
  </template>
  
  <script>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Typed from 'typed.js'
import hljs from 'highlight.js/lib/core'
import vue from 'highlight.js/lib/languages/xml'
import { fetchCode } from '../utils/codeFetcher'
  
  hljs.registerLanguage('xml', vue)
  
  export default {
    name: 'CodeDisplay',
    setup() {
      const codeBlock = ref(null)
      const route = useRoute()
      const codeContent = ref('')
      let typedInstance = null
  
      const addLineNumbers = () => {
        const html = codeBlock.value.innerHTML
        const lines = html.split('\n')
        const numbered = lines
          .map((line) => `<span class="line">${line}</span>`) 
          .join('\n')
        codeBlock.value.innerHTML = numbered
      }

      const startTyping = () => {
        if (!codeBlock.value) return
        if (typedInstance) typedInstance.destroy()
        codeBlock.value.innerHTML = ''
        typedInstance = new Typed(codeBlock.value, {
          strings: [codeContent.value],
          typeSpeed: 20,
          showCursor: false,
          onComplete: () => {
            hljs.highlightElement(codeBlock.value)
            addLineNumbers()
          }
        })
      }
  
      const loadCode = async () => {
        codeContent.value = await fetchCode(route.name)
      }

      onMounted(async () => {
        await loadCode()
        startTyping()
      })

      watch(
        () => route.name,
        async () => {
          await loadCode()
          startTyping()
        }
      )
  
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
    counter-reset: line;
  }

  .line {
    display: block;
    padding-left: 2.5em;
    position: relative;
  }

  .line::before {
    counter-increment: line;
    content: counter(line);
    position: absolute;
    left: 0;
    width: 2em;
    text-align: right;
    margin-right: 0.5em;
    color: var(--line-number-color, #888);
    user-select: none;
  }
  </style>
  