import Text from "../text/Text"
import './titleStripe.css'

type TitleStripeProps = {
    title: string,
    Id: number,
    handlePageData: (page: string, id: number) => void,

}

const TitleStripe = (props: TitleStripeProps) => {
    const { title, Id, handlePageData } = props

    return (
        <div className='titleStripeStyle'>
            <div className='leftItem' />
            <Text text={title} primaryText />
            <button className='crossStyle' onClick={() => handlePageData('categoryPage', Id)}>X</button>

        </div>
    )
}

export default TitleStripe