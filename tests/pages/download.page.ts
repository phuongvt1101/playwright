import { Download, expect, type Locator, type Page } from "@playwright/test";

export class downloadPage {
    readonly page:Page;
    constructor(page:Page) {
        this.page = page;

    }

    async goto() {
        await this.page.goto("https://the-internet.herokuapp.com/download");
    }

    async downloadFile(fileName:string) {
        const downloadPromise = this.page.waitForEvent("download");
        await this.page.getByRole('link', {name: fileName}).click();

        return await downloadPromise;
    }

}
