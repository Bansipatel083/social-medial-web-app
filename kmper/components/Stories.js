import faker from "faker";
// import { Session } from "inspector";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";
// import faker from "Faker";
// import Story from "./Story";


function Stories(){
    const [suggestions, setSuggestions] = useState([]);
    const{ data: session} = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);
    }, []);
    return (
        <div>
         {/* className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"> */}
            
        {/* {session &&(
            <Story img={session.user.image} username={session.user.username}/>
        )},
             */}
        {/* {suggestions.map(profile => (
          <story 
          key={profile.id} 
          img={profile.avatar} 
          username={profile.username}/>  
        ))} */}

        </div>
        );
}

export default Stories;