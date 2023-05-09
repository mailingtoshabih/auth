import { Link } from 'react-router-dom';





export const Signin = () => {



  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">

      <div>
        <h1 className="text-3xl py-2">Sign in to your account</h1>
      </div>


      <form>

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email</label>
          <input className='border p-3' type="email" />
        </div>

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input className='border p-3' type="password" />
        </div>

        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 my-4 rounded-full'>Sign in</button>

      </form>

      <p className="py-2">
        Don't have an account yet? <Link to='/signup'>Sign up</Link>
      </p>


    </div>
  )
}
