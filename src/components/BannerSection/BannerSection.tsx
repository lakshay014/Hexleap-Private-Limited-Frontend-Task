import React from "react";
import Image from "next/image";
import "./BannerSection.css";

const BannerSection = () => {
  const bannerData = [
    {
      id: 1,
      bannerImg: "/banner1.png",
      name: "Sacramento River Cats",
      eventHeading: "Total Events",
      events: "48 Events",
      event: "Sport",
      eventInfo: "Baseball",
    },
    {
      id: 2,
      bannerImg: "/banner2.png",
      name: "Las Vegas Aviators",
      eventHeading: "Total Events",
      events: "28 Events",
      event: "Sport",
      eventInfo: "Baseball",
    },
    {
      id: 3,
      bannerImg: "/banner3.png",
      name: "New Jersey Devils",
      eventHeading: "Total Events",
      events: "15 Events",
      event: "Sport",
      eventInfo: "Ice Hockey",
    },
    {
      id: 4,
      bannerImg: "/banner2.png",
      name: "Las Vegas Aviators",
      eventHeading: "Total Events",
      events: "28 Events",
      event: "Sport",
      eventInfo: "Baseball",
    },
    {
      id: 5,
      bannerImg: "/banner5.png",
      title: "Advertisement title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {bannerData.map((item, index) => (
            <div key={index} className="p-3 banner-box">
              <div>
                {item.id === 5 ? (
                  <>
                    <Image
                      src={item.bannerImg}
                      layout="responsive"
                      width={218.4}
                      height={218}
                      alt=""
                    />
                    <div className="add">
                      <p className="font-bold add-text py-1">Ad</p>
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.bannerImg}
                    layout="responsive"
                    width={218.4}
                    height={385.31}
                    alt=""
                  />
                )}
              </div>
              <div>
                {item.name && (
                  <h3 className="text-lg font-medium my-3">{item.name}</h3>
                )}
                {item.eventHeading && item.events && (
                  <div className="details rounded p-3 grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="events mb-2">{item.eventHeading}</h4>
                      <p className="count-event">{item.events}</p>
                    </div>
                    <div>
                      <h4 className="events mb-2">{item.event}</h4>
                      <p className="count-event">{item.eventInfo}</p>
                    </div>
                  </div>
                )}
                {item.title && item.description && (
                  <div className="mt-8">
                    <h4 className="text-center text-xl font-semibold advert-title mb-2">
                      {item.title}
                    </h4>
                    <p className="advert-description">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12 flex justify-center items-center">
        <button className="see-more text-sm font-semibold text-center">See More</button>
      </div>
    </div>
  );
};

export default BannerSection;
