// Definindo a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método para realizar o ataque
  atacar() {
    let ataque;

    // Determinando o tipo de ataque com base no tipo do herói
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = " espada";
        break;
      case "monge":
        ataque = " artes marciais";
        break;
      case "ninja":
        ataque = " shuriken";
        break;
      default:
        ataque = " um ataque desconhecido";
    }
