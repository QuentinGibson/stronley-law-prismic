import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.body} />
      <PrismicNextLink field={slice.primary.primary_link}>
        <>{slice.primary.primary_cta}</>
      </PrismicNextLink>
      <PrismicNextLink field={slice.primary.secondary_link}>
        <>{slice.primary.secondary_cta}</>
      </PrismicNextLink>
    </Bounded>
  );
};

export default Hero;
