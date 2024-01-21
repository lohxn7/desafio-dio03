class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataqueDescricao;
  
      if (this.tipo === "mago") {
        ataqueDescricao = "usou magia";
      } else if (this.tipo === "guerreiro") {
        ataqueDescricao = "usou espada";
      } else if (this.tipo === "monge") {
        ataqueDescricao = "usou artes marciais";
      } else if (this.tipo === "ninja") {
        ataqueDescricao = "usou shuriken";
      }
  
      console.log(`o ${this.tipo} atacou usando ${ataqueDescricao}`);
    }
  }
  

  const Mago = new Heroi("neymar", 100, "mago");
  Mago.atacar();
  
 