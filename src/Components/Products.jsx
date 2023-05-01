import React from "react";
import Image from "next/image";
import PriceList from "./PriceList";
import SectionTitle from "./SectionTitle";

const Products = () => {
  const [brand, setBrandOpen] = React.useState(false);
  return (
    <div className="container mx-auto max-w-screen-xl products">
      <SectionTitle title={"Pricing"} />
      {/* wraper */}
      <div className="flex flex-wrap flex-row justify-center">
        {/* top brands */}
        <div className="w-full p-4 sm:w-full md:w-1/2 lg:w-1/2">
          <div
            className="mb-8 text-center cursor-pointer sm:cursor-pointer lg:cursor-default md:cursor-default xl:cursor-default"
            onClick={() => setBrandOpen(!brand)}
          >
            <picture>
              <source type="image/webp" srcSet="top-brands-icon.webp" />
              <source type="image/png" srcSet="top-brands-icon.png" />
              <Image
                src="/top-brands-icon.png"
                alt="Top brands"
                className="w-10 mr-2 inline-block"
                width={500}
                height={500}
              />
            </picture>
            <h2 className="inline-block mt-5 mb-1">Price Lists</h2>
            <picture>
              <source type="image/webp" srcSet="arrow.webp" />
              <source type="image/png" srcSet="arrow.png" />
              <img
                src="arrow.png"
                className={
                  "inline-block w-6 ml-4 sm:inline-block md:hidden lg:hidden " +
                  (brand ? "transform rotate-180" : null)
                }
              />
            </picture>
          </div>

          <div
            className={"lg:block md:block " + (brand ? "block mb-3" : "hidden")}
          >
            <PriceList />
          </div>
          <hr className="block sm:block md:hidden lg:hidden" />
        </div>
      </div>
      <style jsx>{`
        h2 {
          font-size: 24px;
          line-height: 29px;
          color: #4d4949;
        }
        @media screen and (max-width: 1400px) {
          .products {
            max-width: 90%;
          }
        }
        @media screen and (max-width: 1024px) {
          .products {
            max-width: 86%;
          }
        }
      `}</style>
    </div>
  );
};
export default Products;
