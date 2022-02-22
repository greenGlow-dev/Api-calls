import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

export default function News() {

  const [news, setNews] = useState([])

  const [currentImage, setCurrentImage] = useState('')



  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
 
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c1f9b96d329341909eae3ac5c2451f12').then((response) => { setNews(response.data.articles) })
  }, [])

  return (
    <div>

      <div className="row center-align blue-grey darken-2">
        <div className="col s12">


          <h1 className="news-header">Work with real Api</h1>
          <p>These news are new and they are reliable, new information, news is added to the information on this site every day</p>

        </div>
      </div>


      <div className='row'  id = 'news-card'>
        {news.map((item, index) => (


          <div className="col s4" key={index}>
           
            <div className="card blue-grey darken-1">
              <div className="card-image">
                <div type="primary"  onClick={showModal}>

                  <img src={item.urlToImage} />

                </div>

             
           <Modal title="Basic Modal"   visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

           <img src={item.urlToImage} style={{ width: "300px" }} />

            </Modal>



                

                <span className="card-title">{item.source.name}</span>
              </div>
              <div className="card-content">
                <p>{item.title}</p>
              </div>
              <div className="card-action">
                <a href={item.url}>This is a link</a>
              </div>
            </div>
          </div>
        ))}


         
      </div>

    </div>
  )
}
