meteor-handlebars-scripts
=========================

A smart package for Meteor that adds handlebars helpers to easily insert popular third-party script blocks in a way that works with Meteor's quirks.

## Basic Usage

Put a constant block at the top of your body element, and within that, use whichever helpers you want to use. See the example. You do not need to insert any script tags. For the Facebook script, you must not add the `<div id="fb-root"></div>` markup. That is done for you by the helper.

## Example
```html
<body>
  {{#constant}}
    {{facebookScript "123456781234567"}}
    {{googlePlusOneScript}}
    {{twitterWidgetsScript}}
    {{addThisWidgetsScript "ra-12345abcde6789"}}
    {{googleTagManagerScript "GTM-XXXX"}}
  {{/constant}}
  <!-- More Content -->
  <div class="fb-like" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false" data-font="verdana" data-colorscheme="light"></div>
  <div class="g-plusone" data-size="tall"></div>
</body>
```

## Contributing

Submit issues or pull requests if you want to add scripts for more services.