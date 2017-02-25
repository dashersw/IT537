var ListViewModel = require('./list-view-model');
var ListItem = require('./list-item');
var DetailView = require('./detail-view');

class ListView extends erste.View {
    constructor() {
        super();

        this.model = new ListViewModel();
        // this.p2rComponent = new tart.ui.P2RComponent();
        // this.infiniteScrollComponent = new app.ui.InfiniteScrollComponent();

        this.bindModelEvents();
    }

    bindModelEvents() {
        this.model.on(ListViewModel.EventType.LOADED, this.onLoaded.bind(this));
        this.model.on(ListViewModel.EventType.LOADED_MORE, this.onLoadedMore.bind(this));

        // this.refreshListener = this.p2rComponent.on(this.p2rComponent.EventType.SHOULD_REFRESH,
        //     this.onShouldRefresh.bind(this));

        // this.infiniteScrollListener = this.infiniteScrollComponent.on(this.infiniteScrollComponent.EventType.SHOULD_LOAD,
        //     this.onInfiniteScroll.bind(this));
    };

    onAfterRender() {
        this.onLoaded();

        // this.p2rComponent.render(this.getElement());
        // this.infiniteScrollComponent.render(this.getElement());
    };

    onInfiniteScroll() {
        setTimeout(() => {
            this.model.loadMore();
        }, 2000);
    };

    onShouldRefresh() {
        setTimeout(() => {
            this.model.loadShows();
        }, 2000);
    };

    onLoaded() {
        if (!this.rendered || !this.model.shows) return;

        // this.p2rComponent.reset();

        this.showComponents = this.model.shows.map(show => new ListItem(show));

        var markup = this.showComponents.map(cmp => cmp.template()).join('');

        this.$('list-items').innerHTML = markup;
        // this.infiniteScrollComponent.showSpinner();
    };

    onLoadedMore(e) {
        var listEl_ = this.$('list-items');

        if (e.diff) {
            var showComponents = e.diff.map(show => new ListItem(show));

            var markup = showComponents.map(cmp => cmp.template()).join('');

            var fragment = document.createDocumentFragment();
            fragment.innerHTML = markup;

            listEl_.appendChild(fragment);

            // if (e.endOfFeed)
            //     this.infiniteScrollComponent.showEndOfList();
            // else
            //     this.infiniteScrollComponent.showSpinner();
        }
    };

    dispose() {
        // this.p2rComponent.dispose();
        // this.infiniteScrollComponent.dispose();

        goog.events.unlistenByKey(this.refreshListener);
        goog.events.unlistenByKey(this.infiniteScrollListener);

        super.dispose();
    };

    onListItemTap(e) {
        var show = this.model.getShowById(e.targetEl.getAttribute('data-show-id'));
        this.vm.pull(new DetailView(show), true);
    };

    get events() {
        return {
            'tap': {
                'list-item': ListView.prototype.onListItemTap
            }
        }
    }

    template() {
        return `
<view class="list-view" id="${this.id}"
    style="-webkit-transform: translate3d(100%, 0, ${this.index}px)">
    <list-items></list-items>
</view>
`;
    }
}

module.exports = ListView;
