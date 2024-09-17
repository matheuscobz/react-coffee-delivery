import { Coffe } from "./Coffe";
import coffe1 from '/coffes/coffee-1.svg'
import coffe2 from '/coffes/coffee-2.svg'
import coffe3 from '/coffes/coffee-3.svg'
import coffe4 from '/coffes/coffee-4.svg'
import coffe5 from '/coffes/coffee-5.svg'
import coffe6 from '/coffes/coffee-6.svg'
import coffe7 from '/coffes/coffee-7.svg'
import coffe8 from '/coffes/coffee-8.svg'
import coffe9 from '/coffes/coffee-9.svg'
import coffe10 from '/coffes/coffee-11.svg'
import coffe11 from '/coffes/coffee-11.svg'
import coffe12 from '/coffes/coffee-12.svg'
import coffe13 from '/coffes/coffee-13.svg'
import coffe14 from '/coffes/coffee-14.svg'

const cafes = [
  { 
    id: 1,
    imagem: coffe1, 
    tipo: "Tradicional", 
    nome: "Expresso Tradicional", 
    descricao: "O tradicional café feito com água quente e grãos moídos", 
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 2,
    imagem: coffe2, 
    tipo: "Tradicional", 
    nome: "Expresso Americano", 
    descricao: "Expresso diluído, menos intenso que o tradicional",
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 3,
    imagem: coffe3, 
    tipo: "Tradicional", 
    nome: "Expresso Cremoso", 
    descricao: "Café expresso tradicional com espuma cremosa",
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 4,
    imagem: coffe4, 
    tipo: "Tradicional Gelado", 
    nome: "Expresso Gelado", 
    descricao: "Bebida preparada com café expresso e cubos de gelo",
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 5,
    imagem: coffe5, 
    tipo: "Tradicional com leite", 
    nome: "Café com Leite", 
    descricao: "Meio a meio de expresso tradicional com leite vaporizado",
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 6,
    imagem: coffe6, 
    tipo: "Tradicional com leite", 
    nome: "Latte", 
    descricao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 7,
    imagem: coffe7, 
    tipo: "Tradicional com leite", 
    nome: "Capuccino", 
    descricao: "Bebida com canela feita de doses iguais de café, leite e espuma",
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 8,
    imagem: coffe8, 
    tipo: "Tradicional com leite", 
    nome: "Macchiato", 
    descricao: "Café expresso misturado com um pouco de leite quente e espuma",
    preco: 9.90,
    quantidade: 1 
  },
  { 
    id: 9,
    imagem: coffe9, 
    tipo: "Tradicional com leite", 
    nome: "Mocaccino", 
    descricao: "Café expresso com calda de chocolate, pouco leite e espuma",
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 10,
    imagem: coffe10, 
    tipo: "Tradicional com leite", 
    nome: "Chocolate Quente", 
    descricao: "Bebida feita com chocolate dissolvido no leite quente e café", 
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 11,
    imagem: coffe11, 
    tipo: "Tradicional alcoólico gelado", 
    nome: "Cubano", 
    descricao: "Drink gelado de café expresso com rum, creme de leite e hortelã", 
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 12,
    imagem: coffe12, 
    tipo: "Especial", 
    nome: "Havaiano", 
    descricao: "Bebida adocicada preparada com café e leite de coco", 
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 13,
    imagem: coffe13, 
    tipo: "Especial", 
    nome: "Árabe", 
    descricao: "Bebida preparada com grãos de café árabe e especiarias", 
    preco: 9.90,
    quantidade: 1
  },
  { 
    id: 14,
    imagem: coffe14, 
    tipo: "Especial Alcoólico", 
    nome: "Irlandês", 
    descricao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    preco: 9.90,
    quantidade: 1
  }
];

export function Main() {
  return (
    <main className="mx-40 mb-40">
      <h2 className="text-3xl font-nunito font-extrabold text-[#403937] mb-12">Nossos cafés</h2>
      <div className="flex gap-8 flex-wrap justify-between ">
        {cafes.map((index) => {
          return (
            <Coffe 
              preco={index.preco}
              imagem={index.imagem}
              tipo={index.tipo}
              descricao={index.descricao}
              nome={index.nome}
              quantidade={index.quantidade}
            />
          )
        })}
      </div>
    </main>
  );
}