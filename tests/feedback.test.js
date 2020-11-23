import { Selector, t } from 'testcafe'

fixture`Getting started with TestCafe`.page(
	'https://devexpress.github.io/testcafe/example/'
)

test.only('My First testcafe test', async (t) => {})
