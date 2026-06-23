import {test, expect} from './features/the-internet.fixture';

test ('dragAnddrop', async ({dragAndDrop}) =>{
    await dragAndDrop.goto();
    await dragAndDrop.dragToB();

    expect(await dragAndDrop.getColumnAText()).toBe('B');
});