import { type Locator, type Page } from '@playwright/test';

export class SecurityPage {
    readonly page: Page;
    private readonly url = 'https://demo-bank.vercel.app/bezpieczenstwo.html';

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }
}
