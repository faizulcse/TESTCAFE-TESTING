import { Selector, t } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
const navbar = new Navbar()
const loginPage = new LoginPage()

// prettier-ignore
fixture `Search box test`
.page `http://zero.webappsecurity.com/index.html`

test('User can not login with invalid credentials', async (t) => {
	await t.click(navbar.signInButton)
	loginPage.loginToApp('invalidusername', 'invalidpassword')
	await t
		.expect(loginPage.errorMessage.innerText)
		.contains('Login and/or password are wrong.')
})

test.only('User can login with valid credentials', async (t) => {
	await t.click(navbar.signInButton)
	loginPage.loginToApp('username', 'password')
	const accountSummaryTab = Selector('#account_summary_tab')
	await t.expect(accountSummaryTab.exixts).ok
	await t.expect(loginPage.loginForm.exixts).notOk
	const userIcon = Selector('.icon-user')
	await t.click(userIcon)
	const logoutButton = Selector('#logout_link')
	await t.click(logoutButton)
	await t.expect(logoutButton.exists).notOk
	await t.expect(navbar.signInButton.exists).Ok
})
