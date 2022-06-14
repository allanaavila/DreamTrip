let agencia = { 
    pacotes: [
        {
            codigo: Number = 1,
            nome: String = "São Bento do Sapucaí, Brasil",
            valor: Number = 1736.0,
            avaliacao:Number = 4.87,
            categoria: ["Cabanas", "Pacotes", "Hoteis", "Passagens"],
            pais: String = "Brasil",
            taxaLimpeza: Number = 80.0,
            taxaEmbarque: Number = 400.0,
            foto: String = "./img/cabanas/img1.png",
            fotos: String = ["./img/cabanas/img2.png", "./img/cabanas/img3.png", "./img/cabanas/img4.png", "./img/cabanas/img5.png"],
            link: String = "https://www.youtube.com/watch?v=60pK0VWLJOI",
        },
        {
            codigo: 2,
            nome: "Tônio, Finlândia",
            valor: 412.00,
            avaliacao: 5.0,
            categoria: ["Ártico","Pacotes","Hoteis", "Passagens"], 
            pais: "Finlândia",
            taxaLimpeza: 90.0,
            taxaEmbarque: 400.0,
            foto: "./img/articos/img1.png",
            fotos: ["./img/articos/img2.png", "./img/articos/img3.png", "./img/articos/img4.png", "./img/articos/img5.png"],
            link:  "https://www.youtube.com/watch?v=G3F_kiDxgC8",
        },
        {
            codigo: 3,
            nome: "Ubatuba, Brasil",
            valor: 230.0,
            avaliacao: 4.97,
            categoria: ["Barcos","Tropicais","Praias", "Passagens", "Museus", "Pacotes"], 
            pais: "Brasil",
            taxaLimpeza: 120.0,
            taxaEmbarque: 300.0,
            foto: "./img/barcos/img1.png",
            fotos: ["./img/barcos/img2.png", "./img/barcos/img3.png","./img/barcos/img4.png", "./img/barcos/img5.png"],
            link:  "https://www.youtube.com/watch?v=PpszCVk8tt0",
        },
        {
            codigo: 4,
            nome: "Cidade de Taitung, Taiwan",
            valor: 941.0,
            avaliacao: 4.88,
            categoria: ["Hoteis","Pacotes","Praias", "Passagens"], 
            pais: "Taiwan",
            taxaLimpeza: 100.0,
            taxaEmbarque: 400.0,
            foto: "./img/hoteis/img1.png",
            fotos: ["./img/hoteis/img2.png", "./img/hoteis/img3.png","./img/hoteis/img4.png", "./img/hoteis/img5.png"],
            link:  "https://www.youtube.com/watch?v=Xiw9yIp8p20",
        },  
        {
            codigo: 5,
            nome: "Huasca de Ocampo, México",
            valor: 559.0,
            avaliacao: 4.87,
            categoria: ["Casas","Pacotes","Passeios", "Passagens", "Museus"], 
            pais: "México",
            taxaLimpeza: 90.0,
            taxaEmbarque: 300.0,
            foto: "./img/casas/img1.png",
            fotos: ["./img/casas/img2.png", "./img/casas/img3.png","./img/casas/img4.png", "./img/casas/img5.png"],
            link: "https://www.youtube.com/watch?v=MC4GI3_pBjI",
        },
        {
            codigo: 6,
            nome: "Dominical, Costa Rica",
            valor: 5765.0,
            avaliacao: 5.0,
            categoria: ["Tropicais","Pacotes","Hoteis", "Passagens"], 
            pais: "Costa Rica",
            taxaLimpeza: 90.0,
            taxaEmbarque: 300.0,
            foto: "./img/tropicais/img1.png",
            fotos: ["./img/tropicais/img2.png", "./img/tropicais/img3.png","./img/tropicais/img4.png", "./img/tropicais/img5.png"],
            link: "https://www.youtube.com/watch?v=C7NDSu2luR8",
        },
        {
            codigo: 7,
            nome: "São Vicente, Brasil",
            valor: 358.0,
            avaliacao: 4.96,
            categoria: ["Praias","Pacotes","Barcos", "Passagens"], 
            pais: "Brasil",
            taxaLimpeza: 120.0,
            taxaEmbarque: 160.0,
            foto: "./img/praias/img1.png",
            fotos: ["./img/praias/img2.png", "./img/praias/img3.png","./img/praias/img4.png", "./img/praias/img5.png"],
            link: "https://www.youtube.com/watch?v=yfiKNyfu_OQ",
        },
        {
            codigo: 8,
            nome: "Provincia de Cartagena, Colômbia",
            valor: 12221.0,
            avaliacao: 5.0,
            categoria: ["Ilhas","Passeios","Praias", "Passagens", "Pacotes"], 
            pais: "Colômbia",
            taxaLimpeza: 200.0,
            taxaEmbarque: 600.0,
            foto: "./img/ilhas/img1.png",
            fotos: ["./img/ilhas/img2.png", "./img/ilhas/img3.png","./img/ilhas/img4.png", "./img/ilhas/img5.png"],
            link: "https://www.youtube.com/watch?v=F8aMRvqq-Qs",
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
