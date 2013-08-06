/// <reference path="../../../js/jquery.d.ts" />
import panel = module("app/modules/Shared/Panel");
import baseApp = module("app/modules/Shared/BaseApp");

export class BaseView extends panel.Panel{

    app: baseApp.BaseApp;
    provider: any;
    config: any;
    content: any;
    options: any;
    moduleName: string;

    constructor($element: JQuery, fitToParentWidth?: boolean, fitToParentHeight?: boolean) {
        super($element, fitToParentWidth, fitToParentHeight);
    }

    create(): void {
        super.create();

        this.app = window.app;
        this.provider = this.app.provider;

        // config.
        if (this.moduleName) {
            this.config = this.provider.config.modules[this.moduleName];
            this.content = this.config.content;
            this.options = this.config.options;

            console.log(this.content);
        }
    }

    setConfig(moduleName: string): void {
        // the top-most class in the inheritance chain of views
        // overrides all other sub classes in that
        // it is the first to set the module name.
        if (!this.moduleName) {
            this.moduleName = moduleName;
        }
    }

    resize(): void {
        super.resize();
    }
}