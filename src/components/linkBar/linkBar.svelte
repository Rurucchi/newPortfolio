<script>
  export let ghLink;
  export let liLink;

  import styles from "./styles.module.css";

  function handleClick() {
    navigator.clipboard.writeText(window.location);
    alert("Copied url!");
    return 0;
  }
</script>

<div class={styles.mainContainer}>
  <a href={ghLink} target="_blank" rel="noreferrer">
    <button class={styles.button}>
      <img src="logo\githublogo.png" alt="github" class={styles.icon} />
    </button>
  </a>
  <a href={liLink} target="_blank" rel="noreferrer"
    ><button class={styles.button}>
      <img src="logo/linkedinlogo.png" alt="linkedin" class={styles.icon} />
    </button>
  </a>

  <button class={styles.button} on:click={() => handleClick()}>
    <img src="logo/copy.svg" alt="copy" class={styles.icon} />
  </button>
</div>
