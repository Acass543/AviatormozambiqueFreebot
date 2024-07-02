const accessButton = document.getElementById('access-button');
        const webviewContainer = document.getElementById('webview-container');
        const messageDiv = document.getElementById('message');
        const whatsappMessage = document.querySelector('.whatsapp-message');

        accessButton.addEventListener('click', function() {
            // Cria um elemento iframe dinamicamente
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', 'https://acass543.github.io/AviatorBot2024');
            iframe.setAttribute('id', 'webview');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = 'none';

            // Adiciona o iframe ao contêiner de webview e exibe
            webviewContainer.appendChild(iframe);
            webviewContainer.style.display = 'block';

            // Esconde a mensagem de aviso e a mensagem do WhatsApp
            messageDiv.style.display = 'none';
            whatsappMessage.style.display = 'none';

            // Remove o botão "ACESSAR BOT" da tela
            accessButton.style.display = 'none';
        });