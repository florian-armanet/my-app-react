import { MAX_RATE } from './constants'

export const generateStarRate = (rate) => {
    const starsArr = new Array(MAX_RATE).fill(null)
    return starsArr.map((el, index) => {
        if (index + 1 <= rate) {
            return <i className="Icon-star" key={ index }></i>
        }

        if (index + 1 > rate && index + 1 < rate + 1) {
            return <i className="Icon-star-half" key={ index }></i>
        }

        return <i className="Icon-star-empty" key={ index }></i>
    })
}
