import React from 'react';
import ReactDOM from 'react-dom';
import GetTopArtists from '../GetTopArtists';


import {render, cleanup, screen, waitForElement, getByTestId } from '@testing-library/react';
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event"


afterEach(cleanup)


it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<GetTopArtists></GetTopArtists>, div)
}) ;

it("matches snapshot", () =>{
    const tree = renderer.create(<GetTopArtists></GetTopArtists>).toJSON();
    expect(tree).toMatchSnapshot();

});




