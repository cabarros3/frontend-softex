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

