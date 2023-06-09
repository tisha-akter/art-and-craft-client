import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClass></PopularClass>
           <PopularInstructor></PopularInstructor>
           <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;