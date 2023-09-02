import { Locale } from '@/config/i18n.config';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';

export default function Home({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryServerOnly(params.lang);

  return (
    <>
      <nav>
        <h1>{dict.site.name}</h1>
        <p>{dict.site.description}</p>
      </nav>
    </>
  );
}
