import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";

const PropertyBanner = () => {
  return (
    <section className="min-h-[calc(100dvh-64px)] property-banner flex flex-col items-center justify-center gap-5 text-white">
      <h1>
        Your Portal to India's <br /> Exquisite Real Estate
      </h1>
      <p>
        Seamlessly connecting you to the heartbeat of India's prime properties.
      </p>

      <Button className="flex items-center justify-center gap-2.5 bg-blue-500 text-white">
        <IoSearch /> Find Property
      </Button>
    </section>
  );
};

export default PropertyBanner;
