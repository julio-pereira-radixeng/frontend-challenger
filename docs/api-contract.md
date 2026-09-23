# Contrato da API

## `GET /api/sensors/readings`

Query parameters:

- `site`: opcional;
- `status`: opcional (`normal`, `warning` ou `critical`);
- `page`: número da página, iniciando em `1`;
- `pageSize`: quantidade de itens por página.

Exemplo:

```text
GET /api/sensors/readings?site=North%20Sea&status=warning&page=1&pageSize=10
```

Resposta `200`:

```ts
type Reading = {
  id: string;
  sensorName: string;
  site: string;
  value: number;
  unit: string;
  recordedAt: string;
  status: "normal" | "warning" | "critical";
};

type ReadingsResponse = {
  items: Reading[];
  page: number;
  pageSize: number;
  total: number;
};
```

O mock deve simular atraso de rede e permitir uma resposta de erro `500`, para que o entrevistador possa avaliar loading, retry e concorrência entre requisições.
