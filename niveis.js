const listaDeNiveis = [
    // --- NÍVEL 1---
    {
        id: 1,
        titulo: "Nível 1: Flexbox Básico",
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
    }
];