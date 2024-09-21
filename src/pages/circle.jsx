
import { Helmet } from 'react-helmet-async';
import { CircleView } from 'src/sections/circle/view';


// ----------------------------------------------------------------------

export default function CirclePage() {
  return (
    <>
      <Helmet>
        <title> User | Yawa Dashboard </title>
      </Helmet>

      <CircleView />
    </>
  );
}
