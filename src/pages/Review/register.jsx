import { Button } from '@material-tailwind/react';

import RegisterImage from '../../components/Review/registerImage';
import WriteReview from '../../components/Review/writeReview';
import ScrollToTop from '../../helpers/ScrollToTop';
import Grade from './../../components/Review/grade';
import Nav from './../../components/Review/nav';

const Register = () => {
  return (
    <>
      <ScrollToTop />
      <Nav></Nav>
      <article>
        <section className='container mx-auto border-b-2'>
          <div className='px-3 py-10 text-2xl font-bold'>리뷰 작성</div>
        </section>
        <Grade />
        <WriteReview />
        <RegisterImage />
        <div className='container mx-auto my-20 flex justify-center'>
          <Button
            className='w-2/6'
            style={{ backgroundColor: '#87CDFF' }}
            size='lg'
          >
            리뷰 작성
          </Button>
        </div>
      </article>
    </>
  );
};

export default Register;
