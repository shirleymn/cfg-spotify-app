import React from 'react';
import ReactDOM from 'react-dom';
import GetTopArtists from '../GetTopArtists';

import {render, cleanup, screen} from '@testing-library/react';
import renderer from "react-test-renderer"


afterEach(cleanup)

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<GetTopArtists></GetTopArtists>, div)
}) 

it("matches snapshot", () =>{
    const tree = renderer.create(<GetTopArtists></GetTopArtists>).toJSON();
    expect(tree).toMatchSnapshot();

})
