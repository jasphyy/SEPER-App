import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Title from "./pages/title";

//Test case for passing in finding h1 title in Title component
test("SEPER app finds title in < Title />", () => {
  const { getByText } = render(<App />);
  const title = getByText(
    "Software Engineering Practice Evidence Repository (SEPER)"
  );
  expect(title).toBeInTheDocument();
});

//Test case for failing in finding h1 title in Title component
test("SEPER app finds title in < Title /> must fail", () => {
  const { getByText } = render(<App />);
  const title = getByText("Software Practice Evidence Repository (SEPER)");
  expect(title).toBeInTheDocument();
});