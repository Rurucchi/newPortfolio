<script>
  import styles from "./styles.module.css";
  import cx from "../../utils";

  export let title;
  export let description;
  export let link;
  // background must be a file path
  export let background;
</script>

<div id="mainContainer" class={styles.bubble}>
  <img src={background} alt="bg" class={styles.bgImg} />
  <div class={styles.content}>
    <a href={link} target="_blank" rel="noreferrer"><h1>{title}</h1></a>
    <p>{description}</p>
  </div>
</div>
