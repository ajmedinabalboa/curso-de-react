import SearchBar from '../Product/SearchBar.jsx';
import ProductTable from '../Product/ProductTable.jsx';
const FilterableProductTable = ({ products }) => {
    return (
        <div>
          <SearchBar />
          <ProductTable products={products} />
        </div>
      );
};

export default FilterableProductTable;