import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Chess with LLM Helper header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Chess with LLM Helper/i);
  expect(headerElement).toBeInTheDocument();
});
```



####