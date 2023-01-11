const LoaderBlock = ({ nbBlocks }) => {
    const nbBlocksOfLoader = new Array(nbBlocks).fill().map((_, index) => index)

    return (
        <ul className="-mx-2 flex flex-wrap">
            { nbBlocksOfLoader.map(nb => <li className="mx-2 mb-12 w-64" key={ nb }>
                <div className="Loader-block h-72 mb-4"></div>
            </li>) }
        </ul>
    )
}

export default LoaderBlock
