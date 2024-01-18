import PropTypes from 'prop-types';
// import { Outlet } from 'react-router-dom';
import Header from '../components/customer/header';
import Carousel from '../components/customer/carousel';
// import Services from '../components/customer/services';
import ProductCard from '../components/customer/productCard';
import SaleCards from '../components/customer/saleCards';
import Footer from '../components/customer/footer';
function CustomerLayout() {
    const prods = [1, 2, 3, 4, 5]
    return (
        <div className='h-screen w-screen '>
            <div className='h-35 w-full mb-5 '> <Header /> </div>
            <Carousel />
            <div>
                <div className='px-10 mt-5'>
                    <p className='text-4xl text-black font-bold my-10'>Featured Products</p>
                    <div className='flex justify-between'>
                        {prods.map((value, index) => { return <ProductCard key={index} /> })}
                    </div>
                </div>
                <div className='w-full [h-20%]'>
                    <SaleCards />
                </div>
            </div>
            <Footer />

        </div>
    )
}

CustomerLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default CustomerLayout