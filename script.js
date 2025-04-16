let NumeroAleatorio = Math.floor(Math.random() * 100) + 1;
const NumeroMaximoDeTentativas = 10;
let TentativaAtual = NumeroMaximoDeTentativas;

const Mensagens = [
    "😁 Já pensei em um número!",
    "🤔 O número secreto é maior",
    "🤔 O número secreto é menor",
];

//Utilidades
const PegarElemento = (NomeElemento) => document.getElementById(NomeElemento);
const PegarValorElemento = (NomeElemento) => PegarElemento(NomeElemento).value;
const AlterarTextoElemento = (NomeElemento, Texto) => PegarElemento(NomeElemento).textContent = Texto;
const MaiorOuMenor = (Numero) => Numero != NumeroAleatorio ? Numero > NumeroAleatorio ? 'Maior' : 'Menor' : 'Igual' ;

//Alteração na Pagina
const LimparInputs = () => PegarElemento("chute").value = '';
const AtualizarMensagens = (NumeroDaMensagem) => AlterarTextoElemento("MensagensDoJogo", Mensagens[NumeroDaMensagem]);
const AtualizarTentativas = () => AlterarTextoElemento("Tentativas",`Tentativas : ${TentativaAtual}`);

function Resetar() {

    NumeroAleatorio = Math.floor(Math.random() * 100) + 1;
    AtualizarMensagens(0);
    TentativaAtual = NumeroMaximoDeTentativas;
    AtualizarTentativas();
    AlterarTextoElemento("BotaoChute", "Chutar"); 
    LimparInputs();

};

function Chutar() {

    const ValorChutado = PegarValorElemento("chute");

    if (TentativaAtual <= 0) {
        Resetar();
        return;
    };
    
    if (isNaN(ValorChutado) || ValorChutado === '') {
        alert("Digite um número válido!");
        return;
    };

    if (!(ValorChutado >= 1 && ValorChutado <= 100)) {
        alert("Digite um valor entre 1 e 100");
        return;
    };

    switch (MaiorOuMenor(ValorChutado)) {

        case "Maior":
            AtualizarMensagens(2);
            break;

        case "Menor":
            AtualizarMensagens(1);
            break;

        case "Igual":
            AlterarTextoElemento("MensagensDoJogo",`🥳 Você acertou! O numero era ${NumeroAleatorio}! Clique em resetar para jogar novamente.`);
            TentativaAtual = 0;
            AlterarTextoElemento("BotaoChute", "Resetar");
            return;
    };

    TentativaAtual --;
    AtualizarTentativas();

    if (TentativaAtual <= 0) {
        AlterarTextoElemento("MensagensDoJogo",`😓 Você perdeu! O número secreto era ${NumeroAleatorio}. Clique em resetar para jogar novamente.`);
        AlterarTextoElemento("BotaoChute", "Resetar");
    };

    LimparInputs();
};

AtualizarMensagens(0);