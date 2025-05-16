import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import SkinCare from './pages/SkinCare'
import KidsCare from './pages/KidsCare'
import HairCare from './pages/HairCare'
import Bestsellers from './pages/Bestsellers'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import RefundPolicy from './pages/RefundPolicy'
import TermsConditions from './pages/TermsConditions'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import Policy from './pages/Policy'
import CheckoutPage from './pages/Cheackout'
import { OrderConfirmation } from './pages/confrem'

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}
function App() {


  return (
    <>    <ScrollToTop />
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skin-care" element={<SkinCare />} />
          <Route path="kids-care" element={<KidsCare />} />
          <Route path="hair-care" element={<HairCare />} />
          <Route path="bestsellers" element={<Bestsellers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/policy' element={<Policy/>}/>
          <Route path='/cheakout' element={<CheckoutPage/>}/>
          <Route path='/OrderConfirmation' element={<OrderConfirmation/>}/>

          
        </Route>
      </Routes>

    </>

  )
}

export default App