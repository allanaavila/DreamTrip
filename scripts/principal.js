
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
});

function montarTelaPorCategoria(nomeCategoria) 
{
    let divCards = this.document.querySelector('#div-cards');
    divCards.innerHTML = '';

    let todosPacotes = agencia.retornarPacotesPorCategoria(nomeCategoria);
    
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
}
