# Frontend Challenger

Desafio prático reutilizável para a segunda rodada de entrevistas frontend.

## Objetivo da entrevista

Implementar uma tela React/TypeScript para consulta de leituras de sensores, demonstrando:

- organização de componentes, estado e efeitos;
- estados de carregamento, erro, resultado vazio e tentativa novamente;
- filtros por site e status;
- paginação ou carregamento incremental;
- acessibilidade para teclado e leitor de tela;
- tratamento de requisições concorrentes e respostas obsoletas;
- investigação de performance;
- estratégia de testes orientada ao comportamento.

O desafio foi desenhado para ser executado em aproximadamente 30 minutos de live coding. O candidato pode consultar a documentação oficial e deve explicar decisões enquanto implementa.

## Enunciado apresentado ao candidato

> Implemente uma tela React para consulta de leituras de sensores. A tela deve listar as leituras, permitir filtrar por site e status e oferecer paginação. Ela precisa informar claramente os estados de carregamento, resultado vazio e erro, além de permitir tentar novamente. Todos os filtros e a tabela devem ser utilizáveis somente pelo teclado.

Não é necessário criar backend, autenticação, design visual sofisticado ou uma arquitetura completa de produção. O contrato da API e os dados de teste estão disponíveis neste repositório.

## Execução da entrevista

### 0–2 minutos — Contextualização

Explicar que o objetivo é observar a estruturação de uma solução real de frontend, e não terminar uma aplicação completa. Informar que estilos podem ser simplificados e que decisões podem ser verbalizadas.

### 2–5 minutos — Desenho rápido

Perguntar antes do código:

1. Quais estados e componentes você separaria?
2. O que ficaria local no componente e o que mereceria uma solução compartilhada?

### 5–18 minutos — Implementação principal

Solicitar nesta ordem:

1. buscar e renderizar as leituras;
2. representar `loading`, erro e lista vazia;
3. adicionar filtro por site e status;
4. adicionar paginação ou carregamento incremental;
5. garantir labels, foco visível, navegação por teclado e semântica adequada.

Perguntas de acompanhamento:

- Como evitar atualizar estado depois que a requisição foi cancelada ou a tela desmontada?
- O filtro dispara uma requisição a cada tecla? Como controlaria isso?
- Como impedir que uma resposta antiga sobrescreva uma busca mais recente?

### 18–23 minutos — Performance e depuração

Apresentar o cenário:

> Depois de algum tempo, a tela passou a receber 10 mil leituras e ficou lenta ao trocar filtros. Como você investigaria e corrigiria o problema?

Esperar que o candidato aborde React Profiler, ferramentas do navegador, renders desnecessários, dependências de efeitos, debounce/throttle, paginação, virtualização, redução do payload, cache, invalidação e cancelamento de requisições — conforme fizer sentido para a solução.

### 23–27 minutos — Testes e acessibilidade

Perguntar:

1. Que testes unitários e de integração você escreveria para essa tela?
2. Como testaria loading, erro, resultado vazio, filtro, paginação e tentativa novamente?
3. Como validaria acessibilidade além de verificar visualmente a tela?

### 27–30 minutos — Fechamento

Perguntar:

> Se esta tela fosse para produção amanhã, qual seria o primeiro ponto que você melhoraria e por quê?

## Pistas graduais

Usar somente se houver bloqueio e registrar a pista utilizada:

1. Quais estados diferentes o usuário pode observar enquanto a busca acontece?
2. O que pode acontecer se o usuário trocar o filtro antes de a resposta anterior chegar?
3. Como verificar que a interface continua utilizável por teclado e leitor de tela?

## Critérios de avaliação

Escala de 1 a 4: 1 insuficiente, 2 parcial, 3 atende, 4 excede.

| Critério | Evidência esperada |
|---|---|
| React/TypeScript | Componentes, estado e efeitos organizados, com implementação autônoma |
| Estados e integração | Loading, erro, vazio, retry, filtros, paginação e respostas concorrentes |
| Acessibilidade | Semântica, labels, foco visível, teclado e validação orientada ao usuário |
| Performance | Diagnóstico com ferramentas e otimização justificada por evidência |
| Testabilidade | Testes de comportamento para estados e interações críticas |
| Resolução de problemas | Hipóteses, investigação e trade-offs claros |
| Comunicação e autonomia | Condução independente, decisões explícitas e reconhecimento de limites |

Considerar a rodada satisfatória quando o candidato obtiver pelo menos 3 em React/TypeScript, estados e integração, acessibilidade e resolução de problemas, sem nota 1 em nenhum critério. Considerar também as pistas utilizadas e o que foi explicado, mas não implementado por falta de tempo.

## Registro pós-entrevista

Registrar separadamente:

- o que foi implementado;
- pistas oferecidas;
- decisões explicadas, mas não implementadas;
- exemplos concretos de domínio frontend;
- riscos remanescentes para a autonomia esperada.

## Contrato da API

O contrato está em [`docs/api-contract.md`](docs/api-contract.md). Os dados de exemplo estão em [`fixtures/readings.json`](fixtures/readings.json).
