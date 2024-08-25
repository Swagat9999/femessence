import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import * as React from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  border:'none',
}));

const ImageWrapper = styled('div')({
  flex: '0 0 auto',
  width: '40%',  
  marginRight: '1rem',
});

const TextWrapper = styled('div')({
  flex: '1 1 auto',
});

const Image = styled('img')({
  width: '100%',
  borderRadius: '8px',
  objectFit: 'cover',
});

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3001/admin/courses', {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      });
      setCourses(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <TodosDiv courses={courses} />
    </>
  )
}

export function Todos(props) {
  return (
    <div style={{ marginBottom: 20, padding: '1rem', borderRadius: 8, display: 'flex', alignItems: 'center' }}>
      <ImageWrapper>
        <img src={props.link} alt={props.title} style={{ borderRadius: 8, width: '100%', height: 'auto', objectFit: 'cover' }} />
      </ImageWrapper>
      <TextWrapper>
        <Typography variant='h5' style={{ fontWeight: 700, fontFamily: 'helvetica', marginBottom: 10 }}>{props.title}</Typography>
        <Typography variant='body1' style={{ marginBottom: 10 }}>{props.description}</Typography>
        <Typography variant='body2'>Price: Rs {props.price}/-</Typography>
      </TextWrapper>
    </div>
  );
}

function TodosDiv({ courses }) {
  return (
    <div style={{ display: "flex", padding: 50, justifyContent: "space-around", flexWrap: "wrap" }}>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{courses.map((course) => {
          return (
            <Grid item xs={3} sm={4} md={4} key={course._id}>
              <Item>
                <Link to={`/${course._id}`} style={{ textDecoration: 'none' }}>
                  <Card >
                    <CardContent>
                      <Todos title={course.title} description={course.description} price={course.price} link={course.imgageLink} id={course._id} />
                    </CardContent>
                  </Card>
                </Link>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default CourseList;
