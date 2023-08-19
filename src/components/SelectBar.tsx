import React, {useState} from 'react'
import {Dropdown, MenuItem} from '@mui/joy'

interface Props {
  options: {text: string; value: string}[]
  onChange: (newValue: string) => void
}

const SelectBar: React.FC<Props> = ({options, onChange}) => {
  const [selectedOption, setSelectedOption] = useState(options[0].value)

  const handleSelectChange = (event: any) => {
    const newValue = event.target.value
    setSelectedOption(newValue)
    onChange(newValue)
  }

  return (
    <Dropdown>
      {options.map(({text, value}) => (
        <MenuItem key={value}>{text}</MenuItem>
      ))}
    </Dropdown>
  )
}

export default SelectBar
