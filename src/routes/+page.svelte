<script>
	//svelte

	//styles
	import styles from './styles.module.css';

	//components
	import DownArrowButton from '../components/downArrowButton/downArrowButton.svelte';
	import HomeButton from '../components/homeButton/homeButton.svelte';
</script>

<div class={styles.appContainer}>
	<div class={styles.homeBg} />
	<HomeButton />
	<DownArrowButton />
</div>
