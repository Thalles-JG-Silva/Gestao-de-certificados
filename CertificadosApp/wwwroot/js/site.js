﻿function searchCertificates() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}

function toggleAll(source) {
    checkboxes = document.getElementsByName('selectedCert');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}

function restaurarCertificados() {
    var selected = [];
    $('input[name="selectedCert"]:checked').each(function() {
        selected.push($(this).val());
    });

    if (selected.length > 0) {
        $.post('@Url.Action("Restaurar", "Lixeira")', { ids: selected }, function() {
            location.reload();
        });
    } else {
        alert("Selecione pelo menos um certificado para restaurar.");
    }
}

function excluirCertificados() {
    var selected = [];
    $('input[name="selectedCert"]:checked').each(function() {
        selected.push($(this).val());
    });

    if (selected.length > 0) {
        if (confirm("Tem certeza que deseja excluir permanentemente os certificados selecionados?")) {
            $.post('@Url.Action("ExcluirPermanentemente", "Lixeira")', { ids: selected }, function() {
                location.reload();
            });
        }
    } else {
        alert("Selecione pelo menos um certificado para excluir.");
    }
}


function searchCertificates() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}

function toggleAll(source) {
    checkboxes = document.getElementsByName('selectedCert');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

function imprimirPDF(fileName) {
    // Lógica para impressão de PDF
}

function openCertificate() {
    // Lógica para exibir certificado
}

function excluirCertificado() {
    // Lógica para excluir certificado
}



/**
 * Filtra os certificados na tabela com base no texto inserido pelo usuário no campo de pesquisa.
 */
function searchCertificates() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput"); // Obtém o elemento input de pesquisa
    filter = input.value.toUpperCase(); // Transforma o texto de entrada em maiúsculas para insensibilidade a maiúsculas/minúsculas
    table = document.querySelector("table"); // Seleciona a primeira tabela encontrada no documento
    tr = table.getElementsByTagName("tr"); // Obtém todos os elementos 'tr' (linhas) da tabela

    // Itera sobre cada linha da tabela
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // Obtém a segunda célula (td) de cada linha, assumindo que é a coluna do título
        if (td) {
            txtValue = td.textContent || td.innerText; // Obtém o texto dentro da célula
            // Verifica se o texto contém a string de pesquisa
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = ""; // Mostra a linha se corresponder ao filtro
            } else {
                tr[i].style.display = "none"; // Oculta a linha se não corresponder
            }
        }       
    }
}

/**
 * Marca ou desmarca todos os checkboxes de certificados baseado no checkbox 'source'.
 * @param {HTMLInputElement} source - O checkbox que controla todos os outros.
 */
function toggleAll(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="selectedCert"]'); // Seleciona todos os checkboxes dos certificados
    
    // Define o estado de cada checkbox para corresponder ao estado do checkbox fonte (marcar ou desmarcar todos)
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = source.checked;
    }
}

/**
 * Função para imprimir um arquivo PDF especificado pelo nome do arquivo.
 * @param {string} pdfFileName - O nome do arquivo PDF a ser impresso.
 */
function imprimirPDF(pdfFileName) {
    // Cria um novo elemento iframe dinamicamente.
    var iframe = document.createElement('iframe');
    // Define o atributo src do iframe para o nome do arquivo PDF fornecido, que indica o caminho do arquivo a ser carregado.
    iframe.src = pdfFileName;

    // Define o estilo do iframe para 'none' para ocultá-lo visualmente na página, mas ainda presente no DOM.
    iframe.style.display = 'none';

    // Adiciona o iframe ao corpo do documento HTML. Isso é necessário para que o iframe seja considerado parte da página e tenha conteúdo carregável.
    document.body.appendChild(iframe);

    // Configura um temporizador para atrasar a execução da função de impressão.
    setTimeout(function() {
        // Acessa a janela do conteúdo do iframe e chama o método print().
        // Este método abre a caixa de diálogo de impressão para o conteúdo atualmente exibido no iframe.
        iframe.contentWindow.print();
    }, 1000); // O atraso de 1000 milissegundos (1 segundo) garante que o PDF tenha tempo suficiente para carregar completamente antes de tentar imprimir.
}


/**
 * Abre um certificado em uma nova janela pop-up com especificações definidas.
 */
function openCertificate() {
    var url = 'Certificado Teste.pdf'; // URL do arquivo PDF
    var windowFeatures = 'width=800,height=600,resizable=yes,scrollbars=yes,status=yes'; // Características da janela pop-up
    window.open(url, '_blank', windowFeatures); // Abre o PDF em uma nova janela com as características especificadas
}
/* Função para excluir um certificado */
function excluirCertificado(event) {
    // Esta função é chamada quando o usuário clica no botão de exclusão de um certificado
  
    // Exibe uma caixa de diálogo de confirmação
    if (confirm("Tem certeza de que deseja excluir este certificado?")) {
        // Obtém a referência à célula da tabela que contém o botão de exclusão
        var tableCell = event.target.closest("td");
        
        // Obtém a referência à linha da tabela que contém o certificado a ser excluído
        var tableRow = tableCell.closest("tr");
        
        // Remove a linha da tabela
        tableRow.remove();
        
        // Exibe uma mensagem de confirmação
        alert("Certificado excluído com sucesso!");
    }
  }
///  Mensagem de Salvar  um certificado//
function Savecertificado(event){
    alert( "Salvo com sucesso!")
}
//  Mensagem de Cadastro de um certificado//
  function cadastrarcertificado(event){
    alert( "Cadastrado bem sucedido!")
}
    //  Mensagem de restaurar de um certificado//
    function restaurarcertificado(event){
        alert( "Restaurado com sucesso!")
}

