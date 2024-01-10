import React, { useState, Fragment } from 'react';
import Header from "./header/Header";
import SSS from "./sss/Sss";
import Footer from "./footer/Footer"
import Card from './card/Card';
import Image from "../img/image/1.jpg";
import Line from "../img/image/line1.jpg";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ScrollButton = ({ title, content }) => {
    const splitContent = content.split(',');

    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonClick = (buttonId) => {
        if (selectedButtons.includes(buttonId)) {
            setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
        } else {
            setSelectedButtons([selectedButtons, buttonId]);
        }
    };

    return (
        <div className='mb-5'>
            <p className="max-md:text-light text-sky-500 max-md:mb-3 max-md:text-sm">{title}</p>
            <div className="flex w-full mt-5 overflow-auto">
                {splitContent.map((buttonId, index) => (
                    <button
                        key={index}
                        className={`min-w-fit rounded-lg text-sky-500 md:px-5 py-2 mr-3 border border-slate-100 select-none max-md:text-sm px-4 ${selectedButtons.includes(buttonId) ? 'bg-sky-500 border-sky-500 text-white' : ''
                            }`}
                        onClick={() => handleButtonClick(buttonId)}>
                        {buttonId} {selectedButtons.includes(buttonId)}
                    </button>
                ))}
            </div>
        </div>
    );
};

const DropdownButton = () => {
    return (
        <div className="">
            <Menu as="div" className="relative inline-block mt-4">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-sky-500 shadow-sm ring-1 ring-inset ring-gray-300">
                        <p>İlçe Değiştir</p>
                        <ChevronDownIcon className=" h-5 w-5 text-sky-500" aria-hidden="true" />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Ataşehir</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Kadıköy</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Maltepe</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Üsküdar</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Kartal</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Pendik</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Şişli</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Beşiktaş</p>
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block mt-4">
                <div>
                    <Menu.Button className="ml-4 inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-sky-500 shadow-sm ring-1 ring-inset ring-gray-300 ">
                        <p>Ne Yapılacak?</p>
                        <ChevronDownIcon className="h-5 w-5 text-sky-500" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Beyaz Eşya Servisi</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Bulaşık Makinesi Tamiri</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Buz Dolabı Servisi</p>
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}>
                                        <p>Çamaşır Makinesi Tamiri</p>
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
const Content = () => {
    const username = "Fatih Keskin"
    const evulation = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    return (
        <div className="content md:mt-10 bg-slate-100 max-md:rounded-xl max-md:mt-5 max-md:p-5">
            <div className="name">
                <p className="font-medium text-gray-600">{username}</p>
            </div>
            <div className="flex star gap-1 mt-3">
                <i className="fa-solid fa-star fa-sm text-sky-500 text-xl " />
                <i className="fa-solid fa-star fa-sm text-sky-500 text-xl " />
                <i className="fa-solid fa-star fa-sm text-sky-500 text-xl " />
                <i className="fa-solid fa-star fa-sm text-sky-500 text-xl " />
                <i className="fa-solid fa-star fa-sm text-sky-500 text-xl " />
            </div>
            <div className="text mt-5">
                <p className="text-gray-500">{evulation}</p>
            </div>
        </div>
    );
}



const SectorCity = () => {
const WhereAreYou = "Ataşehir,Kadıköy,Maltepe,Üsküdar,Kartal,Pendik,Şişli,Beşiktaş,Beyoğlu,Fatih,Adalar "
const WhatToDo = "Beyaz Eşya Servisi,Buzdolabı Tamiri,Çamaşır Makinesi Tamiri,Bulaşık Makinesi Tamiri,Fırın Tamiri,Davlumbaz Tamiri,Küçük Ev Aletleri Tamiri"
    return (
        <div className="md:w-full h-full bg-white">
            <div className="m-4 mr-2 p-4 gap-0 max-sm:gap-0 max-sm:justify-between max-md:mr-0 max-md:ml-0 max-md:pr-3 max-md:pl-3">
                <Header />
                <img src={Image} className="min-w-full max-sm:h-32 max-md:h-48 max-md:min-w-full mb-8" alt="içerik Bulunamadı" />
                <ScrollButton title="İstanbul’un Hangi İlçesindesin?" content={WhereAreYou} >
                </ScrollButton>
                <ScrollButton title="Ne Yapılacak?" content={WhatToDo} >
                </ScrollButton>
                <div className="max-lg:block flex gap-32">
                    <div className="max-lg:w-full w-3/4">
                        <div className="max-lg:hidden select-none">
                            <p className='text-2xl mt-16 text-sky-500'>Ataşehir <span className='font-medium'>Beyaz Eşya Servisi</span></p>
                            <img src={Line} className='w-96 mt-2' alt="" /></div>

                        <div className="flex mt-4 max-md:hidden">
                            <DropdownButton />
                        </div>
                        <div className="max-md:mt-0 md:mt-10 flex flex-1">
                            <div className="w-full">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-24 rounded-xl h-fit md:bg-slate-100 lg:w-1/4 max-lg:w-full">
                        <div className="w-full  md:pl-7 md:pr-7 pb-7">
                            <div className="flex justify-center w-full h-fit max-md:bg-transparent  ">
                                <div className="md:border-b md:border-gray-300  w-3/4 text-center relative -mt-2">
                                    <div className="flex justify-center gap-2 mb-7">
                                        <i class="fa-thin fa-star text-gray-300 fa-xl"></i>
                                        <i class="fa-thin fa-star text-gray-300 fa-xl"></i>
                                        <i class="fa-thin fa-star text-gray-300 fa-xl"></i>
                                        <i class="fa-thin fa-star text-gray-300 fa-xl"></i>
                                        <i class="fa-thin fa-star text-gray-300 fa-xl"></i>

                                    </div>
                                    <div className="">
                                        <p className='font-medium mt-5 mb-5 text-xl max-md:text-sky-500'>Müşteri Yorumları</p>
                                    </div>
                                </div>
                            </div>
                            <Content />
                            <Content />
                            <div className="md:hidden flex flex-1 justify-center">
                                <button className='font-medium mt-5 mb-5 text-xl max-md:text-sky-500'>Devamını Oku</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-md:p-3">
                    <div className="flex flex-1 w-full justify-center">
                        <div className="">
                            <div className='text-center'>
                                <p className='text-3xl mt-16 text-sky-500 font-normal'>Benzer <span className='font-medium'>Hizmetler</span></p>
                                <div className="ml-4"><img src={Line} className='w-60 mt-1 m-auto ' alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-32">
                        <p className='max-md:text-xl text-3xl mt-16 font-medium text-sky-500'>En Yakın Beyaz Eşya Teknik Servisi</p>
                        <div className="mt-20 max-md:mt-10">
                            <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="mt-10">
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="mt-32">
                        <p className='text-xl mt-16 font-medium text-sky-500'>En Yakın Beyaz Eşya Teknik Servisi</p>
                        <div className="mt-20 max-md:mt-10">
                            <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="mt-10">
                            <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className=" flex flex-1 justify-center">
                        <button className='font-medium mt-10 mb-5 text-xl text-sky-500'>Devamını Oku</button>
                    </div>
                </div>
                <SSS />
                <div className="flex justify-center mt-32 ">
                    <div className="md:hidden"><DropdownButton />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default SectorCity;