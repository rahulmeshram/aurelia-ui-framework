System.register([], function (exports) {
  'use strict';
  return {
    execute: function () {

      var calculateOverflow = exports('c', function (wrapperEl, overflowEl) {
          var isRtl = window.getComputedStyle(wrapperEl).direction === "rtl";
          resetOverflow(wrapperEl, overflowEl);
          while (wrapperEl.lastElementChild && isOutOfBounds(wrapperEl, wrapperEl.lastElementChild, isRtl)) {
              !!overflowEl.firstElementChild
                  ? overflowEl.insertBefore(wrapperEl.lastElementChild, overflowEl.firstElementChild)
                  : overflowEl.appendChild(wrapperEl.lastElementChild);
          }
          return !!overflowEl.children.length;
      });
      var resetOverflow = function (wrapperEl, overflowEl) {
          overflowEl.children.forEach(function (child) {
              wrapperEl.appendChild(child);
          });
      };
      var isOutOfBounds = function (wrapperEl, itemEl, isRtl) {
          return isRtl
              ? itemEl.getBoundingClientRect().left < wrapperEl.getBoundingClientRect().left
              : itemEl.getBoundingClientRect().right > wrapperEl.getBoundingClientRect().right;
      };

    }
  };
});
//# sourceMappingURL=ui-common.js.map
