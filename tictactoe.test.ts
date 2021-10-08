import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {
    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
});

describe('X player moves', async()=>{
    test('clicking the upper left square adds an X', async () =>{
        driver.get('http://localhost:4000');
        let startBtn = await driver.findElement(By.id('start-game'));
        await startBtn.click();
        let space00 = await driver.findElement(By.xpath('//table/tbody/tr[1]/td[1]'));
        await driver.sleep(2000);
        await space00.click();
        let symbol = await space00.getText();
        expect(symbol).toBe('X');
    });
    
    test('clicking the upper right square adds an X', async () =>{
        driver.get('http://localhost:4000');
        let startBtn = await driver.findElement(By.id('start-game'));
        await startBtn.click();
        let space02 = await driver.findElement(By.xpath('//table/tbody/tr[1]/td[3]'));
        await driver.sleep(2000);
        await space02.click();
        let symbol = await space02.getText();
        expect(symbol).toBe('X');
    });

    test('clicking the lower right square adds an X', async () =>{
        driver.get('http://localhost:4000');
        let startBtn = await driver.findElement(By.id('start-game'));
        await startBtn.click();
        let space22 = await driver.findElement(By.xpath('//table/tbody/tr[3]/td[3]'));
        await driver.sleep(2000);
        await space22.click();
        let symbol = await space22.getText();
        expect(symbol).toBe('X');
    });
});

describe('PC Player moves', async()=>{
    test('When human clicks on the middle left space, the PC player adds an O to the upper left space', async () =>{
        driver.get('http://localhost:4000');
        let startBtn = await driver.findElement(By.id('start-game'));
        await startBtn.click();
        let pcSpace = await driver.findElement(By.xpath('//table/tbody/tr[1]/td[1]'));
        let humanSpace = await driver.findElement(By.xpath('//table/tbody/tr[2]/td[1]'));
        await driver.sleep(2000);
        await humanSpace.click();
        let symbol = await pcSpace.getText();
        expect(symbol).toBe('O');
    });
});

