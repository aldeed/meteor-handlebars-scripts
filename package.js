Package.describe({
  summary: "Handlebars helpers to easily insert popular third-party script blocks in a way that works with Meteor's quirks."
});

Package.on_use(function(api) {
  api.use(['underscore', 'templating', 'handlebars']);
  api.add_files(['handlebars-scripts.js'], ['client']);
});