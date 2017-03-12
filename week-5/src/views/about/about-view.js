import { View, __ } from 'erste';

export default class AboutView extends View {
    onActivation() {
        if (cfg.PLATFORM == 'device')
            StatusBar.styleDefault();
    }

    onAfterRender() {
        super.onAfterRender();

        // if (window.plugin && plugin && plugin.google && plugin.google.maps)
        //     this.map = plugin.google.maps.Map.getMap(this.el);
    }

    onTitleTap() {
        this.map && this.map.showDialog();
    }

    template() {
        return `
<view class="about-view">
    <h1>${__('Top TV Show Posters')}</h1>
    <p>${__('An erste.js mobile app demo')}</p>
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
