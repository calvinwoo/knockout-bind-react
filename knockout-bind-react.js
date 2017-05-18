(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['knockout', 'react', 'react-dom'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('knockout'), require('react'), require('react-dom'));
  } else {
    factory(root.ko, root.React, root.ReactDOM);
  }
}(this, function (ko, React, ReactDOM) {
  ko.bindingHandlers.react = {
    init: function () {
      return {
        controlsDescendantBindings: true
      };
    },

    update: function (element, valueAccessor, allBindings) {
      var options = ko.unwrap(valueAccessor());

      if (options && options.component) {
        var componentInstance = ReactDOM.render(
          React.createElement(options.component, options.props),
          element
        );
        
        if (options.ref) {
          options.ref(componentInstance);
        }
      }
    }
  };
}));
