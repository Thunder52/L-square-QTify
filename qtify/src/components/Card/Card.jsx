import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Cards = ({ id, title, imageUrl, follows }) => {
  return (
    <Card
      sx={{
        width: 159,
        height: 256,
        backgroundColor: "#121212",
        color: "#fff",
        borderRadius: "8px",
        p: "16px 8px",
        boxShadow: "none",
      }}
      key={id}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt="Album cover"
          sx={{
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
        <Box sx={{ backgroundColor:"#FFFFFF", padding:"8px", borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px"}}>
        <Chip
          label={`${follows} Follows`}
          sx={{
            backgroundColor: "#121212",
            color: "#FFFFFF",
            fontWeight: "bold",
            fontSize: "12px",
            height: "24px",
            borderRadius: "4px",
          }}
        />
        </Box>
      </Box>

      <Box sx={{ px: 2, py: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "14px" }}>
          {title}
        </Typography>
      </Box>
    </Card>
  )
}

export default Cards