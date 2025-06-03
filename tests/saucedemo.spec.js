const { test, expect } = require('@playwright/test');

test('Login, adicionar 3 itens e visualizar carrinho', async({ page }) => {
    // 1. Acessar o site
    await page.goto('https://www.saucedemo.com');

    // 2. Fazer login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce'); // Aplicando senha incorreta. (erro controlado)
    await page.screenshot({ path: 'prints/login.png' });
    await page.click('#login-button');

    // 3. Verifica se está na tela de produtos
    await expect(page).toHaveURL(/inventory/);

    // 4. Adiciona 3 produtos acessando a página de detalhes
    for (let i = 0; i < 3; i++) {
        const itemName = page.locator('.inventory_item_name').nth(i); // Alterando nome do item (erro controlado)
        await itemName.click();
        await page.click('button.btn_inventory');
        await page.screenshot({ path: `prints/item-${i + 1}.png` });
        await page.click('#back-to-products');
    }

    // 5. Acessa o carrinho
    await page.click('.shopping_cart_link');
    await expect(page.locator('.cart_item')).toHaveCount(3);
    await page.screenshot({ path: 'prints/carrinho.png' });

    //6. Remover Produto
    await page.click('.cart_item .btn');
    await expect(page.locator('.cart_item')).toHaveCount(2);
    await page.screenshot({ path: 'prints/RemoverProduto.png'})
});