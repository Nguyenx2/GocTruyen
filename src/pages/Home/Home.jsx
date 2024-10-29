import { Box, Container } from "@chakra-ui/react";
import SlideComponent from "./components/SlideComponent";
import RecentUpdates from "../RecentUpdates/RecentUpdates";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Box>
        <SlideComponent />
        <RecentUpdates />
      </Box>
    </Layout>
  );
};

export default Home;
