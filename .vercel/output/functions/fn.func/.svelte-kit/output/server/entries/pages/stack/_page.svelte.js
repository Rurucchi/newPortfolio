import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty } from "../../../chunks/index.js";
import { c as cx } from "../../../chunks/utils.js";
const page = "_page_jnr9s_1";
const appContainer = "_appContainer_jnr9s_13";
const header = "_header_jnr9s_35";
const title = "_title_jnr9s_53";
const subtitle = "_subtitle_jnr9s_61";
const dividedCell = "_dividedCell_jnr9s_73";
const cell = "_cell_jnr9s_93";
const description = "_description_jnr9s_145";
const tech = "_tech_jnr9s_187";
const banner = "_banner_jnr9s_205";
const reactBanner = "_reactBanner_jnr9s_255";
const muiBanner = "_muiBanner_jnr9s_269";
const nextuiBanner = "_nextuiBanner_jnr9s_283";
const expressBanner = "_expressBanner_jnr9s_297";
const mongoBanner = "_mongoBanner_jnr9s_311";
const unityBanner = "_unityBanner_jnr9s_325";
const winBanner = "_winBanner_jnr9s_339";
const nextBanner = "_nextBanner_jnr9s_353";
const nativeBanner = "_nativeBanner_jnr9s_367";
const expoBanner = "_expoBanner_jnr9s_381";
const svelteBanner = "_svelteBanner_jnr9s_395";
const figmaBanner = "_figmaBanner_jnr9s_409";
const styles = {
  page,
  appContainer,
  header,
  title,
  subtitle,
  dividedCell,
  cell,
  description,
  tech,
  banner,
  reactBanner,
  muiBanner,
  nextuiBanner,
  expressBanner,
  mongoBanner,
  unityBanner,
  winBanner,
  nextBanner,
  nativeBanner,
  expoBanner,
  svelteBanner,
  figmaBanner
};
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-49t9iu{text-decoration:none;color:yellow}h2.svelte-49t9iu{z-index:1;transition:0.5s}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div${add_attribute("class", styles.page, 0)}><div${add_attribute("class", styles.header, 0)}><h1${add_attribute("class", styles.title, 0)}>Tech-Stack</h1>
		<p${add_attribute("class", styles.subtitle, 0)}>Everything I use and I feel comfortable with</p></div>

	<div${add_attribute("class", styles.appContainer, 0)}>
		<div${add_attribute("class", styles.dividedCell, 0)}><div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.reactBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">React</h2>
					<p${add_attribute("class", styles.description, 0)}><a href="https://reactjs.org/" target="_blank" rel="noreferrer" class="svelte-49t9iu">React</a> is a free and open-source
						front-end JavaScript library for building user interfaces based on components.
					</p></div></div>

			<div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.nextBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">Next.js</h2>
					<p${add_attribute("class", styles.description, 0)}><a href="https://nextjs.org/" target="_blank" rel="noreferrer" class="svelte-49t9iu">Next.js</a> is an open-source
						web development framework created by Vercel enabling React-based web applications with server-side
						rendering and generating static websites.
					</p></div></div></div>

		
		<div${add_attribute("class", styles.dividedCell, 0)}><div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.nativeBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">React Native</h2>
					<p${add_attribute("class", styles.description, 0)}><a href="https://reactnative.dev/" target="_blank" rel="noreferrer" class="svelte-49t9iu">React Native</a> is
						an open-source UI software framework created by Meta Platforms, Inc. It is used to
						develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by
						enabling developers to use the
						<a href="https://reactjs.org/" target="_blank" rel="noreferrer" class="svelte-49t9iu">React</a> framework along
						with native platform capabilities.
					</p></div></div>

			<div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.expoBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">Expo</h2>
					<p${add_attribute("class", styles.description, 0)}><a href="https://expo.dev/" target="_blank" rel="noreferrer" class="svelte-49t9iu">Expo</a> is an open-source
						platform for making universal native apps for Android, iOS, and the web with JavaScript
						and <a href="https://reactjs.org/" target="_blank" rel="noreferrer" class="svelte-49t9iu">React</a>.
					</p></div></div></div>

		

		<div${add_attribute("class", styles.dividedCell, 0)}><div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.svelteBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">SvelteKit</h2>
					<p${add_attribute("class", styles.description, 0)}><a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer" class="svelte-49t9iu">SvelteKit</a> is an
						opensource backend framework built on
						<a href="https://svelte.dev/" target="_blank" rel="noreferrer" class="svelte-49t9iu">Svelte</a>. It uses
						<a href="https://en.wikipedia.org/wiki/Hydration_(web_development)" target="_blank" rel="noreferrer" class="svelte-49t9iu">hydration</a>
						along with
						<a href="https://web.dev/rendering-on-the-web/" target="_blank" rel="noreferrer" class="svelte-49t9iu">CSR or SSR</a> to render websites and apps on the browser.
					</p></div></div>

			<div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.figmaBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">Figma</h2>
					<p${add_attribute("class", styles.description, 0)}><a href="https://www.figma.com/" target="_blank" rel="noreferrer" class="svelte-49t9iu">Figma</a> is a collaborative
						web application for interface design, with additional offline features enabled by desktop
						applications for macOS and Windows.
					</p></div></div></div>

		

		<div${add_attribute("class", styles.dividedCell, 0)}><div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.muiBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">Material-UI</h2>
					<p${add_attribute("class", styles.description, 0)}>Material UI is an open-source front-end <a href="https://reactjs.org/" target="_blank" rel="noreferrer" class="svelte-49t9iu">React</a> component library developed by Google.
					</p></div></div>
			<div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.nextuiBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">NextUI</h2>
					<p${add_attribute("class", styles.description, 0)}>NextUI is an open-source component library for <a href="https://reactjs.org/" target="_blank" rel="noreferrer" class="svelte-49t9iu">React</a></p></div></div></div>

		<div${add_attribute("class", styles.dividedCell, 0)}>

			<div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.expressBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">Express</h2>
					<p${add_attribute("class", styles.description, 0)}><a href="https://expressjs.com/" target="_blank" rel="noreferrer" class="svelte-49t9iu">Express.js</a>, also
						called Express, is a back-end framework made for building
						<a href="https://en.wikipedia.org/wiki/Representational_state_transfer" target="_blank" rel="noreferrer" class="svelte-49t9iu">RESTful</a>
						APIs with
						<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer" class="svelte-49t9iu">Node.js</a></p></div></div>

			

			<div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.mongoBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">MongoDB</h2>
					<p${add_attribute("class", styles.description, 0)}>Developped by <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" class="svelte-49t9iu">MongoDB</a>
						Inc., MongoDB is a source-available cross-platform document-oriented database program. Classified
						as a
						<a href="https://en.wikipedia.org/wiki/NoSQL" target="_blank" rel="noreferrer" class="svelte-49t9iu">NOSQL</a>
						database program, MongoDB uses JSON-like documents with optional schemas.
					</p></div></div></div>

		<div${add_attribute("class", styles.dividedCell, 0)}>

			<div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.unityBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">Unity</h2>
					<p${add_attribute("class", styles.description, 0)}><a href="https://unity.com/" target="_blank" rel="noreferrer" class="svelte-49t9iu">Unity</a> is a
						cross-platform game engine developed by Unity Technologies, it uses the
						<a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noreferrer" class="svelte-49t9iu">.NET</a>
						framework made by Microsoft.
					</p></div></div>

			

			<div${add_attribute("class", styles.cell, 0)}><div${add_attribute("class", cx(styles.banner, styles.winBanner), 0)}><h2 class="${escape(null_to_empty(styles.tech), true) + " svelte-49t9iu"}">Windows Forms</h2>
					<p${add_attribute("class", styles.description, 0)}>Windows Forms is a free and open-source graphical class library included as a part of
						Microsoft <a href="https://dotnet.microsoft.com/en-us/" target="_blank" rel="noreferrer" class="svelte-49t9iu">.NET</a> framework
					</p></div></div></div></div>
</div>`;
});
export {
  Page as default
};
