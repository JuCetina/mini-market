import { render, screen } from "@testing-library/react";
import App from "../App";

beforeEach(() => {
    render(<App />);
});

test('Renderiza componente MiniMarket', () => {
    
    const storeTitle = screen.getByText(/store/i);
    expect(storeTitle).toBeInTheDocument();
});

test('Renderiza componente ProductItem',() => {
    
    const productItems = screen.getByAltText(/galletas festival/i);
    expect(productItems).toBeInTheDocument();
});

test('Renderiza componente CartButton',() => {
    
    const cartButton = screen.getByAltText(/shopping cart/i);
    expect(cartButton).toBeInTheDocument();
});

test('Renderiza componente Home', () => {
    
    const subtitleHome = screen.getByText(/please choose a product./i);
    expect(subtitleHome).toBeInTheDocument();
});