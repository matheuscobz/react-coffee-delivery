import { Header } from "./Header"
import entregador from '/motoqueiro.png'
import locationIcon from "/sucess-location.svg"
import timeIcon from "/sucess-time.svg"
import dolarIcon from "/sucess-dolar.svg"

export function SucessPage() {
  return (
    <>
      <Header />

      <div className="mx-40 my-20">
        <h1 className="text-3xl font-nunito text-[#C47F17] font-extrabold">Uhu! Pedido confirmado</h1>
        <p className="text-[#403937] text-xl font-roboto mb-10">Agora é só aguardar que logo o café chegará até você</p>
          <div className="flex justify-between">
            {/* Contêiner com borda gradiente */}
            <div className="bg-gradient-to-r from-[#DBAC2C] to-[#8047F8] p-[0.9px] rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px]">
              {/* Conteúdo com fundo branco */}
              <div className="bg-white p-10 rounded-tl-[6px] rounded-tr-[36px] rounded-bl-[36px] rounded-br-[6px] text-[#574F4D] font-roboto text-lg">
                
                {/* Localização */}
                <div className="flex gap-3 items-center mb-6">
                  <img src={locationIcon} className="w-10" alt="" />
                  <div>
                    <p>Entrega em {}, 102 </p>
                    <p>Farrapos - Porto Alegre, RS</p>
                  </div>
                </div>

                {/* Previsão de entrega */}
                <div className="flex gap-3 items-center mb-6">
                  <img src={timeIcon} className="w-10" alt="" />
                  <div>
                    <p>Previsão de entrega </p>
                    <p>20 min - 30 min </p>
                  </div>
                </div>

                {/* Pagamento */}
                <div className="flex gap-3 items-center">
                  <img src={dolarIcon} className="w-10" alt="" />
                  <div>
                    <p>Pagamento na entrega</p>
                    <p>Cartão de Crédito</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Imagem do entregador */}
            <div>
              <img src={entregador} alt="" />
            </div>
          </div>
      </div>
    </>
  )
}
