import {users} from "../../../../../Sip-Dashboard/src/DataRepositories.ts";
import {Card, CardContent} from "../../../../../Sip-Dashboard/src/components/ui/card.tsx";
import {Button} from "../../../../../Sip-Dashboard/src/components/ui/button.tsx";
import {Link} from "react-router-dom";


// interface UserDataProps {
//     username?: string
// }

// interface UserDataProps {
//     username?: string
// }

export function UserData() {
    return (
        <Card className="w-2/3">
            {/*<CardHeader>*/}
            {/*    <CardDescription>Profile Picture of {username} </CardDescription>*/}
            {/*</CardHeader>*/}
            <CardContent>

                {/*<>*/}
                <div className="details-section px-10 m-5 py-5 space-y-5">
                    <div className="details-section-items flex justify-between">
                        <p><strong>Faculty:</strong></p><p> {users[0].faculty}</p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p><strong>Department:</strong></p><p> {users[0].department}</p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Programme:</strong></p><p> {users[0].programme}
                    </p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Level:</strong></p><p> {users[0].level}
                    </p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Session:</strong></p> <p>{users[0].session}
                    </p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Index Number:</strong></p><p> {users[0].indexNumber}
                    </p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Campus:</strong></p><p> {users[0].campus}
                    </p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Mobile Number:</strong></p><p> {users[0].mobileNumber}
                    </p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Cohort:</strong></p><p> {users[0].cohort}
                    </p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Credit Required:</strong></p><p> 141
                    </p>
                    </div>
                    <div className="details-section-items flex justify-between">
                        <p>
                            <strong>Credit Taken:</strong></p><p> 136
                    </p>
                    </div>
                    <Button asChild className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link href="/login" to={''}>View Profile</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
