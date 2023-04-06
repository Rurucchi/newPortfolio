<script>
	import styles from './styles.module.css';
	import cx from '../../utils';

	export let title;
	export let description;
	export let link;
	// background must be a file path
	export let background;
</script>

<div id="mainContainer" class={cx(styles.bubble)} style="--bg: url('{background}')">
	<a href={link} target="_blank" rel="noreferrer"><h1>{title}</h1></a>
	<p>{description}</p>
</div>

<style>
	#mainContainer {
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--bg);
		background-size: cover;
	}
</style>
