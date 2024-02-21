const Loading = () => {
    return (
        <div className="Loader">
            {Array(4).fill(null).map((el, i) => <div className="Loader-inner" key={i}></div>)}
        </div>
    )
}

export default Loading