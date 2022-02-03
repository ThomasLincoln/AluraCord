# Anotações

* Estilos feitos em um elemento, irão ficar apenas nele, com isso facilita a vida de não ter que ficar dando nome para as coisas.

* Usamos skynex

## Coisas para fazer e pesquisar

* Rever os conteúdos da aula
* Desafios


## Skynex ui

É como se fosse uma framework de react, ela tem elementos pré programados, como caixas, textos, botões e icones.

Ela foi criada pelo mario souto.

Mais informações no repositório github: https://github.com/skynexui/components

Inclusive o story book é uma biblioteca live de elementos do skynex ui, é possível ver mais no link: https://storybook.skynexui.dev/?path=/story/components-box--box-component&args=tag:div

## Next.js

O next.js assim como o skynexui é uma framework para react, facilitando muitas coisas no react.

O next permite que o site seja mais perfomático, com a questão de indexação que ele tem, por meio de router.

Outra funcionalidade do next, é fazer com que as ferramentas de busca não ignorem sites feitos em react. Assim, consertando esse problema do react que é não aparecer em ferramentas de busca.

O next permite adcionar typescript no projeto react.

Uma coisa é que a pasta pages não pode ter outro nome, pois é por meio dela que o next irá fazer a busca por páginas.

E existem praticidades em relação a APIs

## SPA - Single Page Application

Uma SPA, é um site onde o core do site é carregado apenas uma vez e o resto é carregado por demanda. Criando um site mais perfomático.

O problema é que uma aplicação SPA por si só não é detectada nos motores de busca como google.


# Funções React

## useState

O useState é uma função para alterar o valor de uma variável em poucas palavras. 
se usa da seguinte forma

```Js
const [variavel, setVariavel] = React.useState('valorinicial')
```

Aqui criamos algo como array, onde a primeira variavel chamada de 'variavel' é o valor que será alterado. E a segunda chamada 'setVariavel' é a função usada para mudar o valor.

Se modifica usando:

``` Js
    setVariavel(valor);
```

É possível usar essa função dentro de onClicks, onChanges e outros.

## useRouter

O useRouter é uma função usada para fazer a linkagem de páginas, com ele é possivel trocar de página sem load.

Para usar ele, primeiro é necessário fazer o import.

``` Js
    import { useRouter} from 'next/router'
```

E depois o chamar em uma variável

``` Js
    const router = useRouter();
```

Assim, podemos usar ele, em funções como onClick, onChange e etc...

Usa-se da seguinte forma

```Js
    onClick={() => router.push('/pagina_destino')}
```

## onChange 

O onChange é uma função usada para detectar mudanças em um objeto, e quando detectada,executa uma função.

## onSubmit

O onSubmit é uma usado para detectar quando um formulario foi enviado, e caso seja, executa uma função.
