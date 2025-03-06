import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { HomeView } from 'src/sections/home';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Home - ${CONFIG.appName}`}</title>
      </Helmet>

      <HomeView />
    </>
  );
}
