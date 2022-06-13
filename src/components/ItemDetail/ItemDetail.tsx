import * as React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";

const ItemDetail: React.FC<any> = ({ itemProduct, stock, onAdd }) => {
  const [item, setItem]: any = React.useState({});
  React.useEffect(() => {
    setItem(itemProduct);
  }, [itemProduct]);

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "98%", display: "flex", justifyContent: "center" }}>
        <Card
          sx={{ maxWidth: 500, objectFit: "contain", border: "none" }}
          variant="outlined"
        >
          <Paper
            elevation={3}
            sx={{ height: "97%", width: "97%", border: "1px solid #dfdfdf" }}
          >
            <CardMedia
              sx={{ objectFit: "contain", paddingTop: "1rem" }}
              component="img"
              height="200"
              width="100%"
              image={item.image}
              alt={item.altText}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ padding: "1rem" }}
              >
                $ {item.price}
              </Typography>
              <ItemCount
                stockAvailable={stock}
                onAdd={(count: number) => onAdd(count)}
              />
            </CardContent>
          </Paper>
        </Card>
      </Box>
    </>
  );
};
export default ItemDetail;
