import * as React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

const CardItem = ({ data }) => {
    return (
      <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardActionArea>
          <CardMedia component="img" image={data.images} alt="producto" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default CardItem;