import CartProgress from "../../components/CartProgress";
import ShopBanner from "../../components/ShopBanner";
import useCarts from "../../hooks/useCarts";

export const Checkout = () => {
  const [allCarts, refetch, isLoading] = useCarts();
  console.log(allCarts);
  return (
    <section className="mt-32 mb-24">
      <div className="bg-text_white py-24 text-center">
        <ShopBanner routePath="checkout" />
      </div>

      <div className="container mx-auto">
        {/* progress ----------start */}
        <CartProgress
          bgColor2="bg-[#294CFF]"
          whiteText2={"text-text_white"}
          primaryLiteText={"text-primary_hover_color"}
          primaryLiteText3={"text-primary_hover_color"}
        />
        {/* progress ----------end */}

        <form>
          <div className="flex gap-12">
            {/* left */}
            <div className=" w-full ">
              <h3 className="font-Poppins font-bold text-2xl mb-11">
                Billing details
              </h3>
              <div className="flex items-center justify-between">
                <div>
                  <legend className="mb-2 font-semibold  text-gray-500">
                    First name
                  </legend>
                  <input type="text" className="h-14  border w-[260px]" />
                </div>
                <div>
                  <legend className="mb-2 font-semibold  text-gray-500">
                    Last name
                  </legend>
                  <input type="text" className="h-14  border w-[260px]" />
                </div>
              </div>
              {/* company name */}
              <div className="mt-7">
                <legend className="mb-2 font-semibold  text-gray-500">
                  Company name (optional)
                </legend>
                <input type="text" className="h-14  border w-full" />
              </div>

              <div className="mt-7">
                <legend className="mb-2 font-semibold  text-gray-500">
                  Country / Region
                </legend>
                <select className="h-14  border w-full p-3 ">
                  <option selected className="text-gray-400">
                    Choose a country
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="mt-7">
                <legend className="mb-2 font-semibold  text-gray-500">
                  Street address
                </legend>
                <input
                  type="text"
                  placeholder="House number and street name"
                  className="h-14  border w-full p-3"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="h-14 mt-7 border w-full p-3"
                />
              </div>
              <div className="mt-7">
                <legend className="mb-2 font-semibold  text-gray-500">
                  Town / City
                </legend>
                <input type="text" className="h-14  border w-full" />
              </div>
              <div className="mt-7">
                <legend className="mb-2 font-semibold  text-gray-500">
                  District
                </legend>
                <input
                  type="text"
                  className="h-14 p-3 border w-full"
                  placeholder="Select an option…"
                />
              </div>
              <div className="mt-7">
                <legend className="mb-2 font-semibold  text-gray-500">
                  Postcode / ZIP
                </legend>
                <input type="text" className="h-14  border w-full" />
              </div>
              <div className="mt-7">
                <legend className="mb-2 font-semibold  text-gray-500">
                  Phone
                </legend>
                <input type="text" className="h-14  border w-full" />
              </div>
              <div className="mt-7">
                <legend className="mb-2 font-semibold  text-gray-500">
                  Email address
                </legend>
                <input type="text" className="h-14  border w-full" />
              </div>
            </div>

            {/* right */}
            <div className=" w-full">
              <h3 className="font-Poppins font-bold text-2xl mb-11">
                Additional information
              </h3>

              <div className="w-full">
                <legend className="mb-2 font-semibold  text-gray-500">
                  Order notes (optional)
                </legend>
                {/* <input type=""  /> */}
                <textarea
                  className="h-36 border w-full p-3"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
            </div>
          </div>

          {/* order data */}
          <div className="  mt-10 ">
            <h2 className="text-xl font-bold p-4">Your order</h2>
            <div className=" border rounded-md overflow-hidden">
              <div className="grid grid-cols-2 font-semibold bg-gray-50 px-4 py-3">
                <span>Product</span>
                <span>
                  <span className="text-right">Subtotal</span>
                </span>
              </div>
              {/* map cart---------------------- */}
              <div className="grid grid-cols-2 px-4 py-3 border-t border-gray-200">
                <span className="text-gray-700">
                  Golden Sunset <span className="font-semibold">× 5</span>
                </span>
                <span>
                  <span className="text-right">£127.50</span>
                </span>
              </div>
              <div className="grid grid-cols-2 px-4 py-3 border-t border-gray-200">
                <span className="text-gray-700">
                  Golden Sunset <span className="font-semibold">× 5</span>
                </span>
                <span>
                  <span className="text-right">£127.50</span>
                </span>
              </div>
              <div className="grid grid-cols-2 px-4 py-3 border-t border-gray-200">
                <span className="text-gray-700">
                  Golden Sunset <span className="font-semibold">× 5</span>
                </span>
                <span>
                  <span className="text-right">£127.50</span>
                </span>
              </div>

              <div className="grid grid-cols-2 font-semibold px-4 py-3 border-t border-gray-200">
                <span>Subtotal</span>
                <span>
                  {/* all  total count*/}
                  <span className="text-right">£382.5</span>
                </span>
              </div>
              <div className="grid grid-cols-2 font-bold px-4 py-4 bg-gray-100 border-t border-gray-300">
                <span>Total</span>
                <span className="">
                  <span className="text-right border-r">£382.5</span>
                </span>
              </div>
            </div>
          </div>
          <div className="grid justify-end mt-12">
            <button className="hidden  lg:block btn bg-primary_color px-8 hover:bg-primary_hover_color hover:duration-200 hover:transition-all text-white py-4 text-sm font-bold uppercase rounded-full">
            Place order
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};
