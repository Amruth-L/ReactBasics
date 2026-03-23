import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ background: "#dfe6e9", height: "100vh", width: "100vw" }}>
      <div class={{ display: "flex", justifyContent: "center" }}>
        <div><div><PostComponent /><br /></div>
          <div> <PostComponent /><br /></div>
          <div> <PostComponent /><br /></div>
        </div >
      </div >
    </div >
  )
}
const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "red", borderWidth: 1, padding: 20 }
function PostComponent() {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC2TsupP-aEOKYyRv52D1p9RA0wZnl1If5kg&s"} style={{ width: 20, height: 20, borderRadius: 20 }} />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b> 100xdevs </b>
          <div><b> 23,888 followers</b></div>
          <div>12 m</div>
        </div>
      </div>
      <div style={{ fontSize: 12 }}>
        what to know how to win big?</div></div>
  )
}
export default App
