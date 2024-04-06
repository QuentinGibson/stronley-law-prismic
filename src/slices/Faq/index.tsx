import Bounded from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl md:text-5xl">
            <PrismicText field={slice.primary.title} />
          </h3>
          <p className="prose">
            <PrismicText field={slice.primary.body} />
          </p>
        </div>
        <div
          className={clsx(
            slice.primary.swapped && "-order-1",
            "relative hidden aspect-video md:flex",
          )}
        >
          <PrismicNextImage
            className="object-contain"
            fill
            field={slice.primary.image}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Faq;
