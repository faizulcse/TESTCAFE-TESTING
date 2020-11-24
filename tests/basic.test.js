import { Selector } from 'testcafe'

//prettier-ignore
fixture `Getting started with TestCafe`
	.page('https://devexpress.github.io/testcafe/example/')
	.before(async (t) => {
		// Test setup goes here
		// await runDatabaseReset()
		// await seedTestData()
	})
	.beforeEach(async (t) => {
		// run before each test
	})
	.after(async (t) => {
		// Cleaning test data
	})
	.afterEach(async (t) => {
		// Runs after each test
	})

test('My First testcafe test', async (t) => {
	//Here goes testcafe code
	// await t.typeText('#developer-name', 'Jhon')
	// await t.click('#submit-button')
	// await t.expect(Selector('#article-header').innerText).contains('Jhon')

	console.log(t.testRun.test.name)
	console.log(t.testRun.test.testFile.currentFixture.name)
	console.log(t)
})
