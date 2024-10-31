"use client"
import Image from "next/image"
import { useState } from "react";

const images = [
    { id: 1,
     url:"https://images.pexels.com/photos/1936154/pexels-photo-1936154.jpeg?auto=compress&cs=tinysrgb&w=600"
    },

    { id: 2,
        url:"https://images.pexels.com/photos/2036102/pexels-photo-2036102.jpeg?auto=compress&cs=tinysrgb&w=600"
       },

       { id: 3,
        url:"https://images.pexels.com/photos/1424981/pexels-photo-1424981.jpeg?auto=compress&cs=tinysrgb&w=600"
       },

       { id: 4,
        url:"https://images.pexels.com/photos/3190174/pexels-photo-3190174.jpeg?auto=compress&cs=tinysrgb&w=600"
       },
    ];

const ProductImages = () => {

    const [index,setIndex] = useState(0)
    return (
        <div className="">
            <div className="h-[500px] relative ">
                <Image src={images[index].url} alt="" fill sizes="50vw" className="object-cover rounded-md "/>
            </div>

            <div className="flex justify-between gap-4 mt-8">
            {images.map((img, i) => (
            <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={img.id} onClick={() => setIndex(i)}>

           
              <Image src="" alt="" fill sizes="30vw" className="object-cover rounded-md"/>  
           

            
        </div>
        ))}
        </div>
    </div>
    )
}

export default ProductImages 