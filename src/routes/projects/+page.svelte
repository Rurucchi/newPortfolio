<script>
  import styles from "./styles.module.css";
  import { cx } from "../../utils";
  import ProjectBubble from "../../components/projectBubble/projectBubble.svelte";
</script>

<div class={styles.body}>
  <div class={styles.appContainer}>
    <img src="background/project.png" alt="bg" class={styles.bgImage} />
    <div class={cx(styles.column, styles.projectSection, styles.center)}>
      <h1 class={styles.title}>Professional Projects</h1>
      <div class={styles.contentContainer}>
        <ProjectBubble
          title="Next Up (6 Month Internship)"
          description="Management app made with React and Express for Highschool and University sports teams"
          background="projectImage/nextup.png"
          link="https://github.com/Next-Up-Technologies"
        />
      </div>
    </div>
    <div class={cx(styles.column, styles.projectSection, styles.center)}>
      <h1 class={styles.title}>Personal Projects</h1>
      <div class={styles.contentContainer}>
        <ProjectBubble
          title="Read.IT"
          description="Full stack Reddit-like application made with React, Express and MongoDB."
          link="https://github.com/Rurucchi/Read.It"
          background="projectImage/readit.png"
        />
        <ProjectBubble
          title="NextChat"
          description="Chatting app made with NextJs and Firebase."
          link="https://github.com/Rurucchi/nextchat"
          background="projectImage/nextchat.png"
        />
        <ProjectBubble
          title="Portfolio"
          description="Portfolio website made with SvelteKit."
          link="https://github.com/Rurucchi/newPortfolio"
          background="projectImage/portfolio.png"
        />
        <ProjectBubble
          title="tehcheightcalc"
          description="Mini-project made with Winforms (C#) for entertainment"
          link="https://github.com/Rurucchi/tehcheightcalc"
          background="projectImage/heightcalc.png"
        />
      </div>
    </div>
    <div />
  </div>
</div>
