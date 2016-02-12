Package.describe({
  name: 'compiler',
  version: '0.1.0'
});

Package.registerBuildPlugin({
  name: 'TSBuilder',
  sources: [
    'ts_handler.js'
  ],
  use: [
    'typescript-compiler@0.5.0',
    'ecmascript@0.1.4'
  ]
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use([
    'isobuild:compiler-plugin@1.0.0'
  ], 'server');
});
