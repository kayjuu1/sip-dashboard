// import username from "./WelcomeMessage"
import {Card, CardContent, CardDescription, CardHeader} from "../../../../../Sip-Dashboard/src/components/ui/card.tsx"


interface CardWithFormProps {
    username?: string
}

export function Profile({username}: CardWithFormProps) {
    return (
        <Card className="w-1/3">
            <CardHeader>
                <CardDescription>Profile Picture of {username} </CardDescription>
            </CardHeader>
            <CardContent>
                <img src="src/assets/1693834799243.jpg" alt="Profile-picture"></img>
            </CardContent>
        </Card>
    )
}
