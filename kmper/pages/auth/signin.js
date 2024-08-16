import React from 'react';
import {getProviders,signIn as signIntoProvider} from"next-auth/react";

function signIn({providers}) {
  return (
    <>
    {/* <Header/> */}
    <div className='flex flex-col items-center justify-center min-h-screen py-2  px-14 text-center'>
      <img className='w-80'
     src="https://www.unigreet.com/wp-content/uploads/2022/08/india-3573959__480.webp"/>
      
    <div className='mt-40'>
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className='p-3 bg-gray-600 rounded-lg text-white' 
        onClick={() => signIntoProvider(provider.id,{callbackUrl: '/'})}>
          Sign in  {provider.name}
        </button>
      </div>
    ))}
    </div>
    </div>
    
    
  </>
  )
}

export async function getServerSideProps(){
    const providers =await getProviders();

    return{
        props:{
            providers,
        }
    }
}

export default signIn;