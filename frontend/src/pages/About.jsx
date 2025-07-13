import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewlesterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'Về'} text2={'Chúng Tôi'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="Về Chúng Tôi" className="w-full md:max-w-[450px]" />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-lg">
            Chúng tôi là một đội ngũ đầy nhiệt huyết, cam kết mang đến trải nghiệm mua sắm thương mại điện tử tốt nhất.
          </p>
          <p className="text-lg">
            Sứ mệnh của chúng tôi là cung cấp các sản phẩm chất lượng cao với mức giá cạnh tranh, đồng thời đảm bảo dịch vụ khách hàng xuất sắc.
          </p>
          <b className='text-gray-800'>Sứ Mệnh Của Chúng Tôi</b>
          <p className="text-lg">
            Kết nối khách hàng với những sản phẩm họ yêu thích, giúp việc mua sắm trở nên dễ dàng và thú vị hơn.
          </p>

        </div>
      </div>

          <div className="text-4xl py-4 text-center">
            <Title text1={'Tại Sao'} text2={'Chọn Chúng Tôi'} />
          </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-4 md:gap-8">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Cam Kết Chất Lượng:</b>
          <p className='text-gray-600'>Chúng tôi đảm bảo tất cả sản phẩm đều đạt tiêu chuẩn chất lượng và độ tin cậy cao.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Tiện Lợi:</b>
          <p className='text-gray-600'>Chúng tôi mang đến trải nghiệm mua sắm liền mạch với giao diện dễ dùng và thanh toán nhanh chóng.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Dịch Vụ Khách Hàng Xuất Sắc:</b>
          <p className='text-gray-600'>Chúng tôi luôn hỗ trợ khách hàng nhanh chóng và tận tình.</p>
        </div>
      </div>

      <NewletterBox />
    </div>
  )
}

export default About
