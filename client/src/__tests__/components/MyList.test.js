import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import MyAnimeList from "./../../components/Mylist/MyAnimeList";

import { useAuth0 } from "@auth0/auth0-react";
import { mocked } from "jest-mock";

const user = {
    email: "animetracker938@gmail.com",
    email_verified: true,
    sub: "google-oauth2|109259180976718515871",
    name: "Diana",
    picture: "https://lh3.googleusercontent.com/a/ALm5wu37DG_8TfWnPE6txsyfaUe_ZR6gDFoND9OHc0sn=s96-c"
}

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);

describe("Get my anime list data", () => {
    beforeEach(() => {
        mockedUseAuth0.mockReturnValue({
            isAuthenticated: true,
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

    test("render MyAnimeList component", () => {
        render(<MyAnimeList />);
    });

    test("Click", () => {
        const mockCallBack = jest.fn()
    });
    const onClick = jest.fn();

    test("Completed List is present", () => {
        render(<MyAnimeList user={user} />)
        expect(screen.getByText(/Completed/))
    })

    test("Currently Watching List is present", () => {
        render(<MyAnimeList user={user} />)
        expect(screen.getByText(/Currently Watching/))
    })

});


