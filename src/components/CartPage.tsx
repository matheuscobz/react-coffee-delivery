import { Banknote, CreditCard, DollarSign, Landmark, MapPin } from "lucide-react";
import { Header } from "./Header";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export function CartPage(){
  const { selectedCoffees } = useCart()
  
  const totalPrice = selectedCoffees.reduce((acumulador, coffee) => {
    return acumulador + coffee.preco * coffee.quantidade
  }, 0)

  const navigate = useNavigate()

  function handleSucessPage(){
    navigate('/checkout/sucess')
  }

  return (
    <>
      <Header />
      <div className="flex mx-40 mt-14   gap-60 justify-between">

        
        <div className="flex flex-col gap-4">
          <p className="text-[#403937] text-lg font-extrabold font-nunito">Complete seu pedido</p>

          {/* Endereço */}
          <div className="bg-[#F3F2F2] p-10 rounded-lg">
            <div className="flex mb-8">
              <MapPin color="#C47F17"/>
              <div className="ml-2">
                <p className="text-[#403937] text-base">Endereço de entrega</p>
                <p className="text-[#574F4D] text-sm">Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <form>
              <div className="flex flex-col gap-4 font-roboto">
                <label className="" htmlFor="cep">
                  <input 
                    placeholder="CEP" 
                    type="text" name="cep" className="p-4 bg-[#EDEDED] placeholder-[#8D8686] rounded-md border-2 border-[#E6E5E5]"/>
                </label>

                <label className="" htmlFor="rua">
                  <input 
                    placeholder="Rua" 
                    name="rua" type="text" 
                    className="p-4 bg-[#EDEDED] placeholder-[#8D8686] rounded-md border-2 border-[#E6E5E5] w-full"/>
                </label>

                <div className="flex gap-3 flex-wrap justify-between">
                  
                  <label className="" htmlFor="numero">
                    <input 
                      placeholder="Número" 
                      type="text" 
                      name="numero" 
                      className="p-4 bg-[#EDEDED] placeholder-[#8D8686] rounded-md border-2 border-[#E6E5E5]"/>
                  </label>

                  <label className="bg-[#EDEDED] border-2 border-[#E6E5E5] flex justify-between items-center gap-2 flex-grow rounded-md" htmlFor="complemento">
                    <input 
                      placeholder="Complemento" 
                      type="text" 
                      name="complemento" 
                      className="bg-transparent placeholder-[#8D8686] rounded-md p-4"/>
                    <span className="italic  text-xs text-[#8D8686] p-4">Opcional</span>
                  </label>

                  <label className="" htmlFor="bairro">
                    <input 
                      placeholder="Bairro" 
                      type="text" 
                      name="bairro" 
                      className="p-4 bg-[#EDEDED] placeholder-[#8D8686] rounded-md border-2 border-[#E6E5E5]" />
                  </label>

                  <label className="" htmlFor="cidade">
                    <input 
                      placeholder="Cidade" 
                      type="text" 
                      name="cidade" 
                      className="p-4 bg-[#EDEDED] placeholder-[#8D8686] rounded-md border-2 border-[#E6E5E5]"/>
                  </label>

                  <label className="" htmlFor="uf">
                    <input 
                      placeholder="UF" 
                      type="text" 
                      name="uf" 
                      className="p-4 bg-[#EDEDED] placeholder-[#8D8686] rounded-md border-2 border-[#E6E5E5]  max-w-[60px]"/>
                  </label>

                </div>

              </div>
            </form>
          </div>
          
          {/* Pagamento */}
          <div className="bg-[#F3F2F2] p-10 rounded-lg">
            <div className="flex flex-col mb-8 ">
              <div className="flex mb-8">
                <DollarSign color="#8047F8"/>
                <div className="ml-2">
                  <p className="text-[#403937] text-base">Pagamento</p>
                  <p className="text-[#574F4D] text-sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </div>
              </div>

              <div className="flex text-[#574F4D] font-roboto gap-3">
                <button className="flex p-4 bg-[#E6E5E5] gap-3 rounded-lg whitespace-nowrap flex-grow border hover:bg-[#EBE5F9] hover:border hover:border-[#8047F8]">
                  <CreditCard color="#8047F8"/>
                  <p className="uppercase">Cartão de crédito</p>
                </button>

                <button className="flex p-4 bg-[#E6E5E5] gap-3 rounded-lg whitespace-nowrap flex-grow border hover:bg-[#EBE5F9] hover:border hover:border-[#8047F8]">
                  <Landmark color="#8047F8" />
                  <p className="uppercase">Cartão de débito</p>
                </button>

                <button className="flex p-4 bg-[#E6E5E5] gap-3 rounded-lg whitespace-nowrap flex-grow border hover:bg-[#EBE5F9] hover:border hover:border-[#8047F8]">
                  <Banknote color="#8047F8"/>
                  <p className="uppercase">Dinheiro</p>
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[#403937] text-lg font-extrabold font-nunito">Cafés selecionados</p>
          <div className="bg-[#F3F2F2] w-[448px] rounded-lg">
            {selectedCoffees.length > 0 ? (
              selectedCoffees.map(( coffee, index ) => (
                <div className="flex flex-col">
                  <div className="flex flex-col px-10"> 
                    <div key={index} className="flex flex-row justify-around items-center mt-6">
                      <img src={coffee.imagem} alt={coffee.nome} width={50} />
                      <p className="font-roboto text-[#403937]">{coffee.nome}</p>
                      <span className="font-roboto text-[#403937]"> {coffee.quantidade} </span>
                      <p className="text-[#574F4D] font-extrabold font-nunito">R${(coffee.preco * coffee.quantidade).toFixed(2)}</p>
                    </div>

                    <div className="border border-b border-[#bbb7c5] my-6"></div>

                    
                  </div>
                  
                 

                </div>
              )
            )   
          ) : (
                <div className="">
                  <p className="text-center my-12 font-extrabold font-nunito text-[#403937]">Nenhum café selecionado</p>
                </div>
              )
          }

          <div className="flex flex-col px-10">
            <div className="flex justify-between text-[#574F4D] font-nunito">
              <p>Total de itens </p>
              <p>R$ {totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-[#574F4D] font-nunito">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="flex justify-between text-[#312d2c] font-bold text-lg font-nunito ">
              <p>Total</p>
              <p>R$ {(totalPrice + 3.50).toFixed(2)}</p>
            </div>
            <button onClick={handleSucessPage} className="bg-[#DBAC2C] m-10 py-3 rounded-lg text-white font-nunito font-bold hover:bg-[#cca12b]">CONFIRMAR PEDIDO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}