import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import Index from "../pages/Index";
import { ThemeProvider } from "../components/ThemeProvider";

export const render = () => {
  return renderToString(
    <ThemeProvider>
      <MemoryRouter initialEntries={["/"]}>
        <Index />
      </MemoryRouter>
    </ThemeProvider>,
  );
};
