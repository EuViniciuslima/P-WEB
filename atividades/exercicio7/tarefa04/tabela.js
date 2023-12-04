function montarTabela(data, idDiv, camposExibidos, nomesCamposExibidos) {
    // Verifica se os parâmetros necessários foram passados
    if (!data || !idDiv || !camposExibidos || !nomesCamposExibidos) {
       console.error("Parâmetros faltando!");
       return;
    }
 
    const div = document.getElementById(idDiv);
 
    // Verifica se a div existe no documento
    if (!div) {
       console.error("Div não encontrada!");
       return;
    }
 
    // Verifica se há dados para exibir
    if (data.length === 0 || camposExibidos.length === 0 || nomesCamposExibidos.length === 0) {
       div.innerHTML = "Sem dados para exibir";
       return;
    }
 
    const table = document.createElement("table");
    table.classList.add("tabela");
 
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
 
    nomesCamposExibidos.forEach(nome => {
       const th = document.createElement("th");
       th.textContent = nome;
       headerRow.appendChild(th);
    });
 
    thead.appendChild(headerRow);
    table.appendChild(thead);
 
    const tbody = document.createElement("tbody");
 
    data.forEach(item => {
       const row = document.createElement("tr");
 
       camposExibidos.forEach(campo => {
          const cell = document.createElement("td");
          cell.textContent = item[campo] || "";
          row.appendChild(cell);
       });
 
       tbody.appendChild(row);
    });
 
    table.appendChild(tbody);
 
    div.innerHTML = "";
    div.appendChild(table);
 }