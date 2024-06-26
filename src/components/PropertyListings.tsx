import data from "@/assets/data/propertyListings.json";
import { cn } from "@/lib/utils";
import playerLogo from "@/assets/icons/video-player.png";
import { Button } from "./ui/button";
import { IoSearch } from "react-icons/io5";

const PropertyListings = () => {
  return (
    <section className="section-wrapper py-20">
      {data?.map((item, index) => (
        <div
          key={item?.id}
          className={cn(
            "relative flex max-md:flex-col items-center justify-between gap-20",
            index % 2 !== 0 ? "flex-row-reverse pt-40 pb-20" : "pb-20"
          )}
        >
          {/* left side */}
          <div className="flex-1 relative">
            <img
              src={item?.images[0]}
              alt={item?.title}
              className="h-[350px] w-[500px] object-cover rounded-md"
            />
            <img
              src={item?.images[1]}
              alt={item?.title}
              className={cn(
                "absolute -right-6 h-[250px] w-[450px] object-cover rounded-md",
                index % 2 === 0 ? "-bottom-20" : "-top-20"
              )}
            />

            <img
              src={playerLogo}
              alt="Video Player Logo"
              className={cn(
                "absolute right-5 -translate-x-1/2 size-10 z-10",
                index % 2 === 0 ? "top-[46%]" : "top-[43%]"
              )}
            />
          </div>

          {/* right side */}
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-5">
              <hr className="w-10 border-b-2 border-orange-500" />
              <p className="text-orange-500 font-semibold">{item?.title}</p>
            </div>

            <h2>{item?.subTitle}</h2>
            <p className="text-justify">{item?.description}</p>

            <Button className="flex items-center gap-2.5">
              <IoSearch /> Find Property
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PropertyListings;
