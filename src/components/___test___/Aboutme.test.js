import { render,screen } from "@testing-library/react";

import Aboutme from '../Aboutme'

test('test About Me Page',() =>{
    render(<Aboutme/>)
    const heading = screen.getByRole('heading', {name : 'About Me'});
    expect(heading).toBeInTheDocument();
})