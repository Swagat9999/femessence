import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { pcourseState } from './store/atoms/pcourses';
import { useSetRecoilState, useRecoilValue } from 'recoil';

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

function Purchased() {
  const [courses, setCourses] = useState([]);
  const setPcourses = useSetRecoilState(pcourseState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3001/admin/courses', {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      });
      setCourses(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3001/admin/purchasedCourses', {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      });
      setPcourses(res.data.purchasedCourses.map(course => course._id));
    };
    fetchData();
  }, []);

  return (
    <>
      <TodosDiv courses={courses}/>
    </>
  )
}

export function Purchase(courseid) {
    const pushPurchase = async () => {
      const res = axios.post(`http://localhost:3001/user/courses/${courseid}`, {}, {
        headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
      });
    }
    pushPurchase();
}

export function Todos(props) {
  const navigate = useNavigate();

  return ( 
    <div style={{ marginBottom: 20, padding: '1rem', borderRadius: 8, display: 'flex', alignItems: 'center' }}>
      <ImageWrapper>
        <img src={props.link} alt={props.title} style={{ borderRadius: 8, width: '100%', height: 'auto', objectFit: 'cover' }} />
      </ImageWrapper>
      <TextWrapper>
        <Typography variant='h5' style={{ fontWeight: 700, fontFamily: 'helvetica', marginBottom: 10 }}>{props.title}</Typography>
        <Typography variant='body1' style={{ marginBottom: 10 }}>{props.description}</Typography>
        <Typography variant='body2'>Price: Rs {props.price}/-</Typography>
        <Button variant="contained" style={{ color: 'black', backgroundColor: 'white' }} onClick={() => { navigate(`/${props.id}`) }}>View</Button>;
      </TextWrapper>
    </div>
  );
}



function TodosDiv({ courses }) {
  const purchasedCoursesids = useRecoilValue(pcourseState);
  return (
    <div style={{ display: "flex", padding: 50, justifyContent: "space-around", flexWrap: "wrap" }}>
      <Grid container spacing={2}>
      {courses.map((course) => {
  return purchasedCoursesids.includes(course._id) ? (
    <Grid item xs={4} key={course._id}>
      <Item>
        <Link to={`/${course._id}`} style={{ textDecoration: 'none' }}>
          <Card>
            <CardContent>
              <Todos title={course.title} description={course.description} price={course.price} link={course.imgageLink} id={course._id} />
            </CardContent>
          </Card>
        </Link>
      </Item>
    </Grid>
  ) : null;
})}

      </Grid>
    </div>
  );
}

export default Purchased;
