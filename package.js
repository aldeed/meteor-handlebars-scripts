Package.describe({
  summary: "UI components to easily insert popular third-party script blocks in a way that works with Meteor's quirks."
});

Package.on_use(function(api) {
  api.use(['templating', 'ui'], 'client');
  api.add_files(['handlebars-scripts.html', 'handlebars-scripts.js'], 'client');
});