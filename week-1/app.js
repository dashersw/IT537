class PeopleService {
    constructor($rootScope) {
        window.people = this;

        this.people = [];
        this.$rootScope = $rootScope;

        fetch('./people.json').
            then(res => res.json()).
            then(people => {
                this.people.length = 0;
                people.forEach(p => this.people.push(p));

                this._save();
            });
    }

    addPerson(person) {
        if (this.people.find(p => p.id == person.id)) throw 'User is already there';

        this.people.push(person);

        this._save();
    }

    updatePerson(id, newPerson) {
        var index = this.people.findIndex(p => p.id == id);

        if (index == -1) return;

        this.people[index] = newPerson;

        this._save();
    }

    getPerson(id) {
        return this.people.find(p => p.id == id);
    }

    removePerson(id) {
        var index = this.people.findIndex(p => p.id == id);

        if (index == -1) return;

        this.people.splice(index, 1);

        this._save();
    }

    _load() {
        var people = [];

        try {
            people = JSON.parse(localStorage.getItem('people')) || [];
        } catch (e) {
            console.log('local storage is empty');
            localStorage.setItem('people', []);
        }

        return people;
    }

    _save() {
        localStorage.setItem('people', JSON.stringify(this.people));
        this.$rootScope.$digest();
    }
}

class PeopleController {
    constructor($scope, PeopleService) {
        this.title = "IT537 People";
        this.people = PeopleService.people;

        $scope.$watch(_ => PeopleService.people, true);
    }
}

angular.module('it537-week-1', []).
    service('PeopleService', PeopleService).
    controller('PeopleController', PeopleController);
