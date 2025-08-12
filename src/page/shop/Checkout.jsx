import { useEffect, useState } from "react";
import CartProgress from "../../components/CartProgress";
import ShopBanner from "../../components/ShopBanner";
import useCarts from "../../hooks/useCarts";
import { useForm } from "react-hook-form";

export const Checkout = () => {
  const [allCarts, refetch, isLoading] = useCarts();
  const [clientSecret, setClientSecret] = useState(null);
  const subtotal = allCarts.reduce((sum, cart) => sum + cart.price * cart.quantity, 0);
  const subtotalFormatted = subtotal.toFixed(2);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const orderData = {
      ...data,
      cartItems: allCarts,
      subtotal: subtotal,
    };

    try {
      const res = await fetch("http://localhost:3000/api/v1/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(subtotal * 100) }), // Stripe expects amount in cents
      });

      const result = await res.json();
      console.log("Client Secret:", result.clientSecret);
      setClientSecret(result.clientSecret);
    } catch (err) {
      console.error("Error creating payment intent:", err);
    }
  };

  return (
    <section className="mt-32 mb-24">
      <div className="bg-text_white py-24 text-center">
        <ShopBanner routePath="checkout" />
      </div>

      <div className="container mx-auto px-4">
        <CartProgress
          bgColor2="bg-[#294CFF]"
          whiteText2="text-text_white"
          primaryLiteText="text-primary_hover_color"
          primaryLiteText3="text-primary_hover_color"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Billing Details */}
            <div className="w-full">
              <h3 className="font-Poppins font-bold text-2xl mb-11">Billing details</h3>

              {/* First and Last Name */}
              <div className="flex flex-col md:flex-row gap-5">
                <div className="w-full">
                  <legend className={`mb-2 font-semibold ${errors.firstName ? "text-red-500" : "text-gray-500"}`}>
                    {errors.firstName ? "First name is required" : "First name"}
                  </legend>
                  <input type="text" {...register("firstName", { required: true })} className="h-14 border w-full p-3" />
                </div>
                <div className="w-full">
                  <legend className={`mb-2 font-semibold ${errors.lastName ? "text-red-500" : "text-gray-500"}`}>
                    {errors.lastName ? "Last name is required" : "Last name"}
                  </legend>
                  <input type="text" {...register("lastName", { required: true })} className="h-14 border w-full p-3" />
                </div>
              </div>

              {/* Other Fields */}
              <div className="mt-7">
                <legend className="mb-2 font-semibold text-gray-500">Company name (optional)</legend>
                <input type="text" {...register("companyName")} className="h-14 border w-full p-3" />
              </div>

              <div className="mt-7">
                <legend className={`mb-2 font-semibold ${errors.country ? "text-red-500" : "text-gray-500"}`}>
                  {errors.country ? "Country is required" : "Country / Region"}
                </legend>
                <select {...register("country", { required: true })} className="h-14 border w-full p-3">
                  <option value="" disabled hidden>Choose a country</option>
                  <option value="BD">Bangladesh</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                </select>
              </div>

              <div className="mt-7">
                <legend className={`mb-2 font-semibold ${errors.address ? "text-red-500" : "text-gray-500"}`}>
                  {errors.address ? "Address is required" : "Address"}
                </legend>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="House number and street name"
                  className="h-14 border w-full p-3"
                />
                <input
                  type="text"
                  {...register("apartmentSuiteUnit")}
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="h-14 mt-4 border w-full p-3"
                />
              </div>

              <div className="mt-7">
                <legend className={`mb-2 font-semibold ${errors.townCity ? "text-red-500" : "text-gray-500"}`}>
                  {errors.townCity ? "Town / City is required" : "Town / City"}
                </legend>
                <input type="text" {...register("townCity", { required: true })} className="h-14 border w-full p-3" />
              </div>

              <div className="mt-7">
                <legend className={`mb-2 font-semibold ${errors.district ? "text-red-500" : "text-gray-500"}`}>
                  {errors.district ? "District is required" : "District"}
                </legend>
                <input type="text" {...register("district", { required: true })} className="h-14 border w-full p-3" />
              </div>

              <div className="mt-7">
                <legend className={`mb-2 font-semibold ${errors.ZIPcode ? "text-red-500" : "text-gray-500"}`}>
                  {errors.ZIPcode ? "ZIP is required" : "ZIP / Postcode"}
                </legend>
                <input type="number" {...register("ZIPcode", { required: true })} className="h-14 border w-full p-3" />
              </div>

              <div className="mt-7">
                <legend className={`mb-2 font-semibold ${errors.phone ? "text-red-500" : "text-gray-500"}`}>
                  {errors.phone ? "Phone is required" : "Phone"}
                </legend>
                <input type="number" {...register("phone", { required: true })} className="h-14 border w-full p-3" />
              </div>

              <div className="mt-7">
                <legend className={`mb-2 font-semibold ${errors.email ? "text-red-500" : "text-gray-500"}`}>
                  {errors.email ? "Email is required" : "Email"}
                </legend>
                <input type="email" {...register("email", { required: true })} className="h-14 border w-full p-3" />
              </div>
            </div>

            {/* Right: Additional Info */}
            <div className="w-full">
              <h3 className="font-Poppins font-bold text-2xl mb-11">Additional information</h3>
              <div className="w-full">
                <legend className="mb-2 font-semibold text-gray-500">Order notes (optional)</legend>
                <textarea
                  {...register("Order_notes")}
                  className="h-36 border w-full p-3"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-10">
            <h2 className="text-xl font-bold p-4">Your order</h2>
            <div className="border rounded-md overflow-hidden">
              <div className="grid grid-cols-2 font-semibold bg-gray-50 px-4 py-3">
                <span>Product</span>
                <span className="text-right">Subtotal</span>
              </div>

              {allCarts.map((cart, i) => (
                <div key={i} className="grid grid-cols-2 px-4 py-3 border-t border-gray-200">
                  <span>{cart.colorName} × {cart.quantity}</span>
                  <span className="text-right">£{(cart.price * cart.quantity).toFixed(2)}</span>
                </div>
              ))}

              <div className="grid grid-cols-2 font-semibold px-4 py-3 border-t border-gray-200">
                <span>Subtotal</span>
                <span className="text-right">£{subtotalFormatted}</span>
              </div>

              <div className="grid grid-cols-2 font-bold px-4 py-4 bg-gray-100 border-t border-gray-300">
                <span>Total</span>
                <span className="text-right">£{subtotalFormatted}</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center lg:justify-end mt-12">
            <button
              type="submit"
              className="btn bg-primary_color px-8 hover:bg-primary_hover_color text-white py-4 text-sm font-bold uppercase rounded-full"
            >
              Place order
            </button>
          </div>
        </form>

        {clientSecret && (
          <div className="mt-10 text-green-600 font-semibold">
            Payment Intent Created. Client Secret: <span className="break-all">{clientSecret}</span>
          </div>
        )}
      </div>
    </section>
  );
};
