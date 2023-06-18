import { fireEvent, screen } from "@testing-library/dom";
import App from "../App";
import { render } from "@testing-library/react";

beforeEach(() => {
    render(<App />);
});


test('Renderiza componente ShoppingCart al dar click sobre componente CartButton', () => {
    
    const cartButton = screen.getByAltText('Shopping cart');
    fireEvent.click(cartButton);
    const cartTitle = screen.getByRole('heading', { name: "Shopping Cart" });
    expect(cartTitle).toBeInTheDocument();
});