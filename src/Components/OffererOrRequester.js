function OffererOrRequester(props){
    return <div>
        <p><button onClick={props.isUniversity}>Are you a University?</button></p>
        <p>OR</p>
        <p><button onClick={props.isRequester}>Are you a Requester?</button></p>
    </div>
}

export default OffererOrRequester;