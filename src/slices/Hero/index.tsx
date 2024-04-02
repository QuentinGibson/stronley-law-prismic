import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section className="text-white">
      {isFilled.image(slice.primary.background_image) && (
        <div className="absolute top-0 h-[800px] w-full">
          <PrismicNextImage
            field={slice.primary.background_image}
            alt=""
            fill
            className="pointer-events-none -z-10 select-none object-cover"
          />
          <div className="absolute inset-0 -z-[9] bg-black opacity-50" />
        </div>
      )}
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        as={"div"}
      >
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold uppercase md:text-7xl">
            <PrismicRichText field={slice.primary.title} />
          </h1>
          <p className="max-w-xl text-balance">
            <PrismicRichText field={slice.primary.body} />
          </p>
          <div className="flex gap-3">
            <PrismicNextLink
              className="bg-blue-500 px-5 py-2"
              field={slice.primary.primary_link}
            >
              <>{slice.primary.primary_cta}</>
            </PrismicNextLink>
            <PrismicNextLink
              className="bg-blue-700 px-5 py-2"
              field={slice.primary.secondary_link}
            >
              <>{slice.primary.secondary_cta}</>
            </PrismicNextLink>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
