import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="flex flex-col gap-4">
        <div className="md:flex">
          <div className="flex flex-col gap-6">
            <PrismicRichText
              components={{
                heading2: ({ children }) => (
                  <h2 className="text-5xl font-bold md:text-7xl">{children}</h2>
                ),
              }}
              field={slice.primary.title}
            />
            <PrismicRichText
              components={{
                paragraph: ({ children }) => (
                  <p className="prose max-w-prose">{children}</p>
                ),
              }}
              field={slice.primary.biography}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="relative h-[300px] w-[230px]">
              <PrismicNextImage fill field={slice.primary.avatar} />
            </div>
            <PrismicRichText field={slice.primary.job_title} />
            <PrismicNextLink
              className="mt-2 w-fit bg-blue-700 px-5 py-2 text-white"
              field={slice.primary.button_link}
            >
              {slice.primary.button_label}
            </PrismicNextLink>
          </div>
        </div>
        <h3 className="md: mt-4 text-4xl font-bold uppercase md:mt-8 md:text-6xl">
          <PrismicText field={slice.primary.award_title} />
        </h3>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {slice.items.map((item, index) => (
            <li className="flex items-center justify-center" key={index}>
              <div className="relative size-[120px]" key={index}>
                <PrismicNextImage fill field={item.award} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="blue-triangle-right absolute bottom-0 left-0 h-6 w-full bg-blue-800" />
    </Bounded>
  );
};

export default Biography;
