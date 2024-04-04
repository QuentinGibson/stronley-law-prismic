import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutLawFirm`.
 */
export type AboutLawFirmProps = SliceComponentProps<Content.AboutLawFirmSlice>;

/**
 * Component for "AboutLawFirm" Slices.
 */
const AboutLawFirm = ({ slice }: AboutLawFirmProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for about_law_firm (variation: {slice.variation})
      Slices
    </section>
  );
};

export default AboutLawFirm;
