import { sveltekit } from "@sveltejs/kit/vite";

const config = {
  plugins: [sveltekit()],
  assetsInclude: ["/banners", "/background", "/projectImage"],
};

export default config;
