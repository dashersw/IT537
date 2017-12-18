var Sidebar = require('./views/sidebar/sidebar');
var MainView = require('./views/main-view');
var locale = require('./lib/locale');

class Application {
    constructor() {
        var vm = new erste.ViewManager();
        var mainView = new MainView(vm);
        vm.setCurrentView(mainView);

        var sidebar = new Sidebar();

        sidebar.vm = vm;
        sidebar.on('switchView', e => mainView.activateItemByName(e.view));
        sidebar.render(document.body);
    }
}

module.exports = new Application();
