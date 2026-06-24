import { expect, type Locator, type Page} from  '@playwright/test';

export class dragAndDropPage {
    readonly page:Page;
    readonly columnA: Locator;
    readonly columnB: Locator;

    constructor(page: Page) {
        this.page = page;
        this.columnA = page.locator("#column-a");
        this.columnB = page.locator("#column-b");
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    }

    async dragToB() {
        await this.columnA.dragTo(this.columnB);
    }

    async dragToA() {
        await this.columnB.dragTo(this.columnA);
    }

    async getColumnAText() {
        return await this.columnA.locator("#column-a header").textContent();
    }

        async getColumnBText() {
        return await this.columnB.locator("#column-b header").textContent();
    }

}