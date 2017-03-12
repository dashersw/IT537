import { View, __ } from 'erste';

export default class CameraView extends View {
    onButtonTap() {
        if (!navigator.camera) return;

        navigator.camera.getPicture(imageData => {
            // this.$('img').src = "data:image/jpeg;base64," + imageData;
            this.$('img').src = imageData;
        }, () => { }, {});
    }

    template() {
        return `
<view class="camera-view">
    <h1>${__('Take a picture')}</h1>
    <img/>
</view>
`;
    }

    get events() {
        return {
            'tap': {
                'h1': this.onButtonTap
            }
        }
    }
}
