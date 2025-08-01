import { type Locator, type Page } from '@playwright/test';

export class LandingPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly loginError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.getByTestId('login-button');
        this.loginInput = page.getByTestId('login-input');
        this.passwordInput = page.getByTestId('password-input');
        this.loginError = page.getByTestId('error-login-id');
    }

    async goto() {
        await this.page.goto('https://demo-bank.vercel.app/');
    }

    async fillLoginForm(login: string, password: string) {
        await this.loginInput.fill(login);
        await this.passwordInput.fill(password);
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async login(login: string, password: string) {
        await this.fillLoginForm(login, password);
        await this.loginButton.click();
    }
}
