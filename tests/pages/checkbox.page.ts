import { expect, type Locator, type Page} from  '@playwright/test';

export class checkboxesPage {
    readonly page:Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }

    async checkFirstCheckbox() {
        await this.page.getByRole('checkbox').first().check();
    }

    async checkSecondCheckbox() {
        await this.page.getByRole('checkbox').nth(1).check();
    }
    
    async isFirstCheckCheckbox() {
        await this.page.getByRole('checkbox').first().isChecked();
    }

    async isSecondCheckCheckbox() {
        await this.page.getByRole('checkbox').nth(1).check();
    }

}