import Bounded from "@/app/components/Bounded";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PraticeAreas`.
 */
export type PraticeAreasProps = SliceComponentProps<Content.PraticeAreasSlice>;

/**
 * Component for "PraticeAreas" Slices.
 */
const PraticeAreas = async ({
  slice,
}: PraticeAreasProps): Promise<JSX.Element> => {
  const client = createClient();
  const pratices = await client.getAllByType("praticearea");
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-[#ebf8ff]"
    >
      <h2 className="relative text-3xl font-bold after:absolute after:bottom-0 after:top-0 after:m-auto after:block after:h-[1px] after:w-full after:border after:border-blue-800 md:text-4xl">
        <span className="relative z-10 mx-auto block w-fit bg-[#ebf8ff] px-4">
          <PrismicText field={slice.primary.title} />
        </span>
      </h2>
      <ul className="mt-4 grid gap-4 md:grid-cols-2">
        {pratices.map((practice, index) => (
          <li
            key={index}
            className="grid grid-cols-[1fr_2fr] gap-4 bg-white p-5 md:min-h-60"
          >
            <div className="relative h-full">
              <PrismicNextImage
                className="object-cover"
                field={practice.data.preview}
                fill
              />
            </div>
            <div className="flex flex-col gap-4">
              <PrismicNextLink
                document={practice}
                className="text-3xl font-bold"
              >
                <PrismicText field={practice.data.title} />
              </PrismicNextLink>
              <p className="prose">
                <PrismicText field={practice.data.snippet} />
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="blue-triangle-left absolute bottom-0 left-0 h-6 w-full bg-blue-800" />
    </Bounded>
  );
};

export default PraticeAreas;
