import SubNavbar from 'components/SubNavbar';
import cookingBook from '../../assets/images/JoshsMoreFoods/cooking-book.png';

const JoshsMoreFoods = () => {
return (
  <div class="container">
    <SubNavbar />
    <div class="content">
      <p>Page concernant <a target="_blank" rel="noreferrer" href="https://www.planetminecraft.com/data-pack/josh-s-more-foods-20-new-recipes/">Josh's More Foods</a></p>
      <img src={cookingBook} alt="cooking book" />
    </div>
    </div>
  )
};
export default JoshsMoreFoods;
