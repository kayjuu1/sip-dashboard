
const WelcomeMessage = ({username}: { username: string }) => {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-20 px-10">
            Welcome back, {username}
        </h2>
    );
};

export default WelcomeMessage;
