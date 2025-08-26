import React from "react";
import travelManMobile from "../../assets/travel-man.png";
const Header = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:pl-16 xl:pl-24 pl-5 justify-center items-center min-h-screen">
        <article className="md:w-[36rem]">
          <h1 className="pt-14 md:pt-14 2xl:pt-0 xl:text-[64px] md:text-[54px] sm:text-[40px] text-[35px] font-semibold md:leading-none leading-tight font-header tracking-wide">
            Get started your exciting
            <span className="text-primary-o"> Stay</span> with us.
          </h1>
          <p className="md:text-xl lg:text-lg sm:text-lg text-text-light md:w-[30rem] pt-10 pb-10 font-text md:leading-9">
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </p>
          <div>
            <button className="md:w-[10rem] p-3 font-text rounded-md bg-white font-semibold text-primary-o border-primary-o border-[1px] discover-btn">
              Discover Now
            </button>
          </div>
        </article>

        <article className="hidden sm:flex">
          <img src={travelManMobile} alt="man" />
        </article>

        {/* For mobile screens */}
        <article className="sm:hidden block pt-10 pb-16">
          <img src={travelManMobile} alt="man" />
        </article>
      </div>
    </section>
  );
};

export default Header;
