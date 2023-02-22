<script>
	import styles from './styles.module.css';
	import { goto } from '$app/navigation';

	function routeToPage(url) {
		goto(`/${url}`, true);
	}
</script>

<button
	on:click|once={() => {
		routeToPage('stack');
	}}
	class={styles.buttonContainer}
>
	<div class={styles.arrow} />
</button>
