
window.addEventListener("load", function () {

    
    let divCards = this.document.querySelector('#div-cards');
    divCards.innerHTML = '';

    let todosPacotes = agencia.retornarTodosPacotes();
    
    for(let i = 0; i < todosPacotes.length; i++)
    {
        let card = `
            <div class="polaroid">
              <a href="checkout.html?codigo=${todosPacotes[i].codigo}">
                <img src="${todosPacotes[i].foto}" alt="" class="photo">
                <div class="caption">
                    <span class="material-icons md-18">star_half</span>${todosPacotes[i].avaliacao.toFixed(2)}
                    <h4>${todosPacotes[i].nome}</h4>
                    <p>R$ ${todosPacotes[i].valor.toFixed(2)} / noite</p>
                </div>
              </a>
            </div>
        `;

        divCards.insertAdjacentHTML('beforeend', card);
    }
    






















    /*
    let todosPacotes = agencia.retornarTodosPacotes();

    for(let i = 0; i < todosPacotes.length; i++)
    {
        console.log(todosPacotes[i].nome);
    }
    */

    /*
    let todasCategorias = agencia.retornarPacotesPorCategoria("Praias");

    for(let i = 0; i < todasCategorias.length; i++)
    {
        console.log(todasCategorias[i].nome);
    }
    */

    /*
    let todosValores = agencia.retornarPacotesPorValorMaximo(1000.00);

    for(let i = 0; i < todosValores.length; i++)
    {
        console.log(todosValores[i].nome + ' ' + todosValores[i].valor);
    }
    */

    /*
    let todasAvaliacoes = agencia.retornarPacotesPorAvaliacao(4.90);

    for(let i = 0; i < todasAvaliacoes.length; i++)
    {
        console.log(todasAvaliacoes[i].nome + ' ' + todasAvaliacoes[i].avaliacao);
    }
    */

    /*
    let todosImpostos = agencia.retornarValorDoImposto();

    for(let i = 0; i < todosImpostos.length; i++)
    {
        console.log(todosImpostos[i].valor + ' ' + todosImpostos[i].imposto.toFixed(2));
    }
    */

});
