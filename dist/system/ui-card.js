System.register(['./_tslib.js', 'aurelia-framework'], function (exports) {
  'use strict';
  var __decorate, __metadata, customElement, inlineView, bindable;
  return {
    setters: [function (module) {
      __decorate = module.a;
      __metadata = module.b;
    }, function (module) {
      customElement = module.customElement;
      inlineView = module.inlineView;
      bindable = module.bindable;
    }],
    execute: function () {

      var UICardContent = (function () {
          function UICardContent(element) {
              this.element = element;
              if (element.hasAttribute("fill")) {
                  element.classList.add("ui-card__content--fill");
              }
          }
          UICardContent = __decorate([
              customElement("ui-card-content"),
              inlineView("<template class='ui-card__content'><slot></slot></template>"),
              __metadata("design:paramtypes", [Element])
          ], UICardContent);
          return UICardContent;
      }());

      var UICardList = (function () {
          function UICardList(element) {
              this.element = element;
          }
          UICardList = __decorate([
              customElement("ui-card-list"),
              inlineView("<template class='ui-card__list'><slot></slot></template>"),
              __metadata("design:paramtypes", [Element])
          ], UICardList);
          return UICardList;
      }());

      var UICardMedia = (function () {
          function UICardMedia(element) {
              this.element = element;
              if (element.hasAttribute("top")) {
                  element.classList.add("ui-card__media--top");
              }
          }
          UICardMedia = __decorate([
              customElement("ui-card-media"),
              inlineView("<template class='ui-card__media'><slot></slot></template>"),
              __metadata("design:paramtypes", [Element])
          ], UICardMedia);
          return UICardMedia;
      }());

      var UICardMeta = (function () {
          function UICardMeta(element) {
              this.element = element;
          }
          UICardMeta = __decorate([
              customElement("ui-card-meta"),
              inlineView("<template class='ui-card__meta'><slot></slot></template>"),
              __metadata("design:paramtypes", [Element])
          ], UICardMeta);
          return UICardMeta;
      }());

      var UICardTitle = (function () {
          function UICardTitle(element) {
              this.element = element;
          }
          UICardTitle = __decorate([
              customElement("ui-card-title"),
              inlineView("<template class='ui-card__title'><slot></slot></template>"),
              __metadata("design:paramtypes", [Element])
          ], UICardTitle);
          return UICardTitle;
      }());

      var UICard = (function () {
          function UICard(element) {
              this.element = element;
              this.width = "";
              this.minWidth = "8rem";
              this.maxWidth = "100vw";
              this.height = "";
              this.minHeight = "unset";
              this.maxHeight = "100vh";
          }
          __decorate([
              bindable(),
              __metadata("design:type", String)
          ], UICard.prototype, "width", void 0);
          __decorate([
              bindable(),
              __metadata("design:type", String)
          ], UICard.prototype, "minWidth", void 0);
          __decorate([
              bindable(),
              __metadata("design:type", String)
          ], UICard.prototype, "maxWidth", void 0);
          __decorate([
              bindable(),
              __metadata("design:type", String)
          ], UICard.prototype, "height", void 0);
          __decorate([
              bindable(),
              __metadata("design:type", String)
          ], UICard.prototype, "minHeight", void 0);
          __decorate([
              bindable(),
              __metadata("design:type", String)
          ], UICard.prototype, "maxHeight", void 0);
          UICard = __decorate([
              customElement("ui-card"),
              inlineView("<template class='ui-panel-base ui-card' css.bind='{width, minWidth, maxWidth, height, minHeight, maxHeight}'>\n<slot name=\"panel-header\"></slot>\n<div class=\"ui-card__body\"><slot></slot></div>\n<slot name=\"panel-footer\"></slot>\n</template>"),
              __metadata("design:paramtypes", [Element])
          ], UICard);
          return UICard;
      }());
      var Card = exports('Card', [UICard, UICardContent, UICardMeta, UICardMedia, UICardList, UICardTitle]);

    }
  };
});
//# sourceMappingURL=ui-card.js.map
