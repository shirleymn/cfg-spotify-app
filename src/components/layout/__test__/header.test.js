import React from 'react';
import ReactDOM from 'react-dom';
// import Header from '../../Navbar';
import Header from '../header';
import {render, cleanup} from '@testing-library/react'
// import { NavLink } from 'react-router-dom';

import renderer from "react-test-renderer"
import Navbar from '../../Navbar';


afterEach(cleanup)



it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<header></header>, div)
}) 

it("matches snapshot", () =>{
    const tree = renderer.create(<header></header>).toJSON();
    expect(tree).toMatchSnapshot();

})