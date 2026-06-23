// import { test, expect} from  '@playwright/test';

// test ('checkbox', async ({page}) => {
//     await page.goto('https://the-internet.herokuapp.com/checkboxes');

//     await page.getByRole('checkbox').first().check();
//     await expect(page.getByRole('checkbox').first()).toBeChecked();

//     //await page.getByRole('checkbox').nth(1).check();
//     //await expect(page.getByRole('checkbox').nth(1)).toBeChecked();

// });



import {test, expect} from './features/the-internet.fixture';

test ('checkbox', async ({checkboxPage}) => {
    await checkboxPage.goto();
    // await page.goto('https://the-internet.herokuapp.com/checkboxes');

    await checkboxPage.checkFirstCheckbox();
    // await page.getByRole('checkbox').first().check();
    await checkboxPage.isFirstCheckCheckbox();
    // await expect(page.getByRole('checkbox').first()).toBeChecked();

    //await page.getByRole('checkbox').nth(1).check();
    //await expect(page.getByRole('checkbox').nth(1)).toBeChecked();

});