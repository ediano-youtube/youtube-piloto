import { Locale } from '@/config/i18n.config';
import { getDictionaryServerOnly } from '@/dictionaries/default-dictionary-server-only';

export default function Home({ params }: { params: { lang: Locale } }) {
  const { dictionary, interpolation } = getDictionaryServerOnly(params.lang);

  return (
    <>
      <div>{interpolation(dictionary['Welcome {{name}}'], { das: 'fsdf' })}</div>
      <div>{interpolation(dictionary['{{nascimento}} {{idade}}'], { nascimento: '05/01/1994', idade: 29 })}</div>
    </>
  );
}
