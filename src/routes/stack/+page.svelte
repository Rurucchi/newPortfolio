<script>
	import styles from './styles.module.css';
	import { cx } from '../../utils';
</script>

<div class={styles.page}>
	<div class={styles.header}>
		<h1 class={styles.title}>Tech-Stack</h1>
		<p class={styles.subtitle}>Everything I use and I feel comfortable with</p>
	</div>
	<div class={styles.appContainer}>
		<div class={styles.cell}>
			<div class={cx(styles.banner, styles.reactBanner)}>
				<h2 class={styles.tech}>React</h2>
				<p class={styles.description}>
					<a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> is a free and open-source
					front-end JavaScript library for building user interfaces based on components.
				</p>
			</div>
		</div>
		<div class={styles.cell}>
			<div class={cx(styles.banner, styles.muiBanner)}>
				<h2 class={styles.tech}>Material-UI</h2>
				<p class={styles.description}>
					Material UI is an open-source front-end <a
						href="https://reactjs.org/"
						target="_blank"
						rel="noreferrer">React</a
					> component library developed by Google.
				</p>
			</div>
		</div>
		<div class={styles.cell}>
			<div class={cx(styles.banner, styles.nextuiBanner)}>
				<h2 class={styles.tech}>NextUI</h2>
				<p class={styles.description}>
					NextUI is an open-source component library for <a
						href="https://reactjs.org/"
						target="_blank"
						rel="noreferrer">React</a
					>
				</p>
			</div>
		</div>
		<div class={styles.cell}>
			<div class={cx(styles.banner, styles.expressBanner)}>
				<h2 class={styles.tech}>Express</h2>
				<p class={styles.description}>
					Express.js, also called Express, is a back-end framework made for building RESTful APIs
					with <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a>
				</p>
			</div>
		</div>
		<div class={styles.cell}>
			<div class={cx(styles.banner, styles.mongoBanner)}>
				<h2 class={styles.tech}>MongoDB</h2>
				<p class={styles.description}>
					Developped by <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"
						>MongoDB</a
					>
					Inc., MongoDB is a source-available cross-platform document-oriented database program. Classified
					as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
				</p>
			</div>
		</div>
		<div class={styles.cell}>
			<div class={cx(styles.banner, styles.unityBanner)}>
				<h2 class={styles.tech}>Unity</h2>
				<p class={styles.description}>
					Unity is a cross-platform game engine developed by Unity Technologies, it uses the <a
						href="https://dotnet.microsoft.com/en-us/"
						target="_blank"
						rel="noreferrer">.NET</a
					>
					framework made by Microsoft.
				</p>
			</div>
		</div>
		<div class={styles.cell}>
			<div class={cx(styles.banner, styles.winBanner)}>
				<h2 class={styles.tech}>Windows Forms</h2>
				<p class={styles.description}>
					Windows Forms is a free and open-source graphical class library included as a part of
					Microsoft <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noreferrer"
						>.NET</a
					> framework
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	a {
		text-decoration: none;
		color: yellow;
	}

	h2 {
		z-index: 1;
		transition: 0.5s;
	}
</style>
