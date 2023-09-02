import React, { useState } from 'react'
import "./howitworks.scss"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HowItWorks = () => {

    const [sellerBtn, setSellerBtn] = useState(true)
    const [buyerBtn, setBuyerBtn] = useState(false)
    
    const handlerSellerBtn = () => {
      setSellerBtn(true)
      setBuyerBtn(false)
    }

    const handleBuyerBtn = () => {
      setBuyerBtn(true)
      setSellerBtn(false)
    }
    
    

  return (
    <Container>
        <div className="how-it-works-content">
            <div className="top">
            <h2>Nasıl Çalışır</h2>

            <p>Dolabında artık kullanmadığın iyi durumdaki kıyafet, ayakkabı, çanta ne varsa kolaylıkla satışa çıkar. Markaları en uygun fiyatlarla satın al.</p>
            <p>Aynı stil zevkine sahip insanlarla sosyalleş. Stilini paylaş, aynı stili seven insanlarla buluş. Üye ol , Dolap deneyimi için topluluğumuza katıl .</p>
            </div>

            <div className="bottom">
                <div className="butons">
                <Link onClick={handlerSellerBtn}>SATICI GÖZÜYLE</Link>
                <Link onClick={handleBuyerBtn}>ALICI GÖZÜYLE</Link>
                </div>

                {sellerBtn && (
                    <div className="bottom-content">
                    <img src="https://cdn.dolap.com/web/images/satici-1.png" alt="" />
                    <p>Bir zamanlar çok sevdiğin ama artık giymediğin, dolabında yer kaplayan elbiseyi hatırladın mı? Ya o çanta? Ayakkabı? Takılar? Hepsi uzun zamandır dolabında tekrar gün ışığı görecekleri anı bekliyor.</p>
                    <img src="https://cdn.dolap.com/web/images/satici-2.png" alt="" />
                    <p>Onların da tekrar sinemaya gitmeye, bir kafede oturmaya ihtiyacı var. Onlara ikinci bir şans ver, ürünlerini kolayca fotoğrafla, yeni sahipleri ile buluştur.</p>
                    <img src="https://cdn.dolap.com/web/images/satici-3.png" alt="" />
                    <p>Satış yap, para kazan, dolabında yer açılsın!</p>
                    <p>Hemen sen de bu büyük topluluğunun bir parçası ol !</p>
                </div>
                )}
                {buyerBtn && (
                         <div className="bottom-content">
                         <img src="https://cdn.dolap.com/web/images/alici-1.png" alt="" />
                         <p>Sürekli yenilenen dolaplar dolusu kıyafet, ayakkabı, çanta. Sürekli yeni, sürekli eğlenceli elden ele moda.</p>
                         <img src="https://cdn.dolap.com/web/images/alici-2.png" alt="" />
                         <p>Artık indirimleri bekleme! Eski sezonun ürünlerini kaçırdım diye üzülme. Marka ikinci el ürünler en uygun fiyatlarla güvenli ve kolay alışveriş güvencesiyle Dolap’ta.</p>
                         <p>Hemen üye ol, Dolap’ın sürekli yenilenen fırsatlarını kaçırma!</p>
                     </div>
                )}
               
            </div>
        </div>
    </Container>
  )
}

export default HowItWorks
