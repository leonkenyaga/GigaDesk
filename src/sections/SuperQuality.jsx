import { innovate } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          Outpace the <span className="text-coral-red inline-block">Competition</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Tech is everywhere. Yet your business may not be getting the full
          value from your investments.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Our deep industry expertise puts us in a unique position to help you use the right technology to address your most complex and critical challenges—whether it’s through faster cloud migration, getting the most value out of the top technology platforms, making the most of your data through applied intelligence, or underpinning everything you do with security.
        </p>

      
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={innovate}
          alt="innovate"
          width={600}
          height={822}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
