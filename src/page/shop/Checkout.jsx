import CartProgress from "../../components/CartProgress";
import ShopBanner from "../../components/ShopBanner";
import useCarts from "../../hooks/useCarts";
import {useForm}from "react-hook-form"

export const Checkout = () => {
  const [allCarts, refetch, isLoading] = useCarts();


const subtotal = allCarts.reduce((sum,cart)=>sum+cart.price*cart.quantity,0).toFixed(2)


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
const onSubmit = data => console.log(data)




  return (
    <section className="mt-32 mb-24">
  <div className="bg-text_white py-24 text-center">
    <ShopBanner routePath="checkout" />
  </div>

  <div className="container mx-auto px-4">
    {/* Progress */}
    <CartProgress
      bgColor2="bg-[#294CFF]"
      whiteText2="text-text_white"
      primaryLiteText="text-primary_hover_color"
      primaryLiteText3="text-primary_hover_color"
    />

    <form onSubmit={handleSubmit(onSubmit)}>




      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left */}
        <div className="w-full">
          <h3 className="font-Poppins font-bold text-2xl mb-11">
            Billing details
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="w-full">
              <legend className="mb-2 font-semibold text-gray-500">
                First name
              </legend>
              <input type="text"  {...register("firstName",{required:true})}  className="h-14 border w-full p-3" />
            </div>
            <div className="w-full">
              <legend className="mb-2 font-semibold text-gray-500">
                Last name
              </legend>
              <input type="text" {...register("lastName")} className="h-14 border w-full p-3" />
            </div>
          </div>

          {/* Company name */}
          <div className="mt-7">
            <legend className="mb-2 font-semibold text-gray-500">
              Company name (optional)
            </legend>
            <input type="text" {...register("companyName")} className="h-14 border w-full p-3" />
          </div>

          {/* Country */}
          <div className="mt-7">
            <legend className="mb-2 font-semibold text-gray-500">
              Country / Region
            </legend>
            <select   {...register("country")} className="h-14 border w-full p-3">
              <option  className="text-gray-400">
                Choose a country
              </option>
              <option value="BD">Bangladesh</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          {/* Street */}
          <div className="mt-7">
            <legend className="mb-2 font-semibold text-gray-500">
              Street address
            </legend>
            <input
              type="text"
              {...register("streetAddress")}
              placeholder="House number and street name"
              className="h-14 border w-full p-3"
            />
            <input
              type="text"
              {...register("apartmentSuiteUnit")}
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="h-14 mt-7 border w-full p-3"
            />
          </div>

          {/* City */}
          <div className="mt-7">
            <legend className="mb-2 font-semibold text-gray-500">
              Town / City
            </legend>
            <input type="text" {...register("townCity")} className="h-14 border w-full p-3" />
          </div>

          {/* District */}
          <div className="mt-7">
            <legend className="mb-2 font-semibold text-gray-500">
              District
            </legend>
            <input
              type="text"
              {...register("district")}
              className="h-14 border w-full p-3"
              placeholder="Select an option…"
            />
          </div>

          {/* ZIP */}
          <div className="mt-7">
            <legend className="mb-2 font-semibold text-gray-500">
              Postcode / ZIP
            </legend>
            <input type="number" {...register("ZIP/Postcode")} className="h-14 border w-full p-3" />
          </div>

          {/* Phone */}
          <div className="mt-7">
            <legend className="mb-2 font-semibold text-gray-500">Phone</legend>
            <input type="number" {...register("phone")} className="h-14 border w-full p-3" />
          </div>

          {/* Email */}
          <div className="mt-7">
            <legend className="mb-2 font-semibold text-gray-500">
              Email address
            </legend>
            <input type="email" {...register("emailAddress")} className="h-14 border w-full p-3" />
          </div>
        </div>

        {/* Right */}
        <div className="w-full">
          <h3 className="font-Poppins font-bold text-2xl mb-11">
            Additional information
          </h3>

          <div className="w-full">
            <legend className="mb-2 font-semibold text-gray-500">
              Order notes (optional)
            </legend>
            <textarea
              className="h-36 border w-full p-3"
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Order data */}
      <div className="mt-10">
        <h2 className="text-xl font-bold p-4">Your order</h2>
        <div className="border rounded-md overflow-hidden">
          <div className="grid grid-cols-2 font-semibold bg-gray-50 px-4 py-3">
            <span>Product</span>
            <span className="text-right">Subtotal</span>
          </div>

          {/* Map all cart items */}
          {allCarts.map((cart, index) => (
            <div
              key={index}
              className="grid grid-cols-2 px-4 py-3 border-t border-gray-200"
            >
              <span className="text-gray-700">
                {cart.colorName}{" "}
                <span className="font-semibold">× {cart.quantity}</span>
              </span>
              <span className="text-right">£127.50</span>
            </div>
          ))}

          <div className="grid grid-cols-2 font-semibold px-4 py-3 border-t border-gray-200">
            <span>Subtotal</span>
            <span className="text-right">£{subtotal}</span>
          </div>

          <div className="grid grid-cols-2 font-bold px-4 py-4 bg-gray-100 border-t border-gray-300">
            <span>Total</span>
            <span className="text-right">£{subtotal}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-end mt-12">
        <button type="submit" className="btn bg-primary_color px-8 hover:bg-primary_hover_color hover:duration-200 hover:transition-all text-white py-4 text-sm font-bold uppercase rounded-full">
          Place order
        </button>
      </div>
    </form>
  </div>
</section>

  );
};
