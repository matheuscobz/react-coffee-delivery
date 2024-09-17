import imagem from '../../public/banner-image.svg'
import iconCart from '../../public/banner-cart.svg'
import iconTimer from '../../public/banner-timer.svg'
import iconPackage from '../../public/banner-package.svg'
import iconCoffe from '../../public/banner-coffe.svg'

export function Banner() {
  return (
    <div className="flex items-center justify-between mx-40 my-24 gap-14">
      <div className="flex flex-col max-w-[750px]">
          <h1 className="font-nunito font-extrabold text-5xl text-[#272221]">Encontre o café perfeito para qualquer hora do dia</h1>
          <h3 className="font-roboto text-xl tracking-wide mt-4 mb-16 text-[#403937]">Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora.</h3>
  
        <div className="flex min-w-[750px]">
          
          <div className="grid grid-cols-2 gap-10 font-roboto text-[#574F4D] text-lg">
            <div className="flex items-center gap-2">
              <img src={iconCart} alt="" />
              <p>Compra simples e segura</p>
            </div>
            
            <div className="flex items-center gap-2">
              <img src={iconTimer} alt="" />
              <p>Entrega rápida e rastreada</p>
            </div>

            <div className="flex items-center gap-2">
              <img src={iconPackage} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </div>

            <div className="flex items-center gap-2">
              <img src={iconCoffe} alt="" />
              <p>O café chega fresquinho até você</p>
            </div>
             
          </div>

        </div>
      </div>

      <img className="flex-grow-0" src={imagem} alt="" />
    </div>
  )
}