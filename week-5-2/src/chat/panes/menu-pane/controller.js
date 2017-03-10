module.exports = class MenuPaneController {
    constructor(ContentService) {
        this.message = 'Hey!';

        this.contentService = ContentService;
    }

    setItem(item) {
        console.log(item);
        this.contentService.setActiveContent(item);
    }
}
