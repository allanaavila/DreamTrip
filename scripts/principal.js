let agencia = { 
    pacotes: [
        {
            nome: String = "São Bento do Sapucaí, Brasil",
            valor: Number = 1736.0,
            avaliacao:Number = 4.87,
            categoria: ["Cabana", "Pacotes", "Hoteis"],
            pais: String = "Brasil",
            taxaLimpeza: Number = 80.0,
            taxaEmbarque: Number = 400.0,
            foto: String = "./img/cabanas/img1.png",
        },
        {
            nome: "Tônio, Finlândia",
            valor: 412.00,
            avaliacao: 5.0,
            categoria: ["Ártico","Pacotes","Hoteis"], 
            pais: "Finlândia",
            taxaLimpeza: 90.0,
            taxaEmbarque: 400.0,
            foto: "./img/articos/img1.png",
        },
        {
            nome: "Ubatuba, Brasil",
            valor: 230.0,
            avaliacao: 4.97,
            categoria: ["Praias","Tropicais","Hoteis"], 
            pais: "Brasil",
            taxaLimpeza: 120.0,
            taxaEmbarque: 300.0,
            foto: "./img/barcos/img1.png",
        },
        {
            nome: "Cidade de Taitung, Taiwan",
            valor: 941.0,
            avaliacao: 4.88,
            categoria: ["Hoteis","Pacotes","Praias"], 
            pais: "Taiwan",
            taxaLimpeza: 100.0,
            taxaEmbarque: 400.0,
            foto: "./img/hoteis/img1.png",
        },
        {
            nome: "Huasca de Ocampo, México",
            valor: 559.0,
            avaliacao: 4.87,
            categoria: ["Passeios","Pacotes","Praias"], 
            pais: "México",
            taxaLimpeza: 90.0,
            taxaEmbarque: 300.0,
            foto: "./img/casas/img1.png",
        },
        {
            nome: "Dominical, Costa Rica",
            valor: 5765.0,
            avaliacao: 5.0,
            categoria: ["Museus","Pacotes","Hoteis"], 
            pais: "Costa Rica",
            taxaLimpeza: 90.0,
            taxaEmbarque: 300.0,
            foto: "./img/tropicais/img1.png",
        },
        {
            nome: "São Vicente, Brasil",
            valor: 358.0,
            avaliacao: 4.96,
            categoria: ["Praias","Pacotes","Barcos"], 
            pais: "Brasil",
            taxaLimpeza: 120.0,
            taxaEmbarque: 160.0,
            foto: "./img/praias/img1.png",
        },
        {
            nome: "Provincia de Cartagena, Colômbia",
            valor: 12221.0,
            avaliacao: 5.0,
            categoria: ["Tropicais","Passeios","Praias"], 
            pais: "Colômbia",
            taxaLimpeza: 200.0,
            taxaEmbarque: 600.0,
            foto: "./img/ilhas/img1.png",
        },
    ],
    retornarTodosPacotes: function() {
        let retornoPacotes = [];

        for(let i = 0; i < this.pacotes.length; i++)
        {
            retornoPacotes.push(this.pacotes[i]);
        }

        return retornoPacotes;
    },
    retornarPacotesPorCategoria: function(nomeCategoria)
    {
        let retornoCategoria = [];

        for(let i = 0; i < this.pacotes.length; i++)
        {
            for(let j = 0; j < this.pacotes[i].categoria.length; j++)
            {
                if(this.pacotes[i].categoria[j] == nomeCategoria)
                {
                    retornoCategoria.push(this.pacotes[i]);
                    break;
                }
            }
        }

        return retornoCategoria;
    },
    retornarPacotesPorValorMaximo: function(valorMaximo)
    {
        let retornoValorMaximo = [];

        for(let i = 0; i < this.pacotes.length; i++)
        {
            if(this.pacotes[i].valor < valorMaximo)
            {
                retornoValorMaximo.push(this.pacotes[i]);
            }
        }
        return retornoValorMaximo;
    },
    retornarPacotesPorAvaliacao: function(notaMinima)
    {
        let retornoAvaliacao = [];

        for(let i = 0; i < this.pacotes.length; i++)
        {
            if(this.pacotes[i].avaliacao >= notaMinima)
            {
                retornoAvaliacao.push(this.pacotes[i]);
            }
        }
        return retornoAvaliacao;
    },
    retornarValorDoImposto: function()
    {
        let retornoImposto = [];

        for(let i = 0; i < this.pacotes.length; i++)
        {
            let pacote = this.pacotes[i];
            
            pacote.imposto = pacote.valor * 0.10;
            retornoImposto.push(pacote);
        }
        return retornoImposto;
    },
};

window.addEventListener("load", function () {

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
