<script>
	import styles from './styles.module.css';
</script>

<nav class={styles.mainContainer}>
	<ul class={styles.flexRow}>
		<div class={styles.selector}>
			<li><a href="/">Home</a></li>
			<div class={styles.line} />
		</div>
		<div class={styles.selector}>
			<li><a href="/stack">Stack</a></li>
			<div class={styles.line} />
		</div>
		<div class={styles.selector}>
			<li><a href="/projects">Projects</a></li>
			<div class={styles.line} />
		</div>
	</ul>
</nav>

<style>
	a {
		font-size: 1.2em;
		color: white;
		text-decoration: none;
	}
	ul {
		list-style-type: none;
	}
</style>
