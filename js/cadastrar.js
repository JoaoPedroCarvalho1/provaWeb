let jogadores = [];
function btn() {
    const nome = document.querySelector("#nome");
    const time = document.querySelector("#time");
    const gols = document.querySelector("#gols");
    const assist = document.querySelector("#assistencias");
    const img = document.querySelector("#foto");

    const cadastro = {
        nome: nome.value,
        time: time.value,
        gol: gols.value,
        assistencia: assist.value,
        imagem: img.value,
    }
    return validar(cadastro);
}
function validar(cadastro) {
    if (cadastro.nome === "" || cadastro.time === "" || cadastro.gol === "" || cadastro.assistencia === "" || cadastro.imagem === "") {
        alert("preencha todos os campos !")
    } else {
            const cadastro_jogador = new jogador(cadastro.nome, cadastro.time,cadastro.gol ,cadastro.assistencia,cadastro.imagem)
            jogadores.push(cadastro_jogador);
            const Array_Json = JSON.stringify(jogadores);
            localStorage.setItem("jogador", Array_Json);
            alert("Cadastrado com Sucesso!")
    }
}

class jogador {
    constructor(nome,time, gols, asssitencias,url) {
        this.nome = nome;
        this.time = time;
        this.gols = gols;
        this.asssitencias = asssitencias;
        this.url = url;
    }
    getNome() {
        return this.nome;
    }
    getTime() {
        return this.time;
    }
    getGols() {
        return this.gols;
    }
    getAssistencias() {
        return this.asssitencias;
    }
    getUrl() {
        return this.url;
    }
}
