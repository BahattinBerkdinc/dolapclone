import React from 'react'
import "./contact.scss"
import { Container } from 'react-bootstrap'
const Contact = () => {
  return (
    <Container>
        <div className="contact">
            <div className="contact-top">
                <h2>Dolap Destek</h2>

                <p>Canlı destek ekibimiz hafta içi ve hafta sonu 08.30-21.00 saatleri arasında hizmet           vermektedir.  Ekibimize uygulama içerisindeki “Dolap Destek” sekmesinde bulunan Dodo alanından          ulaşabilirsiniz.</  p>
                <p>0 850 200 70 76</p>
            </div>
            <div className="contact-bottom">
                <h2>İletişim Bilgileri</h2>
                <p>DSM Grup Danışmanlık İletişim ve Satış Ticaret A.Ş.</p>
                <p>Maslak Mahallesi, Saat Sokak (Spine Tower), No: 5, İç Kapı No: 19 Sarıyer/İstanbul</p>
                <p>Maslak V.D. 313 055 7669</p>
                <p>Ticaret Sicil No: 711896</p>
                <p>MERSİS Numarası: 0313055766900016</p>
                <p>Sorumlu Kişi: Ogün Tükenmez</p>
            </div>
        </div>
    </Container>
  )
}

export default Contact
