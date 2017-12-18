var ListView = require('./list-view');
var __ = erste.locale.__;

class ShowsView extends erste.View {
    constructor() {
        super();

        this.navBar = new erste.NavBar({
            title: __('Top Shows'),
            hasMenuButton: true,
            hasBackButton: true
        });
    }

    activate() {
        if (cfg.ENV == 'device')
            StatusBar.styleLightContent();
    }

    onAfterRender() {
        this.vm = new erste.ViewManager(this.el);
        this.navBar.vm = this.vm;

        this.listView = new ListView();
        this.listView.vm = this.vm;

        this.vm.setCurrentView(this.listView);
    };

    template() {
        return `
<view>
    ${this.navBar}
</view>`;
    }
}

module.exports = ShowsView;
