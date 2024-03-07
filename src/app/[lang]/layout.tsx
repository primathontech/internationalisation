import Header from "../../../components/Header";
import { Locale, i18n } from "../../../i18n.config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {

  return (
    <html lang={params.lang}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
