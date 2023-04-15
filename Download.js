import React, { useContext } from 'react'
import MainContext from '../MainContext'
import { GrLink, GrDownload, GrClose } from 'react-icons/gr'

function Download() {

    const {SelectedBrands, setSelectedBrands} = useContext(MainContext)

    const getLink = () => {
        prompt("hello world", `http://localhost/3000/collection/${SelectedBrands.join(",")}`)
    }

    return (
        <div className="download">
            <div className="actions">
                <a href="#">
                    <GrDownload />
                </a>
                <button onClick={getLink}>
                    <GrLink />
                </button>
            </div>
            <div className="selected" onClick={() => {setSelectedBrands([])}}>
            <GrClose />
            {SelectedBrands.length} brands collected
            </div>
        </div>
    )
}

export default Download