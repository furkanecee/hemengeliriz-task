import React from 'react';
import Header from "./dashboardHeader/d-header";
import Footer from "../sectorCity/footer/Footer"
import PP from "../img/pp/pp.jpg";

const Box = ({ children, boxStyle, iconStyle, icon, iconContent, boxName }) => {
    return (
        <div className="w-full mb-5">
            <p className="mb-2 max-md:ml-5 text-lg text-sky-700 font-medium">{boxName}</p>
            <div className={`${boxStyle} justify-center border-sky-500 border flex rounded-lg p-5 h-fit `}>
                <div className=" gap-6 w-full ">
                    <div className="">
                        {children}
                    </div>
                </div>
                <div className={`m-auto ${iconStyle}`}>
                    <i className={`fa-${icon} text-5xl text-sky-300`}>{iconContent}</i></div>
            </div>
        </div>

    )
}

const ButtonGroup = () => {
    return (
        <div className="h-full w-full max-md:flex max-md:justify-between">
            <button type="button" class="pb-3 max-md:pt-3 w-full inline-flex max-md:flex-col items-center max-md:justify-center font-medium gap-3 md:border-b border-slate-200 text-white">
                <i className='fa-thin max-md:text-2xl max-md:-mb-3 fa-lock'></i>
                <span class="text-sm">İş alımını durdur</span>
            </button>
            <button type="button" class="pt-3 pb-3 w-full inline-flex max-md:flex-col items-center max-md:justify-center font-medium gap-3 md:border-b border-slate-200 text-white">
                <i className='max-md:text-2xl max-md:-mb-3 text-base'>₺</i>
                <span class="text-sm ">Bakiye Yükle</span>
            </button>            
            <button type="button" class="md:pt-2 w-full inline-flex max-md:flex-col items-center max-md:justify-center font-medium gap-3 text-white">
            <i className='fa-thin max-md:text-2xl max-md:-mb-3 fa-wallet'></i>
                <span class="text-sm max-md:text-xs">Bakiyeniz
                <p class="text-xs font-bold text-start">₺450.50</p>
                </span>
                
            </button>
        </div>
    );
}

const Dashboard = () => {

    return (
        <div className="bg-white">
            <div className="lg:p-10 max-lg:p-3 pt-5">
                <Header />
                <div className="lg:flex w-full justify-between gap-5 md:mb-10">
                    <div className="w-full">
                        <Box boxStyle="w-full bg-sky-500 md:p-7" iconContent="₺" icon={" text-8xl max-md:text-7xl "} iconStyle="mr-5">
                            <div className="flex mt-2">
                                <img src={PP} alt="" className='rounded-full w-24 h-24' />
                                <div className="md:m-5 m-4 mt-7">
                                    <p className='text-white md:text-xl'>Fatih Keskin</p>
                                    <p className='text-white md:text-lg max-md:text-sm '>Bakiyeniz: <span className='font-semibold'>₺450.50</span></p>
                                </div>
                            </div>
                        </Box>
                        <Box boxStyle="relative max-h-16 w-3/4 m-auto -mt-8 bg-sky-700 border-sky-700 flex pt-3 p-2">
                            <div className="flex items-center justify-between">
                                <div className="m-auto text-center">
                                    <p className='text-white text-xs'>İndirim Oranınız</p>
                                    <p className='text-white text-lg font-medium'>%15</p>
                                </div>
                                <div className="border-r border-slate-400 h-9 mt-1.5"></div>
                                <div className="m-auto text-center">
                                    <p className='text-white text-xs'>Maksimum İndirim</p>
                                    <p className='text-white text-lg font-medium'>%50</p>
                                </div>
                            </div>
                        </Box>
                    </div>
                    <Box boxStyle="bg-sky-500 pl-14" icon="regular fa-coins" iconStyle="mr-5">
                        <div className="">
                            <p className='text-white text-lg'>Ciro</p>
                            <p className='text-white text-3xl font-semibold'><span className='font-normal'>₺</span>2.365</p>
                            <div className="border-b border-slate-300 w-2/4">
                            </div>
                            <div className="mt-2">
                                <p className='text-white md:text-base max-md:text-sm '>Maliyet: <span className='font-semibold'><span className='font-normal'>₺</span>596</span></p>
                                <p className='text-white md:text-base max-md:text-sm '>Net Kar: <span className='font-semibold'><span className='font-normal'>₺</span>1.356</span></p>

                            </div>
                        </div>
                    </Box>
                    <div className="w-2/6 max-lg:hidden">
                        <Box boxStyle="bg-gradient-to-r from-sky-500 to-emerald-400 border-none" iconStyle="hidden">
                            <ButtonGroup />
                        </Box>
                    </div>
                </div>
                <div className="lg:flex w-full justify-between gap-20">
                    <Box boxName="İşlerim" icon="solid fa-phone-arrow-down-left " iconStyle="mr-3">
                    <div className="flex gap-2 mb-2 mt-2">
                            <p className='text-2xl text-sky-500 font-bold'>10</p>
                            <p className='text-gray-500 mt-1'>Müşteri Aradı</p>
                        </div>
                        <div className="flex gap-2 mb-2 mt-2">
                            <p className='text-2xl text-sky-500 font-bold'>3</p>
                            <p className='text-gray-500 mt-1'>Kişiden Adre&Telefon Alındı</p>
                        </div>
                        <div className="flex gap-2 mb-2 mt-2">
                            <p className='text-2xl text-sky-500 font-bold'>3</p>
                            <p className='text-gray-500 mt-1'>İş Yapıldı</p>
                        </div>

                    </Box>
                    <Box boxName="İptal Talepleri" icon="solid fa-file " iconStyle="mr-3">
                        <div className="flex gap-2 mb-2 mt-2">
                            <p className='text-2xl text-sky-500 font-bold'>4</p>
                            <p className='text-gray-500 mt-1'>İptal Talebi Yapıldı</p>
                        </div>
                        <div className="flex gap-2 mb-2 mt-2">
                            <p className='text-2xl text-sky-500 font-bold'>5</p>
                            <p className='text-gray-500 mt-1'>Talep İnceleniyor</p>
                        </div>
                        <div className="flex gap-2 mb-2 mt-2">
                            <p className='text-2xl text-sky-500 font-bold'>3</p>
                            <p className='text-gray-500 mt-1'>Talep Onaylandı</p>
                        </div>
                    </Box>
                    <Box boxName="Referanslar" iconStyle="hidden">
                        <div className="flex gap-1 mb-2 mt-2">
                            <p className='text-2xl text-sky-500 font-bold'>10</p>
                            <p className='text-gray-500 mt-1'>Kayıtlı Referansınız Var</p>
                        </div>
                        <div className="flex gap-1 mb-2 mt-2">
                            <p className='text-2xl text-sky-500 font-bold'>5</p>
                            <p className='text-gray-500 mt-1'>Aktif Referansınız Var</p>
                        </div>
                        <div className="flex gap-3 mt-2">
                            <p className=' mt-2 font-medium max-md:text-sm'>Toplam Referans Geliri</p>
                            <p className='text-4xl text-sky-700 font-bold max-md:text-3xl'>₺13.856</p>
                        </div>
                    </Box>
                </div>
                <div className="md:flex w-full justify-between gap-14">
                    <Box >
                        <div className=" gap-1 text-center">
                            <p className='text-gray-500 md:text-xs mt-1'>Listelendiğiniz Sayfalar</p>
                            <p className='text-3xl text-sky-500 font-medium'>48</p>
                        </div>
                        <div className="border-b w-3/4 m-auto"></div>
                        <div className="gap-1 text-center">
                            <p className='text-gray-500 md:text-xs mt-1'>Listelenemediğiniz Sayfalar</p>
                            <p className='text-3xl text-sky-500 font-medium'>16</p>
                        </div>

                    </Box>
                    <Box >
                        <div className=" gap-1 text-center">
                            <p className='text-gray-500 md:text-xs mt-1'>Olumlu Değerlendirme</p>
                            <span className='flex justify-center gap-3'>
                                <i class="fa-light mt-2.5 fa-thumbs-up text-emerald-500 "></i>
                                <p className='text-3xl text-sky-500 font-medium text-start'>168</p>
                            </span>

                        </div>
                        <div className="border-b w-3/4 m-auto"></div>
                        <div className="gap-1 text-center w-fit m-auto">
                            <p className='text-gray-500 md:text-xs mt-1'>Olumsuz Değerlendirme</p>
                            <span className='flex justify-center gap-3 -ml-4'>
                                <i class="fa-light mt-2.5 fa-thumbs-down text-red-500 "></i>
                                <p className='text-3xl text-sky-500 font-medium text-start ml-4'>5</p>
                            </span>
                        </div>
                    </Box>
                    <Box >
                        <div className=" gap-1 text-center">
                            <p className='text-gray-500 md:text-xs mt-1'>Değerlendirme Alınmamış İşler</p>
                            <p className='text-3xl text-sky-500 font-medium'>68</p>
                        </div>
                        <div className="border-b w-3/4 m-auto"></div>
                        <div className="gap-1 text-center">
                            <p className='text-gray-500 md:text-xs mt-1'>Değerlendirme Alınabilir işler</p>
                            <p className='text-3xl text-sky-500 font-medium'>18</p>
                        </div>
                    </Box>
                    <Box >
                        <div className=" gap-1 text-center">
                            <p className='text-gray-500 md:text-xs mt-1'>Ortlama Hizmet Süreniz</p>
                            <p className='text-3xl text-sky-500 font-medium'>36<span className='text-sm'> Dakika</span></p>
                        </div>
                        <div className="border-b w-3/4 m-auto"></div>
                        <div className="gap-1 text-center">
                            <p className='text-gray-500 md:text-xs mt-1'>Ortlama İşlem Süreniz</p>
                            <p className='text-3xl text-sky-500 font-medium'>13<span className='text-sm'> Dakika</span></p>
                        </div>
                    </Box>
                    <Box >
                        <div className="justify-evenly max-md:justify-center flex max-md:gap-7 md:gap-3 mt-1.5">
                            <div className="gap-1 text-center">
                                <p className='text-gray-500 md:text-xs mt-1'>Hız</p>
                                <p className='text-xl text-sky-500 font-medium '><i className='fa-star fa-2xs fa-solid mt-4 text-sky-500'></i> 4.5</p>

                            </div>
                            <div className="gap-1 text-center" >
                                <p className='text-gray-500 md:text-xs mt-1'>Fiyat</p>
                                <p className='text-xl text-sky-500 font-medium '><i className='fa-star fa-2xs fa-solid mt-4 text-sky-500'></i> 4.9</p>

                            </div>
                        </div>
                        <div className="justify-evenly max-md:justify-center flex max-md:gap-7 md:gap-3 mb-3">
                            <div className="gap-1 text-center">
                                <p className='text-gray-500 md:text-xs mt-1'>Kalite</p>
                                <p className='text-xl text-sky-500 font-medium '><i className='fa-star fa-2xs fa-solid mt-4 text-sky-500'></i> 4</p>

                            </div>
                            <div className="gap-1 text-center">
                                <p className='text-gray-500 md:text-xs mt-1'>Nezaket</p>
                                <p className='text-xl text-sky-500 font-medium '><i className='fa-star fa-2xs fa-solid mt-4 text-sky-500'></i> 5</p>
                            </div>
                        </div>
                    </Box>
                </div>


                <div className="md:flex w-full justify-between gap-14">
                    <Box boxName="Sıralamalarınız">
                        <div className="gap-1 text-center">
                            <p className='text-lg text-sky-500 font-medium'>16<span className='text-xs text-gray-500'> sayfada</span> 1.<span className='text-xs text-gray-500'> sıradasınız</span></p>
                            <p className='text-lg text-sky-500 font-medium'>6<span className='text-xs text-gray-500'> sayfada</span> 2.<span className='text-xs text-gray-500'> sıradasınız</span></p>
                            <p className='text-lg text-sky-500 font-medium'>3<span className='text-xs text-gray-500'> sayfada</span> 3.<span className='text-xs text-gray-500'> sıradasınız</span></p>
                            <p className='text-lg text-sky-500 font-medium'>4<span className='text-xs text-gray-500'> sayfada</span> 4.<span className='text-xs text-gray-500'> sıradasınız</span></p>

                        </div>
                    </Box>
                    <Box boxName="Ödemeleriniz">
                        <div className=" gap-1 text-center mt-5 mb-5">
                            <p className='text-gray-500 md:text-xs'>Bugüne kadar</p>
                            <p className='text-3xl text-sky-700 font-bold mt-1'>₺168.135</p>
                            <p className='text-gray-500 md:text-xs'>yatırdınız</p>
                        </div>
                    </Box>
                    <Box boxName="Öne Çık">
                        <div className=" gap-1 text-center mt-7 mb-7">
                            <p className='text-3xl text-sky-500 font-medium'>3</p>
                            <p className='text-gray-500 md:text-xs mt-1'>Sayfada öne çıkabilirsiniz</p>
                        </div>
                    </Box>
                    <Box boxName="1. Sıraya Çık">
                        <div className=" gap-1 text-center mt-7 mb-7">
                            <p className='text-3xl text-sky-500 font-medium'>1</p>
                            <p className='text-gray-500 md:text-xs mt-1'>Sayfada 1. sıraya çıkabilirsiniz</p>
                        </div>
                    </Box>
                    <Box boxName="Listelen">
                        <div className=" gap-1 text-center mt-7 mb-7">
                            <p className='text-3xl text-sky-500 font-medium'>3</p>
                            <p className='text-gray-500 md:text-xs mt-1'>Sayfada listelenebilirsin</p>
                        </div>
                    </Box>
                </div>
                <div className="border-t border-slate-300 w-4/6 m-auto mb-24 pt-10 max-md:hidden text-sky-500">
                <div className="h-full w-full flex justify-between">
            <button type="button" class=" w-full inline-flex flex-col items-center  font-medium gap-3 ">
                <i className='fa-thin text-4xl fa-lock'></i>
                <span class="text-sm">İş alımını <span className='font-bold'>kapat</span></span>
            </button>
            <button type="button" class=" w-full inline-flex flex-col items-center  font-medium text-sky-500">
                <i className='text-4xl mb-3'>₺</i>
                <span class="text-sm "><span className='font-bold'>Bakiye</span> yükle</span>
            </button>            
            <button type="button" class="w-full inline-flex flex-col items-center  font-medium gap-3 text-sky-500">
            <i className='fa-thin text-4xl fa-wallet'></i>
                <span class="text-sm ">Bakiyeniz:&nbsp;
                <span class="text-xs font-bold text-start">₺450.50</span>
                </span>
                
            </button>
        </div>
                </div>
                <Footer></Footer>
            </div>
            <div class="bg-gradient-to-r from-sky-500 to-emerald-400 sticky bottom-0 left-0 z-50 w-full h-16 bg-white lg:hidden">
            <ButtonGroup/>
            </div>
        </div>
    );
}

export default Dashboard;