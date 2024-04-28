/* Shopping */
class GalleryFilter {
    filtersSelector = ".cs-button";
    imagesSelector = ".cs-listing";
    activeClass = "cs-active";
    hiddenClass = "cs-hidden";

    constructor() {
        const $filters = document.querySelectorAll(this.filtersSelector);
        this.$activeFilter = $filters[0];
        this.$images = document.querySelectorAll(this.imagesSelector);


        for (const $filter of $filters) {
            $filter.addEventListener("click", () => this.onClick($filter));
        }
    }

    onClick($filter) {
        this.filter($filter.dataset.filter);

        const { activeClass } = this;

        this.$activeFilter.classList.remove(activeClass);
        $filter.classList.add(activeClass);

        this.$activeFilter = $filter;
    }

    filter(filter) {
        const showAll = filter == "all";
        const { hiddenClass } = this;

        for (const $image of this.$images) {
            const show = showAll || $image.dataset.category == filter;
            $image.classList.toggle(hiddenClass, !show);
        }
    }
}

new GalleryFilter();
                            

/* Time Clock */
function updateClock() {
    const gmtTime = new Date().toUTCString();
    const cetTime = new Date().toLocaleString('nl-NL', {timeZone: 'Europe/London'});
    const estTime = new Date().toLocaleString('nl-NL', {timeZone: 'America/New_York'});

    document.getElementById('gmt').innerHTML = gmtTime;
    document.getElementById('cet').innerHTML = cetTime;
    document.getElementById('est').innerHTML = estTime;
}

setInterval(updateClock, 1000);

/* Visitor Counter */
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let count = 0;





