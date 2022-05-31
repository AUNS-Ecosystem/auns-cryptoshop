import {Space, InputNumber} from 'antd';
import "./PriceRanges.css";

function PriceRanges({priceMin, setPriceMin, priceMax, setPriceMax}) {

        function changePrice(min,max){
            setPriceMin(min);
            setPriceMax(max);
        }

  return (
    <>
    <h2>
        Price Ranges
    </h2>
    <p className="prices" onClick={() => changePrice(0,50)}>Under $50</p>
    <p className="prices" onClick={() => changePrice(50,100)}>$50 to $100</p>
    <p className="prices" onClick={() => changePrice(100,200)}>$100 to $200</p>
    <p className="prices" onClick={() => changePrice(200,100000)}>$200 & Above</p>
    <Space>
    <InputNumber
      value={priceMin}
      formatter={value => `$ ${value}`}
      onChange={(value) => changePrice(value,priceMax)}
    />
    <InputNumber
      value={priceMax}
      formatter={value => `$ ${value}`}
      onChange={(value) => changePrice(priceMin,value)}
    />
    </Space>
    <br/>
    <br/>
    </>
  )
}

export default PriceRanges