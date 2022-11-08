import Header from "../Header/header";
import Footer from "../Footer/footer";
import Categories from "../Categories/categories";
import Products from '../Products/products';

function Main(props)
{
  return(
    <main className="main">
      <Header/>
      <Categories />
      <Products />
      <Footer/>
    </main>
  )
}

export default Main;
