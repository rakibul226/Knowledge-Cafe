import profile from'../../assets/images/profile.png'

const Header = () => {
    return (
        // <div className='flex justify-between items-center p-5 m-5 bg-gray-700'>
        <div className='flex justify-between items-center p-5 m-5 border-b-2 border-gray-400'>
            <h1 className=' text-6xl '>Knowledge Cafe</h1>        
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;