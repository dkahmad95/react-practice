import { useSelector } from 'react-redux'
import './product.css'
import Card from "../../ui/card/Card"

const Products = () => {
const products = useSelector((state)=> state.products.Products)
console.log(products)
  
  return (
    <div className='productsContainer'>
      { products.map((product,index)=> {
        return(
          <div className="cardContainer" key={index}>

            <Card category={product.category} desc={product.description} image={product.image} price={product.price} title={product.title} />
          </div>
        )
      })}
    </div>
  )
}

export default Products