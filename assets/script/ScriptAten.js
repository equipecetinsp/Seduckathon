document.addEventListener("DOMContentLoaded", function() {
    // Dados das GREs, municípios e escolas
    var dados = [
        { GRE: '1ª', MUNICIPIO: 'Parnaíba', ESCOLA: 'CEEP - Ministro Petrônio Portela', CONTATO: '89 99907-2929' },
        { GRE: '1ª', MUNICIPIO: 'Parnaíba', ESCOLA: 'CEMTI Lima Rebelo', CONTATO: '89 99907-2929' },
        { GRE: '1ª', MUNICIPIO: 'Parnaíba', ESCOLA: 'Colégio Liceu Parnaibano', CONTATO: '89 99907-2929' },
        { GRE: '1ª', MUNICIPIO: 'Luiz Correia', ESCOLA: 'Unidade Escolar Zulmira Xavier', CONTATO: '89 99907-2929' },
        { GRE: '1ª', MUNICIPIO: 'Cocal', ESCOLA: 'E. A. Deputado Ribeiro Magalhães', CONTATO: '89 99907-2929' },
        { GRE: '2ª', MUNICIPIO: 'Barras', ESCOLA: 'U. E. Manoel José Almeida', CONTATO: '89 99907-2929' },
        { GRE: '2ª', MUNICIPIO: 'São João do Arraial', ESCOLA: 'Esc. Fam. Agrícola dos Cocais', CONTATO: '89 99907-2929' },
        { GRE: '2ª', MUNICIPIO: 'Esperantina', ESCOLA: 'U. E. Leonardo das Dores', CONTATO: '89 99907-2929' },
        { GRE: '3ª', MUNICIPIO: 'Piracuruca', ESCOLA: 'E. Agrotécnica Prof. Antônio de Brito Fortes', CONTATO: '89 99907-2929' },
        { GRE: '3ª', MUNICIPIO: 'Piripiri', ESCOLA: 'E. Agro. Gov. Hugo Napoleão', CONTATO: '89 99907-2929' },
        { GRE: '3ª', MUNICIPIO: 'Pedro II', ESCOLA: 'Escola Agrotécnica Angelina Mendes Braga', CONTATO: '89 99907-2929' },
        { GRE: '4ª', MUNICIPIO: 'Teresina', ESCOLA: 'Escola Técnica Estadual João Mendes Olimpio de Melo', CONTATO: '89 99907-2929' },
        { GRE: '4ª', MUNICIPIO: 'Teresina', ESCOLA: 'CEFTI - Pequena Rubim', CONTATO: '89 99907-2929' },
        { GRE: '4ª', MUNICIPIO: 'Teresina', ESCOLA: 'Colégio Estadual Zacarias de Góes', CONTATO: '89 99907-2929' },
        { GRE: '4ª', MUNICIPIO: 'Teresina', ESCOLA: 'U. E. Gov. João Clímaco D´Almeida', CONTATO: '89 99907-2929' },
        { GRE: '5ª', MUNICIPIO: 'Campo Maior', ESCOLA: 'U. E. Cândido Borges Castelo Branco', CONTATO: '89 99907-2929' },
        { GRE: '5ª', MUNICIPIO: 'São Miguel do Tapuio', ESCOLA: 'CEEPRU Cônego Cardoso', CONTATO: '89 99907-2929' },
        { GRE: '6ª', MUNICIPIO: 'Regeneração', ESCOLA: 'U. E. Aurora Barbosa', CONTATO: '89 99907-2929' },
        { GRE: '6ª', MUNICIPIO: 'Regeneração', ESCOLA: 'CEEPRU Engenheiro Agrônomo Valdemar Carvalho', CONTATO: '89 99907-2929' },
        { GRE: '7ª', MUNICIPIO: 'Valença', ESCOLA: 'E. T. Santo Antonio', CONTATO: '89 99907-2929' },
        { GRE: '7ª', MUNICIPIO: 'Pimenteiras', ESCOLA: 'Unidade Escolar Antônio Gentil Dantas Sobrinho', CONTATO: '89 99907-2929' },
        { GRE: '8ª', MUNICIPIO: 'Oeiras', ESCOLA: 'CAIC Baldoíno de Deus', CONTATO: '89 99907-2929' },
        { GRE: '8ª', MUNICIPIO: 'Oeiras', ESCOLA: 'Desembargador Pedro Sá', CONTATO: '89 99907-2929' },
        { GRE: '9ª', MUNICIPIO: 'Picos', ESCOLA: 'E. T. Prof. Petrônio Portela', CONTATO: '89 99907-2929' },
        { GRE: '10ª', MUNICIPIO: 'Floriano', ESCOLA: 'E. T .E. Calisto Lobo', CONTATO: '89 99907-2929' },
        { GRE: '10ª', MUNICIPIO: 'Floriano', ESCOLA: 'Centro de Atendimento Educacional Especializado Agrônomo Parente', CONTATO: '89 99907-2929' },
        { GRE: '11ª', MUNICIPIO: 'Bertolínia', ESCOLA: 'E. A. Prof. Maria Amália', CONTATO: '89 99907-2929' },
        { GRE: '11ª', MUNICIPIO: 'Uruçuí', ESCOLA: 'Centro Estadual de Educação Profissional de Tempo Integral Maria Pires Lima', CONTATO: '89 99907-2929' },
        { GRE: '12ª', MUNICIPIO: 'São João do Piauí', ESCOLA: 'E. E. Francisco Paes Landim Neto', CONTATO: '89 99907-2929' },
        { GRE: '12ª', MUNICIPIO: 'São João do Piauí', ESCOLA: 'CEEPRU - Francisca Trindade', CONTATO: '89 99907-2929' },
        { GRE: '12ª', MUNICIPIO: 'Simplício Mendes', ESCOLA: 'E. A. Alcides Vieira de Moura', CONTATO: '89 99907-2929' },
        { GRE: '13ª', MUNICIPIO: 'São Raimundo Nonato', ESCOLA: 'E. T. Gercílio de Castro Macedo', CONTATO: '89 99907-2929' },
        { GRE: '13ª', MUNICIPIO: 'São Raimundo Nonato', ESCOLA: 'Moderna', CONTATO: '89 99907-2929' },
        { GRE: '13ª', MUNICIPIO: 'Guaribas', ESCOLA: 'Paulo Freire', CONTATO: '89 99907-2929' },
        { GRE: '14ª', MUNICIPIO: 'Colônia do Gurgueia', ESCOLA: 'Centro Estadual de Educação Profissional Rural Pe. José de Anchieta Cortez', CONTATO: '89 99907-2929' },
        { GRE: '14ª', MUNICIPIO: 'Bom Jesus', ESCOLA: 'Franklin Dória', CONTATO: '89 99907-2929' },
        { GRE: '15ª', MUNICIPIO: 'Corrente', ESCOLA: 'Centro Estadual de Educação Profissional de Tempo Integral Dr. Dionísio Rodrigues Nogueira', CONTATO: '89 99907-2929' },
        { GRE: '16ª', MUNICIPIO: 'Fronteiras', ESCOLA: 'CEEP João Martins do Rego', CONTATO: '89 99907-2929' },
        { GRE: '16ª', MUNICIPIO: 'Pio IX', ESCOLA: 'CETI Nossa Senhora do Patrocínio', CONTATO: '89 99919-3884' },
        { GRE: '16ª', MUNICIPIO: 'Pio IX', ESCOLA: 'Unidade Escolar Francisco Suassuna de Melo', CONTATO: '89 99907-2929' },
        { GRE: '17ª', MUNICIPIO: 'Paulistana', ESCOLA: 'E. E. Lucinete Santana da Silva', CONTATO: '89 99907-2929' },
        { GRE: '18ª', MUNICIPIO: 'José de Freitas', ESCOLA: 'E. Firmo José da Cunha', CONTATO: '89 99907-2929' },
        { GRE: '18ª', MUNICIPIO: 'José de Freitas', ESCOLA: 'Unidade Escolar Ferdinand Freitas', CONTATO: '89 99907-2929' },
        { GRE: '18ª', MUNICIPIO: 'União', ESCOLA: 'E. A. Manoel Otávio', CONTATO: '89 99907-2929' },
        { GRE: '18ª', MUNICIPIO: 'Altos', ESCOLA: 'Unidade Escolar Pio XII', CONTATO: '89 99907-2929' },
        { GRE: '18ª', MUNICIPIO: 'Alto Longá', ESCOLA: 'Unidade Escolar Acrísio Veras', CONTATO: '89 99907-2929' },
        { GRE: '18ª', MUNICIPIO: 'Nazária', ESCOLA: 'Unidade Escolar Hilton Leite', CONTATO: '89 99907-2929' },
        { GRE: '18ª', MUNICIPIO: 'Demerval Lobão', ESCOLA: 'CEEP - Antonieta Ribeiro', CONTATO: '89 99907-2929' },
        { GRE: '19ª', MUNICIPIO: 'Teresina', ESCOLA: 'CEEP Saúde Mons. José Luís Barbosa Cortez', CONTATO: '89 99907-2929' },
        { GRE: '19ª', MUNICIPIO: 'Teresina', ESCOLA: 'E. T. Informática Paulo Ferraz', CONTATO: '89 99907-2929' },
        { GRE: '19ª', MUNICIPIO: 'Teresina', ESCOLA: 'Pe. Joaquim Nonato', CONTATO: '89 99907-2929' },
        { GRE: '20ª', MUNICIPIO: 'Teresina', ESCOLA: 'Darcy Araújo', CONTATO: '89 99907-2929' },
        { GRE: '20ª', MUNICIPIO: 'Teresina', ESCOLA: 'E. T. Dirceu Mendes Arcoverde', CONTATO: '89 99907-2929' },
        { GRE: '20ª', MUNICIPIO: 'Teresina', ESCOLA: 'CETI Freitas Neto', CONTATO: '89 99907-2929' },
        { GRE: '20ª', MUNICIPIO: 'Teresina', ESCOLA: 'CAIC Professor Balduíno Barbosa de Deus', CONTATO: '89 99907-2929' },
        { GRE: '21ª', MUNICIPIO: 'Teresina', ESCOLA: 'CEMTI João Henrique de Sousa A. Souza', CONTATO: '89 99907-2929' },
        { GRE: '21ª', MUNICIPIO: 'Teresina', ESCOLA: 'CEFTI Duque de Caxias', CONTATO: '89 99907-2929' }
    ];

    var greSelect = document.getElementById("gre");
    var municipioSelect = document.getElementById("municipio");
    var escolaSelect = document.getElementById("escola");
    var enviarBtn = document.getElementById("enviarBtn");
    var cancelarBtn = document.getElementById("cancelarBtn");

    function popularGREs() {
        greSelect.innerHTML = "";
        var greList = [...new Set(dados.map(item => item.GRE))];
        greList.forEach(function(gre) {
            var option = document.createElement("option");
            option.text = gre;
            greSelect.add(option);
        });
        popularMunicipios();
    }

    function popularMunicipios() {
        municipioSelect.innerHTML = "";
        var municipioList = [...new Set(dados.filter(item => item.GRE === greSelect.value).map(item => item.MUNICIPIO))];
        municipioList.forEach(function(municipio) {
            var option = document.createElement("option");
            option.text = municipio;
            municipioSelect.add(option);
        });
        popularEscolas();
    }

    function popularEscolas() {
        escolaSelect.innerHTML = "";
        var escolaList = dados.filter(item => item.GRE === greSelect.value && item.MUNICIPIO === municipioSelect.value).map(item => item.ESCOLA);
        escolaList.forEach(function(escola) {
            var option = document.createElement("option");
            option.text = escola;
            escolaSelect.add(option);
        });
    }

    greSelect.addEventListener("change", function() {
        popularMunicipios();
    });

    municipioSelect.addEventListener("change", function() {
        popularEscolas();
    });
  //evento ao clica no botão
    enviarBtn.addEventListener("click", function() {
        var estudante = document.getElementById("estudante").value;
        var matricula = document.getElementById("matricula").value;
        var gre = greSelect.value;
        var municipio = municipioSelect.value;
        var escola = escolaSelect.value;

        // Verifica se o nome e a matrícula estão preenchidos
        if (estudante.trim() === "" || matricula.trim() === "") {
        alert("Por favor, preencha o nome e a matrícula.");
        return; // Impede a submissão do formulário caso os campos não estejam preenchidos
    }
        
        var mensagem = `SISTEMA CONSELHEIRO VIRTUAL. \nOlá, meu nome é ${estudante} e minha matrícula é ${matricula}. Gostaria de agendar um atendimento presencial na escola ${escola}.`;
        var telefone = dados.find(item => item.GRE === greSelect.value && item.MUNICIPIO === municipioSelect.value && item.ESCOLA === escolaSelect.value).CONTATO;
        var link = `https://api.whatsapp.com/send?phone=55${telefone}&text=${encodeURIComponent(mensagem)}`;
        window.open(link);
    });
    //botão de cancelar atendimento e redireciona para a pagina inicial.
    cancelarBtn.addEventListener("click", function() {
        window.location.href = "https://conselheirovirtual.netlify.app/";
    });

    popularGREs();
});