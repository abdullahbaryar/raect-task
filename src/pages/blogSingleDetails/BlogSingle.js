import { Box, Typography } from "@mui/material";
import React from "react";
import { Eye, detail } from "../../assets/image";
import { useParams } from "react-router-dom";
import { getSingleBlogData } from "../../api/Blog";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import NoData from "../../components/nodata/NoData";
import { incrementViewCount } from "../../redux/blog/blogSlice";

const BlogSingle = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleBlogData, loadingBlogData,blogViewCounts } = useSelector(
    (state) => state.blog
  );
  React.useEffect(() => {
    getSingleBlogData(id);
    dispatch(incrementViewCount({ blogId: id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id,dispatch]);

  return (
    <>
      {loadingBlogData ? (
        <LoadingSpinner />
      ) : singleBlogData === null ? (
        <NoData height="100vh" />
      ) : (
        <Box mt={13}>
          <Box
            sx={{
              width: { xs: "97%", md: "70%" },
              maxWidth: "1000px",
              m: "0 auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ display: "flex", gap: 2 }}>
                <Typography variant="subtitle2">
                  Posted on October 6th 2021
                </Typography>
                <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                  <img src={Eye} alt="Eye" width={20} height={13} />
                  <Typography variant="subtitle2">{blogViewCounts[id]/2 || 0} views </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  width: { xs: "100%", sm: "90%", md: "50%" },
                  color: "#000",
                }}
              >
                {singleBlogData.Title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ width: { xs: "100%", sm: "90%", md: "73%" }, my: 2 }}
              >
                {singleBlogData.Subtitle}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height: "500px", maxWidth: "1230px", m: "2rem auto" }}>
            <img src={detail} alt="blog" width="100%" height="100%" />
          </Box>
          <Box
            sx={{
              width: { xs: "97%", md: "70%" },
              maxWidth: "1000px",
              m: "0 auto",
            }}
          >
            
            <Typography variant="subtitle2" sx={{ my: 2 }}>
              {singleBlogData.Article}
            </Typography>
            
          </Box>
        </Box>
      )}
    </>
  );
};

export default BlogSingle;
