Package.describe({
	summary: "Stub for Node DMX Module",
  version: "0.0.1",
  git: "https://github.com/infinitedg/meteor-dmx.git"
});

Package.on_use(function (api) {
	api.versionsFrom("METEOR@1");

	api.add_files(['stub.js'], ['server']);

	api.export('DMX');
});

Npm.depends({'dmx': '0.0.1'});
