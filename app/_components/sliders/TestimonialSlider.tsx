'use client'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react"
import 'swiper/css';
import Image from "next/image";
import Rating from "../Rating";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

interface ISlide {
    testimonials: { image: string; name: string; review: string, rating: number }[]
}

const TestimonialSlider: React.FC<ISlide> = ({ testimonials }) => {
    return (
        <div className="relative py-6 w-full ">
            <Swiper
                className="!static overflow-auto mySwiper flex items-center"
                slidesPerView={1}
                spaceBetween={24}
                breakpoints={{
                    640: {
                        slidesPerView: 3
                    }
                }}
            >
                {testimonials.map(({ image, name, rating, review }) => (
                    <SwiperSlide className="" key={name}>
                        <div className="p-[30px] rounded-[20px] border border-white-95 sm:p-10">
                            <div className="flex items-center gap-x-[10px]">
                                <div className="relative bg-[#FFEEB2] rounded-full overflow-hidden size-[50px]">
                                    <Image src={image} alt={name} fill />
                                </div>
                                <div>
                                    <p className="font-medium text-grey-15">{name}</p>
                                    <Rating value={rating} />
                                </div>
                                <div className="relative ml-auto w-[32px] h-[25px]">
                                    <Image src="/assets/images/quotes.svg" alt="quotes" fill />
                                </div>
                            </div>
                            <p className="mt-[30px] text-grey-30">{review}</p>
                        </div>
                    </SwiperSlide>
                ))}
                <PrevButton />
                <NextButton />
            </Swiper>

        </div>
    )
}

export default TestimonialSlider

const PrevButton = () => {
    const swiper = useSwiper()
    return (
        <button onClick={() => swiper.slidePrev()} className="left-[45%] sm:-left-5 translate-x-[-100%] sm:translate-x-0 z-10 absolute flex justify-center items-center border-grey-70 border rounded-full cursor-pointer sm:top-[50%] sm:-translate-y-[50%] size-8 sm:size-12">
            <ChevronLeftIcon className="text-grey-40 size-5" />
        </button>
    )
}

const NextButton = () => {
    const swiper = useSwiper()
    const isLastSlide = swiper.isEnd
    console.log(isLastSlide)
    return (
        <button onClick={() => swiper.slideNext()} className={`right-[45%] sm:-right-5 translate-x-[50%] sm:translate-x-0 z-10 absolute flex justify-center items-center border-grey-70 border rounded-full cursor-pointer sm:top-[50%] sm:-translate-y-[50%] size-8 sm:size-12 `}>
            <ChevronRightIcon className="size-5" />
        </button>
    )
}