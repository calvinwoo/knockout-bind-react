(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['knockout', 'react'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('knockout'), require('react'));
  } else {
    factory(root.ko, root.React);
  }
}(this, function (ko, React) {
  ko.bindingHandlers.react = {
    init: function () {
      return {
        controlsDescendantBindings: true
      };
    },

    update: function (element, valueAccessor, allBindings) {
      var options = ko.unwrap(valueAccessor());

      if (options && options.component) {
        var componentInstance = React.render(
          React.createElement(options.component, options.props),
          element
        );

        if (options.callback) {
          options.callback(componentInstance);
        }
      }
    }
  };
}));
