import { Suspense, lazy } from "react";
import Loading from "../components/Loading/loading";

const DetailMe = lazy(() => import("../components/DetailMe"));

function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <DetailMe />
    </Suspense>
  );
}

export default Home;
