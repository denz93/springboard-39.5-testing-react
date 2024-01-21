import {render} from '@testing-library/react'
import CoinFlip from './CoinFlip'

it('renders without crashing', function() {
  render(<CoinFlip/>)
})