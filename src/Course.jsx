import React, { useEffect, useState } from 'react';
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
import { courseDes, courseID, courseImage, courseLoading, coursePrice, courseTitle, productd, rating } from "./store/selectors/courseSL";
import { courseState } from "./store/atoms/course";
import Slider from "react-slick";
import Box from '@mui/material/Box';
import { Divider, Grid } from '@mui/material'; 
import { Purchase } from './Purchased';

function Course() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const { courseId } = useParams();
  const setCourse = useSetRecoilState(courseState);
  const isLoading = useRecoilValue(courseLoading);
  const title = useRecoilValue(courseTitle);
  const des = useRecoilValue(courseDes);
  const price = useRecoilValue(coursePrice);
  const img = useRecoilValue(courseImage);
  const productdd = useRecoilValue(productd);
  const rate = useRecoilValue(rating);




  useEffect(() => {
    const func = () => {
      axios.get(`http://localhost:3001/admin/courses`, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      }).then((res) => {
        const foundCourse = res.data.find(course => course._id === courseId);
        if (foundCourse) {
          setCourse({
            isLoading: false,
            course: foundCourse
          });
        }
      }).catch(error => {
        console.error("Error fetching course data:", error);
        setCourse({ isLoading: false });
      });
    };
    func();
  }, [courseId, setCourse]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div style={{  marginTop: 100, marginLeft: 80, marginRight: 50 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div>
              <Typography variant='h4' style={{ fontWeight: 500, fontFamily: "helvetica" }}>{title + " "}</Typography> <br />
              <Typography style={{ color: "grey" }} variant='h6'>{des}</Typography> 
              <Box  height={50}
      width={150}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}> {rate} Stars
              </Box>
              <Divider />
              <br /><br />
              <Typography variant='h5'>Price: Rs {price}/-</Typography>
              <br /> <br />
              <Typography variant='h6'>Product Description</Typography>
              <br />
              <Typography style={{ color: "grey" }} variant='h6'>{productdd}

</Typography>

  <Button size="large" sx={{ width:200, mt: 10, backgroundColor: '#633EBB', color: 'white' }}   onClick={Purchase}  > Buy Now </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{ maxWidth: 700, margin: '0 auto' }}>
              <Slider {...settings}>
                {img.map((imageLink, index) => (
                  <div key={index}>
                    <img src={imageLink} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
                  </div>
                ))}
              </Slider>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

// function EditBox({ setCourse }) {
//   const titlet = useRecoilValue(courseTitle);
//   const desd = useRecoilValue(courseDes);
//   const pricep = useRecoilValue(coursePrice);
//   const imgi = useRecoilValue(courseImage);

//   const [title, setTitle] = useState(titlet);
//   const [des, setDes] = useState(desd);
//   const [price, setPrice] = useState(pricep);
//   const [img, setImg] = useState(imgi.join(", ")); // Joining array as a string of comma-separated values for editing
//   const [pub, setPub] = useState(false);
//   const id = useRecoilValue(courseID);

//   const updateCourse = () => {
//     fetch(`http://localhost:3001/admin/courses/${id}`, {
//       method: "PUT",
//       body: JSON.stringify({
//         title,
//         description: des,
//         price,
//         imgageLink: img.split(", "), // Split the comma-separated string back into an array
//         published: pub
//       }),
//       headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` }
//     })
//       .then(resp => {
//         if (!resp.ok) {
//           throw new Error(`HTTP error! Status: ${resp.status}`);
//         }
//         return resp.json();
//       })
//       .then(data => {
//         console.log('Course updated successfully:', data);
//         setCourse({
//           isLoading: false,
//           course: {
//             _id: id,
//             title,
//             description: des,
//             price,
//             imgageLink: img.split(", "), // Split here as well
//             published: pub
//           }
//         });
//       })
//       .catch(error => console.error('Error updating course:', error));
//   };

//   return (
//     <div>
//       <Card sx={{ maxWidth: 600, padding: 2 }}>
//         <CardContent>
//           <TextField id="outlined-basic" variant="outlined" value={title} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setTitle(e.target.value) }} />
//           <TextField id="outlined-basic" variant="outlined" value={des} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setDes(e.target.value) }} />
//           <TextField id="outlined-basic" variant="outlined" value={price} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setPrice(e.target.value) }} />
//           <TextField id="outlined-basic" variant="outlined" value={img} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setImg(e.target.value) }} />
//           <FormControlLabel control={<Checkbox onChange={(e) => { setPub(!pub) }} />} label='Publish' />
//           <Button style={{ width: '96%', margin: 10 }} variant="contained" size="small" onClick={updateCourse}>Update</Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

export default Course;
