import Text from '../text/Text'
import './categoryItem.css'

type CategoryItemProps = {
    text: string
    policyId: number
    handlePageData: (page: string, id: number) => void
}

const CategoryItem = (props: CategoryItemProps) => {
    const { text, handlePageData, policyId } = props
    return (
        <button className='categoryItemStyles' onClick={() => handlePageData('adminPage', policyId)}>
            <Text text={text} primaryText />
        </button >
    )
}

export default CategoryItem

