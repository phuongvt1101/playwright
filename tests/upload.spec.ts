import { test, expect} from  '@playwright/test';

test ('upload', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles('test-data/upload-file1.txt');
    await page.getByRole('button', {name: 'Upload'}).click();

    await expect(page.getByText('File Uploaded!')).toBeVisible();
    await expect(page.locator('#uploaded-files')).toHaveText('upload-file1.txt');
});