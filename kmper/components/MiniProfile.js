import { signOut, useSession} from "next-auth/react";


function MiniProfile(){
    const{data: session} = useSession();

    return(
        <div className="flex items-center justify-between mt-14 ml-10 ">
           <div className="h-16 w-16 ">
            <img classname=" h-16 w-16 rounded-full border p-[2px]"
            src={session?.user?.image} 
             alt=""/>
             </div>
             <div className="flex-1 mx-4">
                <h2 className="font-bold">{session?.user?.username}</h2>
                <h3 className="text-sm text-gray-700">wellcome to kmper</h3>
             </div>
             <button onClick={signOut} className="text-black text-sm font font-semibold">sign out</button>
        </div>
    );
}

export default MiniProfile