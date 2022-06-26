import { useState } from 'react';
import './App.css';
import AdminPage from './pages/adminsPage/AdminPage';
import CategoryPage from './pages/categoryPage/CategoryPage';

type PageDataProps = {
  pageName: string
  id: number
}
const App = () => {
  const [currentPage, setCurrentPage] = useState<PageDataProps>({ pageName: 'categoryPage', id: 0 })

  const handlePageData = (pageName: string, id: number) => {
    const pageData = { pageName, id }

    pageData.pageName = pageName
    pageData.id = id


    setCurrentPage(pageData)
  }

  const pageManagement = currentPage.pageName === 'adminPage'
    ? <AdminPage handlePageData={handlePageData} Id={currentPage.id} />
    : <CategoryPage handlePageData={handlePageData} />

  return (
    <div className='mainContainerStyles'>
      {pageManagement}
    </div>
  )
}

export default App;
