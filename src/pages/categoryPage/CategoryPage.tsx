import { useEffect, useState } from 'react'
import CategoryItem from '../../components/categoryItem/CategoryItem'
import { policyGroupsData } from '../../data'
import './categoryPage.css'

type CategoryPage = {
    handlePageData: (pageName: string, id: number) => void
}

type PolicyGroupDataProps = {
    policyName: string,
    id: number
}

const CategoryPage = (props: CategoryPage) => {
    const [policyGroups, setPolicyGroups] = useState<PolicyGroupDataProps[]>([])
    const { handlePageData } = props

    useEffect(() => {
        setPolicyGroups(policyGroupsData)
    }, [])

    const renderPolicyGroups = policyGroups.map((policy, index) => <CategoryItem text={policy.policyName} key={index} policyId={policy.id} handlePageData={handlePageData} />)

    return (
        <div className='CategoryPageStyles'>
            <h1 className='appTitleStyle'>WIZ</h1>
            {renderPolicyGroups}
        </div>
    )
}

export default CategoryPage