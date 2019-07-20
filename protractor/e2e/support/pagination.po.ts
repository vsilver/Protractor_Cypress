import {$, $$, ElementArrayFinder, ElementFinder} from "protractor";

export class PaginationPo {

    paginationBlock: ElementFinder = $('.paging');
    firstBtn: ElementFinder = $('.paging-first');
    lastBtn: ElementFinder = $('.paging-last');
    nextBtn: ElementFinder = $('.paging-next');
    pageNumber: ElementArrayFinder = $$('li .page-numbers');
}