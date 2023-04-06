export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.ab3bc46c.js","imports":["_app/immutable/entry/start.ab3bc46c.js","_app/immutable/chunks/index.c933b56c.js","_app/immutable/chunks/singletons.f37df801.js","_app/immutable/chunks/paths.4dff8142.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.ab9f0951.js","imports":["_app/immutable/entry/app.ab9f0951.js","_app/immutable/chunks/index.c933b56c.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/stack",
				pattern: /^\/stack\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
