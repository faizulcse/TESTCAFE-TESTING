import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

class FeedbackPage extends BasePage {
	constructor() {
		this.developer_name = Selector('#developer-name')
		this.submitButton = Selector('#submit-button')
		this.articleText = Selector('#article-header').innerText
	}

	async setDeveloperName() {
		await t.typeText(this.developer_name, 'Jhon')
		await t.click(this.submitButton)
	}
	async getArticleText() {
		return this.articleText.innerText
	}
}

export default FeedbackPage
