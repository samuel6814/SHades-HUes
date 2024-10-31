"use cient"

import Image from "next/image"

const CartModal = () => {

    const CartItems = true

    return (
        <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">Ghana Must GO
        {!CartItems ? (
            <div className="">Cart is Empty</div>
        ) : (
            <>
            <h2 className="text-xl">Carrito de compras</h2>
            {/* //List */}
            <div className="flex flex-col gap-8">
                {/**ITEM 1 */}
            

            <div className="flex gap-4">
                <Image src="https://images.pexels.com/photos/27383293/pexels-photo-27383293/free-photo-of-a-woman-in-a-baseball-cap-and-black-leggings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96} className="objct-cover rounded-md" />
            <div className="flex flex-col justify-between w-full">
                {/*TOP*/}
                <div className="">
                    {/*TITLE*/} 
                    <div className="items-center justify-between gap-8">
                        <h3 className="font-semibold">Product Name</h3>
                        <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                    </div>
                    {/*DESCRIPTION*/} 
                    <div className="text-sm text-gray-500">
                        available
                        </div>  
                </div>
                {/*BOTTOM*/}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                </div>
            </div>


            </div>

             {/**ITEM 2*/}
            

             <div className="flex gap-4">
                <Image src="https://images.pexels.com/photos/27383293/pexels-photo-27383293/free-photo-of-a-woman-in-a-baseball-cap-and-black-leggings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96} className="objct-cover rounded-md" />
            <div className="flex flex-col justify-between w-full">
                {/*TOP*/}
                <div className="">
                    {/*TITLE*/} 
                    <div className="items-center justify-between gap-8">
                        <h3 className="font-semibold">Product Name</h3>
                        <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                    </div>
                    {/*DESCRIPTION*/} 
                    <div className="text-sm text-gray-500">
                        available
                        </div>  
                </div>
                {/*BOTTOM*/}
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                </div>
            </div>


            </div>


            </div>

            
            {/* //BOTTOM */}
        <div className="">
            <div className=" flex items-center justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">$49</span>

            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
                Shipping and taxex calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 ">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
            </div>
        </div>    
        </>    

        )}
        </div>
        
    )
}

export default CartModal