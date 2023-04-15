import './App.css';
import MainContext from './MainContext';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import BrandsData from "./brand.json"
import { useEffect, useState } from 'react';
import Copied from './components/Copied';

function App() {


  const brandsArray = [];
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [SelectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [Search, setSearch] = useState("")

  const data = {
    brands,
    SelectedBrands,
    setSelectedBrands,
    setCopied,
    Search,
    setSearch,
  }

  useEffect(() => {
    console.log(SelectedBrands);
  }, [SelectedBrands])


  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 500);
    }
  })

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(Search.toLowerCase())))
  }, [Search])

  return (
    <>
    <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
        {copied && <Copied color={copied}/>}
      </MainContext.Provider>
    </>
  );
}

export default App;
