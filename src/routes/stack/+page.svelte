<script>
  import styles from "./styles.module.css";
  import { cx } from "../../utils";

  window.addEventListener("load", (event) => {
    let image = document.querySelector("img");
    let isLoaded = image.complete && image.naturalHeight !== 0;
  });
</script>

<div class={styles.page}>
  <div class={styles.header}>
    <h1 class={styles.title}>Tech-Stack</h1>
    <p class={styles.subtitle}>Everything I use and I feel comfortable with</p>
  </div>

  <div class={styles.appContainer}>
    <!-- REACT -->
    <div class={styles.dividedCell}>
      <div class={styles.cell}>
        <img
          src="banners/react.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>React</h2>
          <p class={styles.description}>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"
              >React</a
            > is a free and open-source front-end JavaScript library for building
            user interfaces based on components.
          </p>
        </div>
      </div>
      <div class={styles.cell}>
        <img
          src="banners/nextjs.jpeg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <!-- <div class={styles.contentContainer}>
          {#if isLoaded}
            <div class={styles.loading}>
              <div />
              <div />
              <div />
            </div>
          {/if} -->
        <div class={styles.content}>
          <h2 class={styles.tech}>Next.js</h2>
          <p class={styles.description}>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer"
              >Next.js</a
            > is an open-source web development framework created by Vercel enabling
            React-based web applications with server-side rendering and generating
            static websites.
          </p>
        </div>
      </div>
      <!-- </div> -->
    </div>

    <!-- NATIVE AND EXPO -->
    <div class={styles.dividedCell}>
      <div class={styles.cell}>
        <img
          src="banners/react_native.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>React Native</h2>
          <p class={styles.description}>
            <a href="https://reactnative.dev/" target="_blank" rel="noreferrer"
              >React Native</a
            >
            is an open-source UI software framework created by Meta Platforms, Inc.
            It is used to develop applications for Android, Android TV, iOS, macOS,
            tvOS, Web, Windows and UWP by enabling developers to use the
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"
              >React</a
            > framework along with native platform capabilities.
          </p>
        </div>
      </div>

      <div class={styles.cell}>
        <img
          src="banners/expo.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>Expo</h2>
          <p class={styles.description}>
            <a href="https://expo.dev/" target="_blank" rel="noreferrer">Expo</a
            >
            is an open-source platform for making universal native apps for Android,
            iOS, and the web with JavaScript and
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"
              >React</a
            >.
          </p>
        </div>
      </div>
    </div>

    <!-- SVELTE & FIGMA -->

    <div class={styles.dividedCell}>
      <div class={styles.cell}>
        <img
          src="banners/sveltekit.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>SvelteKit</h2>
          <p class={styles.description}>
            <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer"
              >SvelteKit</a
            >
            is an opensource backend framework built on
            <a href="https://svelte.dev/" target="_blank" rel="noreferrer"
              >Svelte</a
            >. It uses
            <a
              href="https://en.wikipedia.org/wiki/Hydration_(web_development)"
              target="_blank"
              rel="noreferrer">hydration</a
            >
            along with
            <a
              href="https://web.dev/rendering-on-the-web/"
              target="_blank"
              rel="noreferrer">CSR or SSR</a
            > to render websites and apps on the browser.
          </p>
        </div>
      </div>

      <div class={styles.cell}>
        <img
          src="banners/figma.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>Figma</h2>
          <p class={styles.description}>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer"
              >Figma</a
            > is a collaborative web application for interface design, with additional
            offline features enabled by desktop applications for macOS and Windows.
          </p>
        </div>
      </div>
    </div>

    <!-- UI LIBRARIES -->

    <div class={styles.dividedCell}>
      <div class={styles.cell}>
        <img
          src="banners/materialui.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
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
        <img
          src="banners/nextui.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
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
    </div>

    <div class={styles.dividedCell}>
      <!-- EXPRESS -->

      <div class={styles.cell}>
        <img
          src="banners/express.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>Express</h2>
          <p class={styles.description}>
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer"
              >Express.js</a
            >, also called Express, is a back-end framework made for building
            <a
              href="https://en.wikipedia.org/wiki/Representational_state_transfer"
              target="_blank"
              rel="noreferrer">RESTful</a
            >
            APIs with
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"
              >Node.js</a
            >
          </p>
        </div>
      </div>

      <!-- MONGODB -->

      <div class={styles.cell}>
        <img
          src="banners/mongo.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>MongoDB</h2>
          <p class={styles.description}>
            Developped by <a
              href="https://www.mongodb.com/"
              target="_blank"
              rel="noreferrer">MongoDB</a
            >
            Inc., MongoDB is a source-available cross-platform document-oriented
            database program. Classified as a
            <a
              href="https://en.wikipedia.org/wiki/NoSQL"
              target="_blank"
              rel="noreferrer">NOSQL</a
            >
            database program, MongoDB uses JSON-like documents with optional schemas.
          </p>
        </div>
      </div>
    </div>

    <div class={styles.dividedCell}>
      <!-- UNITY -->
      <div class={styles.cell}>
        <img
          src="banners/unity.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>Unity</h2>
          <p class={styles.description}>
            <a href="https://unity.com/" target="_blank" rel="noreferrer"
              >Unity</a
            >
            is a cross-platform game engine developed by Unity Technologies, it uses
            the
            <a
              href="https://dotnet.microsoft.com/en-us/"
              target="_blank"
              rel="noreferrer">.NET</a
            >
            framework made by Microsoft.
          </p>
        </div>
      </div>

      <!-- FORMS -->

      <div class={styles.cell}>
        <img
          src="banners/vscommunity.jpg"
          alt="bg"
          class={styles.bgImage}
          unselectable="on"
        />
        <div class={styles.content}>
          <h2 class={styles.tech}>Windows Forms</h2>
          <p class={styles.description}>
            Windows Forms is a free and open-source graphical class library
            included as a part of Microsoft <a
              href="https://dotnet.microsoft.com/en-us/"
              target="_blank"
              rel="noreferrer">.NET</a
            > framework
          </p>
        </div>
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
