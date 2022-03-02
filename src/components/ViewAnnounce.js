import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import AnnounceService from '../service/AnnounceService'

export default function ViewAnnounce() {

  const params= useParams()
  const [announce, setAnnounce] = useState({})

  useEffect(() =>{
    getAnnounce()
  })

  const getAnnounce = () => {
    AnnounceService.get_announce(params.id).then((response) => {
      AnnounceService.get_image(response.data.image.url).then((res) => {
        let image_src= "data:"+response.data.image.type+";base64,"+res;
        setAnnounce( {
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          image_type: response.data.image.type,
          imageSource: image_src
        })
      })
    })
  }

  return (
    <div>
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading">
              <h1>Details de l'annonce</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="probootstrap-section probootstrap-section-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row probootstrap-gutter0">
                <div className="col-md-4">
                  <h3>{announce.title}</h3>
                  <img src={announce.imageSource} style={{width:"100%",height:"100%"}} className="img-fluid" alt="Announce image"/>
                </div>
                <div className="col-md-7 col-md-push-1" id="probootstrap-content">
                  <h2>Description</h2>
                  <p>{announce.description}</p>
                  <p><a href={"/all"} className="btn btn-primary">Retour à la liste</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
