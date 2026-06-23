import {test, expect} from './features/the-internet.fixture';

test ('download', async ({download}) => {
    await download.goto();
    const downloadFile = await download.downloadFile('some-file.txt');    
    expect(downloadFile.suggestedFilename()).toBe('some-file.txt');

});