import { lazy, Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

export function lazyLoadRoutes(factory) {
  const LazyElement = lazy(factory);

  return (
    <Suspense fallback={<LoadingScreen description="" />}>
      <LazyElement />
    </Suspense>
  );
}
