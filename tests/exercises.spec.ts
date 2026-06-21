import { test, expect} from  '@playwright/test';

test ('checkbox', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    await page.getByRole('checkbox').first().check();
    await expect(page.getByRole('checkbox').first()).toBeChecked();

    //await page.getByRole('checkbox').nth(1).check();
    //await expect(page.getByRole('checkbox').nth(1)).toBeChecked();

});

test ( 'dropdown', async ({page}) => {
 await page.goto('https://the-internet.herokuapp.com/dropdown');

 await page.locator('#dropdown').selectOption('Option 1');
 console.log('value log', await page.locator('option:checked').textContent());
 await expect(page.locator('option:checked')).toHaveText('Option 1');

// await page.getByRole('combobox').selectOption('Option 1');
// await expect(page.locator('option:checked')).toHaveText('Option 1');

});

test ('download', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download');

    const downloadPromise = page.waitForEvent('download');
    await page.getByRole('link', {name: 'file.json'}).click();
    const download = await downloadPromise;
    
    await expect(download.suggestedFilename()).toBe('file.json');

});

test ('upload', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles('test-data/upload-file1.txt');
    await page.getByRole('button', {name: 'Upload'}).click();

    await expect(page.getByText('File Uploaded!')).toBeVisible();
    await expect(page.locator('#uploaded-files')).toHaveText('upload-file1.txt');
});

test ('dragAnddrop', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const source = page.locator('#column-a');
    const target = page.locator('#column-b');
    await source.dragTo(target);

    await expect(page.locator('#column-a header')).toHaveText('B');
});

test ('menu', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');

    await page.getByRole('link', {name: 'Context Menu'}).click();

    await expect(page).toHaveURL('https://the-internet.herokuapp.com/context_menu');
});