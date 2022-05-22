
import TopTracks from '../toptracks'

import renderer from "react-test-renderer";



it("matches snapshot", () =>{
    const tree = renderer.create(<TopTracks></TopTracks>).toJSON();
    expect(tree).toMatchSnapshot();

});