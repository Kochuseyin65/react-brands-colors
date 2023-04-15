import React, { useContext } from 'react'
import { getContrastYIQ } from '../helpers';
import MainContext from '../MainContext';
import Clipboard from "react-clipboard.js"

function Brand({ brand }) {

  const {setSelectedBrands, SelectedBrands, setCopied} = useContext(MainContext)

  const toogleSelected = () => {
    if (SelectedBrands.includes(brand.slug)) {
      setSelectedBrands(SelectedBrands.filter(slug => slug !== brand.slug))
    } else {
      setSelectedBrands([...SelectedBrands, brand.slug])
    }
  }

  const setColor = (color) => {
    setCopied(color)
  }

  return (
    <div className={`brand ${SelectedBrands.includes(brand.slug) ? "selected" : ""}`}>
        <h5 onClick={toogleSelected}>{brand.title}</h5>
        <div className="brand-colors">
            {
            brand.colors.map((color, key) => (
                <Clipboard key={key} data-clipboard-text={color} onSuccess={() => {setColor(color)}} component="span" style={{"--bgColor": `#${color}`, "--textColor": `${getContrastYIQ(color)}`}}>
                  {color}
                </Clipboard>
            ))
            }
        </div>
    </div>
  )
}

export default Brand