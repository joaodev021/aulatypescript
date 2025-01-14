let numero = 20; // Tipagem inferida

const pi = 3.1415;

let nome: string = "Joao"; // Tipagem explícita

let correta: boolean = true;

let resultado = numero * pi;

//NOTE: const misto: any[] = ["Walisson", 27, 1, 1.77, {}, () => {}, true]
//NOTE: Evitar ao máximo utilizar any

const idades: number[] = [];
idades.push(23);
idades.push(33);
idades.push(13);
idades.push(45);
idades.push(15);

const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);

const pessoaTupla: [string, number] = ["João", 27];

// Object Types
// Interface
// Tipo costumizado

// interface Person {
//   nome: string;
//   idade: number;
//   profissao?: string;
//   altura: number;
// }

type Person = {
  nome: string;
  idade: number;
  profissao?: string;
  altura: number;
};

const pessoa: Person = {
  nome: "João",
  idade: 27,
  altura: 1.71,
};
pessoa.profissao = "Desenvolvedor";
console.log(pessoa);

// type aliases
type Criterio = "greater" | "lower";

function chooseNumber(
  numero1: number,
  numero2: number,
  criterio?: Criterio,
): number {
  switch (criterio) {
    case "greater":
      return numero1 > numero2 ? numero1 : numero2;
    case "lower":
      return numero1 < numero2 ? numero1 : numero2;
    default:
      const numeroAleatorio = Math.random();

      if (numeroAleatorio >= 0.5) return numero1;
      return numero2;
  }
}

const numeroEscolhido = chooseNumber(10, 20, "greater");

console.log("Numero escolhido: ", numeroEscolhido);

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

//NOTE: Utility Types: A ideia deles é permiter que você crie novo tipos a partir
//de tipos ja existentes

// 1. Partial
type PersonPartial = Partial<Person>;

const outraPessoa: PersonPartial = {
  altura: 1.71,
};

// 2. Required campo obrigatório
type PersonRequired = Required<Person>;

const outraPessoa2: PersonRequired = {
  nome: "Nielle",
  idade: 28,
  altura: 1.65,
  profissao: "CS",
};

//NOTE: A ideia do Pick é pegar atributos de dentro de Person e a partir disso, cria um novo type

// 3. Pick

type PersonPicked = Pick<Person, "nome" | "idade">;

// 4. Omit

type PersonOmit = Omit<Person, "profissao">;

// 5. Exclude

type CriterioExclude = Exclude<Criterio, "greater">;

//NOTE: Record<K, T> cria um tipo de objeto onde as chaves (K) têm um tipo específico
// e os valores (T) seguem outro tipo. Aqui, `Pessoas` define chaves string e valores `Person`,
// e o objeto `pessoas` implementa isso com CPFs como chaves e dados pessoais como valores.

// 6. Record

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
  "123.456.789-00": {
    nome: "Fulano",
    idade: 27,
    altura: 1.71,
  },
  "123.456.789-01": {
    nome: "Fulana",
    idade: 29,
    altura: 1.61,
  },
};
console.log(pessoas);
