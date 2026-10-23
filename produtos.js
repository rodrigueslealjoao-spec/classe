console.log("criando classe")
// criar classes (model)
classes Produto{
    id;
    nome;
    ativo;
    // metodo especial construtor
    construtor(id,nome){
        this.id =id;
        this.nome = nome;
        this.ativo = true;
    }
}
// instanciando = cotruir um objeto
const p1 =new Produto(1,"Carregador");
const p2 = new Produto(2,"capinha");



console.log(p1);
p1.nome = " Carrgador Iphone";
console.log(p1);
console.log(p2);
p2.ativo= false;
console.log(p2);
console.log("Nome Produto:" + p2.nome + " - status:" + p2.ativo)
