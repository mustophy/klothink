import { IProduct } from "@/interface";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const ProductCard: React.FC<IProduct> = ({ name, image, price }) => (
    <div>
        <div className="relative h-[318px]">
            <div className="top-0 left-0 absolute bg-[#D9D9D9]/20 rounded-2xl w-full h-full">
                <Image src={image} alt="product" fill />
            </div>
            <div className="-right-4 -bottom-4 absolute bg-white-99 p-4 rounded-full">

                <button className="flex justify-center items-center bg-yellow-50 rounded-full hover:invert-[0.15] duration-300 size-[52px]">
                    <ShoppingCartIcon className="text-grey-15 size-5" />
                </button>
            </div>
        </div>
        <p className="mt-5 mb-2 font-semibold text-grey-15">{name}</p>
        <p className="font-medium text-grey-30">${price}</p>
    </div>
)

export default ProductCard;