import {render, fireEvent, waitFor} from '@testing-library/react';
import Coin from './Coin';

it('renders without crashing', function() {
  render(<Coin />)
})

it('shows only flip button when loaded', function() {
  const {container} = render(<Coin />)
  expect(container.querySelector('button')).toBeInTheDocument()
  expect(container.querySelector('img')).not.toBeInTheDocument()
})

it('shows image when clicked', function() {
  const {container} = render(<Coin />)
  expect(container.querySelector('img')).not.toBeInTheDocument()
  fireEvent.click(container.querySelector('button'))
  expect(container.querySelector('img')).toBeInTheDocument()
})


it('shows head and tail sequencely', async function() {
  const spy = jest.spyOn(Math, "random")
    .mockReturnValueOnce(0.55)
    .mockReturnValueOnce(0.25)

  const {container} = render(<Coin />)
  const buttonEle = container.querySelector('button')
  
  fireEvent.click(buttonEle)
  /** @type {HTMLDivElement} */
  let coinEle = container.querySelector('.coin')
  await waitFor(() => expect(coinEle.style['_values']['--round']).toBe("3"))
  await waitFor(() => expect(buttonEle.disabled).toBe(false), {timeout: 3000})

  fireEvent.click(buttonEle)
  await waitFor(() => expect(coinEle.style['_values']['--round']).toBe("2.5"))

  spy.mockClear()
})