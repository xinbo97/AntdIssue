import Table from '@/component/Table';
import FixedTable from '@/component/FixedTable';
function App() {
  return (
    <div className="App">
      这是有问题的宽度突变的表格：
      <Table />

      <br />
      <br />
      <br />

      这是有问题的固定列+筛选项时出bug的表格：
      <FixedTable />
    </div>
  );
}

export default App;
