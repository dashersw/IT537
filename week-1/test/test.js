describe('IT537 people', function() {
    it('get first user', function() {
        browser.get('http://localhost:8080');

        var personEl = element.all(by.binding('person.name')).first();
        expect(personEl.getText()).toEqual('Armagan Amcalar');
    });

    it('add a new user', function() {
        browser.executeScript('people.addPerson({id: 20, name: "test"})');

        var personEl = element.all(by.binding('person.name')).last();
        var personEl = element.all(by.binding('person')).last();
        expect(personEl.getText()).toEqual('test');
    });

    it('should have shadows', function() {
        var personEl = element.all(by.repeater('person')).first();
        var faces = personEl.$('.faces');
        browser.sleep(600);
        expect(faces.getCssValue('box-shadow')).toContain('0px 5px 30px 0px');
    });

    it('should reveal the back with correct shadows', function() {
        var personEl = element.all(by.repeater('person')).first();
        var faces = personEl.$('.faces');

        browser.actions().mouseMove(personEl).perform();
        browser.sleep(600);

        expect(faces.getCssValue('box-shadow')).toContain('0px 0px 60px 0px');
    });
});
