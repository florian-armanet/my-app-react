const LoaderBlock = ({ nbBlocks }) => {
    const nbBlocksOfLoader = new Array(nbBlocks).fill().map((_, index) => index)

    return (
        <ul className="flex flex-wrap justify-center lg:justify-start -mx-2">
            { nbBlocksOfLoader.map(nb => <li className="mx-2 mb-4 w-64" key={ nb }>
                <div className="Loader-block h-72"></div>
            </li>) }
        </ul>
    )
}

export default LoaderBlock
