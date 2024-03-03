import { Box, Button, Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardBox from "./component/CardBox";
import { getAllBlogData } from "../../../../api/Blog";
import { useDispatch, useSelector } from "react-redux";

const Services = () => {
  const dispatch = useDispatch();
  const { blogData, loadingBlogData } = useSelector((state) => state.blog);

  const [displayCount, setDisplayCount] = useState(6);

  // Function to load more items
  const handleLoadMore = () => {
    setDisplayCount(displayCount + 6);
  };

  useEffect(() => {
    getAllBlogData(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loadingBlogData || blogData.length === 0) {
    return (
      <Box my={7}>
        <Grid container spacing={4}>
          {[...Array(6)].map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Skeleton variant="rectangular" width="100%" height={200} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box my={7}>
      <Grid container spacing={4}>
        {blogData?.slice(0, displayCount).map((section, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <CardBox section={section} />
          </Grid>
        ))}
      </Grid>
      {blogData && blogData.length > displayCount && (
        <Box mt={4} textAlign="center">
          <Button variant="contained" onClick={handleLoadMore}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Services;
