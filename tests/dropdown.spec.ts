import { test, expect} from  '@playwright/test';

test ( 'dropdown', async ({page}) => {
 await page.goto('https://the-internet.herokuapp.com/dropdown');

 await page.locator('#dropdown').selectOption('Option 1');
 console.log('value log', await page.locator('option:checked').textContent());
 await expect(page.locator('option:checked')).toHaveText('Option 1');

// await page.getByRole('combobox').selectOption('Option 1');
// await expect(page.locator('option:checked')).toHaveText('Option 1');

});