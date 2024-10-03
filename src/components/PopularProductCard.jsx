import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className=" flex-1 flex-col max-sm:w-full shadow-3xl p-5">
            <div className="grid justify-items-center ">
            <img src={imgURL} alt={name} className="w-[280px] h-[280px] object-cover rounded-lg" />
           
           <h3 className="mt-3 text-2xl leading-normal font-bold font-palanquin">{name}</h3>
           <p className="mt-3 font-montserrat text-center">{price}</p>
            </div>
          
        </div>
    )
}

export default PopularProductCard;