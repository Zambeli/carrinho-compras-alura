let totalGeral = 0

function adicionar () {
    //recuperar valores nome do produto, quantidade e valor

    let produto = document.getElementById('produto').value
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value
    const valorTotal = document.querySelector('#valor-total')
    let preco = quantidade * valorUnitario;


    //calcular o preço, o nosso subtotal

        precoCarrinho = valorTotal.innerHTML.split('R$')[1]
        const total = parseInt(precoCarrinho) + preco
        valorTotal.innerHTML = `R$${total}`
    
    //adicionar no carrinho
        let carrinho = document.getElementById('lista-produtos')
        carrinho.innerHTML = carrinho.innerHTML + 
        `
        <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
        </section>
        `
    //atualizar o valor total

}

function limpar () {

    const valorTotal = document.querySelector('#valor-total');
        valorTotal.innerHTML = `R$0`;


    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =  `
        <section class="carrinho__produtos__produto"></section>
    `;
    
}