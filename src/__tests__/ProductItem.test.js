import { fireEvent, screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
    render(<App />);
});

test('Renderiza componente ProductDetail al dar click sobre un componente ProductItem', () => {

    const productItem = screen.getByAltText(/galletas festival/i);
    fireEvent.click(productItem);
    const productDetail = screen.getByRole('heading', { name: "Product" });
    expect(productDetail).toBeInTheDocument();
    const productName = screen.getByText("Galletas Festival");
    expect(productName).toBeInTheDocument();
});