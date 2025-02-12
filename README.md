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
>
> * **Nomes de Variáveis Claras e Descritivos**:
>   * No caso, `hour` e `minutes` são nomes claros, mas poderíamos também usar `hours` e `minutes` no plural para uma consistência maior com a terminologia.
>
> * **Uso do `map(Number)`**:
>   * Embora `map(Number)` seja eficiente, pode ser um pouco confuso para que está começando.
>   * Uma alternativa mais explicita seria fazer o `parseInt` ou `parseFloat` diretamente.
>   * Exemplo:
>
>   ```typescript
>    const [hour, minutes] = hourString.split(":").map(part => parseInt(part, 10)); 
>   ```
>

> [!WARNING]\
> **Recomendações**:
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
> * **Não Usar `any` no TypeScript**:
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
> * **Não Tratar Casos de Dados Não Encontrados**:
>   * A função `findUniqueOrThrow` lançaria um erro se o anúncio não for encontrado, mas isso não é tratado no código.
>   * Use um bloco `try/catch` para capturar exceções e retornar uma mensagem mais amigável caso o anúncio não seja encontrado.
>
> * **Melhorar a Legibilidade com Variáveis Intermediárias**:
>   * A linha `const minutesAmount = hour * 60 + minutes;` poderia ser dividida em duas partes, para torná-la mais compreensível para iniciantes:
>
>   ```typescript
>    const totalMinutesFromHours = hour * 60;
>    const minutesAmount = totalMinutesFromHours + minutes;
>   ```
>
> * **Tratar Valores Negativos ou Inválidos**:
>   * Verificar se `hour` ou `minutes` são valores negativos ou estão fora dos intervalos válidos (por exemplo, `hours` deve ser entre 0 e 23, e `minutes` deve ser entre 0 e 59).
>
> * **Nomes Descritivos**:
>   * Use nomes de variáveis e funções que descrevam claramente o que eles fazem. Por exemplo, minutesAmount e hour são nomes claros e descritivos.
>
> * **Imutabilidade**:
>   * As variáveis hour e minutes são declaradas com const, o que garante que elas não serão reatribuídas acidentalmente.
>
> * **Formatação Consistente**:
>   * O uso de padStart garante que a string sempre terá o formato correto, mesmo que os valores sejam menores que 10.

> [!NOTE]\
> **Observações**:
>
> * **O Uso de `convertHourStringToMinutes` e `convertMinutesToHourString`**:
>   * Essas funções são importantes para garantir que os horários sejam armazenados de forma consistente no banco de dados (como minutos).
>   * No entanto, é crucial garantir que o formato de entrada seja validado corretamente antes de passá-lo para essas funções.
>
> * **Uso de `prisma.game.findMany` com `include`**:
>   * O uso de `include` com a contagem de anúncios é uma boa estratégia para evitar múltiplas consultas ao banco de dados, mas é importante ficar atento ao desempenho se o número de jogos ou anúncios crescer muito.
>
> * **O Uso de `split` e `join` Para Manipulação de Dias da Semana**:
>   * A conversão dos dias da semana para string e vice-versa (com `join` e `split`) pode ser uma estratégia simples, mas deve ser documentada corretamente para que não haja confusão sobre o formato esperado.

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
