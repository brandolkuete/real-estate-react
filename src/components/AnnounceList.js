import React, {useState, useEffect,useCallback} from 'react'
import AnnounceService from '../service/AnnounceService'

export default function AnnounceList() {

  const [isLoading, setIsLoading] = useState(false)
  const [announces, setAnnounces] = useState([])

  const getAnnounces = useCallback(async () => {
    setIsLoading(true)
    try {
        const allAnnounces = await AnnounceService.all_announces();

        if (allAnnounces.data) {
            const awaitGetImages = await allAnnounces.data.map(async (item) => {
            	const respImage = await AnnounceService.get_image(item.image.url);
                
            	return ({
                     ...item,       
                    imageBase64String: respImage
            	})
            })
            
            const n_announces = await Promise.all(awaitGetImages)
            console.log(n_announces)
            setAnnounces(n_announces)
            
        }
    
    } catch (error) {
        console.log('error', error);
    } finally {
        setIsLoading(false);
    }
  }, [])
  

    useEffect(() =>{getAnnounces()} ,[getAnnounces])

  return (
    <div>
      <section className="probootstrap-section probootstrap-section-colored">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left section-heading probootstrap-animate">
              <h1>Liste des annonces</h1>
            </div>
          </div>
        </div>
      </section>
        <section className="probootstrap-section probootstrap-section-sm">
        <div className="container">
            <div className="row">{
                isLoading ? 
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
                : (announces.length > 0) ? (
                    announces.map((announce) =>  (
                        <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12" key={announce.id}>
                            <a href="#" className="probootstrap-featured-news-box">
                                <figure className="probootstrap-media"><img src={"data:"+announce.image_type+";base64,"+announce.imageBase64String} alt="image non disponible" className="img-responsive"/></figure>
                                <div className="probootstrap-text">
                                <h3>{announce.title}</h3>
                                <p style={{whiteSpace:"nowrap", overflow:"hidden", textOverflow:"...."}}>{announce.description}</p>
                                <p><a href={"/announce/"+announce.id} className="btn btn-primary">Voir les détails</a></p>
                                </div>
                            </a>
                        </div>
                    ))
            
                ) : (
                    <span>Aucune annonce disponible...</span>
                )
            }</div>
        </div>
      </section>
    </div>
  )
}
