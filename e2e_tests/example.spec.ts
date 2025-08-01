import { test, expect } from '@playwright/test';

test.describe('Demo Bank - Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo-bank.vercel.app/');
  });

  test('should load the landing page successfully', async ({ page }) => {
    // Check if the page loaded successfully
    await expect(page).toHaveTitle('Demobank - Bankowość Internetowa - Logowanie');
    
    // Verify login form elements are visible
    const loginButton = page.getByTestId('login-button');
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeDisabled();
    
    const loginInput = page.getByTestId('login-input');
    await expect(loginInput).toBeVisible();
    await expect(loginInput).toBeEmpty();
    
    const passwordInput = page.getByTestId('password-input');
    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toBeEmpty();
  });

  test('should validate login form inputs', async ({ page }) => {
    const loginButton = page.getByTestId('login-button');
    const loginInput = page.getByTestId('login-input');
    const passwordInput = page.getByTestId('password-input');
    
    // Initially button should be disabled
    await expect(loginButton).toBeDisabled();
    
    // Fill in login with valid credentials
    await loginInput.fill('tester');
    await expect(loginButton).toBeDisabled();
    
    // Fill in password
    await passwordInput.fill('password123');
    
    // Verify login button state
    await expect(loginButton).toBeVisible();
    
    // Verify error message appears
    await expect(page.getByTestId('error-login-id')).toBeVisible();
  });

  test('should have a password atribute in password input', async ({ page }) => {
    const passwordInput = page.getByTestId('password-input');
    
    // Fill in some password
    await passwordInput.fill('test123');
    
    // Initially password should be hidden
    await expect(passwordInput).toHaveAttribute('type', 'password');
  });
});

