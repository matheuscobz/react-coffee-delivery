import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { CartButton } from './CartButton'
import { useCart } from '../contexts/CartContext'


interface CoffeProps {
  imagem: string
  tipo: string
  nome: string
  descricao: string
  quantidade: number
  preco: number
}


export function Coffe({ imagem, tipo, nome, descricao, preco, }: CoffeProps) {
  const [quantidadeProduto, setQuantidadeProduto] = useState(1)
  const { addCoffeeToCart } = useCart()

  function incrementarQuantidade() {
    setQuantidadeProduto(quantidadeProduto + 1)
  }
 
  function decrementarQuantidade() {
    console.log(quantidadeProduto)

    setQuantidadeProduto(quantidadeProduto - 1) 
  }

  function handleAddToCart() {
    addCoffeeToCart({
      imagem,
      tipo, 
      nome, 
      descricao,
      preco,
      quantidade: quantidadeProduto,
    })
  }

  return (
    <div className=" bg-[#F3F2F2] max-w-[256px] rounded-tr-3xl rounded-bl-3xl rounded-br-md rounded-tl-md flex flex-col items-center relative font-nunito text-center ">
      <img className="relative -top-5" src={imagem} alt="" />
      <p className="bg-[#F1E9C9] text-[#C47F17] rounded-xl px-2 py-1 uppercase text-[10px] font-extrabold ">{tipo}</p>
      <h3 className="text-[#403937] text-[20px] font-extrabold mt-4 mb-2">{nome}</h3>
      <p className="text-[#8D8686] text-[14px] mx-5 mb-8">{descricao}</p>

      <div className="flex justify-center items-center gap-4 mb-6">
        <div className="flex items-end">
          <span className="text-[#574F4D] text-[14px] mb-1.5 mr-1">R$</span>
          <p className="text-[#574F4D] text-[24px] font-extrabold">{preco.toFixed(2)}</p>
        </div>

        <div className="flex justify-center gap-2 bg-[#E6E5E5] p-2 rounded-md ">
          <button className="hover:bg-[#bdb1d6] rounded-md" onClick={decrementarQuantidade}> 
            <Minus size={25} color='#8047F8'/>
          </button>

          <span> {quantidadeProduto} </span>
          
          <button className="hover:bg-[#bdb1d6] rounded-md " onClick={incrementarQuantidade}> 
            <Plus size={25} color='#8047F8' />
          </button>
        </div>


        <button className="" onClick={handleAddToCart}>
          <CartButton />
        </button>
      </div>
    </div>
  )
}