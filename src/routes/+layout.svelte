<script>
	//svelte stuff
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	//components
	import NavSwitch from '../components/navbar/navSwitch.svelte';

	//styling
	import styles from './styles.module.css';
	import '@fontsource/archivo';

	// utils
	import { cx } from '../utils';

	let loaded = false;
	const isLoaded = async () => {
		await setTimeout('', 2000);
		loaded = true;
	};

	onMount(async () => {
		isLoaded();
	});
</script>

<div class="body">
	{#if loaded}
		<div>
			<div class={styles.loadingScreen}>
				<p class={styles.loadingMessage}>Loading...</p>
				<div class={styles.loadingBar} />
			</div>
		</div>
	{/if}

	{#if loaded}
		<div class={styles.outlet}>
			<NavSwitch />
			<slot />
		</div>
	{/if}
</div>

<style>
	.body {
		font-family: 'Archivo';
	}
</style>
