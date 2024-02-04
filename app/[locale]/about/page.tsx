import { title } from "@/components/primitives";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations()

  return (
    <div>
      <h1 className={title()}>{t('common.more')}</h1>
    </div>
  );
}
