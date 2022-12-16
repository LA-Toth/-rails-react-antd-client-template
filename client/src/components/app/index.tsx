import React from 'react'
import styles from './styles.modules.scss'
import './simple.scss'
import './a-css.css'
import { Button } from 'antd'
import { FastBackwardOutlined } from '@ant-design/icons'
import { Link, Route, Routes } from 'react-router-dom'
import NotFound from '../notfound'

export function App() {
  return (
    <div className={styles.app}>
      Hello, App.
      <Button type="primary">Button</Button>
      <FastBackwardOutlined />
      <Link to="/">Home</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      ----
      <br />
      <br /> <br />
      <Routes>
        <Route path="/" element={<div>HoMe</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
