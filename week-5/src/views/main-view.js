import ShowsView from './shows/shows-view';
import AboutView from './about/about-view';
import CameraView from './camera/camera-view';
import MapView from './map/map-view';

import { TabView, __ } from 'erste';

export default class MainView extends TabView {
    constructor(vm) {
        super();

        this.showsView = new ShowsView();
        this.aboutView = new AboutView();
        this.cameraView = new CameraView();
        this.mapView = new MapView();

        this.views = [this.aboutView, this.showsView, this.cameraView, this.mapView];

        this.showsView.navBar.onMenuButtonTap = () => vm.toggleSidebar();

        this.hasSidebar = false;
    }

    template_items() {
        return `
<tab-item class="active" data-view="about">${__('About')}</tab-item><tab-item data-view="shows">${__('Shows')}</tab-item><tab-item data-view="camera">${__('Camera')}</tab-item><tab-item data-view="map">${__('Map')}</tab-item>
`;
    };

    activateItem(index) {
        super.activateItem(index);

        var activeView = this.views[this.activeItemIndex];
        this.hasSidebar = activeView != this.mapView;
    }
}
