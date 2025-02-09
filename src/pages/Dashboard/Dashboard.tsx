import { Card, CardContent, CardHeader, Grid, Box } from '@mui/material';
import { Title, useGetList } from 'react-admin';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Pie, PieChart, Legend } from 'recharts';
import { Users, FileText, FileCheck, FilePen } from 'lucide-react';
import CustomTooltip from './CustomTooltip';
import DashboardCard from './DashboardCard';

const COLORS = ['#2563eb', '#059669', '#dc2626', '#d97706'];




 const Dashboard = () => {
  const { data: users, isLoading: usersLoading } = useGetList('users', {
    pagination: { page: 1, perPage: 100 },
  });
  const { data: posts, isLoading: postsLoading } = useGetList('posts', {
    pagination: { page: 1, perPage: 100 },
  });

  if (usersLoading || postsLoading) {
    return null;
  }

  // Prepare data for charts
  const postsPerUser = users?.map(user => ({
    name: user.name,
    posts: posts?.filter(post => post.userId === user.id).length || 0,
  })) || [];

  const postStatusCount = [
    { name: 'Published', value: posts?.filter(post => post.status === 'published').length || 0 },
    { name: 'Draft', value: posts?.filter(post => post.status === 'draft').length || 0 },
    //{ name: 'Archived', value: posts?.filter(post => post.status === 'archived').length || 0 },
  ];

  const publishedPosts = posts?.filter(post => post.status === 'published').length || 0;
  const draftPosts = posts?.filter(post => post.status === 'draft').length || 0;

  return (
    <>
      <Title title="Dashboard" />
      
      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 4, mt: 1 }}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard 
            icon={Users} 
            title="Total Users" 
            value={users?.length || 0}
            color="#2563eb"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard 
            icon={FileText} 
            title="Total Posts" 
            value={posts?.length || 0}
            color="#059669"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard 
            icon={FileCheck} 
            title="Published Posts" 
            value={publishedPosts}
            color="#059669"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard 
            icon={FilePen} 
            title="Draft Posts" 
            value={draftPosts}
            color="#d97706"
          />
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardHeader title="Posts per User" />
            <CardContent>
              <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={postsPerUser} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="posts" fill="#3b82f6">
                      {postsPerUser.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title="Post Status Distribution" />
            <CardContent>
              <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={postStatusCount}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {postStatusCount.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;