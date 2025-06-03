# Test info

- Name: Login, adicionar 3 itens e visualizar carrinho
- Location: C:\Users\talhe\Desktop\playwright-main\saucedemo-tests\tests\saucedemo.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)

Locator: locator(':root')
Expected pattern: /inventory/
Received string:  "https://www.saucedemo.com/"
Call log:
  - expect.toHaveURL with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "https://www.saucedemo.com/"

    at C:\Users\talhe\Desktop\playwright-main\saucedemo-tests\tests\saucedemo.spec.js:14:24
```

# Page snapshot

```yaml
- text: Swag Labs
- textbox "Username": standard_user
- textbox "Password": teste
- 'heading "Epic sadface: Username and password do not match any user in this service" [level=3]':
  - button
  - text: "Epic sadface: Username and password do not match any user in this service"
- button "Login"
- heading "Accepted usernames are:" [level=4]
- text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
- heading "Password for all users:" [level=4]
- text: secret_sauce
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
   9 |     await page.fill('#password', 'teste');
  10 |     await page.screenshot({ path: 'prints/login.png' });
  11 |     await page.click('#login-button');
  12 |
  13 |     // 3. Verifica se está na tela de produtos
> 14 |     await expect(page).toHaveURL(/inventory/);
     |                        ^ Error: Timed out 5000ms waiting for expect(locator).toHaveURL(expected)
  15 |
  16 |     // 4. Adiciona 3 produtos acessando a página de detalhes
  17 |     for (let i = 0; i < 3; i++) {
  18 |         const itemName = page.locator('.inventory_item_name').nth(i);
  19 |         await itemName.click();
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