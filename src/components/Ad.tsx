export function Ad(props: {flavor: string, fontSize: number, darkTheme: boolean}) {

    return (

        <div className="ad">
            <h3>Vote For</h3>
            <div>
                {props.flavor}
                {props.fontSize}
                {props.darkTheme}
            </div>
        </div>

    )
    
}