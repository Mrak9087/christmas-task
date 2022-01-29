import './filter.css';
import { Toy } from '../toy/toy';
import { BaseComponent } from '../baseComponent/baseComponent';
import { FilterRange } from './filterRange';
import { FilterSize } from './filterSize';
import { FilterColor } from './filterColor';
import { FilterShape } from './filterShape';
import { FilterObjType } from '../generalTypes/general';
import { createHTMLElement } from '../helpers/helpers';

export class FilterToy extends BaseComponent {
    private readonly arrayToys: Toy[];
    private favoriteFilterBtn!: HTMLButtonElement;
    private filterFavoriteDiv!: HTMLElement;
    private boxToys!: HTMLElement;
    private filters: FilterObjType;
    private filterCountItem!: HTMLElement;
    private filterYearsItem!: HTMLElement;
    private selectSort!: HTMLSelectElement;
    private search!: HTMLInputElement;
    private filterCount!: FilterRange;
    private filterYear!: FilterRange;
    private resetBtn!: HTMLButtonElement;

    private filterSize!: FilterSize;
    private filterColor!: FilterColor;
    private filterShape!: FilterShape;

    private sortValue!: string;
    private arrFiltered!: Toy[];

    constructor(arrayToys: Toy[]) {
        super('page filter_toys');
        this.arrayToys = arrayToys;
        this.filters = JSON.parse(localStorage.getItem('mrk90_christmasFilter') || '[]') || {
            size: Array<string>(),
            shape: Array<string>(),
            color: Array<string>(),
            favor: false,
            count: {
                min: 1,
                max: 12,
            },
            years: {
                min: 1940,
                max: 2020,
            },
        };
    }

    init() {
        const filterContainer = createHTMLElement('div', 'filter_container');
        const filterForValue = createHTMLElement('div', 'filter_item', '<h2>Фильтры по значению</h2>');
        const filterForRange = createHTMLElement('div', 'filter_item', '<h2>Фильтры по диапазону</h2>');
        const sortAndFind = createHTMLElement('div', 'filter_item', '<h2>Сортировка и поиск</h2>');
        this.arrFiltered = this.arrayToys.slice(0);

        this.filterShape = new FilterShape();
        this.filterShape.init(this.filters, this.filterHandler);

        this.filterColor = new FilterColor();
        this.filterColor.init(this.filters, this.filterHandler);

        this.filterSize = new FilterSize();
        this.filterSize.init(this.filters, this.filterHandler);

        this.filterFavoriteDiv = createHTMLElement('div', 'filter_item_val', '<span>Только любимые:</span>');
        this.createBtnFilterFavorite();

        filterForValue.append(
            this.filterShape.node,
            this.filterColor.node,
            this.filterSize.node,
            this.filterFavoriteDiv
        );

        this.boxToys = createHTMLElement('div', 'box_toys');
        this.arrFiltered = this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);

        this.filterCountItem = createHTMLElement(
            'div',
            'filter_item_val range_item',
            '<span>Количество экземпляров:</span>'
        );

        this.filterYearsItem = createHTMLElement('div', 'filter_item_val range_item', '<span>Год приобретения:</span>');

        this.filterCount = new FilterRange(1, 12, 1);
        this.filterCount.init();
        this.filterCount.setMinVal(this.filters.count.min);
        this.filterCount.setMaxVal(this.filters.count.max);

        this.filterCount.funcFilter = this.filterCountHandler;

        this.filterCountItem.append(this.filterCount.node);

        this.filterYear = new FilterRange(1940, 2020, 10);
        this.filterYear.init();
        this.filterYear.setMinVal(this.filters.years.min);
        this.filterYear.setMaxVal(this.filters.years.max);

        this.filterYear.funcFilter = this.filterYearHandler;
        this.filterYearsItem.append(this.filterYear.node);

        filterForRange.append(this.filterCountItem, this.filterYearsItem);

        this.selectSort = <HTMLSelectElement>createHTMLElement('select', 'sort_select');
        this.selectSort.innerHTML = `<option selected="" value="sort-name-max">По названию от «А» до «Я»</option>
        <option value="sort-name-min">По названию от «Я» до «А»</option>
        <option value="sort-count-max">По количеству по возрастанию</option>
        <option value="sort-count-min">По количеству по убыванию</option>`;

        this.sortValue = localStorage.getItem('mrk90_christmasSort') || this.selectSort.value;
        for (let i = 0; i < this.selectSort.options.length; i++) {
            if (this.selectSort.options[i].value === this.sortValue) {
                this.selectSort.options[i].selected = true;
            }
        }

        this.selectSort.addEventListener('change', () => {
            this.sortValue = this.selectSort.value;
            localStorage.setItem('mrk90_christmasSort', this.sortValue);
            this.sortToy(this.arrFiltered);
            this.showToys(this.arrFiltered);
        });
        const searchContainer = createHTMLElement('div', 'search_container');
        const clearSearch = <HTMLButtonElement>createHTMLElement('button', 'rst_search');
        clearSearch.type = 'button';
        clearSearch.addEventListener('click', () => {
            this.search.value = '';
            clearSearch.classList.remove('show');
            this.arrFiltered = this.doSearch(this.search.value);
            this.arrFiltered = this.doFilter(this.arrFiltered);
            this.showToys(this.arrFiltered);
        });
        this.search = <HTMLInputElement>createHTMLElement('input', 'search');
        this.search.autocomplete = 'off';
        this.search.placeholder = 'Название игрушки';
        this.search.addEventListener('input', () => {
            if (this.search.value.length) {
                clearSearch.classList.add('show');
            } else {
                clearSearch.classList.remove('show');
            }
            this.arrFiltered = this.doSearch(this.search.value);
            this.arrFiltered = this.doFilter(this.arrFiltered);
            this.showToys(this.arrFiltered);
        });

        searchContainer.append(this.search, clearSearch);

        this.resetBtn = <HTMLButtonElement>createHTMLElement('button', 'reset', 'Сброс фильтров');
        this.resetBtn.type = 'button';
        this.resetBtn.addEventListener('click', () => {
            this.clearFilter();
        });

        sortAndFind.append(this.selectSort, searchContainer, this.resetBtn);

        filterContainer.append(filterForValue, filterForRange, sortAndFind);

        this.node.append(filterContainer, this.boxToys);
        this.arrFiltered = this.doFilter(this.arrayToys);
        this.sortToy(this.arrFiltered);
        this.showToys(this.arrFiltered);
    }

    createBtnFilterFavorite(): void {
        this.favoriteFilterBtn = <HTMLButtonElement>createHTMLElement('button', 'btn_favor');
        this.favoriteFilterBtn.type = 'button';
        this.favoriteFilterBtn.addEventListener('click', () => {
            this.filterFavoriteHandler(this.favoriteFilterBtn);
        });
        if (this.filters.favor) {
            this.favoriteFilterBtn.classList.add('active');
        }
        this.filterFavoriteDiv.append(this.favoriteFilterBtn);
    }

    filterHandler = (btn: HTMLElement, filters: string[]) => {
        const idx = filters.findIndex((item) => item === btn.dataset.filterValue);
        if (idx > -1) {
            filters.splice(idx, 1);
            btn.classList.remove('active');
        } else {
            filters.push(btn.dataset.filterValue || '');
            btn.classList.add('active');
        }
        localStorage.setItem('mrk90_christmasFilter', JSON.stringify(this.filters));
        this.arrFiltered = this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    };

    filterCountHandler = () => {
        this.filters.count.min = this.filterCount.minValue;
        this.filters.count.max = this.filterCount.maxValue;
        localStorage.setItem('mrk90_christmasFilter', JSON.stringify(this.filters));
        this.arrFiltered = this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    };

    filterYearHandler = () => {
        this.filters.years.min = this.filterYear.minValue;
        this.filters.years.max = this.filterYear.maxValue;
        localStorage.setItem('mrk90_christmasFilter', JSON.stringify(this.filters));
        this.arrFiltered = this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    };

    filterFavoriteHandler(btn: HTMLElement) {
        if (this.filters.favor) {
            this.filters.favor = false;
            btn.classList.remove('active');
        } else {
            this.filters.favor = true;
            btn.classList.add('active');
        }
        localStorage.setItem('mrk90_christmasFilter', JSON.stringify(this.filters));
        this.arrFiltered = this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    }

    doFilter(arrayToys: Toy[]): Toy[] {
        const arrToy = arrayToys.filter((itemToy) => {
            if (this.filters.size.length) {
                if (!this.filters.size.find((value) => value === itemToy.getSize())) {
                    return false;
                }
            }

            if (this.filters.color.length) {
                if (!this.filters.color.find((value) => value === itemToy.getColor())) {
                    return false;
                }
            }

            if (this.filters.shape.length) {
                if (!this.filters.shape.find((value) => value === itemToy.getShape())) {
                    return false;
                }
            }

            if (this.filters.favor) {
                if (!itemToy.getFavorite()) {
                    return false;
                }
            }

            if (itemToy.getCount() < this.filters.count.min || itemToy.getCount() > this.filters.count.max) {
                return false;
            }

            if (itemToy.getYear() < this.filters.years.min || itemToy.getYear() > this.filters.years.max) {
                return false;
            }

            return true;
        });
        return arrToy;
    }

    doSearch(nameToy: string): Toy[] {
        const arrToy = this.arrayToys.filter((itemToy) => {
            if (itemToy.getName().toLowerCase().indexOf(nameToy.toLowerCase()) > -1) {
                return true;
            }
            return false;
        });
        return arrToy;
    }

    showToys(toys: Toy[]): void {
        this.sortToy(toys);
        this.boxToys.innerHTML = '';
        toys.forEach((item) => {
            this.boxToys.append(item.node);
        });
    }

    sortToy(toys: Toy[]): void {
        if (this.sortValue === 'sort-name-max') {
            toys.sort((toyA: Toy, toyB: Toy) => {
                const lowerA: string = toyA.getName().toLowerCase();
                const lowerB: string = toyB.getName().toLowerCase();
                if (lowerA < lowerB) return -1;
                if (lowerA > lowerB) return 1;
                return 0;
            });
        }
        if (this.sortValue === 'sort-name-min') {
            toys.sort((toyA: Toy, toyB: Toy) => {
                const lowerA: string = toyA.getName().toLowerCase();
                const lowerB: string = toyB.getName().toLowerCase();
                if (lowerA > lowerB) return -1;
                if (lowerA < lowerB) return 1;
                return 0;
            });
        }
        if (this.sortValue === 'sort-count-max') {
            toys.sort((toyA: Toy, toyB: Toy) => {
                return toyA.getCount() - toyB.getCount();
            });
        }
        if (this.sortValue === 'sort-count-min') {
            toys.sort((toyA: Toy, toyB: Toy) => {
                return toyB.getCount() - toyA.getCount();
            });
        }
    }

    clearFilter() {
        this.filters = {
            size: Array<string>(),
            shape: Array<string>(),
            color: Array<string>(),
            favor: false,
            count: {
                min: 1,
                max: 12,
            },
            years: {
                min: 1940,
                max: 2020,
            },
        };
        localStorage.setItem('mrk90_christmasFilter', JSON.stringify(this.filters));
        this.filterSize.clear();
        this.filterColor.clear();
        this.filterShape.clear();
        this.favoriteFilterBtn.classList.remove('active');
        this.filterYear.setDefault();
        this.filterCount.setDefault();
        this.selectSort.selectedIndex = 0;
        this.search.value = '';
        this.arrFiltered = this.doFilter(this.arrayToys);
        this.showToys(this.arrFiltered);
    }

    setFocus() {
        this.search.focus();
    }

    getArrToys(): Toy[] {
        return this.arrayToys;
    }
}
