import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header'
import "../../styles/restaurantStyles.css"
import imge from '../../assets/restaurants/Designer.jpeg'
import axios from 'axios';


const Restaurant = () => {
  const data = { name: "", phone: "", email: "", address: "", statusOfEntry: "" , typeOfFood: "", displayPic: "", tableBookServiceStatus: "", typeOfService: "", sittingArrangement: "", operationalStatus: "", operationalTimmings: "" , lastOrderTime: "" , selfService: "",outsideFoodAllowed: "", minimumOrderToDineIn: "", homeDelivery: "", deliveryRadius: "", regularDishes: "", paymentOnCounter: "", paymentFromSystem: "", eventFacilityAvailaibility: "", customDecorations: "", alcholConsumption: "", privateSpace: "", liveArchestra: "", dj: "" };
  // console.log('this is the const data', data)
  const [inputData, setInputdata] = useState(data);
  
  
  const handleData = (e) => {
    setInputdata(_ => ({ ...inputData, [e.target.name]: e.target.value }))
    // console.log("this is outisde hook", inputData)
  }
  
    useEffect(() => {
      console.log("updated data", inputData)
    }, [inputData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const stringifiedData = JSON.stringify(inputData)
    console.log("this is the before string", inputData);
    // console.log("after", stringifiedData);
    try {
      const response = await axios.post("http://localhost:3000/restaurants", inputData);
      console.log('form submitted successfully', response.data)
      alert('You are registered successfully');
      // inputData = data;
    } catch (error) {
      console.error('Error submitting form data:', error);
      alert('Please try again!');
    }
  
  }
  return (
    <>
      <Header />
      <div className='containe'>
        {/* <div className='bg'></div> */}
        <img src={imge} className='bg-img' alt="bg-img" />

        <div className='from-container'>
          <form>
            <h2>Please Enter Your Restaurant Details.</h2>
            <div className="form-group">
              <label className='text' htmlFor="name">Name</label>
              <input type="text" className="form-control input" id="name" name="name" value={inputData.name} onChange={handleData} placeholder="Name of your restaurant" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="phone">Phone</label>
              <input type="tel" className="form-control input" id="phone" name="phone" value={inputData.phone} onChange={handleData} placeholder="phone number of your restaurant" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="email">Email address</label>
              <input type="email" id="email" name="email" value={inputData.email} onChange={handleData} className="form-control input" placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="address">Address</label>
              <input type="text" id="address" name="address" value={inputData.address} onChange={handleData} className="form-control input" placeholder="Enter your address" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="statusOfEntry">Status Of Your Restaurant Entry</label>
              <input type="text" id="statusOfEntry" name="statusOfEntry" value={inputData.statusOfEntry} onChange={handleData} className="form-control input" placeholder="active/non-active" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="typeOfFood">Type Of Food Your Restaurant Provides</label>
              <input type="text" className="form-control input" id="typeOfFood" name="typeOfFood" value={inputData.typeOfFood} onChange={handleData} placeholder="veg/non-veg" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="displayPic">Display Picture Is Available Or Not?</label>
              <select className='form-control select' name="displayPic" id="displayPic" value={inputData.displayPic} onChange={handleData} required>
                <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="tableBookServiceStatus">Table Booking Service Is Available Or Not?</label>
              <select name="tableBookServiceStatus" className='form-control select' value={inputData.tableBookServiceStatus} onChange={handleData} id="tableBookServiceStatus" required>
                   <option >Please Select An Option</option>
                <option value="true">True</option>eOfSer
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="typeOfService">Type Of Service Your Restaurant Provides</label>
              <input type="text" id="typeOfService" name="typeOfService" value={inputData.typeOfService} onChange={handleData} className="form-control input" placeholder="please describe" required />
            </div>
           
            <div className="form-group">
              <label className='text' htmlFor="operationalStatus">Your Restaurant Is Operational Available Or Not?</label>
              <select name="operationalStatus" className='form-control select' value={inputData.operationalStatus} onChange={handleData} id="operationalStatus" required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="sittingArrangement">Please Describe Sitting Arrangement Of Your Restaurant Provides</label>
              <input type="text" id="sittingArrangement" name="sittingArrangement" value={inputData.sittingArrangement} onChange={handleData} className="form-control input" placeholder="please describe" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="operationalTimmings">Please Describe Operational timming Of Your Restaurant</label>
              <input type="text" id="operationalTimmings" name="operationalTimmings" value={inputData.operationalTimmings} onChange={handleData} className="form-control input" placeholder="please describe" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="selfService">Self-service Is Available Or Not ?</label>
              <select name="selfService" className='form-control select' value={inputData.selfService} onChange={handleData} id="selfService" required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="lastOrderTime">What Is The Last Time For Accepting Orders?</label>
              <input type="text" id="lastOrderTime" name="lastOrderTime" value={inputData.lastOrderTime} onChange={handleData} className="form-control input" placeholder="please describe" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="minimumOrderToDineIn">What Is The Minimun Orders For Dining Inside Restaunt?</label>
              <input type="text" id="minimumOrderToDineIn" name="minimumOrderToDineIn" value={inputData.minimumOrderToDineIn} onChange={handleData} className="form-control input" placeholder="please describe(in numbers)" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="homeDelivery">Home Delivery Is Accepted Or Not ?</label>
              <select name="homeDelivery" className='form-control select' value={inputData.homeDelivery} onChange={handleData} id="homeDelivery" required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="deliveryRadius">What Is Your Delivery Raadius?</label>
              <input type="text" id="deliveryRadius" name="deliveryRadius" value={inputData.deliveryRadius} onChange={handleData} className="form-control input" placeholder="please describe (in km)" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="regularDishes">What Is Your Regular Dishes?</label>
              <input type="text" id="regularDishes" name="regularDishes" value={inputData.regularDishes} onChange={handleData} className="form-control input" placeholder="please describe" required />
            </div>
            <div className="form-group">
              <label className='text' htmlFor="paymentOnCounter">Do You Accept Payment On Counter For Online Order ?</label>
              <select className='form-control select'  name="paymentOnCounter" value={inputData.paymentOnCounter} onChange={handleData} id="paymentOnCounter" required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="paymentFromSystem">Do You Accept Payment On System For Online Order ?</label>
              <select name="paymentFromSystem" className='form-control select' id="paymentFromSystem" value={inputData.paymentFromSystem} onChange={handleData} required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="eventFacilityAvailaibility">Do Your Restaurant Provide Event Facility ?</label>
              <select name="eventFacilityAvailaibility" className='form-control select' value={inputData.eventFacilityAvailaibility} onChange={handleData} id="eventFacilityAvailaibility" required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="customDecorations">Custom Decorations For Events Is Allowed Or Not?</label>
              <select name="customDecorations" className='form-control select' id="customDecorations" value={inputData.customDecorations} onChange={handleData} required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="outsideFoodAllowed">Outside Food Is Allowed Or Not Allowed?</label>
              <select name="outsideFoodAllowed" className='form-control select' id="outsideFoodAllowed" value={inputData.outsideFoodAllowed} onChange={handleData} required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="alcholConsumption">Alchol Consumption Is Allowed Or Not Allowed?</label>
              <select name="alcholConsumption" className='form-control select' id="alcholConsumption" value={inputData.alcholConsumption} onChange={handleData} required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="privateSpace">Private Space Is Allowed Or Not Allowed?</label>
              <select name="privateSpace" className='form-control select' id="privateSpace" value={inputData.privateSpace} onChange={handleData} required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="liveArchestra">Live Archestra Is Available Or Not?</label>
              <select name="liveArchestra" id="liveArchestra" className='form-control select' value={inputData.liveArchestra} onChange={handleData} required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="form-group">
              <label className='text' htmlFor="dj">DJ System Is Available Or Not?</label>
              <select name="dj" className='form-control select' id="dj" value={inputData.dj} onChange={handleData} required>
              <option >Please Select An Option</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn_red rounded-0">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Restaurant;
