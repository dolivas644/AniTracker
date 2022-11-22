import { fireEvent, render, screen } from "@testing-library/react"
import LoginDash from "../../components/Login/LoginDash";
import HeadImg from "../../components/Images/head.png"
import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "jest-mock";
import AniSearch from "../../components/Login/Images/AniSearch.png"

const user = {
    email: "animetracker938@gmail.com",
    email_verified: true,
    sub: "google-oauth2|109259180976718515871",
    name: "Diana",
    picture: "https://lh3.googleusercontent.com/a/ALm5wu37DG_8TfWnPE6txsyfaUe_ZR6gDFoND9OHc0sn=s96-c"
}


jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, false);

describe("Login page displays if not logged in", () => {
    beforeEach(() => {
        mockedUseAuth0.mockReturnValue({
            isAuthenticated: false,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn(),
            getAccessTokenWithPopup: jest.fn(),
            getAccessTokenSilently: jest.fn(),
            getIdTokenClaims: jest.fn(),
            loginWithPopup: jest.fn(),
            isLoading: false,
        });
    });
    test("Login renders", () => {
        render(<LoginDash />);

    });
});

it("renders image header", () => {
    render(<LoginDash />);
    const image = screen.getByAltText('Firstslide')
    expect(image).toHaveAttribute('src', `${HeadImg}`)
})

it("renders image header", () => {
    render(<LoginDash />);
    const image = screen.getByAltText('2ndslide')
    expect(image).toHaveAttribute('src', `${AniSearch}`)
})