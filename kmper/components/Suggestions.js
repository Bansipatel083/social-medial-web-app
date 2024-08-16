import faker from "faker";
import { useEffect, useState } from "react";

// import { profile } from "console";
// import {profile} from "console";
function Suggestions() {
    const [Suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        const Suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id:i
            }
        ));

        setSuggestions(Suggestions);
    },[]);
  return( 
    <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
            {/* <h3 className="text-sm font-bold text-gray-800">suggestions for you</h3> */}
            {/* <button className="text-gray-600">see all</button> */}
        </div>
        
        
        {Suggestions.map((profile) => (
            <div>
            {/* key={profile.id}
            className="flex items-center justify-between mt-3">
                <img
                className="w-10 h-10 rounded-full border p-[2px]"
                src={profile.avatar}
                alt=""/>

                <div className="flex-1 ml-4">
                    <h2 className="font-semibold text-sm">{profile.username}</h2>
                    <h3 className="text-xs text-gray-700">works at {profile.company.name}</h3>
                </div>
                <button className="text-black text-sm">follow</button> */}
                </div>
        ))}
    </div>
  );
}

export default Suggestions;