import { FilledButton, OutlinedButton } from "@/app/_components/Button";
import FAQSection from "@/app/_components/FAQSection";
import TestimonialSlider from "@/app/_components/sliders/TestimonialSlider";
import { ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const ProductDetail = () => {
  return (
    <main className="page-contents">
      <section className="flex flex-col sm:flex-row gap-10">
        <div className="w-[560px] max-w-full h-[347px] sm:h-[565px] relative">
          <div className="absolute left-[50%] translate-x-[-50%] sm:translate-x-0 sm:left-5 z-20 bg-absolute-white border border-white-95 rounded-lg flex flex-row sm:flex-col gap-3 top-[100%] sm:top-[50%] translate-y-[-50%] p-[10px]">
            <button className="w-[63px] h-[46px] rounded bg-white-90 flex items-center justify-center">
              <div className="h-[100%] aspect-square relative">
                <Image src="/assets/images/product1.png" alt="product" fill />
              </div>
            </button>
            <button className="w-[63px] h-[46px] rounded bg-white-90 flex items-center justify-center">
              <div className="h-[100%] aspect-square relative">
                <Image src="/assets/images/product2.png" alt="product" fill />
              </div>
            </button>
            <button className="w-[63px] h-[46px] rounded bg-white-90 flex items-center justify-center">
              <div className="h-[100%] aspect-square relative">
                <Image src="/assets/images/product3.png" alt="product" fill />
              </div>
            </button>
          </div>
          <Image src="/assets/images/product1.png" alt="product" fill />
        </div>
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-6 sm:flex-row justify-between">
            <div>
              <p className="inline-block mr-[6px] text-grey-40">
                Men's Casual Outwear
              </p>
              <span className="bg-yellow-70 text-grey-15 font-medium py-[2px] px-[10px] rounded-full">
                12 Left!
              </span>
              <div className="mt-1 gap-[10px] flex items-center sm:items-start justify-between sm:flex-col ">
                <h3>Urban Explorer Denim Jacket</h3>
                <h2 className="font-bold">$69.99</h2>
              </div>
            </div>
            <div className="flex gap-x-[10px]">
              <FilledButton
                icon={
                  <ShoppingBagIcon className="size-5 text-absolute-white" />
                }
                className="!text-absolute-white flex-1 sm:flex-none !bg-grey-15"
              >
                Buy Now
              </FilledButton>
              <OutlinedButton
                className="flex-1 sm:flex-none"
                icon={<ShoppingCartIcon className="size-5 text-grey-15" />}
              >
                Add To Cart
              </OutlinedButton>
            </div>
          </div>
          <div className="rounded-[14px] grid grid-cols-2 gap-4 p-5 sm:p-6 border border-white-95">
            <div className="space-y-2">
              <p className="text-grey-15 font-medium">Material</p>
              <p className="text-grey-40">High-Quality Denim (100% Cotton)</p>
            </div>
            <div className="space-y-2">
              <p className="text-grey-15 font-medium">Fit</p>
              <p className="text-grey-40">Classic Fit</p>
            </div>
            <div className="space-y-2">
              <p className="text-grey-15 font-medium">Color</p>
              <div className="flex gap-x-1 w-fit py-[6px] px-[9px] border border-white-95 rounded-full">
                {_colors.map((color) => (
                  <button
                    className={`h-5 aspect-square rounded-full bg-[${color}]`}
                    key={color}
                  ></button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-grey-15 font-medium">Sizes</p>
              <div className="flex flex-wrap gap-[6px]">
                {_sizes.map((size) => (
                  <button
                    className="rounded h-[34px] text-grey-15 aspect-square bg-white-97 border border-white-95"
                    key={size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="p-5 sm:p-6 rounded-[14px] border border-white-95">
            <p className="font-medium mb-4 !text-[18px] text-grey-15">
              Shipping Information
            </p>
            <ul className="list-disc pl-6 text-[14px] sm:text-[16px] space-y-[10px]">
              <li>Standard shipping: 3-5 business days</li>
              <li>Express shipping options available at checkout</li>
            </ul>
          </div>
          <div className="p-5 sm:p-6 rounded-[14px] border border-white-95">
            <p className="font-medium mb-4 !text-[18px] text-grey-15">
              Features
            </p>
            <ul className="list-disc pl-6 text-[14px] sm:text-[16px] space-y-[10px]">
              <li>Distressed detailing for a rugged look</li>
              <li>Button-up front closure with engraved metal buttons</li>
              <li>Two side pockets for added functionality</li>
              <li>Adjustable buttoned cuffs for a personalized fit</li>
              <li>Back waist tabs for customizable styling</li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="section-header">
          <h1 className="section-title">REVIEWS</h1>
          <span className="section-subtitle">PRODUCT REVIEWS</span>
        </div>
        <p className="section-tagline mb-[60px]">
          At Klothink, our customers are the heartbeat of our brand. Explore the
          heartfelt testimonials shared by those who have experienced the magic
          of Klothink fashion.
        </p>
        <TestimonialSlider testimonials={_testimonials} />
      </section>
      <section>
        <FAQSection />
      </section>
    </main>
  );
};

export default ProductDetail;

const _testimonials = [
  {
    name: "Sarah Thompson",
    image: "/assets/images/user1.png",
    review:
      "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    image: "/assets/images/user1.png",
    review:
      "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    rating: 4,
  },
  {
    name: "Emily Walker",
    image: "/assets/images/user1.png",
    review:
      "Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.",
    rating: 5,
  },
  {
    name: "James Walker",
    image: "/assets/images/user1.png",
    review:
      "Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.",
    rating: 5,
  },
  {
    name: "John Walker",
    image: "/assets/images/user1.png",
    review:
      "Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.",
    rating: 5,
  },
];

const _sizes = ["S", "M", "L", "XL"];
const _colors = ["#DAA573", "#DAD673", "#262626"];
