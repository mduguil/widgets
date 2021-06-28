import React, { useState } from 'react'
import Dropdown from './components/Dropdown'
// import Accordion from './components/Accordion'
import Search from './components/Search'

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  }
]

const App = () => {
  const [ selected, setSelected ] = useState(options[0])
  const [ showDropdown, setShowDropdown ] = useState(true)

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {showDropdown ? (
      <Dropdown
        selected={selected}
        options={options}
        onSelectedChange={setSelected}
      />
      ) : null}
    </div>
  )
}

export default App
