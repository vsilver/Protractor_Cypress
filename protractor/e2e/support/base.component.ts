import { $, browser, ElementFinder, ExpectedConditions, protractor } from 'protractor';
let timeout =5000;

export abstract class BaseComponentsPo{
    abstract pageUrl: string;

    async navigateTo(){
        await  browser.get(this.pageUrl);
    }

    getTitle(){
        return browser.getTitle();
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    async waitForElementVisible(element: ElementFinder, duration?) {
        await browser.wait(ExpectedConditions.visibilityOf(element), duration ? duration : timeout);
    }

    async waitForInVisible(element: ElementFinder, duration?) {
        await browser.wait(ExpectedConditions.invisibilityOf(element), duration ? duration : timeout);
    }

    async pressEsc() {
        await browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    }

    async switchToDefaultContent() {
        await await browser.switchTo().defaultContent();
    }

    sendKeys(element: ElementFinder, value: string) {
        element.clear();
        element.sendKeys(value);
    }

    async scrollToElement(element: ElementFinder) {
        await browser.executeScript('arguments[0].scrollIntoView', element.getWebElement());
    }
}