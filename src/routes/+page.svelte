<script>
  //svelte
  export const ssr = false;

  //styles
  import styles from "./styles.module.css";

  //components
  import DownArrowButton from "../components/downArrowButton/downArrowButton.svelte";
  import LinkBar from "../components/linkBar/linkBar.svelte";
</script>

<div class={styles.appContainer}>
  <div class={styles.homeBg} />
  <div class={styles.infoContainer}>
    <div class={styles.pfpContainer}>
      <img src="pfp/pfp.png" alt="pfp" class={styles.pfp} />
      <div class={styles.nameContainer}>
        <h1>Hello!</h1>
        <h1>I'm Lenny Xiong</h1>
      </div>
    </div>
    <h2>I code things for the web!!</h2>
    <LinkBar
      ghLink="https://github.com/Rurucchi"
      liLink="https://www.linkedin.com/in/lenny-xiong/"
    />
  </div>
  <DownArrowButton />
</div>

<style>
  h1 {
    margin: 0;
    font-style: normal;
  }
  h2 {
    font-style: normal;
  }
</style>
