import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("App component test", () => {

  it("should render shop component when user click shop in navigation bar", () => {
    render(<App />);
    userEvent.click(screen.getByText(/shop/i));
    expect(screen.getAllByText(/add to cart/i)[0]).toBeInTheDocument();
  });

  it("should update item in cart array correctly when user click on add item button", () => {
    render(<App />);
    userEvent.click(screen.getByText(/shop/i));
    const fourthOptions = screen.getAllByRole('option', { name: "4" });
    const itemIndicator = screen.getByTestId('indicator');
    fourthOptions[0].selected = true;
    userEvent.click(screen.getAllByRole('button')[0]);
    expect(itemIndicator).toHaveTextContent('4');
  });

  it("should display cart component when user click on cart", () => {
    render(<App />);
    userEvent.click(screen.getByTestId("indicator"));
    expect(screen.getByRole('heading', { name: /your cart/i })).toBeInTheDocument();
  });

})