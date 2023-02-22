<script>
	import styles from './styles.module.css';

	// nav animation
	let navState = false;

	const handleNavbar = () => {
		navState = !navState;
		document.getElementById('mainContainer').style.transition = ' all 0.7s';
		if (navState) {
			document.getElementById('mainContainer').style.transform = 'translateX(-250px)';
			document.getElementById('menuLine').setAttribute('style', 'height:52%');
			document.getElementById('links').setAttribute('style', 'visibility:visible');
			document.getElementById('links').style.transition = ' all 0.7s';
			document.getElementById('menuLine').style.transition = ' all 0.7s';
		} else {
			document.getElementById('mainContainer').style.transform = 'translateX(0px)';
			document.getElementById('menuLine').setAttribute('style', 'height:0');
			document.getElementById('links').setAttribute('style', 'visibility:hidden');
			document.getElementById('links').style.transition = ' all 0.7s';
			document.getElementById('menuLine').style.transition = ' all 0.7s';
		}
		return;
	};
</script>

<div id="mainContainer">
	<button
		id="toggle"
		class={styles.navSwitch}
		on:click={() => {
			handleNavbar();
		}}
	>
		<div class={styles.line} />
		<div class={styles.line} />
		<div class={styles.line} />
	</button>

	<div id="navMenu" class={styles.navbar}>
		<div class={styles.navContainer}>
			<div class={styles.menuContainer}>
				<div id="menuLine" class={styles.menuLine} />
				<nav id="links" class={styles.menu}>
					<a id="home" class={styles.links} href="/">Home</a>
					<a id="stack" class={styles.links} href="/stack">Stack/Skills</a>
					<a id="exp" class={styles.links} href="/experience">Experience</a>
					<a id="proj" class={styles.links} href="/projects">Projects</a>
				</nav>
			</div>
			<div class={styles.extras}>
				<p>
					Design inspired by <br />
					<a
						href="http://vanguard-sound.com/"
						target="_blank"
						rel="noreferrer"
						class={styles.sourceLink}>Vanguard Sound Studio</a
					>
				</p>
				<p>
					Made with <a
						href="https://kit.svelte.dev/"
						target="_blank"
						rel="noreferrer"
						class={styles.sourceLink}>SvelteKit</a
					>
				</p>
			</div>
		</div>
	</div>
</div>

<style>
</style>
