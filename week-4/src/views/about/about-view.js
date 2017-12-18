var __ = erste.locale.__;

class AboutView extends erste.View {
    constructor() {
        super();

        this.className = 'about-view';
    }

    activate() {
        if (cfg.ENV == 'device')
            StatusBar.styleDefault();
    }

    template() {
        return `
<view class="about-view">
    <h1>${__('Top TV Show Posters')}</h1>
    <p>${__('An erste.js mobile app demo')}</p>
</view>
`;
    }
}

module.exports = AboutView;
