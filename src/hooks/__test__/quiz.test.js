import Quiz from "../../pages/quiz"

import React from 'react';

import renderer from 'react-test-renderer';
import { render, screen} from '@testing-library/react';
it('renders correctly', () => {
 const tree = renderer
   .create(<Quiz page="http://localhost:3000/quiz" />)
   .toJSON();
   console.log(tree)
   expect(tree).toMatchSnapshot();
});

test('renders each react link', () => {
  render(<Quiz/>);
  const linkElement = screen.getByText(/quiz/i)
  expect(linkElement).toBeInTheDocument();
});

// test('shows proper heading when rendered', () => {
//   render(<Quiz/>);
//   const {getByText} = render {name:"quiz-heading"})

//   expect(getByText('Discover how in tune you are with your music taste')).toBeInTheDocument()
// }

