# Imonstant — Landing Page

Projeto de landing page em React + Vite + TailwindCSS para a startup Imonstant.

Rápido para começar:

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Dependências principais:
- React
- TailwindCSS
- Framer Motion
- react-icons

Formulário e Google Sheets
- O projeto inclui um exemplo de integração que envia os dados do formulário para um endpoint do Google Apps Script (que grava em um Google Sheet). Para usar:
	1. Crie uma Planilha Google e anote o ID.
	2. Crie um projeto no Google Apps Script com a função doPost(e) que receba JSON e grave uma linha na planilha (veja o comentário em `src/components/Contact.jsx`).
	3. Faça Deploy -> New deployment -> Web app e escolha "Anyone, even anonymous" se quiser aceitar submissões do frontend.
	4. Copie a URL do Web App e cole em `SHEET_ENDPOINT` dentro de `src/components/Contact.jsx`.

Observações:
- Esta é uma implementação front-end. Se preferir, conecte o formulário a um backend seguro que use a Google Sheets API.
- Para gerar o build: `npm run build` e depois `npm run preview` para testar o build localmente.
