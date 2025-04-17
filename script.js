import { data } from "./data.js"
console.log(data.items,"items")
 let carrinho = []

function openCarrinho(){
    const button = document.querySelector(".carrrinhobtn")
    button.addEventListener("click",()=>{
        console.log("carrinho")
        const ulcart = document.querySelector(".cartul")
console.log(ulcart,"ulcart")
        if(ulcart){
            ulcart.remove()
        }else{
            montarCarrinho()
        }
    })
}
openCarrinho()

// const carrinho = []
function montarProdutos(){
    const ul = document.querySelector("ul")
    data.items.forEach((produto)=>{
    
        ul.insertAdjacentHTML("beforeend",`
             <li>
              <img class="img"src="${produto.product.images[0]}" >
                <div class="infos">
                <p class="title">${produto.product.name}</p>
                <p class="precoavista"> A VISTA R$ 
                   <span class="spanavista">
                 ${produto.product.price.value}
                   </span> 
                 </p>
                <p class="precoavista">  EM 10x SEM JUROS DE R$ 
                    <span class="spanavista">
                        ${produto.product.price.installmentValue}
                    </span>
                </p>
                <button class="adicionar" id="${produto.product.id}add">Adicionar ao carrinho</button>
                </div>
            </li>
             
            `)
        const button = document.getElementById(`${produto.product.id}add`)
        button.addEventListener("click",()=>{
            console.log("click",produto)
            carrinho.push(produto)
            // montarCarrinho(carrinho)
        })
    })
}
montarProdutos()
function montarCarrinho(){
    const header = document.querySelector("header")
            header.insertAdjacentHTML("beforeend",`
                <ul class="cartul"></ul>
                `)
                
    const ul = document.querySelector(".cartul")
    ul.innerHTML = ""
    carrinho.forEach((produto)=>{
        console.log(produto,"produto cart")
        ul.insertAdjacentHTML("afterbegin",`
            <li>
                <img class="img"src="${produto.product.images[0]}" >
                <div class="infos">
                <p class="title">${produto.product.name}</p>
                <p class="precoavista"> A VISTA R$ 
                   <span class="spanavista">
                 ${produto.product.price.value}
                   </span> 
                 </p>
                <p class="precoavista">  EM 10x SEM JUROS DE R$ 
                    <span class="spanavista">
                        ${produto.product.price.installmentValue}
                    </span>
                </p>
               <button id="${produto.product.id}cancel">Remover ao carrinho</button>
           </li>
           `)
           const button = document.getElementById(`${produto.product.id}cancel`)
           button.addEventListener("click",(e)=>{
            console.log(e,"event")
            removerItemDoCarrinho(produto)
           })
    })
    
}
// montarCarrinho()
function removerItemDoCarrinho(produto){
    console.log(produto,"produto")
    const index = carrinho.findIndex((cart)=>{
        return cart.id === produto.id
    })
    carrinho.splice(index,1)
    montarCarrinho(carrinho)
}