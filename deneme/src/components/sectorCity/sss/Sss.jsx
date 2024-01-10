import React, { useState } from 'react';
import Line from "../../img/image/line1.jpg"

const Disclosure = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDisclosure = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=' w-full bg-white'>
            <div style={{ cursor: 'pointer' }} className='flex pt-5 max-md:pt-3 flex-1 justify-between' onClick={toggleDisclosure}>
                <div className="border-b border-gray-400 md:h-11 w-full title-and-arrow justify-between text-gray-500 flex select-none">
                    <p className='text-xl max-md:text-sm'>{title}</p>
                    <div className="ml-3 mt-0.5">
                        {isOpen ? <i class="fa-solid fa-angle-up" /> : <i class="fa-solid fa-angle-down" />}
                    </div>
                </div>
            </div>

            {isOpen && <div className='mt-5 mb-5'>{children}

            </div>}
        </div>
    );
};


const SSS = () => {
    return (
        <div className="flex justify-center mt-20">
            <div className="md:w-7/12 max-md:w-full">
                <div className="flex flex-1 w-full justify-center">
                    <div className="">
                        <div className='text-center'>
                            <span className='text-3xl mt-16 text-sky-500 font-normal'>Sıkça Sorulan Sorular</span>
                            <div className="ml-4"><img src={Line} className='w-72 mt-1 m-auto ' alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="p-4 rounded-xl w-full h-fit pb-7 shadow-xl mt-16 pr-10 pl-10">
                    <Disclosure title="Hemengeliriz.com nasıl çalışıyor?" >
                        <p className='max-md:text-sm'>İster mobil uygulamamızdan ister web sitemizden giriş yapmış olun, bir hizmet veren ile telefon görüşmesi yaptığınızda sistem bu görüşmeyi kayıt altına almaktadır. Yapay zeka teknolojimiz yaptığınız görüşmeyi anlar ve yorumlar.</p>
                    </Disclosure>
                    <Disclosure title="Hemengeliriz'i kullandığım için ücret ödyece miyim?" >
                        <p className='max-md:text-sm'>Hemengeliriz'i kullandığınız için hiç bir ücret ödemezsiniz. Sadece Hizmet Veren'ler platformu kullandıkları kadar Hemengeliriz'e ödeme yaparlar. Hizmet Verenler, Hemengeliriz'den edindiği müşteri sayısına endeksli olarak, NLP teknolojisini kullandıkları için kullandıkça öde modeli ile küçük rakamlar öderler.</p>
                    </Disclosure>
                    <Disclosure title="Neden Hemengeliriz ile hizmet almalıyım?" >
                        <p className='max-md:text-sm'>Binlerce gerçek kullanıcı yorumunu inceleyerek, birden fazla Hizmet Veren arasından teklifler alarak en doğru uzmana ulaşabilirsiniz. Bu uzmanlar platformda üst sıralara çıkabilmek ve beğenilerini arttırmak için sizi memnun edebilmek adına çaba sarfediyor olacaktır. Böylece %99 ihtimalle iyi bir hizmet deneyi elde edeceksiniz. Yine de bir sorun yaşarasnız, Hemengeliriz sürece müdahil olur ve çözüme kavuşturur.</p>
                    </Disclosure>
                    <Disclosure title="Aldığım hizmetten memnun kalmazsam ücret iade edilir mi?" >
                        <p className='max-md:text-sm'> className='max-md:text-sm'Hemengeliriz üzerinden almış olduğunuz hizmetler 1.000 TL'ye kadar güvencemiz altındadır. Olası bir sorun veya memnuniyetsizlik yaşamanız halinde, ekibimiz gerekli incelemeleri yapar ve haklı bulunmanız durumunda size 1.000 TL'ye kadar ödeme yaparlar.</p>
                    </Disclosure>
                    <Disclosure title="Hemengeliriz’de hizmet vermek istiyorum, ne yapmalıyım?" >
                        <p className='max-md:text-sm'>Birkaç adımda soruları yanıtlayarak verdiğiniz hizmetleri, nerede hizmet verdiğinizi, çalışma saatlerinizi ve gerekli olan diğer bazı bilgileri doldurunuz. Hizmet Veren profiliniz otomatik olarak oluşacaktır. Sisteme bir miktar bakiye yükleyerek müşteriler ile hemen görüşmelere başlayabilirsiniz.</p>
                    </Disclosure>
                </div>
            </div>
        </div>
    );
}
export default SSS;