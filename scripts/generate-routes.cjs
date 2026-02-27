const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/app');
const routes = new Map(); // Usa um Map para evitar duplicações

function formatTitle(name) {
  return name.replace(/-/g, ' ').toUpperCase(); // Substitui "-" por " " e coloca tudo em maiúsculo
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath); // Recursão para subdiretórios
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.tsx')) {
      const folderName = path.basename(path.dirname(filePath)); // Nome da pasta
      const routePath = `/${folderName}`; // Define o caminho da rota

      // Evita duplicação verificando se a rota já existe no Map
      if (!routes.has(routePath)) {
        routes.set(routePath, {
          path: routePath,
          title: formatTitle(folderName), // Formata o nome corretamente
          description: `Descrição da página ${formatTitle(folderName)}`,
        });
      }
    }
  });
}

walkDir(pagesDir);

// Converte Map para Array e salva no arquivo JSON
fs.writeFileSync(
  path.join(__dirname, '../routes-front-end/routes.json'),
  JSON.stringify([...routes.values()], null, 2)
);

console.log('Rotas geradas com sucesso!');
