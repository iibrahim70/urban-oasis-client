import propertyImageOne from "@/assets/images/property-img-1.png";
import propertyImageTwo from "@/assets/images/property-img-2.png";
import propertyImageThree from "@/assets/images/property-img-3.png";
import propertyImageFour from "@/assets/images/property-img-4.png";
import propertyImageFive from "@/assets/images/property-img-5.png";
import propertyImageSix from "@/assets/images/property-img-6.png";
import playerLogo from "@/assets/icons/video-player.png";
import { Button } from "./ui/button";
import { IoSearch } from "react-icons/io5";
import { cn } from "@/lib/utils";

const PropertyListings = () => {
  const data = [
    {
      id: 1,
      title: "Modern Family Homes",
      subTitle: "Spacious and Comfortable Living",
      description:
        "Discover modern family homes designed for comfort and convenience. These homes offer spacious living areas, contemporary kitchens, and plenty of outdoor space for your family to enjoy.",
      images: [propertyImageOne, propertyImageTwo],
    },
    {
      id: 2,
      title: "Luxury Apartments",
      subTitle: "Elegant and High-End Living",
      description:
        "Experience the height of luxury in our premium apartments. These residences feature top-of-the-line amenities, breathtaking views, and impeccable design details to ensure a sophisticated lifestyle.",
      images: [propertyImageThree, propertyImageFour],
    },
    {
      id: 3,
      title: "Cozy Cottages",
      subTitle: "Charming and Quaint Getaways",
      description:
        "Escape to a cozy cottage, perfect for a peaceful retreat. These charming homes are nestled in scenic locations and offer a warm and inviting atmosphere, ideal for relaxation and rejuvenation.",
      images: [propertyImageFive, propertyImageSix],
    },
  ];

  return (
    <section className="section-wrapper space-y-10">
      {data?.map((item, index) => (
        <div
          key={item?.id}
          className={cn(
            "flex max-md:flex-col items-center justify-between gap-20 relative py-20",
            index % 2 !== 0 && "flex-row-reverse"
          )}
        >
          {/* left side */}
          <div className="flex-1 relative">
            {index % 2 === 0 ? (
              <>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="absolute -bottom-20 -right-6 h-[250px] w-[450px] object-cover rounded-md"
                />

                <img
                  src={item.images[1]}
                  alt={item.title}
                  className="h-[350px] w-[500px] object-cover rounded-md"
                />
              </>
            ) : (
              <>
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="h-[350px] w-[500px] object-cover rounded-md"
                />
                <img
                  src={item.images[1]}
                  alt={item.title}
                  className="absolute -top-20 -right-6 h-[250px] w-[450px] object-cover rounded-md"
                />
              </>
            )}

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
