import Nav from './../../components/Review/nav';
import Grade from './../../components/Review/grade';
import WriteReview from '../../components/Review/writeReview';
import RegisterImage from '../../components/Review/registerImage';
import { Button } from "@material-tailwind/react";

const Register = () => {
  return (
    <>
      <Nav></Nav>
      <article>
        <section className='container mx-auto border-b-2'>
          <div className='px-3 py-10 text-2xl font-bold'>리뷰 작성</div>
        </section>
        <Grade/>
        <WriteReview />
        <RegisterImage />
        <div className='container flex mx-auto justify-center my-20'>
          <Button className="w-2/6" style={{backgroundColor : "#87CDFF"}} size="lg">리뷰 작성</Button>
        </div>
      </article>
    </>
  );
};

export default Register;
