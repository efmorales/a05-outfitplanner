import { useState } from "react";
import clothing from '../clothing';
import './OutfitGenerator.css';

const OutfitGenerator = () => {

    let initialState = ['https://slimages.macysassets.com/is/image/MCY/products/2/optimized/13336822_fpx.tif?$thumb$&wid=376', 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/18054952_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp', 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18588060_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp'];

    const [outfit, setOutfit] = useState(initialState);

    const outfitHandler = (style) => {
        let topArray = clothing.filter((element)=>{
            return element.dressCode === style && element.type === "top";
        })
        let bottomArray = clothing.filter((element)=>{
            return element.dressCode === style && element.type === "bottom";
        })
        let shoesArray = clothing.filter((element)=>{
            return element.dressCode === style && element.type === "shoes";
        })
        let topImg = topArray[Math.floor(topArray.length * Math.random())].imageUrl;
        let bottomImg = bottomArray[Math.floor(bottomArray.length * Math.random())].imageUrl;
        let shoesImg = shoesArray[Math.floor(shoesArray.length * Math.random())].imageUrl;

        setOutfit([topImg, bottomImg, shoesImg]);
        
    }

    return (
        <div className="outfit-generator">

            <h3>
                Fashion Styles // Dress Code
            </h3>

            <div className="outfit-buttons-container">
                <button onClick={() => outfitHandler('casual')}>Casual</button>
                <button onClick={() => outfitHandler('sport')}>Sport</button>
                <button onClick={() => outfitHandler('formal')}>Formal</button>
            </div>

            <div className="outfit-images-container">
                <h4>TOP</h4>
                <img src={outfit[0]} alt="top" />
                <h4>BOTTOM</h4>
                <img src={outfit[1]} alt="bottom" />
                <h4>FORMAL</h4>
                <img src={outfit[2]} alt="shoes" />
            </div>

        </div>
    )
}

export default OutfitGenerator