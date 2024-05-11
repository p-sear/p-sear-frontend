import { Rating } from '@material-tailwind/react';

const Grade = () => {
  return (
    <>
      <section className='container mx-auto mb-5'>
        <div className='px-3 py-5 text-xl'>별점 등록</div>
        <div
          className='mx-auto flex w-5/6 items-center justify-center gap-7'
          style={{ height: '80px' }}
        >
          <Rating value={3} ratedColor='#f4f154' />
        </div>
      </section>
    </>
  );
};

export default Grade;
