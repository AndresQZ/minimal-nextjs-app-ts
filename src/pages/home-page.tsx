import HomeComponent from '@/app/home/HomeComponent';
import { GetServerSideProps, NextPage } from 'next';

interface HomeI {
    userId: number
}

const HomePage: NextPage<HomeI> = ({userId}) => {
   console.log(`user : ${userId}`)
  return <HomeComponent userId={userId} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    debugger
 return {
    props: {
        userId: Math.floor(Math.random() * 100)
    }
 }
};

export default HomePage;