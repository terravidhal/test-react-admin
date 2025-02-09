import { Card, CardContent, Box, Typography } from '@mui/material';



const DashboardCard = ({ icon: Icon, title, value, color }:any) => (
  <Card>
    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ 
        p: 1.5, 
        borderRadius: 2, 
        bgcolor: `${color}15`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Icon size={24} color={color} />
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h5" component="div" fontWeight="600">
          {value}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default DashboardCard;