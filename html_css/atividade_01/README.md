# QUESTÕES DA ATIVIDADE 1 - HTML

## Conhecendo o HTML e sua estrutura básica

1. O que é o HTML e qual é o seu papel na construção de páginas web? Descreva brevemente a estrutura básica de um documento HTML.

    HTML significa HyperText Markup Language (Linguagem de Marcação de HyperTexto) que serve para estruturar o layout (desenho, esboço) das páginas web. A marçação característica do HTML são as tags que são sempre chamadas dentro de <code><></></code>. Estrutura básica do HTML:

    - <code>DOCTYPE html</code> - inicializa o arquivo afirmando que se trata de um documento HTML. Não precisa de fechamento;
    - Tag <code>html</code> - inicializa o documento html e todo o conteúdo deve estar dentro desta tag. Precisa de fechamento;
    - Tag <code>head</code> - é o cabeçalho do documento, dentro dela podem ser inseridas tags <code>meta</code>, <code>link</code> e <code>title</code>, por exemplo. Precisa de fechamento;
    - Tag <code>body</code> - onde todo o corpo do documento html deve ser construído, todas as tags de estrutura devem estar dentro dela, além das tags de script. Precisa de fechamento.

2. Como o HTML se relaciona com outras tecnologias da web, como o CSS e o JavaScript? Como essas três tecnologias trabalham em conjunto para criar páginas web interativas e estilizadas?

    A relação do HTML com outras tecnologias web está na estilização por meio do CSS e construção dos processos interativos e dinâmicos por meio do JavaScript, visto que o HTML são proporciona a criação da estrutura de uma página. Em resumo, é uma relação de co-dependência, em que as demais tecnologias existem para tornar a estrutura mais atrativa e dinâmica.

    Com o CSS é possível atribuir cor, tamanho e posições para os elementos estruturais das páginas, enquanto que com o JavaScript é possível criar e executar ações para cada elemento da estrutura a tornando interativa.

## Identificando tags HTML básicas

1. Cite três tags HTML básicas e explique o propósito de cada uma delas. Dê exemplos de situações em que você as usaria ao construir uma página web.

    Três tags básicas que podem ser citadas são: as tags de cabeçalho de texto <code>h1</code>, <code>h2</code> e que seguem até <code>h6</code>; a tag <code>p</code> para estruturar parágrafos; a tag <code>div</code> que é uma tag genérica para criar estrutura de caixas e blocos.

2. Além das tags mencionadas, qual é a importância das tags de listagem, como <code>ul</code> e <code>ol</code>, no contexto da estruturação de conteúdo em uma página? Dê exemplos de quando você escolheria uma sobre a outra. 

    As tags <code>ul</code> e <code>ol</code> são tags que criam listas não ordenadas ordenadas, respectivamente. Dentro de cada tag são inseridas tags <code>li</code> (list item); As listas são importantes pois são comumente usadas para a estruturação de menus ou barras de navegação. Usualmente, a tag <code>ul</code> é utilizada na construção de menus, enquanto a tag <code>ol</code> é utilizada com seu objetivo inicial de ordenar itens de uma lista.

## Vinculando páginas, arquivos e âncoras

1. Como a tag <code>a</code> é utilizada para criar links em HTML? Explique como você pode vincular para outras páginas, para arquivos locais e criar âncoras dentro de uma página.

    A tag <code>a</code> (anchor ou âncora) é utilizada para criar links, a tag possui um atributo <code>href=""</code> que especifica o destino/caminho do link ao qual o usuário será redirecionado após o clique. O conteúdo dentro da tag recebe um destaque visual de cor para quando for clicado ou não e de sublinhado. A tag pode ser usada dentro de outras tags de texto ou de listas, por exemplo.

    - **Para vincular páginas externas** - basta inserir a URL da página para qual será direcionada dentro das aspas no atributo <code>href=""</code>;
    - **Para vincular arquivos locais** - basta inserir dentro do atributo <code>href=""</code> o caminho do arquivo dentro do projeto ou diretório seguido da especificação do nome do arquivo e sua extensão;
    - **Para criar âncoras dentro de uma página** - primeiro é preciso criar um atributo <code>id=""</code> na tag escolhida para receber a âncora, depois basta adicionar o <code>id</code> dentro do atributo <code>href</code> precedido de uma hashtag <code>href="#seu-id"</code>. 

2. Além do atributo href, quais outros atributos importantes a tag <code>a</code> pode ter? Como o atributo target pode ser usado para controlar como o link é aberto pelo navegador?

    Além do atributo <code>href=""</code> a tag <code>a</code> possui mais 6 atributos, são eles:

    - <code>download</code> - Faz o salvamento do recurso/URL sem precisar navegar até ele;


        - Modo de uso:
    <code>
    <br>
    ```<a href="documento.pdf" download > Baixar documento PDF </a>```
    </code>
    

    - <code>hreflang</code> - indica o idioma do recurso/URL para ajudar nos motores de busca;
    

        - Modo de uso:
    <code>
    <br>
    ```<a href="https://example.com/pt-br/" hreflang="pt-br">Versão em português do Brasil</a>```
    </code>
    
    - <code>ping</code> - Define uma lista de URLs separados por espaço;
    

        - Modo de uso:
    <code>
    <br>
    ```<a href="https://example.com" ping="https://tracker.example.com/ping?event=click">Clique aqui</a>```
    </code>

    - <code>referrerpolicy</code> - Controla como a política de referência é aplicada ao fazer solicitações do link;
    

        - Modo de uso:
    <code>
    <br>
    ```<a href="https://example.com" referrerpolicy="no-referrer">Clique aqui</a>```
    </code>
    
    - <code>rel</code> - Define a relação entre o documento atual e o documento vinculado, possui os valores: nofollow, noopener, noreferrer, noopener noreferrer, alternate, canonical, stylesheet, prev e next, author, license;
    

        - Modo de uso:
    <code>
    <br>
    ```<a href="https://example.com" rel="nofollow">Link</a>```
    <br>
    ```<link rel="stylesheet" href="styles.css">```
    </code>

    Por último temos o atributo <code>target</code> que define **onde o link será aberto**, este atributo possui os seguintes valores: 
    
    - <code>_self</code> - que abre o link na mesma aba; 
    - <code>_blank</code> - que abre o link em outra aba; 
    - <code>_parent</code> - que abre o link no contexto do pai (frame); 
    - <code>_top</code> - que abre o link na janela inteira, substituindo qualquer frame; 
    

    Podemos, por exemplo, usar o atributo ```target``` com o valor ```_blank``` da seguinte forma dentro da tag:
    <code>
    <br>
    ```<a href="https://example.com" target="_blank">Abrir em uma nova aba</a>```
    </code>

## Incorporando imagens e mídias

1. Descreva a diferença entre os atributos src e alt em relação à tag ```<img>```. Por que é importante fornecer um atributo alt adequado para imagens?
    
    A tag ```img``` possui muitos atribuitos, mas são mais comumente usados os atributos ```src``` e o ```alt```. O atributo **src** define ou especifica o caminho para o arquivo da imagem, enquato que o atributo **alt** é um atributo que fornece um texto alternativo para descrever a imagem. A importânica do atributo ```alt``` está em proporcionar uma melhor acessibilidade para as páginas web.

2. Além de imagens, quais outros tipos de mídia podem ser incorporados em uma página HTML? Como você pode garantir que a mídia incorporada seja responsiva e se ajuste bem em diferentes dispositivos?

    Além das imagens podem ser incorporados ao corpo de um documentos html os seguintes tipos de mídia:

    - Vídeo por meio da tag ```<video></video>```;
    - Áudio por meio da tag ```<audio></audio>```;
    - Aplicações interativas por meio da tag ```<iframe></iframe>```;
    - Animações SVG por meio da tag ```<svg></svg>```;
    - Conteúdo imbutido por meio da tag ```<embed>```;
    - Objetos (genérico) por meio da tag ```<object></object>```.

    Para tornar esses tipos de mídia e imagens resposívos é preciso definir tamanhos e dimensões como valores que se adequem automaticamente ao dispositivo que está sendo utilizando no momento. Pode-se aplicar uma altura automática com o ```height: auto;``` e também, por exemplo, especificar uma largura total com o ```max-width: 100%``` dentro do atributo **sizes** da tag **img**. Além de também verificar a compatibilidade das tags de mídia com os disposivos e navegadores utilizados.

## Criando tabelas básicas

1. Quais são as principais tags usadas para criar tabelas em HTML? Explique a diferença entre as tags ```<th>``` e ```<td>```, e quando você as usaria.

    A principal tag usada para criar tabelas em html é a tag ```<table></table>```, ela é responsável por criar a estrutura que suportará toda a tabela. Usuamente tabelas possuem uma lógica de construção, temos o cabeçalho onde irão os nomes das colunas, o corpo onde irão os dados da tabela e o rodapé que pode ser usado para sumarização dos dados de uma tabela, por exemplo.

    Por isso, as tabelas exigem uma semântica que indica cada parte da tabela. Para criar um cabeçalo é preciso usar a tag ```<thead></thead>``` que significa table head (cabeçalho da tabela) e dentro dela podemos usar a tag ```<tr></tr>``` que siginifica table row e que cria uma linha da tabela e dentro dela usar a tag ```<th></th>``` que cria uma célula de cabeçalho na tabela.

    Para criar o corpo onde irão os dados precisamos usar a tag ```<tbody></tbody>``` que significa table body (corpo da tabela). Dentro dela criar uma tag ```<tr></tr>``` para criar uma linha da tabela e usamos a tag ```<td></td>``` que cria uma célula de dados no corpo da tabela.

    A diferença entre entre as tags ```<th></th>``` e ```<td></td>``` está na função de cada uma, enquanto a **th** é usada para criar uma célula de cabeçalho da tabela a **td** é usada para criar uma célula de dados no corpo da tabela.

    Por último está o rodapé da tabela, usamos a tag ```<tfoot></tfoot>``` e dentro dela usamos as tags ```<tr></tr>``` e ```<td></td>``` para criar uma linha e inserir uma célula de dados.

2. Embora tabelas sejam usadas para exibir dados tabulares, às vezes é recomendado evitá-las em favor de outras formas de apresentação de dados. Por quê? E quais são os cenários em que as tabelas são apropriadas?

    As tabelas, em alguns casos,  devem ser evitadas, pois, podem prejudicar a acessibilidade e leitura em dispositivos móveis, o design responsivo, podem causar problemas semânticos e de estrutura e problemas de manutenção e flexibilidade. As tabelas devem ser usada para exibir dados, planilhas, relatórios ou realizar comparações de entre items. Ou seja, **devem ser usadas basicamente para a exibição de dados e não devem ser usadas para construção de estrutura e layout**.

## Criando formulários

1. Como a tag ```<form>``` é utilizada para criar formulários em HTML? Cite pelo menos três tipos diferentes de campos de entrada (```<input>```) que podem ser usados em um formulário.

    A tag ```<form></form>``` é usada para criar formulários que são capazes de coletar dados. A tag é um container que engloba todos os tipos de entrada de dados. A tag tem dois atributos principais o atributo ```action``` que recebe a URL para onde os dados serão encaminhados e o atributo ```method``` que especifica o método HTTP que será usado para encaminhar os dados.

    Os campos de entrada (inputs) são declarados por meio de duas tags principais: a ```<lable></lable>``` e a tag ```<input>```. A tag input recebe um atributo ```type=""``` que permite a criação dos seguintes tipos de entrada: text (texto), password (senha), email. Exemplo de criação de formulário e uso de tipos de entrada:
    <code>
    ```
    <form action="/submit" method="post">
    <label for="username">Nome de Usuário:</label>
    <input type="text" id="username" name="username" placeholder="Digite seu nome de usuário" required><br><br>

    <label for="password">Senha:</label>
    <input type="password" id="password" name="password" placeholder="Digite sua senha" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="Digite seu email" required><br><br>

    <label for="country">País:</label>
    <select id="country" name="country" required>
      <option value="br">Brasil</option>
      <option value="us">Estados Unidos</option>
      <option value="uk">Reino Unido</option>
    </select><br><br>

    <label>Gênero:</label>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Masculino</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Feminino</label><br><br>

    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">Inscrever-se na newsletter</label><br><br>

    <label for="comments">Comentários:</label><br>
    <textarea id="comments" name="comments" rows="4" cols="50" placeholder="Digite seus comentários aqui"></textarea><br><br>

    <label for="fileUpload">Carregar Arquivo:</label>
    <input type="file" id="fileUpload" name="fileUpload"><br><br>

    <button type="submit">Enviar</button>
    </form>
    ```
    </code>

2. Além dos campos de entrada, quais outros elementos podem ser incluídos em um formulário para melhorar a usabilidade e a experiência do usuário?

    Para melhorar a experiência e usabilidade dos formulários é importantes incluir mensagens de **ajuda e validação** para informar ao usuário sobre erros específicos de validação ou campos obrigatórios, **rótulos e instruções** para associar textos descritivos aos campos de entrada, **grupos de campos e legendas** (fieldset e legend) para criar grupos de entrada semelhantes e atribuir legendas para descrição desses grupos, utilização de **placeholders** para indicar que tipo de entrada ou informação é aceito por aquele campo e os **atributos ARIA** que fornecem informações adicionais para melhorar a acessibilidade e usabilidade dos campos. Os atributos ARIA fornecem informações sobre os papéis (roles) para indicar o tipo ou a função do elemento, estados e propriedades (States and Properties) do elemento e relacionamentos, explicando como esses elementos estão relacionados.

## Técnicas avançadas de estruturação com elementos HTML5 semânticos

1. O que são elementos HTML5 semânticos e por que são importantes na estruturação de uma página? Cite três exemplos de elementos semânticos e explique quando você os usaria.

    As tags semânticas do HTML5 são responsáveis por especificar e descrever a estrutura e o propósito de uma parte da página. As tags semânticas organizam o código HTML5 informando a qual parte da estrutura do layout pertencem. Os principais elementos semânticos do HTML5 são: header, nav, main, section, article,aside e footer. 

    A tag **header** é usada para criar o cabeçalho da página e normalmente é utilizada para englobar o log da página e a barra de navegação que pode ser construída dentro da tag **nav**. A tag **main** é usada para criar/definir a estrutura do corpo da página, as tags **section**, **article** e **aside** são usadas dentro da **main** para criar elementos como postagens e barras laterais. A tag **footer** é usada para criar o rodapé da página.

2. Além da semântica, como os elementos HTML5 podem afetar a acessibilidade das páginas web? Por que é fundamental considerar a acessibilidade ao escolher elementos de estruturação?

    Os elementos HTML5 afetam a acessibilidade das páginas web no intuito de melhorar a compreensão da estrutura da página, a navegação, a indicação do contexto e a inserção de descrição. Todos esses elementos auxiliar na acessibilidade visto que definem estritamente o que são e como navegar em cada parte da página.