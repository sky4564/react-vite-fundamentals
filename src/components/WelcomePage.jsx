import React, { useState } from 'react'
import Logo from "./Logo"
import Counter from "./Counter"


export default function WelcomePage() {
  const [cnt, setCnt] = useState(100)
  const [liftItem, setliftItem] = useState(0)

  function cntUp() {
    setCnt((cnt) => cnt + 1)
  }

  function liftUp(data) {
    setliftItem((x) => x += data)
    console.log(liftItem)
  }

  return (
    // use react fragment
    <React.Fragment>
      <Logo></Logo>
      <Counter cnt={cnt} cntUp={cntUp} liftUp={liftUp}></Counter>
      <div> Lift item {liftItem}</div>
    </React.Fragment>

  )
}