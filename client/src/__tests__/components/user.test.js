import { fireEvent, render, screen } from "@testing-library/react"
import UserInfo from "../../components/User/UserInfo";

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

describe("Able to map user info", () => {
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
    test("User info is read", () => {
        render(<UserInfo user={user} />);

    });
});