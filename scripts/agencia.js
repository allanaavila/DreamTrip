let agencia = { 
    pacotes: [
        {
            codigo: Number = 1,
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
            codigo: 2,
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
            codigo: 3,
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
            codigo: 4,
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
            codigo: 5,
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
            codigo: 6,
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
            codigo: 7,
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
            codigo: 8,
            nome: "Provincia de Cartagena, Colômbia",
            valor: 12221.0,
            avaliacao: 5.0,
            categoria: ["Tropicais","Passeios","Praias"], 
            pais: "Colômbia",
            taxaLimpeza: 200.0,
            taxaEmbarque: 600.0,
            foto: "./img/ilhas/img1.png",
        },
        {
            codigo: 9,
            nome: "Madrid, Espanha",
            valor: 15800.0,
            avaliacao: 4.8,
            categoria: ["Hoteis","Passeios","Praias"], 
            pais: "Espanha",
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
    retornarPacotePorCodigo: function(codigoPacote)
    {
        let pacote = {};

        for(let i = 0; i < this.pacotes.length; i++)
        {
            if(this.pacotes[i].codigo == codigoPacote)
            {
                pacote = this.pacotes[i];
                break;
            }
        }

        return pacote;
    },
    //retornarValorTotalDasTaxasPorCodigo
};