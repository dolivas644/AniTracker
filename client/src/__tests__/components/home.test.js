import {render, screen} from "@testing-library/react";
import Home from "./../../components/Home/Home";

describe ("Home", () =>{
    test("render the home component", () =>{
        render(<Home />);
    });
});