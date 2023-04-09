import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/adapter-static').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: "nodejs18.x",
    }),
  },
};

export default config;
