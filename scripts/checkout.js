window.addEventListener('load', function(){
    montarTela();

    let calcNoites = this.document.querySelector('#noites');
    calcNoites.addEventListener('change', function(){
        montarTela();
    });

    let calcHospedes = this.document.querySelector('#hospede');
    calcHospedes.addEventListener('change', function(){
        montarTela();
    });

    let calcParcelamento = this.document.querySelector('#parcelar');
    calcParcelamento.addEventListener('change', function(){
        montarTela();
    })
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

    let imagem2 = this.document.querySelector('#foto2');
    imagem2.src = pacote.fotos[0];

    let imagem3 = this.document.querySelector('#foto3');
    imagem3.src = pacote.fotos[1];

    let imagem4 = this.document.querySelector('#foto4');
    imagem4.src = pacote.fotos[2];

    let imagem5 = this.document.querySelector('#foto5');
    imagem5.src = pacote.fotos[3];

    let tituloPacote = this.document.querySelector('#nomePacote');
    tituloPacote.innerHTML = pacote.nome;

    let precoPacote = this.document.querySelector('#valorPacote');
    precoPacote.innerHTML = 'R$ ' +  pacote.valor.toFixed(2) + ' / noite';

    let taxaLim = this.document.querySelector('#taxaLimp');
    taxaLim.innerHTML = 'R$ ' + pacote.taxaLimpeza.toFixed(2);

    let taxaEmbarq = this.document.querySelector('#taxaEmb');
    taxaEmbarq.innerHTML = 'R$ ' + pacote.taxaEmbarque.toFixed(2);

    let totalHospedes = this.document.querySelector('#hospede option:checked').value;
    //console.log(totalHospedes);

    let totalNoites = this.document.querySelector('#noites option:checked').value;
    //console.log(totalNoites);

    let calcTotalHospedes = (pacote.valor * totalHospedes);

    let calcTotalNoites = (calcTotalHospedes * totalNoites);

    let calcHospNoites = calcTotalNoites;
    
    let calculoValorTotal = calcHospNoites + pacote.taxaLimpeza + pacote.taxaEmbarque;

    let valorTotal = this.document.querySelector('#valorTotal');
    valorTotal.innerHTML = 'R$ ' + calculoValorTotal.toFixed(2);

    let totalParcelas = this.document.querySelector('#parcelar option:checked').value;

    let calcParcelamentoFinal = calculoValorTotal / totalParcelas;

    let valorFinalParcelas = this.document.querySelector('#valorParceladoFinal');
    valorFinalParcelas.innerHTML = 'R$ ' + calcParcelamentoFinal.toFixed(2);
}
