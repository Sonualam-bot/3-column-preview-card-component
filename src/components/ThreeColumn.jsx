import sedans from "../assets/images/icon-sedans.svg";
import suvs from "../assets/images/icon-suvs.svg";
import luxury from "../assets/images/icon-luxury.svg";

function ThreeColumn() {
  return (
    <div className="flex justify-center h-full w-full items-center text-[15px] ">
      <div className="w-full flex  xs:flex-col sml:flex-row  sml:justify-center xs:my-3 items-center  h-screen  ">
        {/* sedans starts here */}
        <div className="w-[290px] h-[460px] bg-[--bright-orange] sml:rounded-l-lg sml:rounded-tr-none xs:rounded-t-lg flex flex-col  p-11 justify-between   ">
          <div className="flex flex-col gap-5 ">
            <div>
              <img src={sedans} alt="/sedan" />
            </div>

            <div>
              <h1 className="text-[40px] uppercase font-bold text-[--light-gray] font-shoulders ">
                Sedans
              </h1>
            </div>
            <div>
              <p className="text-[--transparent-white] font-semibold  ">
                Choose a sedan for its affordability and excellent fuel economy.
                Ideal for cruising in the city or on your next road trip.
              </p>
            </div>
          </div>
          <div>
            <button className="bg-[--light-gray] text-[--bright-orange] p-3 font-lexend rounded-3xl px-8 cursor-pointer hover:bg-transparent hover:text-white hover:border-2 ">
              Learn More
            </button>
          </div>
        </div>
        {/* sedans ends here */}
        {/* suv starts here */}
        <div className="w-[290px] h-[460px] bg-[--dark-cyan]  flex flex-col  p-11 justify-between ">
          <div className="flex flex-col gap-5 ">
            <div>
              <img src={suvs} alt="/sedan" />
            </div>
            <div>
              <h1 className="text-[40px] uppercase font-bold text-[--light-gray] font-shoulders ">
                Suvs
              </h1>
            </div>
            <div>
              <p className="text-[--transparent-white] font-semibold  ">
                Take an SUV for its spacious interior, power, and versatility.
                Perfect for your next family vacation and off-road adventures.
              </p>
            </div>
          </div>
          <div>
            <button className="bg-[--light-gray] text-[--dark-cyan] p-3 font-lexend rounded-3xl px-8 cursor-pointer hover:bg-transparent hover:text-white hover:border-2 ">
              Learn More
            </button>
          </div>
        </div>
        {/* suv ends here */}
        {/* luxury starts here */}
        <div className="w-[290px] h-[460px] bg-[--very-dark-cyan] sml:rounded-r-lg sml:rounded-bl-none flex flex-col  p-11 justify-between xs:rounded-b-lg ">
          <div className="flex flex-col gap-5 ">
            <div>
              <img src={luxury} alt="/sedan" />
            </div>

            <div>
              <h1 className="text-[40px] uppercase font-bold text-[--light-gray] font-shoulders ">
                Luxury
              </h1>
            </div>
            <div>
              <p className="text-[--transparent-white] font-semibold   ">
                Cruise in the best car brands without the bloated prices. Enjoy
                the enchanced comfort of a luxury rental and arrive in style.
              </p>
            </div>
          </div>
          <div>
            <button className="bg-[--light-gray] text-[--very-dark-cyan] p-3 font-lexend rounded-3xl px-8 cursor-pointer hover:bg-transparent hover:text-white hover:border-2 ">
              Learn More
            </button>
          </div>
        </div>
        {/* luxury ends here */}
      </div>
    </div>
  );
}

export default ThreeColumn;
