import Image from "next/image";
import { Pill } from "../_components/Button";
import ProductSlider from "../_components/sliders/ProductSlider";

const ProductsPage = () => {
  return (
    <main className="page-contents !gap-y-[60px]">
      <section className="grid gap-y-[30px] sm:grid-cols-2 gap-x-[50px]">
        <div>
          <div className="section-header">
            <h1 className="section-title">DISCOVER NOW</h1>
            <span className="section-subtitle">PRODUCTS</span>
          </div>
          <p className="section-tagline">
            Dive into the world of fashion excellence at Klothink. Our curated
            selection brings together the latest trends and timeless classics,
            offering you a diverse array of clothing items that resonate with
            your unique style.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-5 justify-between h-fit border rounded-[20px] border-white-95 px-5 sm:px-10 py-5 sm:py-[30px]">
          <div>
            <h3 className="mb-[10px]">Exclusive Offers</h3>
            <span>30% off on select items</span>
          </div>
          <div className="pl-4 sm:px-4 border-l sm:border-x border-white-95">
            <h3 className="mb-[10px]">New Arrivals</h3>
            <span>50+ new arrivals Daily</span>
          </div>
          <div className="w-full sm:w-fit">
            <h3 className="mb-[10px]">Over 1,500 +</h3>
            <span>Curated fashion products.</span>
          </div>
        </div>
      </section>
      <section className="flex items-center sm:justify-center gap-x-[10px] w-auto overflow-scroll scrollbar-hide ">
        <button className="px-5 py-[14px] text-[14px] relative rounded-full bg-white-97 border border-white-95 shrink-0">
          ALL
        </button>
        <button className="px-5 py-[14px] text-[14px] relative rounded-full bg-white-97 border border-white-95 shrink-0 flex items-center gap-x-[6px]">
          <div className="h-[16px] relative w-[18px]">
            <Image src="/assets/images/men-wear.svg" alt="wear" fill />
          </div>
          MEN'S WEAR
        </button>
        <button className="px-5 py-[14px] text-[14px] relative rounded-full bg-white-97 border border-white-95 shrink-0 flex items-center gap-x-[6px]">
          <div className="h-[16px] relative w-[18px]">
            <Image src="/assets/images/women-wear.svg" alt="wear" fill />
          </div>
          WOMEN'S WEAR
        </button>
        <button className="px-5 py-[14px] text-[14px] relative rounded-full bg-white-97 border border-white-95 shrink-0 flex items-center gap-x-[6px]">
          <div className="h-[16px] relative w-[18px]">
            <Image src="/assets/images/kids-wear.svg" alt="wear" fill />
          </div>
          KID'S WEAR
        </button>
      </section>
      <section>
        <h2>Casual Collection</h2>
        <p className="mt-1 mb-10">
          Embrace an active lifestyle with our performance-driven men's wear,
          designed for comfort and flexibility.
        </p>
        <ProductSlider products={_productsList} />
      </section>
      <section>
        <h2>Formal Elegance</h2>
        <p className="mt-1 mb-10">
          Embrace an active lifestyle with our performance-driven men's wear,
          designed for comfort and flexibility.
        </p>
        <ProductSlider products={_productsList} />
      </section>
      <section>
        <h2>Active Lifestyle</h2>
        <p className="mt-1 mb-10">
          Embrace an active lifestyle with our performance-driven men's wear,
          designed for comfort and flexibility.
        </p>
        <ProductSlider products={_productsList} />
      </section>
    </main>
  );
};

export default ProductsPage;

const _productsList = [
  {
    name: "Classic Denim Jeans",
    image: "/assets/images/product5.png",
    price: "49.99",
    desc: "Slim Fit",
  },
  {
    name: "Cozy Comfort Hoodie",
    image: "/assets/images/product2.png",
    price: "49.99",
    desc: "Slim Fit",
  },
  {
    name: "Classic Polo Shirt",
    image: "/assets/images/product3.png",
    price: "49.99",
    desc: "Slim Fit",
  },
  {
    name: "Chino Pants",
    image: "/assets/images/product4.png",
    price: "49.99",
    desc: "Slim Fit",
  },
];
