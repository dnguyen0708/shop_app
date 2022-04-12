import Shop from "./components/Shop";
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";

describe("test Shop Component", () => {
    describe("add to cart functionality", () => {
        it("should show 4 from quantity dropdown selection", () => {
            const onChangeMock = jest.fn();
            render(<Shop addToCart={onChangeMock} />);
            const quantity = screen.getAllByRole('option', { name: "4" });
            expect(quantity[0]).toHaveTextContent(4);
        });

        it("should call onChangeMock function when button is clicked", () => {
            const onChangeMock = jest.fn();
            render(<Shop addToCart={onChangeMock} />);
            const button = screen.getAllByRole('button');
            userEvent.click(button[0]);
            expect(onChangeMock).toHaveBeenCalled();
        });

        it("should have 6 * 9 options from select dropdown", () => {
            render(<Shop />);
            const options = screen.getAllByRole("option");
            expect((options.length)).toBe(6 * 9);
        })
    })
})