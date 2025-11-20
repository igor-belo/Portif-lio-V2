tsParticles.load("tsparticles", {
    background: { color: { value: "#0a192f" } }, 
    particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: ["#ffffff", "#38bdf8"] }, 
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 2, random: true },
        move: { enable: true, speed: 0.6, direction: "none", random: false, straight: false, outModes: "out" },
        links: { enable: true, distance: 150, color: "#ccd6f6", opacity: 0.1, width: 1 }
    },
    interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 140, links: { opacity: 0.5 } } }
    },
    detectRetina: true
});

const translations = {
    pt: {
        heroGreeting: "Olá, meu nome é",
        heroRole: "Back-End Developer.",
        heroDesc: "Sou um estudante de Análise e Desenvolvimento de Sistemas focado em construir soluções robustas e escaláveis utilizando Python, C# e bancos de dados complexos.",
        btnProjects: "Ver Projetos",
        aboutTitle: "Sobre Mim",
        
        aboutText1: "Olá! Sou o Igor Belo, um solucionador de problemas apaixonado por arquitetura de software. Como desenvolvedor Back-end, aplico <a href='https://www.python.org/' target='_blank' class='text-accent hover:underline'>Python</a> e <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' target='_blank' class='text-accent hover:underline'>JavaScript</a> em projetos que vão desde APIs de alta performance até sistemas complexos de automação.",
        
        aboutText2: "Minha experiência é versátil, passando por tecnologias como <a href='https://www.embarcadero.com/br/products/delphi' target='_blank' class='text-accent hover:underline'>Delphi</a> e <a href='https://dotnet.microsoft.com/pt-br/' target='_blank' class='text-accent hover:underline'>.NET</a>. Em bancos de dados, domino o ecossistema SQL com <a href='https://www.postgresql.org/' target='_blank' class='text-accent hover:underline'>PostgreSQL</a>, <a href='https://firebirdsql.org/' target='_blank' class='text-accent hover:underline'>Firebird</a>, <a href='https://www.microsoft.com/pt-br/sql-server/' target='_blank' class='text-accent hover:underline'>SQL Server</a> e <a href='https://www.oracle.com/br/database/' target='_blank' class='text-accent hover:underline'>Oracle</a>.",
        
        aboutText3: "Também exploro soluções NoSQL com <a href='https://www.mongodb.com/pt-br' target='_blank' class='text-accent hover:underline'>MongoDB</a>, sempre buscando a ferramenta certa para criar soluções robustas e aprimorar minhas habilidades.",
        
        projectsTitle: "Projetos",
        proj1Title: "Backup & Restore",
        proj1Desc: "Ferramenta em Python/Tkinter para backups automatizados do PostgreSQL.",
        proj2Title: "Gerador de Inserts",
        proj2Desc: "Script Python que gera SQL INSERTs a partir de arquivos Excel/CSV.",
        proj3Title: "Portfólio V1",
        proj3Desc: "Versão anterior do meu portfólio, focado em HTML e CSS responsivo."
    },
    en: {
        heroGreeting: "Hi, my name is",
        heroRole: "Back-End Developer.",
        heroDesc: "I am a Systems Analysis and Development student focused on building robust and scalable solutions using Python, C#, and complex databases.",
        btnProjects: "Check out my work",
        aboutTitle: "About Me",
        
        aboutText1: "Hello! I am Igor Belo, a problem solver passionate about software architecture. As a Back-end developer, I apply <a href='https://www.python.org/' target='_blank' class='text-accent hover:underline'>Python</a> and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank' class='text-accent hover:underline'>JavaScript</a> in projects ranging from high-performance APIs to complex automation systems.",
        
        aboutText2: "My experience is versatile, covering technologies such as <a href='https://www.embarcadero.com/products/delphi' target='_blank' class='text-accent hover:underline'>Delphi</a> and <a href='https://dotnet.microsoft.com/' target='_blank' class='text-accent hover:underline'>.NET</a>. In databases, I master the SQL ecosystem with <a href='https://www.postgresql.org/' target='_blank' class='text-accent hover:underline'>PostgreSQL</a>, <a href='https://firebirdsql.org/' target='_blank' class='text-accent hover:underline'>Firebird</a>, <a href='https://www.microsoft.com/sql-server/' target='_blank' class='text-accent hover:underline'>SQL Server</a>, and <a href='https://www.oracle.com/database/' target='_blank' class='text-accent hover:underline'>Oracle</a>.",
        
        aboutText3: "I also explore NoSQL solutions with <a href='https://www.mongodb.com/' target='_blank' class='text-accent hover:underline'>MongoDB</a>, always seeking the right tool to build robust solutions and improve my skills.",
        
        projectsTitle: "Projects",
        proj1Title: "Backup & Restore",
        proj1Desc: "Tool developed in Python/Tkinter for automated PostgreSQL backups.",
        proj2Title: "Insert Generator",
        proj2Desc: "Python script that generates SQL INSERTs from Excel/CSV files.",
        proj3Title: "Portfolio V1",
        proj3Desc: "Previous version of my portfolio, focused on responsive HTML and CSS."
    }
};

const toggle = document.getElementById('language-toggle');

toggle.addEventListener('change', function() {
    const lang = this.checked ? 'en' : 'pt';
    const t = translations[lang];

    document.getElementById('hero-greeting').textContent = t.heroGreeting;
    document.getElementById('hero-role').textContent = t.heroRole;
    document.getElementById('hero-desc').textContent = t.heroDesc;
    document.getElementById('btn-projects').textContent = t.btnProjects;
    document.getElementById('about-title').textContent = t.aboutTitle;
    
    document.getElementById('about-text-1').innerHTML = t.aboutText1;
    document.getElementById('about-text-2').innerHTML = t.aboutText2;
    document.getElementById('about-text-3').innerHTML = t.aboutText3;
    
    document.getElementById('projects-title').textContent = t.projectsTitle;
    document.getElementById('proj-1-title').textContent = t.proj1Title;
    document.getElementById('proj-1-desc').textContent = t.proj1Desc;
    document.getElementById('proj-2-title').textContent = t.proj2Title;
    document.getElementById('proj-2-desc').textContent = t.proj2Desc;
    document.getElementById('proj-3-title').textContent = t.proj3Title;
    document.getElementById('proj-3-desc').textContent = t.proj3Desc;
});