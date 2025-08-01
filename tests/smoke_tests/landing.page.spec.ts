import { test, expect } from '@playwright/test';
import { LandingPage } from '../../pages/landing.page';

test.describe('Demo Bank - Smoke Tests', () => {
  let landingPage: LandingPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    await landingPage.goto();
  });

  test('should load the landing page successfully', async () => {
    // Check if the page loaded successfully
    const title = await landingPage.getTitle();
    expect(title).toBe('Demobank - Bankowość Internetowa - Logowanie');
    
    // Verify login form elements are visible
    await expect(landingPage.loginButton).toBeVisible();
    await expect(landingPage.loginButton).toBeDisabled();
    
    await expect(landingPage.loginInput).toBeVisible();
    await expect(landingPage.loginInput).toBeEmpty();
    
    await expect(landingPage.passwordInput).toBeVisible();
    await expect(landingPage.passwordInput).toBeEmpty();
  });

  test('should validate login form inputs', async () => {
    // Initially button should be disabled
    await expect(landingPage.loginButton).toBeDisabled();
    
    // Fill in login with valid credentials
    await landingPage.fillLoginForm('tester', '');
    await expect(landingPage.loginButton).toBeDisabled();
    
    // Fill in password
    await landingPage.fillLoginForm('tester', 'password123');
    
    // Verify login button state
    await expect(landingPage.loginButton).toBeVisible();
    
    // Verify error message appears
    await expect(landingPage.loginError).toBeVisible();
  });

  test('should have a password attribute in password input', async () => {
    // Fill in some password
    await landingPage.fillLoginForm('', 'test123');
    
    // Initially password should be hidden
    await expect(landingPage.passwordInput).toHaveAttribute('type', 'password');
  });
});

