<template>
	<div class="settings">
		<h1>Settings</h1>
		<div class="theme-selector">
			<label for="theme-select">Choose Theme:</label>
			<select id="theme-select" v-model="selectedTheme" @change="changeTheme">
				<option v-for="theme in themes" :key="theme.name" :value="theme.file">
					{{ theme.name }}
				</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Settings',
	data() {
		return {
			themes: [
				{ name: 'Dracula', file: 'dracula.css' },
				{ name: 'Night Owl', file: 'night-owl.css' },
				{ name: 'One Dark Pro', file: 'one-dark-pro.css' },
				{ name: 'Monokai Pro', file: 'monokai-pro.css' },
				{ name: 'Bluloco Light', file: 'bluloco-light.css' },
			],
			selectedTheme: 'dracula.css'
		}
	},
	mounted() {
		const themeLink = document.getElementById('theme-link')
		if (themeLink) {
			const currentTheme = themeLink.getAttribute('href').split('/').pop()
			if (currentTheme) {
				this.selectedTheme = currentTheme
			}
		}
	},
	methods: {
		changeTheme() {
			const themeLink = document.getElementById('theme-link')
			if (themeLink) {
				themeLink.setAttribute('href', `/themes/${this.selectedTheme}`)
			}
		}
	}
}
</script>

<style scoped>
.settings {
	padding: 1rem;
	color: var(--text-color);
}

.theme-selector {
	margin-top: 1rem;
}

label {
	margin-right: 0.5rem;
}

select {
	padding: 0.5rem;
	background-color: var(--select-bg);
	color: var(--select-text);
	border: 1px solid var(--select-border);
	border-radius: 4px;
}
</style>
