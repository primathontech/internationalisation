import { Locale } from "../../../i18n.config";
import { getHeaderData } from "../../../lib/dictionary";

interface LanguageProps {
  params: {
    lang: Locale;
  };
}

const Page = async (props: LanguageProps) => {
  const { params } = props;
  const HeroSectionData = await getHeaderData(params.lang);

  return (
    <main>
      <p>{HeroSectionData.heading}</p>
      <p>{HeroSectionData.subHeading}</p>

    </main>
  );
};

export default Page;
