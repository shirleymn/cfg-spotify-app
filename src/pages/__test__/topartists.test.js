import {render, screen} from '@testing-library/react'
import GetTopArtists from '../../hooks/GetTopArtists';
import TopArtists from '../topartists'

import renderer from "react-test-renderer";



it("matches snapshot", () =>{
    const tree = renderer.create(<TopArtists></TopArtists>).toJSON();
    expect(tree).toMatchSnapshot();

});

