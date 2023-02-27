import CategoryItem from '../category-item/category-item.component'
import './directory-menu.styles.scss'

const DirectoryMenu = ({categories}) => {
    return (
        <div className="directory-container">
        {categories.map((category)=>
          <CategoryItem category={category} key={category.id} />
        )}
      </div>
    )
}

export default DirectoryMenu