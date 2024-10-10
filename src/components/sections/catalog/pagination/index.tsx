import React, { useState } from "react";
import { Pagination, Radio } from 'antd';

import "./_style.scss";

export const CatalogPagination: React.FC = () => {
  const [pageSize, setPageSize] = useState(20);

  const handlePageSizeChange = (e: any) => {
    setPageSize(e.target.value);
  };

  return (
    <div className="paginatsiya">
      <div className="text">
        <span className="label">Товаров на странице</span>
        <span className="label">Страница</span> 
      </div>
      <div className="pagination-container">
        <div className="page-selector">
          <Pagination
            defaultCurrent={1}
            total={500}
            pageSize={pageSize}
            showSizeChanger={false}
            colorBgTextActive={"#000"}
          />
        </div>
        <div className="items-per-page">
          <Radio.Group
            value={pageSize}
            onChange={handlePageSizeChange}
            className="radio-group"
          >
            <Radio.Button value={20}>20</Radio.Button>
            <Radio.Button value={40}>40</Radio.Button>
            <Radio.Button value={60}>60</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};
