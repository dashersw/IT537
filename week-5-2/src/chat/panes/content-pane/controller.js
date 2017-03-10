module.exports = class ContentPaneController {
    constructor(ContentService) {
        this.message = 'Hey! It\'s a content controller';

        this.content = ContentService.content;

        ContentService.bind('content change', () => {
            this.content = ContentService.content;
        });
    }
}
