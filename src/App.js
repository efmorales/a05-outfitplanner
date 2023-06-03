import { useState} from "react";
import './App.css';
import clothing from './clothing';
import Header from './components/Header'
import OutfitGenerator from './components/OutfitGenerator'


// how do I get an array of 3 strings to display what I want?


function App() {

  let initialState = ['https://slimages.macysassets.com/is/image/MCY/products/8/optimized/21436348_fpx.tif?$browse$&wid=376&fmt=webp', 'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/18054952_fpx.tif?op_sharpen=1&wid=1200&fit=fit,1&$filtersm$&fmt=webp', 'https://slimages.macysassets.com/is/image/MCY/products/0/optimized/18588060_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$&fmt=webp'];

  const [outfit, setOutfit] = useState(initialState);

  console.log(clothing);

  return (
    <div className="App">

        <Header />
        <OutfitGenerator />

    </div>
  );
}

export default App;
