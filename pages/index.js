import Head from 'next/head';
import Header from '@components/Header';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

const Component = (props) => <a {...props} />;

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div className='container'>
      <Head>
        <title>D&apos; Bread</title>
      </Head>

      <main>
        <Header title={t('i0') + " D' Little Bread Cafe!"} />
        <p className='description'>
          {t('i1')}
          <br />
          <Trans
            i18nKey='common:i2'
            components={[
              <Component
                key='i2'
                href='https://www.facebook.com/D-Bread-111968957785306'
              />,
            ]}
          />
          <br />
          {t('i3')}
        </p>
      </main>
    </div>
  );
}
