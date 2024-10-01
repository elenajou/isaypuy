import { useState } from 'react';
import PhoneInput from 'react-phone-number-input/input'

function PhoneNumber() {
  const [value, setValue] = useState()
  return (<>
    <PhoneInput
      countrySelectProps={{ unicodeFlags: true }}
      value={value}
      onChange={setValue}/>
    <PhoneInput
      international
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      </>
  )
}

export default PhoneNumber;