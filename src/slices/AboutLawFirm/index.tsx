import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `AboutLawFirm`.
 */
export type AboutLawFirmProps = SliceComponentProps<Content.AboutLawFirmSlice>;

/**
 * Component for "AboutLawFirm" Slices.
 */
const AboutLawFirm = ({ slice }: AboutLawFirmProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-[#ebf8ff]"
    >
      <div className="flex flex-col justify-center gap-4">
        <h2 className="relative text-3xl font-bold after:absolute after:bottom-0 after:top-0 after:m-auto after:block after:h-[1px] after:w-full after:border after:border-blue-800 md:text-4xl">
          <span className="relative z-10 mx-auto block w-fit bg-[#ebf8ff] px-4">
            <PrismicText field={slice.primary.title} />
          </span>
        </h2>
        <div className="grid gap-4 bg-white p-4 md:grid-cols-2">
          <div className="grid grid-cols-[10px_1fr] justify-center gap-2">
            <div className="h-full w-full bg-blue-800" />
            <p className="prose max-w-prose text-lg md:text-2xl">
              <PrismicText field={slice.primary.body} />
            </p>
          </div>
          <div className="relative min-h-80 md:min-h-0">
            <PrismicNextImage fill field={slice.primary.image} />
          </div>
        </div>
      </div>
      <div className="blue-triangle-right absolute bottom-0 left-0 h-6 w-full bg-blue-800" />
    </Bounded>
  );
};

export default AboutLawFirm;
