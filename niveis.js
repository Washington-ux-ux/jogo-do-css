const listaDeNiveis = [
    // --- NÍVEL 1---
    {
        id: 1,
        titulo: "Nível 1: Flexbox Básico",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ff7675;">1</div>
            <div class="quadrado" style="background:#74b9ff;">2</div>
            <div class="quadrado" style="background:#55efc4;">3</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: flex-start;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: ; 
    gap: 10px;
    padding: 20px;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
}`,
        validacao: "display: flex",
        textoInicialJogador: `
#incompletoCSS {
    display: ;
    gap: 10px;
    padding: 20px;
}`
    },

    // --- NÍVEL 2 ---
    {
        id: 2,
        titulo: "Nível 2: Centralizando",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#a29bfe;">A</div>
            <div class="quadrado" style="background:#ffeaa7; color: #333;">B</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    height: 100%;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}`,
        validacao: "justify-content: center",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    height: 100%;
}`
    },

    // --- NÍVEL 3  ---
    {
        id: 3,
        titulo: "Nível 3: Espaçamento",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ff9ff3;">1</div>
            <div class="quadrado" style="background:#feca57;">2</div>
            <div class="quadrado" style="background:#48dbfb;">3</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    padding: 20px;
    height: 100%;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: 100%;
}`,
        validacao: "justify-content: space-between",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    padding: 20px;
    height: 100%;
}`
    },

    // --- NÍVEL 4 ---
    {
        id: 4,
        titulo: "Nível 4: O Chão",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#1dd1a1;">Talk</div>
            <div class="quadrado" style="background:#5f27cd;">Is</div>
            <div class="quadrado" style="background:#ff6b6b;">Cheap</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    padding-bottom: 20px;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: ;
    height: 100%;
    padding-bottom: 20px;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    padding-bottom: 20px;
}`,
        validacao: "align-items: flex-end",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    justify-content: center;
    align-items: ;
    height: 100%;
    padding-bottom: 20px;
}`
    },

    // --- NÍVEL 5 ---
    {
        id: 5,
        titulo: "Nível 5: Mudança de Direção",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ee5253;">Top</div>
            <div class="quadrado" style="background:#0abde3;">Mid</div>
            <div class="quadrado" style="background:#10ac84;">Bot</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    flex-direction: ;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
}`,
        validacao: "flex-direction: column",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    flex-direction: ;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
}`
    },

    // --- NÍVEL 6 ---
    {
        id: 6,
        titulo: "Nível 6: Invertendo tudo",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:red;">1</div>
            <div class="quadrado" style="background:orange;">2</div>
            <div class="quadrado" style="background:yellow; color:black;">3</div>
            <div class="quadrado" style="background:green;">4</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    flex-direction: ;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}`,
        validacao: "flex-direction: row-reverse",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    flex-direction: ;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;
}`
    },

// --- NÍVEL 7 ---
    {
        id: 7,
        titulo: "Nível 7: Quebrando Linhas",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ff9f43;">1</div>
            <div class="quadrado" style="background:#f368e0;">2</div>
            <div class="quadrado" style="background:#54a0ff;">3</div>
            <div class="quadrado" style="background:#00d2d3;">4</div>
            <div class="quadrado" style="background:#1dd1a1;">5</div>
            <div class="quadrado" style="background:#ff6b6b;">6</div>
            <div class="quadrado" style="background:#5f27cd;">7</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    flex-wrap: wrap;
    width: 250px; /* Força a quebra visual */
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    flex-wrap: ; 
    width: 250px;
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    flex-wrap: wrap;
    width: 250px;
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`,
        validacao: "flex-wrap: wrap",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    /* Quebre a linha aqui */
    flex-wrap: ;
    
    width: 250px; /* Limite de largura */
    gap: 10px;
    padding: 20px;
    align-content: flex-start;
}`
    },

    // --- NÍVEL 8 ---
    {
        id: 8,
        titulo: "Nível 8: Espaço ao Redor",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#c8d6e5; color:#333;">A</div>
            <div class="quadrado" style="background:#8395a7;">B</div>
            <div class="quadrado" style="background:#576574;">C</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    height: 100%;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
}`,
        validacao: "justify-content: space-around",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    justify-content: ;
    align-items: center;
    height: 100%;
}`
    },

    // --- NÍVEL 9 ---
    {
        id: 9,
        titulo: "Nível 9: O Rebelde",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado" style="background:#ff9ff3;">1</div>
            <div class="quadrado amarelo" style="background:#feca57; color:#333;">2</div>
            <div class="quadrado" style="background:#48dbfb;">3</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    align-items: flex-start;
    height: 100%;
    gap: 10px;
    padding: 20px;
}
#completoCSS .amarelo {
    align-self: flex-end;
}`,
        textoGabaritoVisivel: `
#completoCSS {
    display: flex;
    align-items: flex-start;
    /* ... */
}
#completoCSS .amarelo {
    align-self: ;
}`,
        textoGabaritoCompleto: `
#completoCSS {
    display: flex;
    align-items: flex-start;
}
#completoCSS .amarelo {
    align-self: flex-end;
}`,
        validacao: "align-self: flex-end",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    align-items: flex-start;
    height: 100%;
    gap: 10px;
    padding: 20px;
}

/* Note o ID antes da classe */
#incompletoCSS .amarelo {
    align-self: ;
}`
    },

    // --- NÍVEL 10 ---
    {
        id: 10,
        titulo: "Nível 10: Trocando a Ordem",
        instrucao: "Identifique o CSS no qual você deve responder e o que responder.",
        htmlInterno: `
            <div class="quadrado vermelho" style="background:#ff4757;">1</div>
            <div class="quadrado" style="background:#2ed573;">2</div>
            <div class="quadrado" style="background:#1e90ff;">3</div>
        `,
        cssGabaritoReal: `
#completoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
}
#completoCSS .vermelho {
    order: 1; 
}`,
        textoGabaritoVisivel: `
#completoCSS { ... }

#completoCSS .vermelho {
    order: ; 
}`,
        textoGabaritoCompleto: `
#completoCSS { ... }

#completoCSS .vermelho {
    order: 1;
}`,
        validacao: "order: 1",
        textoInicialJogador: `
#incompletoCSS {
    display: flex;
    gap: 10px;
    padding: 20px;
    align-items: center;
}

/* Use o seletor completo */
#incompletoCSS .vermelho {
    order: ;
}`
    }

];