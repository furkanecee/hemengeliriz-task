import Logo from '../../img/logo/logo.png'
import { Fragment } from 'react'
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')}


const Header = () => {
  return (
    <div>
      <nav class="flex items-center md:justify-between mb-3 ">
      <div className="flex max-md:justify-between flex-1">
       <div className="menu">
          <button className="md:hidden max-md:mr-14 max-md:text-gray-600"><i class="fa-solid fa-user fa-lg"></i></button>
        </div>
        <div className="relative float-right">
          <img className=" flex h-10 w-52 max-md:h-6 max-md:w-32 mt-4 max-md:mt-0" src={Logo} alt="" />
        </div>
        <div className="category flex-1 ml-10 max-md:hidden">
          <Menu as="div" className="relative inline-block mt-4">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-gray-500 px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-transparent mt-2">
                Tüm Kategoriler
                <ChevronDownIcon className=" mr-1 h-5 w-5 text-gray-500" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                        Beyaz Eşya Servisi
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                        Bulaşık Makinesi Tamiri
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={classNames( active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                        Buz Dolabı Servisi
                      </a>
                    )}
                  </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block w-full px-4 py-2 text-left text-sm')}>
                          Çamaşır Makinesi Servisi
                        </button>
                      )}
                    </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        
        <div className="flex items-center">
          <button type="button" class="m-auto bg-sky-500 text-white hover:text-white border border-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm pr-4 pt-1 text-center me-2  dark:border-sky-500 dark:text-sky-500 dark:hover:text-white flex max-md:hidden"><span className="m-3"><i class="fa-solid fa-user fa-lg"></i></span>&nbsp;<br /><span>Giriş Yap<p className="text-left font-extralight">Üye Ol</p></span></button>
         <Link to="/dashboard"> <button  type="button" class="m-auto text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm pr-3 pt-2 pb-2 text-center me-2 max-md:text-gray-600 max-md:border-transparent  max-md:bg-transparent max-md:hover:text-black max-md:hover:bg-transparent max-md:focus:ring-transparent max-md:p-0 max-md:mr-0 max-md:m-0 max-md:ml-0" ><span class="max-md:hidden"><i class="fa-solid fa-home fa-lg m-2.5"></i></span>&nbsp;Hizmet Ver</button></Link>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;