import PDF.js from PDF

const dropArea = document.getElementById('drop-area');

// Previne o comportamento padrão do navegador (abrir o arquivo)
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Evidencia a área quando um arquivo é arrastado sobre ela
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(e) {
  dropArea.classList.add('highlight');
}

function unhighlight(e) {
  dropArea.classList.remove('highlight');
}

// Lida com o evento de soltar o arquivo
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}

// Função para processar os arquivos (neste caso, verificar se é um PDF)
function handleFiles(files) {
  for (const file of files) {
    // Verifica se o arquivo é um PDF
    if (file.type === 'application/pdf') {
      console.log('ARQUIVO PDF RECEBIDO:', file.name);
      // Aqui você pode:
      // 1. Ler o conteúdo do PDF (usando a <<!nav>>File API<<!/nav>> e uma biblioteca PDF)
      // 2. Enviar o arquivo para um servidor (usando `fetch` ou `XMLHttpRequest`)
      // Exemplo: Enviar para um servidor
      // uploadFile(file);
    } else {
      alert('Por favor, insira um arquivo PDF.');
    }
  }
}

/*
// Exemplo de como enviar o arquivo para um servidor (requer um servidor configurado)
function uploadFile(file) {
  const formData = new FormData();
  formData.append('pdfFile', file); // 'pdfFile' é o nome do campo que seu servidor espera

  fetch('/upload-endpoint', { // Substitua '/upload-endpoint' pelo URL do seu endpoint de upload
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log('Upload sucesso:', data))
  .catch(error => console.error('Erro no upload:', error));
}
*/