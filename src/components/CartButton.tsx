import { useNavigate } from 'react-router-dom'
import cart from '/shopping-cart-button.svg'

export function CartButton(){
  const navigate = useNavigate()

  function handleNavigate(){
    navigate('/checkout')
  }

  return (
    <button onClick={handleNavigate} className="flex">
      <img className="bg-[#4B2995] p-2 rounded-md " src={cart} alt="" />
    </button>
  )
}