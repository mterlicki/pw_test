import { test, expect } from '@playwright/test';
import { LandingPage } from '../../pages/landing.page';
import { SecurityPage } from '../../pages/security.page';

test.describe('Demo Bank - Security Page Tests', () => {
    let landingPage: LandingPage;
    let securityPage: SecurityPage;

    test.beforeEach(async ({ page }) => {
        landingPage = new LandingPage(page);
        securityPage = new SecurityPage(page);
    });

    test('should navigate to security page from landing page', async ({ page }) => {
        // Start from landing page
        await landingPage.goto();
        
        // Check if security link is visible and clickable
        await expect(landingPage.securityLink).toBeVisible();
        await expect(landingPage.securityLink).toBeEnabled();
        
        // Navigate to security page
        await landingPage.navigateToSecurity();
        
        // Verify we're on the security page
        await expect(page).toHaveURL('https://demo-bank.vercel.app/bezpieczenstwo.html');
        await expect(page).toHaveTitle(/Demobank - Bankowość Internetowa - Bezpieczeństowo/);
    });

    test('should load security page directly', async () => {
        // Navigate directly to security page
        await securityPage.goto();
        
        // Verify page title
        const title = await securityPage.getTitle();
        expect(title).toContain('Demobank - Bankowość Internetowa - Bezpieczeństowo');
    });
});
