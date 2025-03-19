import 'src/global.css';

import { Router } from 'src/routes/sections';
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { ThemeProvider } from 'src/theme/theme-provider';

import { useTranslation } from 'react-i18next';
import { LanguagePopover } from './layouts/components/language-popover';

const languageOptions = [
  { value: 'es', label: 'Español', icon: '/assets/icons/flags/ic-flag-de.svg' },
  { value: 'en', label: 'English', icon: '/assets/icons/flags/ic-flag-en.svg' }
];

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  const { t } = useTranslation(); // Ahora no generará errores

  return (
    <ThemeProvider>
      <LanguagePopover data={languageOptions} />
      <Router />
    </ThemeProvider>
  );
}
