import routes from "../../routes-front-end/routes.json";

interface Route {
  path: string;
  title?: string;
  description?: string;
}

export function HandleSearch(searchTerm: string): string | undefined {
  if (!searchTerm) {
    return undefined;
  }

  console.log("🔍 Termo de busca recebido:", searchTerm);
  console.log("📂 Rotas disponíveis:", routes);

  // Normaliza o termo de busca (remove acentos, deixa minúsculo e troca espaços por hífen)
  const normalizedSearchTerm = searchTerm
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-");

  console.log("🔎 Termo normalizado:", normalizedSearchTerm);

  // Filtra as rotas baseadas no termo normalizado
  const filteredRoutes = (routes as Route[]).filter((route) =>
    route.path
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .includes(normalizedSearchTerm)
  );

  if (filteredRoutes.length === 0) {
    console.log("⚠️ Nenhuma rota encontrada para:", normalizedSearchTerm);
    return undefined;
  }

  console.log(`✅ Rotas encontradas: ${filteredRoutes.map((r) => r.path).join(", ")}`);

  // Retorna a primeira rota encontrada, ajustando "/page" se necessário
  return filteredRoutes[0].path.includes("/page")
    ? filteredRoutes[0].path.replace("/page", "")
    : filteredRoutes[0].path;
}
