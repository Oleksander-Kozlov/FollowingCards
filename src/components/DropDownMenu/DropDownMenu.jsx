import {
  // useEffect,
  useState
} from 'react';
import Select from 'react-select';
// import styled from 'styled-components';

const DropDownMenu = ({ onChange, flexDirection, filter }) => {
  const options = [
    { value: 'following', label: 'Following' },
    { value: 'follow', label: 'Follow' },
    { value: 'all', label: 'Show all' },    
  ];
  
  const [isOpen, setIsOpen] = useState(false);
  
  const storedOption = JSON.parse(localStorage.getItem('selected'))||null;
  const [selectedValue, setSelectedValue] = useState(
    storedOption ? storedOption.value : 'all'
  );
  const [selectedLabel, setSelectedLabel] = useState(
    storedOption? storedOption.label : 'Show all' 
  );

  const getValue = () => {
    filter(selectedValue)
    return selectedValue ?? options.find(item => item.value === selectedValue)
  }
  const getLabel = () => {
    return selectedLabel ?? options.find(item => item.label === selectedLabel);
  };

  const handleOnChange = selectedOption => {
    const value = selectedOption.value;   
    const label = selectedOption.label;
    setSelectedValue(value);
    setSelectedLabel(label)
   localStorage.setItem('selected', JSON.stringify(selectedOption));
   filter(value);
  
 };
  
  
const customStyles = {
    valueContainer: provided => ({
      ...provided,
     
      paddingLeft: 18,
      background:
        'linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
      color: '#373737',
      borderRadius: '20px',
      placeholderColor: 'red',

      zIndex: 6000,
    }),
    control: provided => ({
      ...provided,
      borderRadius: '20px',
      background:
        'linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
      boxShadow: '-2.5777px 6.87386px 20.62157px 0px rgba(0, 0, 0, 0.23)',
      border: 0,
      cursor: 'pointer',
      borderColor: 'transparent',

      color: '#red',
    }),
    option: (provided, { isFocused }) => ({
      ...provided,
      background:
        'linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',

      borderRadius: 20,
      color: isFocused ? 'rgba(235, 216, 255, 1)' : 'yellow',
      display: 'flex',
      alignItems: 'flex-start',
    }),
    menu: provided => ({
      ...provided,

      background:
        'linear-gradient(115deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
      borderRadius: 20,
      zIndex: 6000,
    }),
    singleValue: provided => ({
      ...provided,
      color: 'rgba(235, 216, 255, 1)',
    }),

    placeholder: provided => ({
      ...provided,
      color: 'rgba(235, 216, 255, 1)',
    }),

    dropdownIndicator: provided => ({
      ...provided,
      cursor: 'pointer',
      color: 'rgba(235, 216, 255, 1)',
      '&:hover': {
        color: '#yellow',
      },
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
  };

  const selectContainer = {
    width: '320px',
  };
  return (
    <div style={selectContainer}>
      <Select
        options={options}
        value={getValue()}
        placeholder={getLabel()}
        
        styles={{ ...customStyles }}
        onChange={handleOnChange}
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default DropDownMenu;
