import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();  

});

// smoke test
it('renders without crashing', function() {
  render(<Carousel photos={TEST_IMAGES} title="images for testing"/>)
})

it('works when you click on the left arrow', function() {
  const {container} = render(<Carousel photos={TEST_IMAGES} title="images for testing"/>)

  // move to second image
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // move back
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();
})

it('works when exhasted images both ends', function() {
  const {container} = render(<Carousel photos={TEST_IMAGES} title="images for testing"/>)
  
  // left arrow should be disabled
  expect(container.querySelector(".bi-arrow-left-circle")).toHaveClass("disabled");
  
  const rightArrow = container.querySelector(".bi-arrow-right-circle");

  // move forward 2 times
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // left arrow should be disabled
  expect(rightArrow).toHaveClass('disabled');
})