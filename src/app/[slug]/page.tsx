import Add from "@/components/Add"
import CustomizeProducts from "@/components/CustomizeProducts"
import ProductImages from "@/components/ProductImages"
import Image from "next/image"

const SinglePage = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 pb-32">
            {/**IMAGE */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
                <ProductImages/>
            </div>
            {/**TEXTS */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-xl font-medium">Product Name</h1>
                <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, quasi ab odio nisi debitis eaque rem accusamus maiores ducimus perferendis ipsa eum recusandae quas? Iure deserunt magnam dolorum suscipit repudiandae!</p>
                <div className="h-[2px] bg-gray-100"></div>
                <div className="flex items-center gap-4">
                    <h3 className="text-xl text-gray-500 line-through">$59</h3>
                    <h2 className="font-medium text-2xl">$49</h2>
                </div>
                <div className="h-[2px] bg-gray-100"></div>
                <CustomizeProducts/>
                <Add/>
                <div className="h-[2px] bg-gray-100">
                    <div className="text-sm">
                        <h4 className="font-medium mb-4">Title</h4>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio mollitia, iure officiis consequatur rerum sunt, quod nostrum officia corrupti aliquid ut quos amet totam, blanditiis qui debitis natus molestiae.
                        </p>
                    </div>

                    <div className="text-sm">
                        <h4 className="font-medium mb-4">Title</h4>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio mollitia, iure officiis consequatur rerum sunt, quod nostrum officia corrupti aliquid ut quos amet totam, blanditiis qui debitis natus molestiae.
                        </p>
                    </div>

                    <div className="text-sm">
                        <h4 className="font-medium mb-4">Title</h4>
                        <p className="">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem distinctio mollitia, iure officiis consequatur rerum sunt, quod nostrum officia corrupti aliquid ut quos amet totam, blanditiis qui debitis natus molestiae.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage