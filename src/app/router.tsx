import { createBrowserRouter, type RouteObject } from "react-router";

function HomePage() {
  return (
    <main>
      <section>
        <p>AUREN — Technology &amp; Solutions</p>
        <h1>Technology engineered with precision.</h1>
        <p>
          Uma base premium para produtos, soluções e projetos tecnológicos da
          AUREN.
        </p>
      </section>
    </main>
  );
}

const routes = [
  {
    path: "/",
    Component: HomePage,
  },
] satisfies RouteObject[];

export const router = createBrowserRouter(routes);