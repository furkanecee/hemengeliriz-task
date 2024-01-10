import React, { useState } from "react";
import Icon from "../../img/icon/icon.png"
import "./card.scss";

import Verify from "../../img/icon/verification.png"


const Disclosure = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDisclosure = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full'>
            <div style={{ cursor: 'pointer' }} className='flex flex-1  justify-between' onClick={toggleDisclosure}>
                <div className="title-and-arrow text-sky-500 flex select-none">
                    <p>{title}</p>
                    <div className="ml-3 mt-0.5">
                        {isOpen ? <i class="fa-solid fa-angle-up" /> : <i class="fa-solid fa-angle-down" />}
                    </div>
                </div>
                <div className="flex gap-3">
                    <img src={Verify} className="h-5 mb-3 select-none" alt="" />
                    <p className='list-text font-light text-gray-500'>Kimlik</p>
                    <li className="list"><span className='list-text font-light text-gray-500 '>Vergi Levhası</span></li>
                    <li className="list"><span className='list-text font-light text-gray-500'> Cep Telefonu</span></li>
                    <li className="list"><span className='list-text font-light text-gray-500'>E-Posta</span></li>
                </div>
            </div>

            {isOpen && <div className='mt-5 mb-5'>{children}
                <div className="flex flex-1 w-full justify-center">
                    <button className="font-medium mt-6 text-sky-500">Daha fazla yükle</button>
                </div>
            </div>}
        </div>
    );
};

const Content = () => {
    const username = "Fatih Keskin"
    const evulation = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    return (
        <div className="content mt-10">
            <div className="name">
                <p className="font-medium text-gray-600">{username}</p>
            </div>
            <div className="flex gap-2 mt-3">
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

const ServiceProvided = () => {
    const ServiceProvidedNumber = '135';
    const ServiceTime = '16 Saat';
    const ProcessTime = '16 Saat';
    return (
        <div className="flex max-md:justify-between md:text-center md:h-2/4 md:flex-1 md:gap-10 md:mt-6">
            <div className="max-md:flex gap-1">
                <p className="texts text-gray-500">Verilen Hizmet</p>
                <p className="texts text-gray-600 font-semibold">{ServiceProvidedNumber}</p>
            </div>
            <div className="max-md:flex gap-1">
                <p className="texts text-gray-500">Ort. Hizmet Süresi</p>
                <p className="texts text-gray-600 font-semibold">{ServiceTime}</p>
            </div>
            <div className="max-md:flex gap-1">
                <p className="texts text-gray-500">Ort. İşlem Süresi</p>
                <p className="texts text-gray-600 font-semibold">{ProcessTime}</p>
            </div>
        </div>
    );
}

const CallButton = ({ style }) => {
    return (
        <button className={style}><p><i class="fa-solid fa-phone mr-5"></i>Hemen Ara</p></button>

    );
}
const EvaluateButton = ({ style }) => {
    return (
        <button className={style}><p>Değerlendir</p></button>

    );
}

const Card = () => {

    const CompanyName = "Keskin Soğutma ve Beyaz Eşya";
    const UserName = "Fatih Keskin"
    const Point = '4.8';


    return (
        <div className="mb-10">
            <div className="bg-transparent max-lg:hidden col min-w-full rounded-2xl ">
                <div className="bg-slate-100 rounded-2xl rounded-ee-none h-40">
                    <div className="flex justify-between rounded-2xl">
                        <div className="inline-table">
                            <div className="flex flex-1">
                                <div className="border-r border-sky-500 mt-4 w-40">
                                    <div className="w-full">
                                        <div className="text-sm text-center  text-slate-500">
                                        <img src={Icon} className="w-20 ml-10 select-none" alt="içerik Bulunamadı" />
                                        <p className="flex ml-12">
                                            <i class="fa-solid fa-star text-sky-500 text-sm">
                                                <span className="select-none">&nbsp;</span>
                                            </i><span className="text-sky-500 text-xl font-medium ">{Point}</span></p>
                                            <i><span className="font-bold">135</span>&nbsp;<span>kez değerlendirildi</span></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 ml-10">
                            <div className="flex justify-between h-2/4">
                                <div className="pt-6">
                                    <p className="text-xl font-medium">{CompanyName}</p>
                                    <p className="font-semibold text-gray-500">{UserName}</p>
                                </div>
                                <div className=""><CallButton style="select-none text-white text-xl bg-emerald-500 w-52 h-16 rounded-bl-2xl rounded-tr-2xl " title="Hemen Ara"></CallButton></div>

                            </div>
                            <ServiceProvided />
                        </div>
                    </div>
                </div>
                <div className="flex min-h-14 bg-white">
                    <div className="w-fit">
                        <EvaluateButton style="text-slate-500 w-40 select-none h-14 text-center items-center"></EvaluateButton>
                    </div>
                    <div className="rounded-es-2xl rounded-ee-2xl inline-block bg-slate-100 flex-1 pr-6 pl-6 justify-between">
                        <div className="border-t border-sky-500 pt-4">
                            <Disclosure title="Değerlendirmeler">
                                <Content />
                            </Disclosure>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-card lg:hidden">
                <div className="bg-slate-100 w-full h-fit rounded-2xl pt-3 pl-5 pr-5" >
                    <div className="border-b border-sky-300 flex pb-2">
                        <div className="mt-1"><img className="w-16" src={Icon} alt="" /></div>
                        <div className="justify-between w-full mt-2 ml-2 inline-block">
                            <div className="flex flex-1 mt-0.5 justify-between">
                                <div className="flex ">
                                    <p className="texts font-medium">{CompanyName}</p>
                                    <img class="h-4 mt-0.5" src={Verify} alt="" />
                                </div>

                                <div className="">
                                    <p className="flex">
                                        <i className="fa-solid fa-star fa-sm text-sky-500">
                                            <span className="select-none">&nbsp;</span></i>
                                        <span className="text-sky-500 text-sm font-medium">{Point}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-between">
                                <p className="texts text-gray-500">{UserName}</p>
                                <div className="texts text-slate-500 flex">
                                    <i><span className="font-bold">135</span>&nbsp;<span>kez değerlendirildi</span></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-sky-300 pb-3">
                        <ServiceProvided />
                        <div className="flex justify-between pt-3">
                            <div className="">
                                <EvaluateButton style="bg-transparent text-sky-500 w-fit h-10 select-none text-start items-center"></EvaluateButton>
                            </div>
                            <div className="">
                                <CallButton style=" text-xs text-white text-xl bg-emerald-500 select-none h-10 w-36 rounded-lg"></CallButton>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="flex mt-2 justify-between gap-3">
                            <div className="flex gap-1">
                                <img src={Verify} className="h-4 mt-0.5 select-none text-sm" alt="İçerik Bulunamadı" />
                                <p className='list-text font-light text-gray-500'>Kimlik</p>
                            </div>
                            <div className="flex gap-1">
                                <img src={Verify} className="h-4 mt-0.5  select-none" alt="İçerik Bulunamadı" />
                                <p className='list-text font-light text-gray-500'>Kimlik</p>
                            </div>
                            <div className="flex gap-1">
                                <img src={Verify} className="h-4 mt-0.5  select-none" alt="İçerik Bulunamadı" />
                                <p className='list-text font-light text-gray-500'>Kimlik</p>
                            </div>
                            <div className="flex gap-1 mb-3">
                                <img src={Verify} className="h-4 mt-0.5 select-none" alt="İçerik Bulunamadı" />
                                <p className='list-text font-light text-gray-500'>Kimlik</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;