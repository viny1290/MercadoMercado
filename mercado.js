const codigo = document.querySelector("[data-areaPesquisa = 'codigo']")
const pesquisar = document.querySelector("[data-areaPesquisa = 'pesquisar']")

const areaTotal = document.querySelector("[data-compra='total']")
const lista = document.querySelector("[data-compra='lista']")
const areaImg = document.querySelector("[data-compra='img']")

var total = 0

areaTotal.innerHTML = total

const produtos = [
    banana = {
        codigo: 1,
        nome: 'Banana',
        preco: 2.69,
        img: "img/banana.jpg"
    },

    maça = {
        codigo: 2,
        nome: 'Maça',
        preco: 15.69,
        img: "img/maca.jpg"
    },

    leite = {
        codigo: 3,
        nome: 'Leite',
        preco: 9,
        img: "img/leite.jpg"
    },

    arroz = {
        codigo: 4,
        nome: 'Arroz',
        preco: 19.49,
        img: "img/arroz.jpg"
    },

    suco = {
        codigo: 5,
        nome: 'Suco',
        preco: 12.59,
        img: "img/suco.jpg"
    },

    bolacha = {
        codigo: 6,
        nome: 'Bolacha',
        preco: 2.50,
        img: "img/bolacha.jpg"
    },

    feijao = {
        codigo: 7,
        nome: 'Feijão',
        preco: 8.99,
        img: "img/feijao.jpg"
    },

    feijaoPreto = {
        codigo: 8,
        nome: 'Feijão preto',
        preco: 7.89,
        img: "img/feijaoPreto.jpg"
    },

    macarrao = {
        codigo: 9,
        nome: 'Macarrão',
        preco: 5.99,
        img: "img/macarrao.jpg"
    },

    papel = {
        codigo: 10,
        nome: 'Papel Higiênico',
        preco: 12.49,
        img: "img/papel.jpg"
    }
]

const carrinho = []

function totalDeProdutos(produto) {

    let codigo = produto.codigo

    for(let i = 0; i < carrinho.length; i++) {

        if(codigo == carrinho[i].codigo) {
            
            for(let i = 0; i < produtos.length; i++) {

                if(codigo == produtos[i].codigo) {

                    total = total + produtos[i].preco
                    areaTotal.innerHTML = total.toFixed(2)

                }

            }

        }

    }

}


function somaProdutos(produto) {

    let nome = produto.nome
    let componente = document.getElementById(nome)
    let numero = parseInt(document.getElementById(nome).innerHTML)
    let soma = "<p class='area--produtos__quantidade' id" + "=" + '"' + nome + '"' + ">" + (numero + 1) + "</p>"

    componente.outerHTML = soma

    for(let i = 0; i < carrinho.length; i++) {

        if(produto.codigo == carrinho[i].codigo) {
            carrinho[i].quantidade++
        }

    }

}


function existeProduto(elemento) {

    let existe = false

    for(let i = 0; i < carrinho.length; i++) {

        if(elemento == carrinho[i].codigo) {
            
            existe = true
            return existe

        }

    }

}

function criaElemento(item) {

    if(existeProduto(item.codigo) == true) {

        somaProdutos(item)
        totalDeProdutos(item)

    }else {

        let elemento = {
            codigo: item.codigo,
            quantidade: 1
        }
        
        let nome = item.nome
        let preco = item.preco
        let itemAtual = elemento
        
        carrinho.push(itemAtual)
        
        let produto = "<li class = 'area--produtos__item'>" + (nome + ("<p class='area--produtos__preco'>" + "Preço: R$" + preco +"</p>") + "<p class='area--produtos__texto'>Quantidade:</p>" +"<p class='area--produtos__quantidade' id" + "=" + '"' + nome + '"' + ">" + 1 + "</p>") + "</li>"
        
        lista.innerHTML += produto

        totalDeProdutos(elemento)

    }

}

function mostrarImg(item) {

    areaImg.src = item.img

}

pesquisar.addEventListener("click", ()=> {

    for(let i = 0; i < produtos.length; i++) {

        if(codigo.value == produtos[i].codigo) {
            
            itemAtual = produtos[i]

            criaElemento(itemAtual)
            mostrarImg(itemAtual)

        }

    }

})