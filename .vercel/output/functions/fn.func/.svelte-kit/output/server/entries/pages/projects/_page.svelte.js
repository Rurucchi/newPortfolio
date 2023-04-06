import { c as create_ssr_component, e as escape, f as null_to_empty, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import { c as cx } from "../../../chunks/utils.js";
const column = "_column_tf5i0_5";
const row = "_row_tf5i0_15";
const center = "_center_tf5i0_25";
const body = "_body_tf5i0_39";
const appContainer = "_appContainer_tf5i0_61";
const contentContainer = "_contentContainer_tf5i0_83";
const projectSection = "_projectSection_tf5i0_117";
const titleContainer = "_titleContainer_tf5i0_127";
const title = "_title_tf5i0_127";
const styles$1 = {
  column,
  row,
  center,
  body,
  appContainer,
  contentContainer,
  projectSection,
  titleContainer,
  title
};
const bubble = "_bubble_xh5sn_1";
const styles = {
  bubble
};
const projectBubble_svelte_svelte_type_style_lang = "";
const css = {
  code: "#mainContainer.svelte-1dgjot7{background:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), var(--bg);background-size:cover}",
  map: null
};
const ProjectBubble = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title: title2 } = $$props;
  let { description } = $$props;
  let { link } = $$props;
  let { background } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title2 !== void 0)
    $$bindings.title(title2);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  $$result.css.add(css);
  return `<div id="mainContainer" class="${escape(null_to_empty(cx(styles.bubble)), true) + " svelte-1dgjot7"}" style="${"--bg: url('" + escape(background, true) + "')"}"><a${add_attribute("href", link, 0)} target="_blank" rel="noreferrer"><h1>${escape(title2)}</h1></a>
	<p>${escape(description)}</p>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_attribute("class", styles$1.body, 0)}><div${add_attribute("class", styles$1.appContainer, 0)}><div${add_attribute("class", cx(styles$1.column, styles$1.projectSection, styles$1.center), 0)}><h1${add_attribute("class", styles$1.title, 0)}>Work Experience</h1>
			<div${add_attribute("class", styles$1.contentContainer, 0)}>${validate_component(ProjectBubble, "ProjectBubble").$$render(
    $$result,
    {
      title: "Next Up (Private Repo)",
      description: "Management app made with React and Express for Highschool and University sports teams",
      background: "src/static/projectImage/nextup.png",
      link: "https://github.com/Next-Up-Technologies"
    },
    {},
    {}
  )}</div></div>
		<div${add_attribute("class", cx(styles$1.column, styles$1.projectSection, styles$1.center), 0)}><h1${add_attribute("class", styles$1.title, 0)}>Personal Projects</h1>
			<div${add_attribute("class", styles$1.contentContainer, 0)}>${validate_component(ProjectBubble, "ProjectBubble").$$render(
    $$result,
    {
      title: "Read.IT",
      description: "Full stack Reddit-like application made with React, Express and MongoDB.",
      link: "https://github.com/Rurucchi/Read.It",
      background: "src/static/projectImage/readit.png"
    },
    {},
    {}
  )}
				${validate_component(ProjectBubble, "ProjectBubble").$$render(
    $$result,
    {
      title: "Portfolio",
      description: "Portfolio website made with SvelteKit.",
      link: "https://github.com/Rurucchi/newPortfolio",
      background: "src/static/projectImage/portfolio.png"
    },
    {},
    {}
  )}
				${validate_component(ProjectBubble, "ProjectBubble").$$render(
    $$result,
    {
      title: "tehcheightcalc",
      description: "Mini-project made with Winforms (C#) for entertainment",
      link: "https://github.com/Rurucchi/tehcheightcalc",
      background: "src/static/projectImage/heightcalc.png"
    },
    {},
    {}
  )}</div></div>
		<div></div></div></div>`;
});
export {
  Page as default
};
