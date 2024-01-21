import { useState, useMemo } from "react";
import Coin from "./Coin";

export default function CoinFlip() {
  const [record, setRecord] = useState([]);
  const totalHeads = useMemo(() => record.filter(v => v > 0.5).length, [record])
  const totalTails = useMemo(() => record.length - totalHeads, [record, totalHeads])
  return <div style={{marginBottom: '50px'}}>
    <h1>Let's flip a coin</h1>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Coin onFlipDone={(value) => {
        setRecord([...record, value])
      }}/>
    </div>
    
    <div style={{margin:'1em 0'}}>Out of {record.length} flips, there have been {totalHeads} heads and {totalTails} tails</div>
  </div>
}