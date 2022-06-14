window.addEventListener('load', function(){
    montarTela();

    let calcNoites = this.document.querySelector('#noites');
    calcNoites.addEventListener('change', function(){
        montarTela();
    });
});

function montarTela()
{
    let codigo = window.location.search.substring(1).split('=')[1];
    // window.location.search.substring(1)               => codigo=1
    //window.location.search.substring(1).split('=')     => [0]=codigo [1]1
    //console.log(codigo);

    let pacote = agencia.retornarPacotePorCodigo(codigo);
   // console.log(pacote);


   let imagemFotoPrincipal = this.document.querySelector('#fotoPrincipal');
   imagemFotoPrincipal.src = pacote.foto;

    let tituloPacote = this.document.querySelector('#nomePacote');
    tituloPacote.innerHTML = pacote.nome;

    let precoPacote = this.document.querySelector('#valorPacote');
    precoPacote.innerHTML = 'R$ ' +  pacote.valor.toFixed(2) + ' / noite';

    let taxaLim = this.document.querySelector('#taxaLimp');
    taxaLim.innerHTML = 'R$ ' + pacote.taxaLimpeza.toFixed(2);

    let taxaEmbarq = this.document.querySelector('#taxaEmb');
    taxaEmbarq.innerHTML = 'R$ ' + pacote.taxaEmbarque.toFixed(2);

    let totalNoites = this.document.querySelector('#noites option:checked').value;
    //console.log(totalNoites);

    let calculoValorTotal = (pacote.valor * totalNoites)  + pacote.taxaLimpeza + pacote.taxaEmbarque;

    let valorTotal = this.document.querySelector('#valorTotal');
    valorTotal.innerHTML = 'R$ ' + calculoValorTotal.toFixed(2);
}
