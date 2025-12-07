// import Card from "@mui/material/Card";
// import "./infobox.css";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import SunnyIcon from '@mui/icons-material/WbSunny';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

// import Typography from "@mui/material/Typography";

// export default function InfoBox({ Info = {} }) {
//   const INIT_URL =
//     "https://images.unsplash.com/photo-1733164845914-5facd00128f4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//   const HOT_URL =
//     "https://media.istockphoto.com/id/1006684880/photo/bright-sun.jpg?s=612x612&w=0&k=20&c=9lqwSzu46U1E0B7WM6PLr3o1Vp_dnFZjJ4t43gu82No=";
//   const COLD_URL =
//     "https://www.fourstateshomepage.com/wp-content/uploads/sites/36/2024/01/Horz-Cold-Weather.jpg?strip=1";
//   const Rain_URL =
//     "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.jpg?s=612x612&w=0&k=20&c=5IxhgWG1AaG5froZIyYy2XUuNCJlUDDt6g1fRiXP_g0=";

//   return (
//     <div className="InfoBox">
//       <Card sx={{ maxWidth: 345 }}>
//         <CardMedia
//           sx={{ height: 140 }}
//           image={
//             Info?.humidity > 80 ? Rain_URL : Info?.temp > 15 ? HOT_URL : COLD_URL
//           }
//           title="Weather Image"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {Info?.city} &nbsp;
//             { }
//             {Info?.humidity > 80 ? <ThunderstormIcon /> : Info?.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />}
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ color: "text.secondary" }}
//             component={"span"}
//           >
//             <div className="d-flex">
//               <div>Temperature = {Info?.temp} &deg;C</div>
//               <div>Humidity = {Info?.humidity}</div>
//               <div>Min Temp = {Info?.tempMin}&deg;C</div>
//               <div>Max Temp = {Info?.tempMax}&deg;C</div>
//               <div>The weather feels like = {Info?.feelslike}&deg;C</div>
//             </div>
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import Card from "@mui/material/Card";
import "./infobox.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from "@mui/material/Typography";

export default function InfoBox({ Info = {} }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1733164845914-5facd00128f4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://media.istockphoto.com/id/1006684880/photo/bright-sun.jpg?s=612x612&w=0&k=20&c=9lqwSzu46U1E0B7WM6PLr3o1Vp_dnFZjJ4t43gu82No=";
  const COLD_URL =
    "https://www.fourstateshomepage.com/wp-content/uploads/sites/36/2024/01/Horz-Cold-Weather.jpg?strip=1";
  const Rain_URL =
    "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.jpg?s=612x612&w=0&k=20&c=5IxhgWG1AaG5froZIyYy2XUuNCJlUDDt6g1fRiXP_g0=";

  const chosenImage =
    Info?.humidity > 80 ? Rain_URL : Info?.temp > 15 ? HOT_URL : COLD_URL;

  const IconComponent =
    Info?.humidity > 80 ? ThunderstormIcon : Info?.temp > 15 ? SunnyIcon : AcUnitIcon;

  return (
    <div className="InfoBox">
      <Card className="info-card" elevation={0}>
        <div className="info-media">
          {/* use an img for photographic left side, or show icon */}
          {chosenImage ? (
            <img src={chosenImage} alt="weather" />
          ) : (
            <IconComponent className="mui-icon" style={{ fontSize: 140 }} />
          )}
        </div>

        <CardContent className="info-body">
          <div className="info-day">Today</div>

          <div style={{display:'flex', alignItems:'center', gap:12, flexWrap:'wrap'}}>
            <h2 className="info-city">{Info?.city || "Unknown"}</h2>
            <IconComponent style={{ fontSize: 38, color: '#f6c24d' }} />
          </div>

          <div className="info-temp">Temperature: {Info?.temp}°C</div>
          <div className="info-desc ">{Info?.description || "clear sky"}</div>

          <div className="info-stats" aria-hidden>
            <div className="stat">Humidity: {Info?.humidity ?? "--"}%</div>
            <div className="stat">Min: {Info?.tempMin ?? "--"}°C</div>
            <div className="stat">Max: {Info?.tempMax ?? "--"}°C</div>
            <div className="stat">Feels like: {Info?.feelslike ?? "--"}°C</div>
          </div>

          {/* optional: small forecast row example (remove if you don't need) */}
          {/* <div className="forecast-row">
            <div className="forecast">Wed<br/>21°C</div>
            <div className="forecast">Thu<br/>24°C</div>
            <div className="forecast">Fri<br/>21°C</div>
            <div className="forecast">Sat<br/>24°C</div>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
