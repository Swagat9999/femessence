import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseDes, courseDetails, courseID, courseImage, courseLoading, coursePrice, coursePub, courseTitle } from "./store/selectors/courseSL";
import { courseState } from "./store/atoms/course";


function Course() {
  const { courseId } = useParams();
  const setCourse = useSetRecoilState(courseState);
  const isLoading= useRecoilValue(courseLoading);
  const title = useRecoilValue(courseTitle);
  const des = useRecoilValue(courseDes);
  const price = useRecoilValue(coursePrice);
  const img = useRecoilValue(courseImage);


  useEffect(() => {
    const func= ()=>{
       axios.get(`http://ec2-18-220-192-241.us-east-2.compute.amazonaws.com:3000/admin/courses`,{
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}` }
      } ).then((res)=>{
      const foundCourse = res.data.find(course => course._id === courseId);
      if (foundCourse) {
        setCourse({
          isLoading:false,
          course:foundCourse});
      }});
    }
    func();
  }, [courseId]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <div style={{ display: "flex", justifyContent: 'space-around', marginTop:100 }}>
        <div>
          <Typography variant='h5' style={{fontWeight:500, fontFamily:"helvetica"}}>{title+ " "}</Typography> <br />
          <Typography variant='h6' >{des}</Typography> <br /> <br />
          <Typography variant='h6' >Price: Rs {price}/-</Typography> 
          <br /> <br />
          <img style={{maxWidth:600}} src={img} alt="img not found" />
        </div>
        <div>
          <EditBox setCourse={setCourse}/>
        </div>
      </div>     
    </div>
  );
}

function EditBox({setCourse}){
  const titlet = useRecoilValue(courseTitle);
  const desd = useRecoilValue(courseDes);
  const pricep = useRecoilValue(coursePrice);
  const imgi = useRecoilValue(courseImage);

  const [title, setTitle] = useState(titlet);
  const [des, setDes] = useState(desd);
  const [price, setPrice] = useState(pricep);
  const [img, setImg] = useState(imgi);
  const [pub, setpub] = useState(false);
  const id = useRecoilValue(courseID);






const updateCourse = () => {
  fetch(`http://ec2-18-220-192-241.us-east-2.compute.amazonaws.com:3000/admin/courses/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      description: des,
      price,
      imgageLink: img,
      published: pub
    }),
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` }
  })
    .then(resp => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then(data => {console.log('Course updated successfully:', data);
  setCourse({
    isLoading:false,
    course:{
    _id:id,
    title,
    description: des,
    price,
    imgageLink: img,
    published: pub,}
  });
    
})
    .catch(error => console.error('Error updating course:', error));
};


  return <>
  <div>
  <Card sx={{ maxWidth: 600, padding: 2 }}>
                <CardContent>
                  <TextField id="outlined-basic" variant="outlined" value={title} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setTitle(e.target.value) }} />
                  <TextField id="outlined-basic"  variant="outlined" value={des} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setDes(e.target.value) }} />
                  <TextField id="outlined-basic" variant="outlined" value={price} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setPrice(e.target.value) }} />
                  <TextField id="outlined-basic" variant="outlined" value={img} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setImg(e.target.value) }} />
                  <FormControlLabel control={<Checkbox onChange={(e) => { setpub(!pub) }} />} label='publish' />
                  
                  <Button style={{ width: '96%', margin: 10 }} variant="contained" size="small" onClick={updateCourse}>Update</Button>
                </CardContent>
              </Card>
  </div>  
  </>
}




export default Course;
