import { Selector, t } from 'testcafe'
import FeedbackPage from '../page-objects/pages/FeedbackPage'
const feedbackPage = new FeedbackPage()

fixture`Getting started with TestCafe`.page(
	'https://devexpress.github.io/testcafe/example/'
)

test.only('My First testcafe test', async (t) => {
	// Selector
	// Actions
	feedbackPage.setDeveloperName()
	feedbackPage.getArticleText()
	// assertion
	expect(feedbackPage.getArticleText().contains('Jhon'))
})
