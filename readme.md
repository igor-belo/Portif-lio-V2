# 👨‍💻 Portfólio Profissional - Igor Belo

![Status do Projeto](https://img.shields.io/badge/Status-Finalizado-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

> Um portfólio moderno, responsivo e interativo desenvolvido para apresentar projetos de desenvolvimento Back-end, habilidades e experiências profissionais.

---

## 🚀 Demonstração Online

Você pode acessar o portfólio online através do link:
🔗 **[Acesse o Portfólio Aqui](https://portifolio-v2-two.vercel.app/)**

---

## 🛠 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas e leves para garantir alta performance e facilidade de manutenção.

* **[HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)** - Estrutura semântica.
* **[Tailwind CSS](https://tailwindcss.com/)** (via CDN) - Framework CSS utilitário para estilização rápida e responsiva.
* **[JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)** - Lógica para tradução, interatividade e animações.
* **[tsParticles](https://particles.js.org/)** - Biblioteca leve para o efeito de partículas no fundo.
* **[Font Awesome](https://fontawesome.com/)** - Ícones vetoriais.
* **[Google Fonts](https://fonts.google.com/)** - Fonte *Inter* para tipografia moderna.

---

## ✨ Funcionalidades

* **⚡ Design Responsivo:** Layout adaptável para Mobile, Tablet e Desktop.
* **🎨 Tema Cyberpunk/Tech:** Paleta de cores personalizada (*Navy Blue* + *Electric Blue*).
* **🌐 Internacionalização (i18n):** Sistema de troca de idioma (**PT/BR** ↔ **EN/US**) em tempo real, sem recarregar a página.
* **✨ Fundo Animado:** Partículas interativas que reagem ao movimento do mouse.
* **🔗 Links Inteligentes:** Tecnologias citadas no texto e nos cards possuem links diretos para suas documentações oficiais.
* **📂 Seção de Projetos:** Grid de cards com efeitos de *hover* e links para repositórios/demo.

---

## 📂 Estrutura do Projeto

```text
/
├── index.html          # Arquivo principal (Estrutura)
├── css/
│   └── styles.css      # Estilizações customizadas (Scrollbar, Toggle, etc.)
├── js/
│   └── script.js       # Lógica de Tradução e Configuração das Partículas
└── images/
    └── favicon.ico     # Ícone da aba do navegador

```

## 🚀 Como rodar localmente
Como este é um projeto estático (não requer Node.js ou compiladores), é muito simples de executar:

Clone o repositório:

Bash

git clone [https://github.com/igor-belo/Portif-lio-V2.git](https://github.com/igor-belo/Portif-lio-V2.git)
Acesse a pasta:

Bash

cd portifolio_estatico
Abra o arquivo index.html:

Basta dar dois cliques no arquivo index.html.

Ou, se usar o VS Code, instale a extensão Live Server, clique com o botão direito no HTML e escolha "Open with Live Server".

## 🎨 Personalização

Mudar a Cor de Destaque
O projeto usa uma cor Accent (Azul Elétrico #38bdf8) configurada no Tailwind. Para mudar:

Abra o index.html.

Procure a tag <script> que contém tailwind.config.

Altere o valor de accent:

JavaScript

colors: {
    // ...
    accent: '#SUA_COR_AQUI', // Ex: #ff0000 para vermelho
}
Lembre-se de alterar também no arquivo css/styles.css (para a barra de rolagem e o botão toggle).

📬 Contato
Desenvolvido por Igor Belo.

Feito com 💙 e muito café.