import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { s as styles$2 } from "../../chunks/styles.module.js";
const buttonContainer = "_buttonContainer_ns74f_1";
const arrow = "_arrow_ns74f_33";
const styles$1 = {
  buttonContainer,
  arrow
};
const DownArrowButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<button${add_attribute("class", styles$1.buttonContainer, 0)}><div${add_attribute("class", styles$1.arrow, 0)}></div></button>`;
});
const mainContainer = "_mainContainer_i1qml_1";
const button = "_button_i1qml_29";
const icon = "_icon_i1qml_59";
const styles = {
  mainContainer,
  button,
  icon
};
const LinkBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ghLink } = $$props;
  let { liLink } = $$props;
  if ($$props.ghLink === void 0 && $$bindings.ghLink && ghLink !== void 0)
    $$bindings.ghLink(ghLink);
  if ($$props.liLink === void 0 && $$bindings.liLink && liLink !== void 0)
    $$bindings.liLink(liLink);
  return `<div${add_attribute("class", styles.mainContainer, 0)}><a${add_attribute("href", ghLink, 0)} target="_blank" rel="noreferrer"><button${add_attribute("class", styles.button, 0)}><img src="src\\static\\logo\\githublogo.png" alt="github"${add_attribute("class", styles.icon, 0)}></button></a>
	<a${add_attribute("href", liLink, 0)} target="_blank" rel="noreferrer"><button${add_attribute("class", styles.button, 0)}><img src="src/static/logo/linkedinlogo.png" alt="linkedin"${add_attribute("class", styles.icon, 0)}></button></a>

	<button${add_attribute("class", styles.button, 0)}><img src="src/static/logo/copy.svg" alt="copy"${add_attribute("class", styles.icon, 0)}></button></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-dgzdfp{margin:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div${add_attribute("class", styles$2.appContainer, 0)}><div${add_attribute("class", styles$2.homeBg, 0)}></div>
	<div${add_attribute("class", styles$2.infoContainer, 0)}><div${add_attribute("class", styles$2.pfpContainer, 0)}><img src="src/static/pfp/pfp.png" alt="pfp"${add_attribute("class", styles$2.pfp, 0)}>
			<div${add_attribute("class", styles$2.nameContainer, 0)}><h1 class="svelte-dgzdfp">Hello!</h1>
				<h1 class="svelte-dgzdfp">I&#39;m Lenny Xiong</h1></div></div>
		<h2>I code things for the web!!</h2>
		${validate_component(LinkBar, "LinkBar").$$render(
    $$result,
    {
      ghLink: "https://github.com/Rurucchi",
      liLink: "https://www.linkedin.com/in/lenny-xiong/"
    },
    {},
    {}
  )}</div>
	${validate_component(DownArrowButton, "DownArrowButton").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
