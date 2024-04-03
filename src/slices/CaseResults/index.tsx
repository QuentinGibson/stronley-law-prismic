import Bounded from "@/app/components/Bounded";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicLink,
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `CaseResults`.
 */
export type CaseResultsProps = SliceComponentProps<Content.CaseResultsSlice>;

/**
 * Component for "CaseResults" Slices.
 */
const CaseResults = async ({
  slice,
}: CaseResultsProps): Promise<JSX.Element> => {
  const client = createClient();
  const caseResults = (await client.getAllByType("case_result")).filter(
    (doc, index) => {
      return index < 4;
    },
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-blue-100"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4">
          <PrismicRichText
            components={{
              heading1: ({ children }) => (
                <h2 className="text-4xl font-bold uppercase">{children}</h2>
              ),
            }}
            field={slice.primary.title}
          />
          <PrismicNextLink
            className="w-fit bg-blue-700 px-5 py-2 text-white"
            field={slice.primary.button_link}
          >
            {slice.primary.button_label}
          </PrismicNextLink>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          {caseResults.map((caseResult, index) => (
            <div
              className="grid h-40 w-full grid-rows-[3fr_1fr] justify-center gap-4 bg-white py-4"
              key={index}
            >
              <PrismicRichText
                components={{
                  heading2: ({ children }) => (
                    <h2 className="text-balance px-6 text-center text-lg text-blue-800">
                      {children}
                    </h2>
                  ),
                }}
                field={caseResult.data.title}
              />
              <p className="text-center">
                <PrismicText field={caseResult.data.result} />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="blue-triangle-left absolute bottom-0 left-0 h-6 w-full bg-blue-800"/>
    </Bounded>
  );
};

export default CaseResults;
