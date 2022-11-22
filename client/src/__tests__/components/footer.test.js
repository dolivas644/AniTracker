import {render, screen} from "@testing-library/react";
import Footer from "./../../components/Footer/Footer";

describe ("Footer", () =>{
    test("render the footer component", () =>{
        render(<Footer />);
    });
});

test("should navigate to LinkedIn", ()=>{
    const {getByTestId} =render(<a data-testid='link' href="https://www.linkedin.com/in/diana-olivas"><img
    src="https://img.icons8.com/nolan/64/linkedin-circled.png" /></a>)

    expect(getByTestId('link')).toHaveAttribute('href', "https://www.linkedin.com/in/diana-olivas");
})
