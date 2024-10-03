import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Technology</span> Services</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">With remarkable people in over 20 locations, we combine local insights with deep expertise across 40 industries to tailor the services that solve your biggest challenges.</p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {
          products.map(product => (
            <PopularProductCard key={product.name} {...product} />
          ))
        }
      </div>
    </section>
  )
}

export default PopularProducts;