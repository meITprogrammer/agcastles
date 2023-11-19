import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { db, storage } from '../FirebaseConfig';
import '../App.css';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function NewProduct() {
    const [name, setName] = useState();
    const [size, setSize] = useState();
    const [area, setArea] = useState();
    const [age, setAge] = useState();
    const [maxUser, setMaxUser] = useState();
    const [moreInfo, setMoreInfo] = useState();
    const [image, setImage] = useState();
    const [price, setPrice] = useState();
    

    const addProduct = (e) => {
        e.preventDefault();
        console.log(name);
        saveProduct();
    }

    const saveProduct = async() => {
        console.log("save" + name + area + age + price + moreInfo);
        try {
            const newData = await addDoc(collection(db, "softPlay"), {
                name,
                //size,
                area,
                age,
                //maxUser,
                price,
                image,
                moreInfo
            });
            console.log("Data added", newData.id);
        }catch(err){
            console.error(err.message)
        }};

        const handleImageUpload = (event) => {setImage(event.target.files[0]);
            if (!image) return;
            console.log(event.target.files[0]);
            const storageRef = ref(storage);
            const imageRef = ref(storageRef, `images/${image.name}`);
            uploadBytes(imageRef, image).then((snapshot) =>{
              getDownloadURL(snapshot.ref).then((url)=> {
                console.log(url);
                setImage([url]);
              });
              
            } );
          }

    return (
      <div className='new-product-container'>
          <div>
              <h1>New Product</h1>
          </div>
          <form onSubmit={addProduct}>
              <div className='form-group'>
                  <input type="text" 
                  name="age" 
                  className='age' 
                  placeholder='Name' 
                  onChange={(e) => {setName(e.target.value)}}/>
              </div>
              <div className='form-group'>
                  <input type="text"
                  name="age" 
                  className='age'  
                  placeholder='Size' 
                  //value={size} 
                  onChange={(e) => {setSize(e.target.value)}}/>
              </div>
              <div className='form-group'>
                  <input type="text" 
                  name="area" 
                  className='area' 
                  placeholder='Area required' 
                  //value={area} 
                  onChange={(e) => {setArea(e.target.value)}}/>
              </div>
              <div className='form-group'>
                  <input type="text" 
                  name="age" 
                  className='age' 
                  placeholder='Suitable Age' 
                  //value={age} 
                  onChange={(e) => {setAge(e.target.value)}}/>
              </div>
              <div className='form-group'>
                  <input type="text" 
                  name="price" 
                  className='price' 
                  placeholder='Price' 
                  //value={price} 
                  onChange={(e) => {setPrice(e.target.value)}}/>
              </div>
              <div className='form-group'>
                  <input type="text" 
                  name="maxUser" 
                  className='maxUser' 
                  placeholder='Maximum User' 
                  //value={maxUser} 
                  onChange={(e) => {setMaxUser(e.target.value)}}/>
              </div>
              <div className='form-group'>
                  <input type="textarea" 
                  name="more-info" 
                  className='more-info' 
                  placeholder='Additional Information' 
                  //value={delivery} 
                  onChange={(e) => {setMoreInfo(e.target.value)}}/>
              </div>
              <div className='form-group'>
                <label>Add Product Image</label> <br />
                  <input type="file" 
                  name="image" 
                  className='image' 
                  onChange={(event) => {handleImageUpload(event)}}/>
              </div>
              
              <button type="submit" className="submit-button">Submit</button>
          </form>
      </div>
    )
}

export default NewProduct