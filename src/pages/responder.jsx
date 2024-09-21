
import { Helmet } from 'react-helmet-async';
import { ResponderView } from 'src/sections/responder/view';


// ----------------------------------------------------------------------

export default function ResponderPage() {
  return (
    <>
      <Helmet>
        <title> User | Yawa Dashboard </title>
      </Helmet>

      <ResponderView />
    </>
  );
}
