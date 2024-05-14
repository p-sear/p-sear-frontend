import { Textarea } from '@material-tailwind/react';

const WriteReview = () => {
  return (
    <>
      <section className='container mx-auto mb-5'>
        <div className='px-3 py-5 text-xl'>리뷰 작성</div>
        <div className='mx-auto flex w-5/6 gap-7' style={{ height: '300px' }}>
          <Textarea label='리뷰를 입력해주세요.' />
        </div>
      </section>
    </>
  );
};

export default WriteReview;
