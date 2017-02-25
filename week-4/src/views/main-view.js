var __ = erste.locale.__;

var ShowsView = require('./shows/shows-view');
var AboutView = require('./about/about-view');
var Sidebar = require('./sidebar/sidebar');

class MainView extends erste.TabBar {
    constructor(vm) {
        super();

        this.hasSidebar = true;

        this.sidebar = new Sidebar();
        this.sidebar.vm = vm;

        this.sidebar.render(document.body);

    }

    onAfterRender() {
        super.onAfterRender();

        this.showsView = new ShowsView();
        this.showsView.render(this.el);
        this.aboutView = new AboutView();

        this.views = [this.aboutView, this.showsView];

        this.vm.setCurrentView(this.aboutView);

        this.sidebar.on('switchView', this.switchView.bind(this));
        this.showsView.navBar.menuButtonHandler = this.sidebar.vm.toggleSidebar.bind(this.sidebar.vm);
    };


    switchView(e) {
        this.activateItemByName(e.view);
    };

    get template_items() {
        return `
<tab-item class="active" data-view="about">${__('About')}</tab-item><tab-item data-view="shows">${__('Shows')}</tab-item>
`;
    };

}


module.exports = MainView;
