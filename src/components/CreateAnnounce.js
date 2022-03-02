import React, {useState, useRef} from 'react'
import AnnounceService from '../service/AnnounceService';
import {useNavigate} from 'react-router-dom'

export default function CreateAnnounce() {

    const data= {
        title: '',
        description: ''
    }

    const [formdata, setFormData]= useState(data);
    const [image, setImage] = useState();

    let navigate = useNavigate();


    //to reset the input file
    const ref = useRef();

    //destructuring
    const {title,description} = formdata

    const handleChange = (e) => {
        setFormData({...formdata, [e.target.id]:e.target.value});
    }

    const handleUploadImage = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const myFormData= new FormData();

        myFormData.append('title', title);
        myFormData.append('description', description);
        myFormData.append('image', image);

        AnnounceService.create_announce(myFormData).then((res) => {
            setFormData({...data})
            ref.current.value= ""
            navigate("/announce/"+res.data.id)
        })
    }

  return (
    <div>
        <section className="probootstrap-section probootstrap-section-colored">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-left section-heading probootstrap-animate">
                        <h1>Enregistrer une nouvelle annonce</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="probootstrap-section probootstrap-section-sm">
            <div className='container'>
                <div className='row'>
                    <div className="col-md-12">
                        <div className="row probootstrap-gutter0">
                            <div className="col-md-7 col-md-push-1  probootstrap-animate" id="probootstrap-content">
                                <form onSubmit={handleSubmit} className="probootstrap-form">
                                    <div className = "form-group">
                                        <label> Titre: </label>
                                        <input type="text" placeholder="Entrer le titre..." name="title" id="title" className="form-control" 
                                            autoComplete='off' required value={title} onChange={handleChange}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Description: </label>
                                        <textarea placeholder="Entrer la description..." name="description" id="description" className="form-control" 
                                            autoComplete='off' required value={description} cols="30" rows="10" onChange={handleChange}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Choisissez une image: </label>
                                        <input type="file" name="image" id="image" className="form-control" 
                                            required  onChange={handleUploadImage} ref={ref}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-primary btn-lg" value="Enregistrer"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
