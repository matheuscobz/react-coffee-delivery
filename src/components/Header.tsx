import { useNavigate } from 'react-router-dom'
import logo from '../../public/Logo.svg'
import iconLocation from '../../public/button-location.svg'
import { CartButton } from './CartButton'

export function Header() {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/')
  }

  return ( 
    
    <header className="flex justify-between my-8 mx-40">
      <button onClick={handleNavigate}>
        <img src={logo} alt="" />
      </button>

      <div className="flex gap-3">

        <div className="flex justify-center items-center bg-purple-100 rounded-md">
          <button className="flex items-center mx-2">
            <img  className="mr-2" src={iconLocation} alt="" />
            <span className="font-roboto text-purple-900">Arapongas, PR</span>
          </button>
        </div>
        
        <CartButton />
      </div>

      
    </header>
  )
}