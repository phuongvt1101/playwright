import { test as base } from '@playwright/test';
import { checkboxesPage } from '../pages/checkbox.page';
import { downloadPage } from '../pages/download.page';
import { dragAndDropPage } from '../pages/dragAndDrop.page';

// Declare the types of your fixtures.
type MyFixtures = {
  checkboxPage: checkboxesPage
  download: downloadPage
  dragAndDrop: dragAndDropPage
};

export const test = base.extend<MyFixtures>({
    checkboxPage: async ({ page }, use) => {
        const checkboxPage = new checkboxesPage(page);
        await use(checkboxPage);
    },
    download: async ({ page }, use) => {
        const download = new downloadPage(page);
        await use(download);
    },
    dragAndDrop: async ({ page }, use) => {
        const dragAndDrop = new dragAndDropPage(page);
        await use(dragAndDrop);
    },
})

export { expect } from '@playwright/test';