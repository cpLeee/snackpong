
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { deepPurple } from '@mui/material/colors';



function PostCard({onDeletePost, post, onClickPost}) {
const {id, title, content, xp, views} = post;

const [isUp, setIsUp] = useState("")
const [isDown, setIsDown]= useState("")
const color= deepPurple[200];

const emptyDownArrow= "https://cdn-images-1.medium.com/max/800/1*qYKAkcTfQkQRm2Ce7sjWSA.png"
const redDownArrow= "https://cdn-images-1.medium.com/max/800/1*oNM0yOEyn77IsTdUDmXcVg.png"
const emptyUpArrow= "https://cdn-images-1.medium.com/max/800/1*kIv0TNBYlRLGg8F72lHC3A.png"
const greenUpArrow= "https://cdn-images-1.medium.com/max/800/1*DdtVeHfbdwjwmLWwkmG8UA.png"

const handleUp = () => {
  // updateUp(id, isUp)
  setIsUp(!isUp)
}
const handleDown = () => {
  // updateDown(id, isDown)
  setIsDown(!isDown)
}

function handleDeleteClick() {
  fetch(`/snacks_posts/${id}`, {
    method: "DELETE",
  });
  onDeletePost(id);  
}

  const handleClick = () => {
    // setSelectedPost(post)
    onClickPost(post)
  }
        return (
            <div className="post-cards">
            <React.Fragment>
            <CardContent>
              <Link to= "/post" style={{textDecoration: 'none'}}>
                  <Typography variant="h6" component="div" onClick={handleClick}>
                  {post.title}
                </Typography>
              </Link>
              <Link to= "/post" style={{textDecoration: 'none'}}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom onClick={handleClick}>
                {post.content}
                </Typography>     
              </Link>
              <Typography sx={{ mb: 0 }} color="text.secondary">
                <img 
                className="xp-up"
                onClick={handleUp}
                src= {isUp ? greenUpArrow : emptyUpArrow}

                alt=""/>
                {post.xp} XP
                <img 
                className="xp-down"
                onClick={handleDown}
                src= {isDown ? redDownArrow : emptyDownArrow}
                alt=""
                />
                
              </Typography>
  
              <Typography sx={{ mb: 0 }} color="text.secondary">
                {post.views} views
              </Typography>
  
            </CardContent>
  
            <CardActions>
              <Button size="small">Comments 
              <img 
              className="comment-icon"
              src="https://cdn-images-1.medium.com/max/800/1*nH3vaPiqc5ZEiH6u-aJszg.png"
              alt=""/>
              </Button>
              <DeleteIcon
              onClick= {handleDeleteClick}
              sx={{ color: deepPurple[200] }}/>
            </CardActions>

            <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined"></Card>
          </Box>

          </React.Fragment>
          </div>

          
        );
      
}

export default PostCard