import { View, __ } from 'erste';

export default class MapView extends View {
    constructor() {
        super();
        this.hasSidebar = false;
    }
    onActivation() {
        if (window.plugin && plugin && plugin.google && plugin.google.maps) {
            plugin.google.maps.Map.setDiv(this.$('map'));
        }

        this.map && this.map.setClickable(true);
    }

    onDeactivation() {
        this.map && this.map.setClickable(false);
    }

    onAfterRender() {
        super.onAfterRender();

        if (window.plugin && plugin && plugin.google && plugin.google.maps) {
            this.map = plugin.google.maps.Map.getMap(this.$('map'));
        }
    }

    onTitleTap() {
        console.log('title tapped');
    }

    template() {
        return `
<view class="map-view">
    <h1>${__('I am a button')}</h1>
    <map></map>
</view>
`;
    }

    get events() {
        return {
            'tap': {
                'h1': this.onTitleTap
            }
        }
    }
}
