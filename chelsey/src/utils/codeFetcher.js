// Allow overriding the GitHub base URL via environment variable so the source
// files can be fetched from a different repository if needed.
const baseUrl =
  import.meta.env.VITE_SOURCE_BASEURL ||
  'https://raw.githubusercontent.com/chelseey/chelsey/main/src/pages/'

const codeLinkMap = {
  Home: `${baseUrl}Home.vue`,
  AboutMe: `${baseUrl}AboutMe.vue`,
  Projects: `${baseUrl}Projects.vue`,
  Settings: `${baseUrl}Settings.vue`,
  Contact: `${baseUrl}Contact.vue`
}

export async function fetchCode(routeName) {
  const codeUrl = codeLinkMap[routeName]
  if (!codeUrl) {
    return '// Code not available for this page.'
  }
  try {
    const response = await fetch(codeUrl)
    if (!response.ok) {
      return `// Error fetching code from ${codeUrl}`
    }
    return await response.text()
  } catch (error) {
    return `// Error fetching code: ${error}`
  }
}

export { baseUrl, codeLinkMap }
