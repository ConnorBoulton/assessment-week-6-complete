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
    await button.click()
    await driver.sleep(4000);
    
});

test('Check for upper left corner for x', async () => {

    let leftCorner = await driver.findElement(By.id("cell-0"))
    await leftCorner.click()
    await driver.sleep(2000)

    expect(await leftCorner.getText()).toContain("X")
    await driver.sleep(2000)
})

test('Check for upper right square for x', async () => {

    let rightCorner = await driver.findElement(By.id("cell-2"))
    await rightCorner.click()
    await driver.sleep(2000)

    expect(await rightCorner.getText()).toContain('X')
    await driver.sleep(2000)
})

test('Check for center square for x', async () => {

    let centerSquare = await driver.findElement(By.id("cell-4"))
    await centerSquare.click()
    await driver.sleep(2000)

    expect(await centerSquare.getText()).toContain("X")
    await driver.sleep(2000)
})

test('Checks for O when X is clicked', async () => {
    await driver.navigate().refresh()
    await driver.findElement(By.id('start-game')).click()

    await driver.findElement(By.id('cell-1')).click()
    const boxO = await driver.findElement(By.id('cell-0')).getText()

    expect(boxO).toContain('O')
    await driver.sleep(2000)
})