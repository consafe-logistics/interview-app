import { render, screen } from "@testing-library/react";
import SampleComponent from "./SampleComponent";

describe('SampleComponent', () => {
  it('should render correctly', () => {
    const tree = render(<SampleComponent />).asFragment();
    expect(tree).toMatchSnapshot();
  });

  it('should increment the count to 3 after 3 clicks', () => {
    // Setup
    render(<SampleComponent />);

    // Act
    const button = screen.getByLabelText('Increment');
    button.click();
    button.click();
    button.click();

    // Expect
    const label = screen.getByDisplayValue('Clicks: 3');
    expect(label.innerText).toContain(3)
  });

  it('should open the modal after button click', () => {
    // Setup
    const tree = render(<SampleComponent />).asFragment();

    // Act
    const button = screen.getByText('Open Modal');
    button.click();

    // Expect
    const modal = screen.getByRole('dialog');
    expect(tree).toContain(modal);
  });
});