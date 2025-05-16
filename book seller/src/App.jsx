import React, { useEffect, useState } from 'react'
import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import MeasurementPage from './pages/MeasurementPage'

import BookPage from './pages/BookPage'
import HelpPage from './pages/HelpPage'
import useCartStore from './store/cartStore'
import PrivacyPolicy from './pages/policy'
import RefundPolicy from './pages/refundpage'
import FAQ from './pages/Faq'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import { Phone, Search, User } from 'lucide-react'
import TermsAndConditions from './pages/Terms'
import TrackOrderPage from './pages/Trackorder'
import { MdEmail } from 'react-icons/md'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/Contact' },
  { name: 'Privacy-Policy', href: '/PrivacyPolicy' },
]

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cartItems = useCartStore((state) => state.items)

  return (
    <div className="bg-white">
      <header className="fixed inset-x-0 top-0 z-50 w-[100vw] bg-orange-400 backdrop-blur-md">
        <div className='bg-orange-600 py-2   font-sans px-16 flex-wrap text-white flex justify-center'>
          <p className='flex space-x-2 items-center'><Phone /> <span>(907) 563-8876</span> <span> |</span> </p>
          <p className='flex space-x-2 items-center md:ml-5'><MdEmail className='text-xl' /> <span>
            support@bookonlineshop.com</span> </p>
        </div>
        <nav className="flex items-center justify-between p-4 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 ">

              <img
                className="h-12 w-16 "
                src="./booklogo.png"
                alt="ShadeNest"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="nav-link hover:bg-transparent text-black hover:text-gray-800">
                {item.name}
              </Link>
            ))}
            <div className="hidden justify-center items-center  lg:flex lg:flex-1 lg:justify-end">
              <Link to="/cart" className="nav-link flex items-center">
                <ShoppingCartIcon className="h-6 w-6 mr-1" />
                <span className="bg-[#F86D3C] text-white rounded-full px-2 py-1 text-xs">
                  {cartItems.length}
                </span>
              </Link>
              <div className='ml-5 hidden md:block'>
                <User />
              </div>
              <div className='ml-5 hidden md:block'>
                <Search />
              </div>

            </div>

          </div>

        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">

                <img
                  className="h-8 w-auto"
                  src="./logo.png"
                  alt="ShadeNest"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10"><div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="nav-link-mobile"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/cart"
                  className="nav-link-mobile flex items-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingCartIcon className="h-6 w-6 mr-1" />
                  Cart ({cartItems.length})
                </Link>

              </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main className="pt-20">
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/measurement" element={<MeasurementPage />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/TrackOrderPage" element={<TrackOrderPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/about" element={<HelpPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/RefundPolicy" element={<RefundPolicy />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App