'use client'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react"
import 'swiper/css';
import Image from "next/image";
import Rating from "../Rating";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import ProductCard from "../ProductCard";
import { IProduct } from "@/interface";

interface ISlide {
    products: IProduct[]
}

const ProductSlider: React.FC<ISlide> = ({ products }) => {
    return (
        <div className="relative">
            <Swiper
                className="!static overflow-auto mySwiper"
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 4
                    }
                }}
            >
                {products.map(({ desc, image, name, price }) => (
                    <SwiperSlide className="pr-5" key={name}>
                        <ProductCard key={name} image={image} desc={desc} name={name} price={price} />
                    </SwiperSlide>
                ))}
                <PrevButton />
                <NextButton />
            </Swiper>

        </div>
    )
}

export default ProductSlider

const PrevButton = () => {
    const swiper = useSwiper()
    return (
        <button onClick={() => swiper.slidePrev()} className="top-0 -left-3 sm:-left-5 z-10 absolute flex justify-center items-center border-grey-70 border rounded-full cursor-pointer center-y size-8 sm:size-12">
            <ChevronLeftIcon className="text-grey-40 size-5" />
        </button>
    )
}

const NextButton = () => {
    const swiper = useSwiper()
    const isLastSlide = swiper.isEnd
    console.log(isLastSlide)
    return (
        <button onClick={() => swiper.slideNext()} className={`top-0 -right-3 sm:-right-5 z-10 absolute flex justify-center items-center border-grey-70 border rounded-full cursor-pointer center-y size-8 sm:size-12 `}>
            <ChevronRightIcon className="size-5" />
        </button>
    )
}