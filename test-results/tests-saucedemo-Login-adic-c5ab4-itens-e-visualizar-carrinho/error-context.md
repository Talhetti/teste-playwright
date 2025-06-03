# Test info

- Name: Login, adicionar 3 itens e visualizar carrinho
- Location: C:\Users\talhe\Desktop\playwright-main\saucedemo-tests\tests\saucedemo.spec.js:3:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('.inventory_item_name2').first()

    at C:\Users\talhe\Desktop\playwright-main\saucedemo-tests\tests\saucedemo.spec.js:19:24
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('Login, adicionar 3 itens e visualizar carrinho', async({ page }) => {
   4 |     // 1. Acessar o site
   5 |     await page.goto('https://www.saucedemo.com');
   6 |
   7 |     // 2. Fazer login
   8 |     await page.fill('#user-name', 'standard_user');
   9 |     await page.fill('#password', 'secret_sauce'); // Aplicando senha incorreta.
  10 |     await page.screenshot({ path: 'prints/login.png' });
  11 |     await page.click('#login-button');
  12 |
  13 |     // 3. Verifica se está na tela de produtos
  14 |     await expect(page).toHaveURL(/inventory/);
  15 |
  16 |     // 4. Adiciona 3 produtos acessando a página de detalhes
  17 |     for (let i = 0; i < 3; i++) {
  18 |         const itemName = page.locator('.inventory_item_name2').nth(i); // Alterando nome do item
> 19 |         await itemName.click();
     |                        ^ Error: locator.click: Target page, context or browser has been closed
  20 |         await page.click('button.btn_inventory');
  21 |         await page.screenshot({ path: `prints/item-${i + 1}.png` });
  22 |         await page.click('#back-to-products');
  23 |     }
  24 |
  25 |     // 5. Acessa o carrinho
  26 |     await page.click('.shopping_cart_link');
  27 |     await expect(page.locator('.cart_item')).toHaveCount(3);
  28 |     await page.screenshot({ path: 'prints/carrinho.png' });
  29 | });
```