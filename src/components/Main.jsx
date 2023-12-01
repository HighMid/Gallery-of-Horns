import HornFilter from "./HornFilter";

function Main(props)
{
    return(
        <div>
            <h2>Haw yee</h2>
            <HornFilter onFilter={props.onFilter}  onClearFilter={props.onClearFilter}/>
        </div>
    );
}

export default Main;