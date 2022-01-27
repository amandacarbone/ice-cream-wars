export function Header(props: {user: string}) {

    return (
        <header className="headerContainer">
            <h1 className="header">Ice Cream Wars</h1>
            <h3 className="user">Welcome, {props.user}</h3>
        </header>
    );

}