import { test, expect } from '@playwright/test';

test('Testing Ebay', async ({ page }) => {
  await page.goto('https://www.cermati.com/app/gabung');
  // Click [placeholder="Masukkan Email"]
  await page.locator('[placeholder="Masukkan Email"]').click();
  // Fill [placeholder="Masukkan Email"]
  await page.locator('[placeholder="Masukkan Email"]').fill('harydewanttoro@rocketmail.com');
  // Click [placeholder="Masukkan No\. Handphone"]
  await page.locator('[placeholder="Masukkan No\\. Handphone"]').click();
  // Fill [placeholder="Masukkan No\. Handphone"]
  await page.locator('[placeholder="Masukkan No\\. Handphone"]').fill('089622908657');
  // Click text=Kata SandiKata sandi harus memiliki panjang antara 8-50 karakter dan mengandung  >> [placeholder="Masukkan Kata Sandi"]
  await page.locator('text=Kata SandiKata sandi harus memiliki panjang antara 8-50 karakter dan mengandung  >> [placeholder="Masukkan Kata Sandi"]').click();
  // Fill text=Kata SandiKata sandi harus memiliki panjang antara 8-50 karakter dan mengandung  >> [placeholder="Masukkan Kata Sandi"]
  await page.locator('text=Kata SandiKata sandi harus memiliki panjang antara 8-50 karakter dan mengandung  >> [placeholder="Masukkan Kata Sandi"]').fill('P@ssw0rd');
  // Click input[name="confirmPassword"]
  await page.locator('input[name="confirmPassword"]').click();
  // Fill input[name="confirmPassword"]
  await page.locator('input[name="confirmPassword"]').fill('P@ssw0rd');
  // Click [placeholder="Masukkan Nama Depan"]
  await page.locator('[placeholder="Masukkan Nama Depan"]').click();
  // Fill [placeholder="Masukkan Nama Depan"]
  await page.locator('[placeholder="Masukkan Nama Depan"]').fill('Hary');
  // Click [placeholder="Masukkan Nama Belakang"]
  await page.locator('[placeholder="Masukkan Nama Belakang"]').click();
  // Fill [placeholder="Masukkan Nama Belakang"]
  await page.locator('[placeholder="Masukkan Nama Belakang"]').fill('Dewantoro');
  // Click [placeholder="Pilih Kabupaten\/Kota"]
  await page.locator('[placeholder="Pilih Kabupaten\\/Kota"]').click();
  // Fill [placeholder="Pilih Kabupaten\/Kota"]
  await page.locator('[placeholder="Pilih Kabupaten\\/Kota"]').fill('tangerang selatan');
  // Click text=KOTA TANGERANG SELATAN
  await page.locator('text=KOTA TANGERANG SELATAN').click();
  // Click button:has-text("Daftar")
  await page.locator('button:has-text("Daftar")').click();
  await page.waitForURL('https://www.cermati.com/app/validate-otp');

});