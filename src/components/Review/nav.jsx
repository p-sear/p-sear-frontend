const Nav = () => {
    return (
      <>
        <nav className='border-b-2 py-5'>
            <section className='container mx-auto flex flex-row items-center gap-14'>
            <div className='text-lg text-gray-400 hover:font-bold hover:text-black'>
                개요
            </div>
            <div className='text-lg text-gray-400 hover:font-bold hover:text-black'>
                서비스 및 부대시설
            </div>
            <div className='text-lg text-gray-400 hover:font-bold hover:text-black'>
                상세 설명
            </div>
            <div className='text-lg text-gray-400 hover:font-bold hover:text-black'>
                리뷰
            </div>
            </section>
        </nav>
      </>
    );
  };
  
  export default Nav;
  