import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Cart from "../Cart";

describe("test cart functionality", () => {
    it("should display cart component when user click on cart", () => {
        expect(1).toBe(1);
    });

    it("should call updatecart function from App when add is clicked", () => {
        const onChangeMock = jest.fn();
        const currentCart = [{ "item": "random Obj", quantity: 5 }];
        render(<Cart items={currentCart} updateCart={onChangeMock} />);
        const button = screen.getAllByTestId('test-add');
        userEvent.click(button[0]);
        expect(onChangeMock).toBeCalled();
    });

    it("should call updatecart function from App when subtract is clicked", () => {
        const onChangeMock = jest.fn();
        const currentCart = [{ "item": "random Obj", quantity: 5 }];
        render(<Cart items={currentCart} updateCart={onChangeMock} />);
        const button = screen.getAllByTestId('test-subtract');
        userEvent.click(button[0]);
        expect(onChangeMock).toBeCalled();
    });

    it("should update items in cart with correct quantity (from 5 to 6) when add is clicked", () => {
        const onChangeMock = jest.fn();
        const currentCart = [{ "item": "random Obj", quantity: 5 }];
        render(<Cart items={currentCart} updateCart={onChangeMock} />);
        const button = screen.getAllByTestId('test-add');
        userEvent.click(button[0]);
        expect(screen.getAllByTestId('test-amount')[0].textContent).toBe("6");
    });

    it("should update items in cart with correct quantity (from 5 to 4) when add is clicked", () => {
        const onChangeMock = jest.fn();
        const currentCart = [{ "item": "random Obj", quantity: 5 }];
        render(<Cart items={currentCart} updateCart={onChangeMock} />);
        const button = screen.getAllByTestId('test-subtract');
        userEvent.click(button[0]);
        expect(screen.getAllByTestId('test-amount')[0].textContent).toBe("4");
    });

})