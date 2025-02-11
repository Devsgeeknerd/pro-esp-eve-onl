<!-- Título -->
# eSport

***Conteúdo do Projeto:***

> [!IMPORTANT]\
> **Boas práticas**:
>
> * **Validação e Tipagem de Dados**:
>   * É importante garantir que os dados recebidos pelo servidor estejam em um formato esperado e validado.
>   * No código, o uso de `express.json()` já é uma boa prática para parsear as requisições JSON.
>   * Defina tipos mais específicos no TypeScript para cada corpo de requisição, evitando o uso de `any`.
>
> * **Uso de Middleware**:
>   * O uso de `express.json()` e `cors()` como middleware é uma boa prática.
>   * Isso permite que o servidor entenda e aceite requisições JSON e também que aplicações de diferentes origens possam se comunicar com a API.
>   * Em sistema de produção, é bom adicionar um middleware para verificar autenticações e autorizações.
>
> * **Organização do Código**:
>   * O código está organizado de forma simples, com cada rota responsável por uma tarefa específica.
>   * Se o projeto crescer, separe o código em módulos, por exemplo, criando pastas para `controllers`, `services`, e `routes`.

> [!WARNING]\
> **Sugestões de melhoria**:
>
> * **Validação de Dados de Entrada**:
>   * O código atual não valida se os dados que o usuário envia são realmente os esperados.
>   * Por exemplo, `body.weekDays` é tratado como um array de strings, mas não há uma verificação para garantir que esses estejam no formato correto.
>   * Use uma biblioteca como `Joi` ou `Zod` para validar os dados antes de inseri-los no banco de dados.
>   * Isso pode evitar erros de inserção e melhorar a segurança da aplicação.
>
> * **Tratamento de Erros**:
>   * Não há tratamento adequado para erros que possam ocorrer durante a execução das queries ou quando o banco de dados não retorna os resultados esperados.
>   * Adicione blocos `try/catch` nas funções assíncronas para capturar possíveis erros e retornar mensagens mais amigáveis para o usuário.
>
>   ```typescript
>    try {
>    // Código que pode gerar erro.
>    } catch (error) {
>      return response.status(500).json({ message: "Erro interno do servidor" });
>    }
>   ```
>
> * **Não usar `any` no TypeScript**:
>   * O uso de `any` nos tipos de dados de entrada (`body: any`) compromete a segurança da tipagem estática do TypeScript.
>   * Em vez de usar `any`, crie um tipo ou interface específica para o corpo da requisição.
>   * Exemplo:
>
>   ```typescript
>
>    interface AdRequest {
>      name: string;
>      yearsPlaying: number;
>      discord: string;
>      weekDays: string[];
>      hourStart: string;
>      hourEnd: string;
>      useVoiceChannel: boolean;
>    }
>    ```
>
> * **Não tratar casos de dados não encontrados**:
>   * A função `findUniqueOrThrow` lançaria um erro se o anúncio não for encontrado, mas isso não é tratado no código.
>   * Use um bloco `try/catch` para capturar exceções e retornar uma mensagem mais amigável caso o anúncio não seja encontrado.

> [!NOTE]\
> **Observações**:
>

<!-- Informações -->
## &#8505; Informações

![Visitors](https://api.visitorbadge.io/api/visitors?path=Devsgeeknerd%2Fpro-esp-eve-onl&label=Visitantes&labelColor=%23700070&labelStyle=none&countColor=%23000fff&style=plastic&color=%23ffffff "Total de Visitantes")
&nbsp;
![Followers](https://img.shields.io/github/followers/Devsgeeknerd?style=p&label=Seguidores&labelColor=800080&color=000fff "Total de Seguidores")
&nbsp;
![Watchers](https://img.shields.io/github/watchers/Devsgeeknerd/pro-esp-eve-onl?style=p&label=Observadores&labelColor=800080&color=000fff "Total de Observadores")
&nbsp;
![Stars](https://img.shields.io/github/stars/Devsgeeknerd/pro-esp-eve-onl?style=p&label=Estrelas&labelColor=800080&color=000fff "Total de Estrelas")
&nbsp;
![Forks](https://img.shields.io/github/forks/Devsgeeknerd/pro-esp-eve-onl?style=p&label=Bifurcações&labelColor=800080&color=000fff "Total de Bifurcações")
&nbsp;
![Repo Size](https://img.shields.io/github/repo-size/Devsgeeknerd/pro-esp-eve-onl?style=p&label=Tamanho&labelColor=800080&color=000fff "Tamanho do Repositório")
&nbsp;
![License](https://img.shields.io/github/license/Devsgeeknerd/pro-esp-eve-onl?style=p&label=Licença&labelColor=800080&color=000fff "Licença do Repositório")
