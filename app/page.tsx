import Image from "next/image";
import { FilledButton, OutlinedButton, Pill } from "./_components/Button";
import { LifebuoyIcon, LightBulbIcon, ShoppingBagIcon, SparklesIcon, SpeakerWaveIcon, StarIcon, SunIcon } from "@heroicons/react/16/solid";
import ProductCard from "./_components/ProductCard";
import Rating from "./_components/Rating";
import Faq from "./_components/Faq";

export default function Home() {
  const _heroFeatures = [
    {
      title: 'Trendsetting Styles',
      description: 'Over 1000+',
    },
    {
      title: 'Customer Satisfaction Rate',
      description: '99%',
    },
    {
      title: 'Shopping Convenience',
      description: '24/7',
    },
    {
      title: 'Hassle-Free Returns',
      description: '30-DAY',
    },
  ]
  const _categories = ['ALL', 'MENSWEAR', 'WOMENSWEAR', 'KIDSWEAR'];
  const _subCategries = ['Casual', 'Formal', 'Party'];
  return (
    <main className="flex flex-col gap-y-[150px] px-20 pt-20">
      <section className="flex gap-x-[60px]">
        <div className="flex-1">
          <div className="relative w-fit">
            <h1>ELEVATE YOUR STYLE WITH <br /> KLOTHINK</h1>
            <span className="top-0 right-0 absolute translate-x-[150%] shrink-0">STYLE REDIFINED</span>
          </div>
          <p className="pt-5 pb-10">Explore a world of fashion at Klothink, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.</p>
          <div className="flex gap-x-2">
            <FilledButton icon={<ShoppingBagIcon className="text-black size-5" />}>Shop Now</FilledButton>
            <OutlinedButton>Contact Us</OutlinedButton>
          </div>
          <div className="gap-4 grid grid-cols-2 bg-white-97 mt-[60px] p-4">
            {_heroFeatures.map(({ description, title }) => (
              <div key={title} className="bg-absolute-white flex flex-col p-6 rounded-xl">
                <h2>{description}</h2>
                <p className="text-grey-40">{title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative bg-[#F7F7F8] w-[544px]">
          <Image src="/assets/images/product1.png" alt="hero" fill />
          <div className="bottom-4 left-0 absolute flex justify-between items-center px-4 w-full">
            <div className="bg-absolute-white flex gap-x-[6px] px-[10px] py-2 rounded-full">
              <span>Color</span>
              <div className="border-white-95 p-1 border rounded-full">

              </div>
            </div>
            <div className="bg-absolute-white flex items-center gap-x-[2px] px-4 py-2 rounded-full">
              <span className="mr-1 font-medium text-grey-15">Sizes</span>
              <Pill>S</Pill>
              <Pill>M</Pill>
              <Pill>L</Pill>
              <Pill>XL</Pill>
            </div>
            <button className="bg-absolute-white flex items-center p-2 pl-[14px] rounded-full">View Similar </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center gap-x-[150px]">
          <div>
            <div className="relative w-fit">
              <h1>DISCOVER FASHION.</h1>
              <span className="top-0 right-0 absolute translate-x-[110%] shrink-0">PRODUCTS</span>
            </div>
            <p className="mt-5">Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion.</p>
          </div>
          <FilledButton>View All Products</FilledButton>
        </div>
        <div className="flex justify-between items-center my-[60px]">
          <div className="flex gap-x-8">
            {_categories.map((category) => (
              <button key={category} className="text-grey-40">{category}</button>
            ))}
          </div>
          <div className="flex gap-x-2 border-white-95 border-y py-6">
            {_subCategries.map((category) => (
              <FilledButton key={category} className="text-absolute-white bg-grey-15">{category}</FilledButton>
            ))}
          </div>
        </div>
        <div className="gap-x-[30px] grid grid-cols-4">
          {_productsList.map(({ image, name, price }) => (
            <ProductCard key={name} name={name} image={image} price={price} />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center gap-x-[150px]">
          <div>
            <div className="relative w-fit">
              <h1>THE KLOTHINK EXPERIENCE.</h1>
              <span className="top-0 right-0 absolute translate-x-[110%] shrink-0">ABOUT US</span>
            </div>
            <p className="mt-5">At Klothink, we breathe life into fashion, blending creativity with commitment. Our journey is fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and embracing a community where every purchase tells a story.</p>
          </div>
        </div>
        <div className="gap-5 grid grid-cols-3 py-5">
          {_aboutUs.map(({ tagline, title, icon }) => (
            <div key={title} className="p-[30px]">
              <div className="flex items-center gap-x-[10px]">
                <div className="flex justify-center items-center bg-yellow-50 rounded-full size-12">
                  {icon}
                </div>
                <h3>{title}</h3>
              </div>
              <span className="block mt-5">{tagline}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center gap-x-[150px]">
          <div>
            <div className="relative w-fit">
              <h1>CUSTOMERS LOVE.</h1>
              <span className="top-0 right-0 absolute translate-x-[110%] shrink-0">TESTIMONIALS</span>
            </div>
            <p className="mt-5">At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion.</p>
          </div>
          <FilledButton>View All Testimonials</FilledButton>
        </div>
        <div className="gap-x-5 grid grid-cols-3 mt-[60px] p-6">
          {_testimonials.map(({ image, name, rating, review }) => (
            <div key={name} className="p-10">
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
          ))}
        </div>
      </section>
      <section>
        <div>
          <div className="relative w-fit">
            <h1>Questions? We Have Answers.</h1>
            <span className="top-0 right-0 absolute translate-x-[110%] shrink-0">FAQ</span>
          </div>
          <p className="mt-5">Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion.</p>
        </div>
        <div className="gap-x-[30px] grid grid-cols-3 mt-[60px]">
          <div className="flex flex-col gap-5">
            <Faq />
            <Faq />
            <Faq />
            <Faq />
          </div>
          <div className="flex flex-col gap-5">
            <Faq />
            <Faq />
            <Faq />
            <Faq />
            <Faq />
          </div>
          <div className="flex flex-col gap-5">
            <Faq />
            <Faq />
            <Faq />
            <Faq />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center gap-x-[150px]">
          <div>
            <div className="relative w-fit">
              <h1>Seamless Experience.</h1>
              <span className="top-0 right-0 absolute uppercase translate-x-[110%] shrink-0">How it Works ?</span>
            </div>
            <p className="mt-5">At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease.</p>
          </div>
        </div>
        <div className="gap-4 grid grid-cols-4 p-4">
          {_howItWorks.map(({ tagline, title }, index) => (
            <div key={title} className="border-white-95 p-6 border rounded-[14px]">
              <span className="h-fit font-semibold text-[60px] text-white-90 leading-[150%]">0{index + 1}</span>
              <h3 className="mt-5 mb-[6px] text-[#333333]">{title}</h3>
              <span>{tagline}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const _aboutUs = [
  {
    title: 'Passionate Craftsmanship',
    icon: <StarIcon className="text-grey-15 size-5" />,
    tagline: 'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.'
  },
  {
    title: 'Fashion Forward',
    icon: <LifebuoyIcon className="text-grey-15 size-5" />,
    tagline: "We're trendsetters, curating styles that empower and inspire confidence."
  },
  {
    title: 'Customer-Centric Approach',
    icon: <SpeakerWaveIcon className="text-grey-15 size-5" />,
    tagline: 'At Klothink, our customers are at the heart of everything we do.'
  },
  {
    title: 'Global Inspiration',
    icon: <LightBulbIcon className="text-grey-15 size-5" />,
    tagline: 'Influenced by global trends, we bring you a diverse and dynamic collection.'
  },
  {
    title: 'Empowering Your Style',
    icon: <SparklesIcon className="text-grey-15 size-5" />,
    tagline: 'Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression.'
  },
  {
    title: 'Sustainable Practices',
    icon: <SunIcon className="text-grey-15 size-5" />,
    tagline: 'Klothink is committed to sustainability, integrating eco-friendly practices into our production process.'
  }
]

const _howItWorks = [
  {
    title: 'Discover Trends',
    tagline: 'Explore our curated collection of over 1000 styles'
  },
  {
    title: 'Secure Checkout',
    tagline: 'Add your items to the cart and proceed to our secure checkout.'
  },
  {
    title: 'Swift Dispatch',
    tagline: 'Experience 95% same-day dispatch on orders.'
  },
  {
    title: 'Unbox Happiness',
    tagline: 'Receive your carefully packaged Klothink order.'
  },
]

const _productsList = [
  {
    name: 'Classic Denim Jeans',
    image: '/assets/images/product5.png',
    price: '49.99'
  },
  {
    name: 'Cozy Comfort Hoodie',
    image: '/assets/images/product2.png',
    price: '49.99'
  },
  {
    name: 'Classic Polo Shirt',
    image: '/assets/images/product3.png',
    price: '49.99'
  },
  {
    name: 'Chino Pants',
    image: '/assets/images/product4.png',
    price: '49.99'
  },
]

const _testimonials = [
  {
    name: 'Sarah Thompson',
    image: '/assets/images/user1.png',
    review: "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    rating: 5
  },
  {
    name: 'Rajesh Patel',
    image: '/assets/images/user1.png',
    review: "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    rating: 4
  },
  {
    name: 'Emily Walker',
    image: '/assets/images/user1.png',
    review: "Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.",
    rating: 5
  },
]