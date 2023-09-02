import React from 'react'
import "./homecomments.scss"
import { AiOutlineStar } from 'react-icons/ai'
const HomeComments = () => {
  return (
    <div className='home-comments'>
        <div className="comment">
            <div className="comment-left">
                <img src="https://images.pexels.com/photos/4987534/pexels-photo-4987534.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
            <div className="comment-right">
                <div className="top">
                    <div className="stars">
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <span>Nike Patik</span>
                    </div>
                    <span>02/09/2023</span>
                </div>
                <div className="bottom">
                    <p>tesekkur ederim tertemiz yollamissiniz. hediyenize de ayrica tesekkur ederim cok ince dusunmussunuz. bol satislariniz olsun 😘🥰💞💕✨</p>
                </div>
            </div>
        </div>
        <div className="comment">
            <div className="comment-left">
                <img src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
            <div className="comment-right">
                <div className="top">
                    <div className="stars">
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <span>Activision Playstation Oyunları</span>
                    </div>
                    <span>02/09/2023</span>
                </div>
                <div className="bottom">
                    <p>Satıcının iletişimi oldukça iyiydi, çabuk cevap verdi ve isteklerimi elinden gelenin en iyi şeklinde karşıladı.</p>
                </div>
            </div>
        </div>
        <div className="comment">
            <div className="comment-left">
                <img src="https://images.pexels.com/photos/4241706/pexels-photo-4241706.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </div>
            <div className="comment-right">
                <div className="top">
                    <div className="stars">
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <span>Küpe</span>
                    </div>
                    <span>02/09/2023</span>
                </div>
                <div className="bottom">
                    <p>Değişmeyen kalite… iyi ki size rastladım; teşekkürler 🙏🏼</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeComments
