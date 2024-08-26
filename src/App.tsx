import Navbar from "@/components/custom/Navbar.tsx";
import {users} from "./DataRepositories.ts";
import WelcomeMessage from "@/components/custom/WelcomeMessage.tsx";
import {Profile} from "@/components/custom/Profile.tsx";
import {UserData} from "@/components/custom/UserData.tsx";
import RegisterCard from "@/components/custom/register-card/RegisterCard.tsx";
import CheckResultsCard from "@/components/custom/check-results/CheckResultsCard.tsx";
const App = () => {
    return (
        <div>
            <Navbar/>
            <WelcomeMessage username={users[0].userName}/>
            <div className="flex justify-between px-10">
                <Profile username={users[0].userName}/>
                <UserData/>
            </div>
            <div className="flex justify-center items-center h-40 bg-gray-100 space-x-5">
                <RegisterCard/>
                <CheckResultsCard/>
            </div>

        </div>
    );
};

export default App;