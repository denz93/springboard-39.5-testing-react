import {render} from '@testing-library/react'
import Card from './Card';
import TEST_IMAGES from './_testCommon';

it('renders without crashing', function() {
  render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={0} totalNum={1}/>)
})