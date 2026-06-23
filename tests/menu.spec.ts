import { test, expect} from  '@playwright/test';

test ('menu', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');

    await page.getByRole('link', {name: 'Context Menu'}).click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/context_menu');
});