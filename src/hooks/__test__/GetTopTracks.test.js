import React from 'react';
import ReactDOM from 'react-dom';
import GetTopTracks from '../GetTopTracks';

import {render, cleanup, screen} from '@testing-library/react';
import renderer from "react-test-renderer"


afterEach(cleanup)

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<GetTopTracks></GetTopTracks>, div)
}) 

it("matches snapshot", () =>{
    const tree = renderer.create(<GetTopTracks></GetTopTracks>).toJSON();
    expect(tree).toMatchSnapshot();

})