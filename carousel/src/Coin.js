import head from './head.png';
import tail from './tail.png';
import "./Coin.css";
import {useState} from 'react';

export default function Coin({rollingTime=3000, onFlipDone}) {
  const [doneRolling, setDoneRolling] = useState(true)
  const [repeatTime, setRepeatTime] = useState(0)
  const [value, setValue] = useState(null)
  const isHead = value !== null && value > 0.5

  return <div>
    <div className='coin-wrapper'>
      {value !== null && <div className={`coin-status ${!doneRolling ? 'rolling' : ''}`}>{doneRolling ? isHead ? 'Heads' : 'Tails' : 'Rolling...'}</div>}
      {value !== null && <div 
        className='coin' 
        style={{'--round': isHead ? 3 : 2.5, animationIterationCount: repeatTime, animationPlayState: !doneRolling ? 'running' : 'paused'}}>
        <div className='face tail'>
          <img  src={tail} width={200} height={200} alt='tails'/>

        </div>
        <div className='face head'>
          <img  src={head} width={200} height={200} alt='heads'/>

        </div>
        {new Array(40).fill(1).map((_, idx) => <div key={idx} style={{'--index': idx+1}} className='side'></div>)}
      </div>
      }
    </div> 
      
    <button onClick={() => {
      const randomValue = Math.random()
      setDoneRolling(false)
      setRepeatTime(repeatTime + 1)
      setValue(randomValue)
      setTimeout(() => {
        setDoneRolling(true)
        onFlipDone?.(randomValue)
      }, rollingTime)
      }} disabled={!doneRolling}>Flip meee</button>
  </div> 
}