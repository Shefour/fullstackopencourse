// Line 2 Changed const Filter = (handler) => {...} to const Filter = ({handler}) => {...} and now it works as it should. I swear this little thing drove me mad.
const Filter = ({handler}) => {
    return (
        <div>
        filter shown with <input onChange={handler} />
        </div>
    )
    }
export default Filter