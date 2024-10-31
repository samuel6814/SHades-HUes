import Image from "next/image"
import Link from "next/link"

 const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
            <Image src=" https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=990"
             alt="" 
             fill sizes="25vw"
             className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
             />
             <Image src=" https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=990"
             alt="" 
             fill sizes="25vw"
            //  className="absolute object-cover rounded-md"
            //not working like i wanted it to
            />
            </div>
            <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold ">$99</span>

            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-kulture text-kulture  w-max hover:bg-kulture py-2 px-4 hover:bg-lama hover:text-white">Add to Cart</button>
             </Link>
            {/** New Item */}
            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
            <Image src=" https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=990"
             alt="" 
             fill sizes="25vw"
             className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
             />
             <Image src=" https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=990"
             alt="" 
             fill sizes="25vw"
             />
            </div>
            <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold ">$99</span>

            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-kulture text-kulture  w-max hover:bg-kulture py-2 px-4 hover:bg-lama hover:text-white">Add to Cart</button>
             </Link>
             {/** New Item */}
            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
            <Image src=" https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=990"
             alt="" 
             fill sizes="25vw"
             className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
             />
             <Image src=" https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=990"
             alt="" 
             fill sizes="25vw"
             />
            </div>
            <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold ">$99</span>

            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-kulture text-kulture  w-max hover:bg-kulture py-2 px-4 hover:bg-lama hover:text-white">Add to Cart</button>
             </Link>
             {/** New Item */}
            <Link href="/test" className=" w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
            <div className="relative w-full h-80">
            <Image src=" https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=990"
             alt="" 
             fill sizes="25vw"
             className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
             />
             <Image src=" https://images.pexels.com/photos/2005356/pexels-photo-2005356.jpeg?auto=compress&cs=tinysrgb&w=990"
             alt="" 
             fill sizes="25vw"
             />
            </div>
            <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold ">$99</span>

            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-kulture text-kulture  w-max hover:bg-kulture py-2 px-4 hover:bg-lama hover:text-white">Add to Cart</button>
             </Link>
        </div>
    )
 }

 export default ProductList