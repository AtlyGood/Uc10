const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  page.on('dialog', dialog => dialog.accept());
  
  const filePath = path.resolve(__dirname, 'uc10 atv1.html');

  await page.goto(`file://${filePath}`);
  
  console.log('✅ HTML aberto com sucesso!');
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.fill("#nome", "Joao Gomes");
  await page.waitForTimeout(1000);
  await page.fill("#email", "joaogomes@gmail.com");
  await page.waitForTimeout(1000);
  await page.fill("#cpf", "123.456.789-09");
  await page.waitForTimeout(1000);
  await page.fill("#telefone", "(61) 98551-2909");
  await page.waitForTimeout(1000);
  await page.fill("#cidade", "Goias");
  await page.waitForTimeout(1000);
  await page.selectOption("#status", "inativo");
  await page.waitForTimeout(1000);
  await page.click('text=🧹 Limpar');
  await page.fill("#nome", "Joao Gomes");
  await page.waitForTimeout(1000);
  await page.fill("#email", "joaogomes@gmail.com");
  await page.waitForTimeout(1000);
  await page.fill("#cpf", "123.456.789-09");
  await page.waitForTimeout(1000);
  await page.fill("#telefone", "(61) 98551-2909");
  await page.waitForTimeout(1000);
  await page.fill("#cidade", "Goias");
  await page.waitForTimeout(1000);
  await page.selectOption("#status", "inativo");
  await page.waitForTimeout(1000);
  await page.click("text = 💾 Cadastrar Cliente")
  await page.waitForTimeout(1000);
  await page.click('text = ✏️ Editar');
  await page.waitForTimeout(1000);
  await page.click('text = ❌ Cancelar Edição');
  await page.waitForTimeout(1000);
  await page.click('text = ✏️ Editar');
  await page.waitForTimeout(1000);
  await page.fill("#nome", "safadao");
  await page.waitForTimeout(1000);
  await page.fill("#telefone", "(61) 98551-1414");
  await page.waitForTimeout(1000);
  await page.fill("#email", "safadao@gmail.com");
  await page.waitForTimeout(1000);
  await page.click("text = 💾 Atualizar Cliente")
  await page.waitForTimeout(9000);
  await page.click('text = 🗑️ Excluir');
  
})();