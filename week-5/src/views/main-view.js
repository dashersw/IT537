import ShowsView from './shows/shows-view';
import AboutView from './about/about-view';
import CameraView from './camera/camera-view';

import {TabView, __} from 'erste';

export default class MainView extends TabView {
    constructor(vm) {
        super();

        this.showsView = new ShowsView();
        this.aboutView = new AboutView();
        this.cameraView = new CameraView();

        this.views = [this.cameraView, this.aboutView, this.showsView];

        this.showsView.navBar.onMenuButtonTap = () => vm.toggleSidebar();

        this.hasSidebar = true;
    }

    template_items() {
        return `
<tab-item data-view="camera">${__('Camera')}</tab-item><tab-item class="active" data-view="about">${__('About')}</tab-item><tab-item data-view="shows">${__('Shows')}</tab-item>
`;
    };
}
