//classe Usuario 

const Genero ={
    M:"M",
    F:"F",
    OUTRO:"Outro"
}
classe Usuario{
id ;
nome;
senha;
dataNascimento;
genero;
isAdmin;
// método construtor
 constructor(id,nome,senha, dataNacimento,genero,isAdmin){
    this.id = id;
    this.nome = nome;
    this.senha = senha;
    this.dataNascimento = new Date(dataNascimento);
    this.genero = genero
    this.isAdmin = false;  
 }
// métodos de classe --> função
perfil(){
    return "Nome:" + this.nome + " - Data de Nascimento: " + this.dataNascimento
 }
}

const user1 = new Usuario(1,"Joao Guilherme","123","2000-04-14T00:00:00",Genero.M);
console.log(user1)
user1.nome = "Joao Guilhrme";
console.log(user1)
console.log(user1.peril())
console.log(user2.perfil())