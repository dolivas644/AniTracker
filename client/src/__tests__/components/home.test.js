import {render, screen} from "@testing-library/react";
import Home from "./../../components/Home/Home";

describe ("Home", () =>{
    test("render the home component", () =>{
        render(<Home />);
    });
});


// const unmockedFetch = global.fetch;

// beforeAll(() =>{
//     global.fetch = () =>{
//         Promise.resolve({
//             json: () => Promise.resolve([]),
//         })
//     }
// })

// afterAll(() =>{
//     global.fetch = unmockedFetch
// })

// describe('fetch', () => {
//     test('works', async () => {
//         expect(Array.isArray(json)).toEqual(true)
//         expect(json.length).toEqual(0)
//     })
// })
