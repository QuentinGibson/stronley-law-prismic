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
    <section className="relative text-white">
      <div className="absolute inset-0 -z-[9] bg-black opacity-50" />
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        as={"div"}
      >
        {isFilled.image(slice.primary.background_image) && (
          <PrismicNextImage
            field={slice.primary.background_image}
            alt=""
            fill
            className="pointer-events-none -z-10 select-none object-cover"
          />
        )}
        <div className="flex flex-col gap-4">
          <PrismicRichText
            components={{
              heading1: ({ children }) => (
                <h1 className="text-5xl font-bold uppercase md:text-7xl">
                  {children}
                </h1>
              ),
            }}
            field={slice.primary.title}
          />
          <PrismicRichText
            components={{
              paragraph: ({ children }) => (
                <p className="max-w-xl text-balance text-lg">{children}</p>
              ),
            }}
            field={slice.primary.body}
          />
          <div className="flex flex-col gap-3 md:flex-row">
            <PrismicNextLink
              className="w-fit flex-grow-0 bg-blue-500 px-5 py-2"
              field={slice.primary.primary_link}
            >
              {slice.primary.primary_cta}
            </PrismicNextLink>
            <PrismicNextLink
              className="w-fit bg-blue-700 px-5 py-2"
              field={slice.primary.secondary_link}
            >
              {slice.primary.secondary_cta}
            </PrismicNextLink>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
