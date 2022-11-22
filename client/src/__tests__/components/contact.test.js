import { fireEvent, render, screen } from "@testing-library/react"
import Contact from "../../components/Contact/Contact"

describe("Contact", () => {
    test("render the Contact component", () => {
        render(<Contact />);
    });
});
test("Jikan Website is present", () => {
    render(<Contact />)
    expect(screen.getByText(/Jikan website/))
})

test("should navigate to Jikan", () => {
    render(<Contact />)
    expect(screen.getByText(/Jikan website/).href).toBe("https://jikan.moe/");
})

test("Contact Header is present", () => {
    render(<Contact />)
    expect(screen.getByText(/Contact Us/))
})
