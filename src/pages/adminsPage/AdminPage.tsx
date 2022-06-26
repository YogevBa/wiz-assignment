import { useEffect, useState } from "react"
import CollpaseableListItems from "../../components/collapseableItemList/CollapseableItemList"
import Text from "../../components/text/Text"
import TitleStripe from "../../components/titleStripe/TitleStripe"
import { data } from '../../data'
import './adminPage.css'

type AdminPageProps = {
    Id: number
    handlePageData: (page: string, id: number) => void
}
export type AdminsGroupsProps = {
    name: string,
    admins: AdminsProps[]
}

export type PolicyGroupProps = {
    adminGroups: AdminsGroupsProps[]
    policyName: string,
    Id: number,
}

export type AdminsProps = {
    name: string
    recentAction: string
    isVoted: boolean
}


const AdminPage = (props: AdminPageProps) => {
    const [pageData, setPageData] = useState<PolicyGroupProps>()
    const { handlePageData, Id } = props
    useEffect(() => {
        const getPolicyGroupData: PolicyGroupProps[] | any = data && data.find(policyData => policyData.Id === Id)
        setPageData(getPolicyGroupData)
    }, [])

    return (
        <div className='adminsPageContainer'>
            <TitleStripe title={pageData?.policyName || ''} handlePageData={handlePageData} Id={Id} />
            <CollpaseableListItems data={pageData} />
            <button className='submitBtnStyle' onClick={() => { }}>
                <Text text={'Approve'} primaryText />
            </button >
        </div>
    )
}

export default AdminPage