import { bindable, containerless, customElement, inlineView, ViewSlot } from 'aurelia-framework';
import { a as UIAppConfig } from './chunk.js';
import 'aurelia-event-aggregator';
import { a as UIInternal } from './chunk2.js';
import { a as __decorate, b as __metadata } from './chunk3.js';
import { AppRouter } from 'aurelia-router';

let UIRouterView = class UIRouterView {
    constructor() {
        this.name = "";
    }
};
__decorate([
    bindable(),
    __metadata("design:type", String)
], UIRouterView.prototype, "name", void 0);
UIRouterView = __decorate([
    containerless(),
    customElement("ui-router-view"),
    inlineView(`<template><router-view swap-order="with" name.bind="name" class="ui-router-view" ref="vmElement"></router-view></template>`)
], UIRouterView);

let UIViewportFooter = class UIViewportFooter {
};
UIViewportFooter = __decorate([
    containerless(),
    customElement("ui-viewport-footer"),
    inlineView(`<template><footer class="ui-viewport__footer" slot="ui-viewport__footer" ref="vmElement"><slot></slot></footer></template>`)
], UIViewportFooter);

let UIViewportHeader = class UIViewportHeader {
};
UIViewportHeader = __decorate([
    containerless(),
    customElement("ui-viewport-header"),
    inlineView(`<template><header class="ui-viewport__header" slot="ui-viewport__header" ref="vmElement"><slot></slot></header></template>`)
], UIViewportHeader);

var view = "<template class=\"ui-viewport\" role=\"main\">\n  <slot name=\"ui-viewport__header\"></slot>\n  <div class=\"ui-viewport__body\">\n    <slot></slot>\n    <div class=\"ui-viewport__dialog-container\" ref=\"dialogContainer\"></div>\n    <div class=\"ui-viewport__alert-container\" ref=\"appConfig.AlertContainer\"></div>\n    <div class=\"ui-viewport__toast-container\" ref=\"appConfig.ToastContainer\"></div>\n  </div>\n  <section role=\"tablist\" class=\"ui-viewport__taskbar\">\n    <div class=\"ui-viewport__taskbar--start\"><slot name=\"taskbar-start\"></slot></div>\n    <div class=\"ui-viewport__taskbar__wrapper\" ref=\"taskbarContainer\"></div>\n    <div class=\"ui-viewport__taskbar--end\"><slot name=\"taskbar-links\"></slot></div>\n  </section>\n  <slot name=\"ui-viewport__footer\"></slot>\n  <div class=\"ui-viewport__floating-container\" ref=\"appConfig.FloatingContainer\"></div>\n  <ui-loader busy.bind=\"router.isNavigating\"></ui-loader>\n</template>\n";

let UIViewport = class UIViewport {
    constructor(appConfig, router) {
        this.appConfig = appConfig;
        this.router = router;
        window.addEventListener("resize", () => UIInternal.broadcast(UIInternal.EVT_VIEWPORT_RESIZE));
        document.addEventListener("mouseup", $event => this.broadcastEvent($event));
    }
    attached() {
        this.appConfig.DialogContainer = new ViewSlot(this.dialogContainer, true);
        this.appConfig.TaskbarContainer = new ViewSlot(this.taskbarContainer, true);
        this.appConfig.DialogContainer.attached();
        this.appConfig.TaskbarContainer.attached();
    }
    broadcastEvent($event) {
        if (!hasParent($event.target, this.appConfig.FloatingContainer)) {
            UIInternal.broadcast(UIInternal.EVT_VIEWPORT_CLICK, $event.target);
        }
    }
};
UIViewport = __decorate([
    customElement("ui-viewport"),
    inlineView(view),
    __metadata("design:paramtypes", [UIAppConfig, AppRouter])
], UIViewport);
const Viewport = [UIViewport, UIViewportHeader, UIViewportFooter, UIRouterView];

export { Viewport };
//# sourceMappingURL=ui-viewport.js.map