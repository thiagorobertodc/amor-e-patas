import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const InstagramSkeleton = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: 2,
      }}
    >
      {[1, 2, 3].map((item) => (
        <Skeleton
          key={item}
          variant="rectangular"
          height={400}
          sx={{
            bgcolor: "#24483a", // Green background
            borderRadius: "10px",
          }}
        />
      ))}
    </Box>
  );
};

export default InstagramSkeleton;
