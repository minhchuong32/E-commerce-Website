import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

  const totalAmount = getCartAmount()

  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={"CART"} text2={"TOTAL"} />
        </div>
        <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency}{totalAmount}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Delivery Fee</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Total</p>
                <p>{currency}{totalAmount + delivery_fee}.00</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal